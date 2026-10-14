import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const prerender = false;

interface FeedbackItem {
  rating: 'yes' | 'no';
  message: string;
  url: string;
  name: string;
  timestamp: number;
}

const configuredPasscode = process.env.ADMIN_PASSCODE;
const sessionSecret = configuredPasscode || (import.meta.env.DEV ? 'dev-fallback-secret' : '');

function verifySessionToken(token: string): boolean {
  if (!sessionSecret || !token) return false;
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    const [rand, expiryHex, sig] = parts;
    if (!/^[0-9a-f]{64}$/.test(rand) || !/^[0-9a-f]+$/.test(expiryHex) || !/^[0-9a-f]{64}$/.test(sig)) return false;
    const expiry = parseInt(expiryHex, 16);
    if (!Number.isFinite(expiry) || Date.now() > expiry) return false;
    const expected = crypto.createHmac('sha256', sessionSecret).update(`${rand}.${expiryHex}`).digest('hex');
    const a = Buffer.from(sig, 'hex');
    const b = Buffer.from(expected, 'hex');
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

async function getAllFeedbacks(): Promise<FeedbackItem[]> {
  let localFeedbacks: FeedbackItem[] = [];
  const filePath = path.resolve(process.cwd(), 'src/data/feedback-submissions.json');
  if (fs.existsSync(filePath)) {
    try {
      localFeedbacks = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch {}
  }

  let kvFeedbacks: FeedbackItem[] = [];
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (kvUrl && kvToken) {
    try {
      const kvRes = await fetch(`${kvUrl}/get/feedback_submissions`, {
        headers: { Authorization: `Bearer ${kvToken}` }
      });
      if (kvRes.ok) {
        const kvBody = await kvRes.json();
        if (kvBody.result) {
          kvFeedbacks = JSON.parse(kvBody.result);
        }
      }
    } catch {}
  }

  const mergedMap = new Map<string, FeedbackItem>();
  [...localFeedbacks, ...kvFeedbacks].forEach(item => {
    const key = `${item.timestamp}-${item.url}`;
    mergedMap.set(key, item);
  });

  return Array.from(mergedMap.values()).sort((a, b) => b.timestamp - a.timestamp);
}

function escapeCsvField(val: unknown): string {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const cookies = request.headers.get('cookie') || '';
  const sessionCookie = cookies.split(';').map(c => c.trim()).find(c => c.startsWith('admin_session='));
  const token = sessionCookie ? sessionCookie.split('=')[1] : '';

  // Check auth
  if (!verifySessionToken(token) && !import.meta.env.DEV) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const feedbacks = await getAllFeedbacks();
  const requestedMonth = url.searchParams.get('month'); // format: 'YYYY-MM'
  const format = url.searchParams.get('format'); // 'csv' or 'json'

  const filtered = feedbacks.filter(item => {
    if (!requestedMonth) return true;
    const itemMonth = new Date(item.timestamp).toISOString().slice(0, 7);
    return itemMonth === requestedMonth;
  });

  if (format === 'csv') {
    const header = ['Timestamp', 'Date', 'Calculator Name', 'Calculator URL', 'Rating', 'User Comment'];
    const rows = filtered.map(item => [
      item.timestamp,
      new Date(item.timestamp).toISOString(),
      item.name,
      item.url,
      item.rating.toUpperCase(),
      item.message || ''
    ]);

    const csvContent = [
      header.map(escapeCsvField).join(','),
      ...rows.map(row => row.map(escapeCsvField).join(','))
    ].join('\r\n');

    const filename = `feedback-report-${requestedMonth || 'all-time'}.csv`;

    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`
      }
    });
  }

  // JSON aggregation
  const total = filtered.length;
  const yesCount = filtered.filter(f => f.rating === 'yes').length;
  const noCount = filtered.filter(f => f.rating === 'no').length;
  const ratio = total > 0 ? Math.round((yesCount / total) * 100) : 0;

  const calculatorStats = new Map<string, { name: string; url: string; yes: number; no: number; comments: string[] }>();
  for (const f of filtered) {
    const existing = calculatorStats.get(f.url) || { name: f.name, url: f.url, yes: 0, no: 0, comments: [] };
    if (f.rating === 'yes') existing.yes++;
    else existing.no++;
    if (f.message) existing.comments.push(f.message);
    calculatorStats.set(f.url, existing);
  }

  const breakdown = Array.from(calculatorStats.values()).map(c => ({
    ...c,
    total: c.yes + c.no,
    ratio: c.yes + c.no > 0 ? Math.round((c.yes / (c.yes + c.no)) * 100) : 0
  })).sort((a, b) => b.total - a.total);

  return new Response(JSON.stringify({
    month: requestedMonth || 'all-time',
    total,
    yesCount,
    noCount,
    helpfulnessPercentage: ratio,
    breakdown,
    submissions: filtered
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: APIRoute = async ({ request }) => {
  const cookies = request.headers.get('cookie') || '';
  const sessionCookie = cookies.split(';').map(c => c.trim()).find(c => c.startsWith('admin_session='));
  const token = sessionCookie ? sessionCookie.split('=')[1] : '';

  if (!verifySessionToken(token) && !import.meta.env.DEV) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let body: any = {};
  try {
    body = await request.json();
  } catch {}

  const month = body.month || new Date().toISOString().slice(0, 7);
  const feedbacks = await getAllFeedbacks();

  const filtered = feedbacks.filter(item => {
    const itemMonth = new Date(item.timestamp).toISOString().slice(0, 7);
    return itemMonth === month;
  });

  const total = filtered.length;
  const yesCount = filtered.filter(f => f.rating === 'yes').length;
  const noCount = filtered.filter(f => f.rating === 'no').length;
  const ratio = total > 0 ? Math.round((yesCount / total) * 100) : 0;
  const commentsList = filtered.filter(f => Boolean(f.message));

  // Build textual summary email body
  const reportSubject = `[Monthly Feedback Report] ${month} - financialcalculatorapp.com`;
  const reportBody = `
MONTHLY FEEDBACK REPORT: ${month}
Domain: financialcalculatorapp.com
Recipient: hello@financialcalculatorapp.com
Generated: ${new Date().toUTCString()}

SUMMARY METRICS:
- Total Submissions: ${total}
- Found Helpful (Yes): ${yesCount}
- Not Helpful (No): ${noCount}
- Helpfulness Satisfaction Ratio: ${ratio}%
- Comments Received: ${commentsList.length}

USER COMMENTS & FEEDBACK LOG:
${commentsList.length === 0 ? 'No written comments submitted this month.' : commentsList.map((c, i) => `
#${i + 1} [${c.rating.toUpperCase()}] ${c.name} (${c.url})
Date: ${new Date(c.timestamp).toUTCString()}
Comment: "${c.message}"
--------------------------------------------------`).join('\n')}
  `.trim();

  // Dispatch to Formspree if configured
  const formspreeId = process.env.FORMSPREE_FORM_ID || import.meta.env.FORMSPREE_FORM_ID;
  let dispatched = false;

  if (formspreeId) {
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          subject: reportSubject,
          month,
          totalSubmissions: total,
          yesCount,
          noCount,
          ratio: `${ratio}%`,
          commentsCount: commentsList.length,
          fullReport: reportBody,
          recipientEmail: 'hello@financialcalculatorapp.com'
        })
      });
      dispatched = res.ok;
    } catch (e) {
      console.error('Failed to dispatch report via Formspree:', e);
    }
  }

  return new Response(JSON.stringify({
    success: true,
    month,
    recipient: 'hello@financialcalculatorapp.com',
    dispatched,
    metrics: {
      total,
      yesCount,
      noCount,
      ratio,
      commentsCount: commentsList.length
    },
    reportPreview: reportBody
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
