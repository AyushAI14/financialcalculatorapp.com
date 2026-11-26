#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const altPath = path.join(ROOT_DIR, 'src/data/alternatives.json');
const alternatives = JSON.parse(fs.readFileSync(altPath, 'utf8'));

console.log(`\n🧪 Testing Alternatives Dataset: ${alternatives.length} entries found`);

let hasError = false;
const slugs = new Set();

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

for (let i = 0; i < alternatives.length; i++) {
  const a = alternatives[i];
  const tag = `[${i + 1}/${alternatives.length}] "${a.slug}"`;

  // 1. Slug checks
  if (!a.slug || typeof a.slug !== 'string' || !/^[a-z0-9-]+$/.test(a.slug)) {
    console.error(`❌ ${tag}: Invalid slug format.`);
    hasError = true;
  }
  if (slugs.has(a.slug)) {
    console.error(`❌ ${tag}: Duplicate slug.`);
    hasError = true;
  }
  slugs.add(a.slug);

  // 2. H1 check
  if (!a.h1 || a.h1.trim().length === 0) {
    console.error(`❌ ${tag}: Missing H1.`);
    hasError = true;
  }

  // 3. Matching calculators route check
  for (const calc of a.matchingCalculators) {
    const routeAstro = path.join(ROOT_DIR, 'src/pages', `${calc.url}.astro`);
    const routeIndex = path.join(ROOT_DIR, 'src/pages', calc.url, 'index.astro');
    if (!fs.existsSync(routeAstro) && !fs.existsSync(routeIndex)) {
      console.error(`❌ ${tag}: Matching calculator route missing: ${calc.url}`);
      hasError = true;
    }
  }

  // 4. Comparison points
  if (!Array.isArray(a.comparisonPoints) || a.comparisonPoints.length === 0) {
    console.error(`❌ ${tag}: Missing comparisonPoints.`);
    hasError = true;
  }

  // 5. FAQs
  if (!Array.isArray(a.faqs) || a.faqs.length === 0) {
    console.error(`❌ ${tag}: Empty faqs array.`);
    hasError = true;
  }

  // 6. SEO
  if (!a.seo?.title || !a.seo?.description) {
    console.error(`❌ ${tag}: Missing SEO metadata.`);
    hasError = true;
  }

  console.log(`  ✓ ${tag} verified: all matching calculator routes exist.`);
}

if (hasError) {
  console.error('\n❌ Alternatives dataset validation failed.');
  process.exit(1);
}

console.log('\n✅ Dataset pre-validation passed!\n');

// Check build output if exists
const outputDir = path.join(ROOT_DIR, '.vercel/output/static/alternatives');
if (fs.existsSync(outputDir)) {
  console.log('🔍 Validating emitted HTML in .vercel/output/static/alternatives/ ...');
  let outputErrors = [];
  for (const a of alternatives) {
    const filePath = path.join(outputDir, a.slug, 'index.html');
    const tag = `[${a.slug}]`;
    if (!fs.existsSync(filePath)) {
      outputErrors.push(`${tag} HTML file missing at ${filePath}`);
      continue;
    }

    const html = fs.readFileSync(filePath, 'utf8');

    // H1 check
    const escapedH1 = escapeHtml(a.h1);
    if (!html.includes(a.h1) && !html.includes(escapedH1)) {
      outputErrors.push(`${tag} H1 not found in HTML.`);
    }

    // Comparison table check
    if (!html.includes('<table') || !html.includes(a.competitorName)) {
      outputErrors.push(`${tag} Comparison table not found.`);
    }

    // Check JSON-LD
    const jsonLdBlocks = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) || [];
    let foundFaq = false;
    let foundSoftware = false;
    for (const b of jsonLdBlocks) {
      const raw = b.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
      try {
        const parsed = JSON.parse(raw);
        if (parsed['@type'] === 'FAQPage') foundFaq = true;
        if (parsed['@type'] === 'SoftwareApplication') foundSoftware = true;
      } catch (e) {
        outputErrors.push(`${tag} JSON parse error: ${e.message}`);
      }
    }

    if (!foundFaq) outputErrors.push(`${tag} Missing FAQPage JSON-LD.`);
    if (!foundSoftware) outputErrors.push(`${tag} Missing SoftwareApplication JSON-LD.`);

    if (outputErrors.length === 0) {
      console.log(`  ✓ ${tag}: HTML, H1, table, and JSON-LD schemas verified.`);
    }
  }

  if (outputErrors.length > 0) {
    for (const err of outputErrors) console.error(`  - ${err}`);
    process.exit(1);
  }
}
