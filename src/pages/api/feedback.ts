import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { rating, message, url, name } = body;

    if (!rating || !url || !name) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const submission = {
      rating,
      message: message || '',
      url,
      name,
      timestamp: Date.now()
    };

    // Log the submission to console (so it appears in Vercel logs or dev server console)
    console.log('[Feedback Submission]:', JSON.stringify(submission));

    // 1. If in development, save to a local JSON file in src/data/
    if (import.meta.env.DEV) {
      const dataDir = path.resolve(process.cwd(), 'src/data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, 'feedback-submissions.json');
      let currentData = [];
      if (fs.existsSync(filePath)) {
        try {
          currentData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } catch (e) {
          console.error('Error reading feedback file, resetting:', e);
        }
      }
      currentData.push(submission);
      fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), 'utf-8');
      console.log('Feedback saved locally to', filePath);
    }

    // 2. If Formspree ID is defined, forward to Formspree
    const formspreeId = process.env.FORMSPREE_FORM_ID || import.meta.env.FORMSPREE_FORM_ID;
    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
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
        if (!response.ok) {
          console.warn('Formspree submission returned status:', response.status);
        }
      } catch (err) {
        console.error('Error forwarding to Formspree:', err);
      }
    }

    // 3. If Vercel KV is configured, save to KV
    const kvUrl = process.env.KV_REST_API_URL;
    const kvToken = process.env.KV_REST_API_TOKEN;
    if (kvUrl && kvToken) {
      try {
        const getRes = await fetch(`${kvUrl}/get/feedback_submissions`, {
          headers: { Authorization: `Bearer ${kvToken}` }
        });
        let list = [];
        if (getRes.ok) {
          const getBody = await getRes.json();
          if (getBody.result) {
            try {
              list = JSON.parse(getBody.result);
            } catch (e) {}
          }
        }
        list.push(submission);
        // Save back
        await fetch(`${kvUrl}/set/feedback_submissions`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${kvToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(JSON.stringify(list))
        });
        console.log('Saved to Vercel KV');
      } catch (err) {
        console.error('Error saving to Vercel KV:', err);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
