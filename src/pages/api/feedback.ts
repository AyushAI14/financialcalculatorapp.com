import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const prerender = false;

// In-memory rate limiter per IP: max 5 submissions per 60 seconds with eviction
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_RATE_LIMIT_ENTRIES = 2000;

function cleanupRateLimitMap(now: number) {
  if (rateLimitMap.size > MAX_RATE_LIMIT_ENTRIES) {
    for (const [key, entry] of rateLimitMap.entries()) {
      if (now > entry.resetTime) {
        rateLimitMap.delete(key);
      }
    }
    // If still too large, delete oldest entries
    if (rateLimitMap.size > MAX_RATE_LIMIT_ENTRIES) {
      const keysToDelete = Array.from(rateLimitMap.keys()).slice(0, 500);
      keysToDelete.forEach(k => rateLimitMap.delete(k));
    }
  }
}

function checkMemoryRateLimit(ip: string): boolean {
  const now = Date.now();
  cleanupRateLimitMap(now);

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return false;
  }
  if (entry.count >= 5) {
    return true;
  }
  entry.count++;
  return false;
}

// Distributed rate limit via Vercel KV when configured; falls back to memory.
// NOTE: in-memory limiter alone is per-instance on serverless — KV makes it global.
async function checkRateLimit(ip: string, kvUrl?: string, kvToken?: string): Promise<boolean> {
  if (kvUrl && kvToken) {
    try {
      const key = `ratelimit:feedback:${encodeURIComponent(ip.slice(0, 64))}`;
      const getRes = await fetch(`${kvUrl}/incr/${key}`, {
        headers: { Authorization: `Bearer ${kvToken}` },
      });
      if (getRes.ok) {
        const body = await getRes.json();
        const count = typeof body.result === 'number' ? body.result : parseInt(body.result, 10);
        if (count === 1) {
          await fetch(`${kvUrl}/expire/${key}/60`, {
            headers: { Authorization: `Bearer ${kvToken}` },
          });
        }
        return count > 5;
      }
    } catch {
      // fall through to memory limiter
    }
  }
  return checkMemoryRateLimit(ip);
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 1. Rate limiting with sanitized IP identifier
    const rawIp = clientAddress || 
      request.headers.get('cf-connecting-ip') || 
      request.headers.get('x-real-ip') || 
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
      'unknown-ip';
    const ip = rawIp.slice(0, 64);
    const kvUrlEarly = process.env.KV_REST_API_URL;
    const kvTokenEarly = process.env.KV_REST_API_TOKEN;

    if (await checkRateLimit(ip, kvUrlEarly, kvTokenEarly)) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', 'Retry-After': '60' }
      });
    }

    // 2. Request size and JSON parsing (guarded against chunked transfer bypass)
    const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
    if (contentLength > 10240) {
      return new Response(JSON.stringify({ error: 'Payload too large' }), {
        status: 413,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const rawText = await request.text();
    if (rawText.length > 10240) {
      return new Response(JSON.stringify({ error: 'Payload too large' }), {
        status: 413,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let body: any;
    try {
      body = JSON.parse(rawText);
    } catch {
      return new Response(JSON.stringify({ error: 'Malformed JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { rating, message, url, name } = body;

    // 3. Strict field & type validation
    if (
      typeof rating !== 'string' ||
      !['yes', 'no'].includes(rating) ||
      typeof url !== 'string' ||
      typeof name !== 'string' ||
      !name.trim() ||
      !url.trim()
    ) {
      return new Response(JSON.stringify({ error: 'Missing or invalid required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate URL: Must be strict relative path within site, reject schemes, backslashes, double-slashes
    const cleanUrl = url.trim();
    const isSafeRelative = /^\/[a-zA-Z0-9_\-\/.]*(\?[a-zA-Z0-9_=&.\-%]*)?$/.test(cleanUrl) &&
      !cleanUrl.startsWith('//') &&
      !cleanUrl.startsWith('/\\') &&
      !cleanUrl.includes('\\') &&
      !cleanUrl.toLowerCase().includes('javascript:') &&
      cleanUrl.length <= 300;

    if (!isSafeRelative) {
      return new Response(JSON.stringify({ error: 'Invalid URL' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanMessage = typeof message === 'string' ? message.trim().slice(0, 1000) : '';

    const submission = {
      rating,
      message: cleanMessage,
      url: cleanUrl,
      name: cleanName,
      timestamp: Date.now()
    };

    // Sanitize for logging (prevent log injection/forging)
    const logSafeName = cleanName.replace(/[\r\n\t]/g, ' ');
    const logSafeUrl = cleanUrl.replace(/[\r\n\t]/g, ' ');
    console.log(`[Feedback Submission]: rating=${rating} calc=${logSafeName} url=${logSafeUrl}`);

    // 4. If in development, save to local JSON file capped to 200 entries
    if (import.meta.env.DEV) {
      const dataDir = path.resolve(process.cwd(), 'src/data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, 'feedback-submissions.json');
      let currentData: any[] = [];
      if (fs.existsSync(filePath)) {
        try {
          currentData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          if (!Array.isArray(currentData)) currentData = [];
        } catch {
          currentData = [];
        }
      }
      currentData.push(submission);
      if (currentData.length > 200) currentData = currentData.slice(-200);
      fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), 'utf-8');
    }

    // 5. If Formspree ID is defined, forward
    const formspreeId = process.env.FORMSPREE_FORM_ID || import.meta.env.FORMSPREE_FORM_ID;
    if (formspreeId) {
      try {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            rating: submission.rating,
            comment: submission.message,
            page_url: submission.url,
            page_name: submission.name,
            timestamp: new Date(submission.timestamp).toISOString()
          })
        });
      } catch (err) {
        console.error('Error forwarding to Formspree:', err);
      }
    }

    // 6. If Vercel KV is configured, save capped list
    const kvUrl = process.env.KV_REST_API_URL;
    const kvToken = process.env.KV_REST_API_TOKEN;
    if (kvUrl && kvToken) {
      try {
        const getRes = await fetch(`${kvUrl}/get/feedback_submissions`, {
          headers: { Authorization: `Bearer ${kvToken}` }
        });
        let list: any[] = [];
        if (getRes.ok) {
          const getBody = await getRes.json();
          if (getBody.result) {
            try {
              list = JSON.parse(getBody.result);
              if (!Array.isArray(list)) list = [];
            } catch {}
          }
        }
        list.push(submission);
        if (list.length > 200) list = list.slice(-200);
        await fetch(`${kvUrl}/set/feedback_submissions`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${kvToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(JSON.stringify(list))
        });
      } catch (err) {
        console.error('Error saving to Vercel KV:', err);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
