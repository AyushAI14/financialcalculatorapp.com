import { getCollection } from 'astro:content';
import { languages, hreflangMap, defaultLang, showDefaultLang, type Lang } from '../i18n/ui';

export async function GET(context: any) {
  const siteUrl = (context.site ? context.site.toString() : 'https://financialcalculatorapp.com').replace(/\/+$/, '');
  
  // Get all static pages from src/pages/ using import.meta.glob
  const pages = import.meta.glob('./**/*.astro');
  const basePaths: string[] = ['']; // Root '/'
  
  // Add static page paths
  for (const path in pages) {
    // Skip 404, dynamic routes with brackets, private admin pages, or components/layouts
    if (path.includes('404') || path.includes('[') || path.includes('_') || path.includes('feedback') || path.includes('api')) continue;
    
    let cleanPath = path
      .replace(/^\.\//, '')
      .replace(/\.astro$/, '')
      .replace(/index$/, '');
      
    if (cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    
    if (cleanPath) {
      basePaths.push(cleanPath);
    }
  }
  
  // Add blog posts dynamically from the content collection
  try {
    const posts = await getCollection('blog');
    for (const post of posts) {
      basePaths.push(`blog/${post.id}`);
    }
  } catch (e) {
    console.error('Error fetching blog collection:', e);
  }
  
  // Deduplicate base paths
  const uniquePaths = Array.from(new Set(basePaths));
  
  // Language keys
  const langKeys = Object.keys(languages) as Lang[];

  // Helper to construct URL for a given path and language
  const getLocalizedUrl = (path: string, lang: Lang): string => {
    const suffix = path ? `/${path}/` : '/';
    if (!showDefaultLang && lang === defaultLang) {
      return `${siteUrl}${suffix}`;
    }
    return `${siteUrl}/${lang}${suffix}`;
  };

  interface UrlEntry {
    loc: string;
    alternates: Array<{ hreflang: string; href: string }>;
  }

  const entries: UrlEntry[] = [];

  for (const path of uniquePaths) {
    // Build alternate links for this path
    const alternates: Array<{ hreflang: string; href: string }> = [];

    // x-default
    alternates.push({
      hreflang: 'x-default',
      href: getLocalizedUrl(path, defaultLang)
    });

    // Each language
    for (const lang of langKeys) {
      const href = getLocalizedUrl(path, lang);
      const codes = hreflangMap[lang] || [lang];
      for (const code of codes) {
        alternates.push({
          hreflang: code,
          href
        });
      }
    }

    // Add entry for default language
    entries.push({
      loc: getLocalizedUrl(path, defaultLang),
      alternates
    });

    // Add entry for each translated language
    for (const lang of langKeys) {
      if (!showDefaultLang && lang === defaultLang) continue;
      entries.push({
        loc: getLocalizedUrl(path, lang),
        alternates
      });
    }
  }

  // Sort by location
  entries.sort((a, b) => a.loc.localeCompare(b.loc));

  const lastmod = new Date().toISOString().split('T')[0];
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${lastmod}</lastmod>
${entry.alternates.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
