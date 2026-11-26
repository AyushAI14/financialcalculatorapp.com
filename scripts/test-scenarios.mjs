#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const scenariosPath = path.join(ROOT_DIR, 'src/data/scenarios.json');
const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));

console.log(`\n🧪 Testing Scenarios Dataset: ${scenarios.length} entries found`);

let hasError = false;
const slugs = new Set();

for (let i = 0; i < scenarios.length; i++) {
  const s = scenarios[i];
  const tag = `[${i + 1}/${scenarios.length}] "${s.slug}"`;

  // 1. Slug checks
  if (!s.slug || typeof s.slug !== 'string' || !/^[a-z0-9-]+$/.test(s.slug)) {
    console.error(`❌ ${tag}: Invalid slug format.`);
    hasError = true;
  }
  if (slugs.has(s.slug)) {
    console.error(`❌ ${tag}: Duplicate slug.`);
    hasError = true;
  }
  slugs.add(s.slug);

  // 2. Query check
  if (!s.query || s.query.trim().length === 0) {
    console.error(`❌ ${tag}: Missing query.`);
    hasError = true;
  }

  // 3. Calculator route check
  const routeAstro = path.join(ROOT_DIR, 'src/pages', `${s.calculatorUrl}.astro`);
  const routeIndex = path.join(ROOT_DIR, 'src/pages', s.calculatorUrl, 'index.astro');
  if (!fs.existsSync(routeAstro) && !fs.existsSync(routeIndex)) {
    console.error(`❌ ${tag}: Calculator route does not exist: ${s.calculatorUrl}`);
    hasError = true;
  }

  // 4. Metrics & Direct Answer
  if (!s.directAnswer?.summary || !s.directAnswer?.takeaway) {
    console.error(`❌ ${tag}: Missing direct answer summary or takeaway.`);
    hasError = true;
  }
  if (!Array.isArray(s.directAnswer?.metrics) || s.directAnswer.metrics.length === 0) {
    console.error(`❌ ${tag}: Empty metrics array.`);
    hasError = true;
  }

  // 5. FAQs
  if (!Array.isArray(s.faqs) || s.faqs.length === 0) {
    console.error(`❌ ${tag}: Empty faqs array.`);
    hasError = true;
  }

  // 6. SEO
  if (!s.seo?.title || !s.seo?.description) {
    console.error(`❌ ${tag}: Missing SEO metadata.`);
    hasError = true;
  }

  console.log(`  ✓ ${tag} verified: route valid -> ${s.calculatorUrl}`);
}

if (hasError) {
  console.error('\n❌ Scenario validation failed.');
  process.exit(1);
}

console.log(`\n✅ All ${scenarios.length} scenarios passed schema, slug, route, and data completeness tests!\n`);
