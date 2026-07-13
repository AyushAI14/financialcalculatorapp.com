import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const siteUrl = (context.site ? context.site.toString() : 'https://fincompute.vercel.app').replace(/\/$/, '');
  
  // Get all static pages from src/pages/ using import.meta.glob
  const pages = import.meta.glob('./**/*.astro');
  const urls: string[] = [];
  
  // Add static page paths
  for (const path in pages) {
    // Skip 404, dynamic routes with brackets, or components/layouts (starting with underscore)
    if (path.includes('404') || path.includes('[') || path.includes('_')) continue;
    
    let cleanPath = path
      .replace(/^\.\//, '')
      .replace(/\.astro$/, '')
      .replace(/index$/, '');
      
    if (cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    
    urls.push(cleanPath ? `${siteUrl}/${cleanPath}` : siteUrl);
  }
  
  // Add blog posts dynamically from the content collection
  try {
    const posts = await getCollection('blog');
    for (const post of posts) {
      urls.push(`${siteUrl}/blog/${post.id}`);
    }
  } catch (e) {
    console.error('Error fetching blog collection:', e);
  }
  
  // Clean duplicates and format with trailing slashes
  const formattedUrls = Array.from(new Set(urls)).map(url => {
    const cleanUrl = url.replace(/\/+$/, '');
    if (cleanUrl === siteUrl) return siteUrl + '/';
    return cleanUrl + '/';
  });
  
  // Sort URLs alphabetically
  formattedUrls.sort();
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${formattedUrls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
