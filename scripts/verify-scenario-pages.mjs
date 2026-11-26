#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const scenariosPath = path.join(ROOT_DIR, 'src/data/scenarios.json');
const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));
const outputDir = path.join(ROOT_DIR, '.vercel/output/static/scenarios');

console.log(`\n🔍 Verifying emitted HTML for ${scenarios.length} scenarios...\n`);

let totalPassed = 0;
let errors = [];

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

for (const s of scenarios) {
  const filePath = path.join(outputDir, s.slug, 'index.html');
  const tag = `[${s.slug}]`;

  if (!fs.existsSync(filePath)) {
    errors.push(`${tag} HTML file missing at ${filePath}`);
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Verify exact H1
  const escapedQuery = escapeHtml(s.query);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match || (!h1Match[1].includes(s.query.trim()) && !h1Match[1].includes(escapedQuery.trim()))) {
    errors.push(`${tag} H1 mismatch. Expected: "${s.query}", Found: "${h1Match ? h1Match[1].trim() : 'NONE'}"`);
  }

  // 2. Verify static Direct Answer numbers are present in raw HTML
  for (const m of s.directAnswer.metrics) {
    const val = m.value;
    const escapedVal = escapeHtml(val);
    if (!html.includes(val) && !html.includes(escapedVal)) {
      errors.push(`${tag} Metric value "${val}" not found in raw static HTML.`);
    }
  }

  // 3. Verify valid parseable JSON-LD for FAQPage & SoftwareApplication
  const jsonLdBlocks = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) || [];
  let foundFaqSchema = false;
  let foundSoftwareSchema = false;

  for (const block of jsonLdBlocks) {
    const rawJson = block.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
    try {
      const parsed = JSON.parse(rawJson);
      if (parsed['@type'] === 'FAQPage') {
        foundFaqSchema = true;
        if (!Array.isArray(parsed.mainEntity) || parsed.mainEntity.length === 0) {
          errors.push(`${tag} FAQPage schema has no mainEntity items.`);
        }
      }
      if (parsed['@type'] === 'SoftwareApplication') {
        foundSoftwareSchema = true;
        if (!parsed.name || !parsed.description) {
          errors.push(`${tag} SoftwareApplication schema is missing name or description.`);
        }
      }
    } catch (e) {
      errors.push(`${tag} Invalid JSON-LD block: ${e.message}`);
    }
  }

  if (!foundFaqSchema) {
    errors.push(`${tag} Missing FAQPage JSON-LD schema.`);
  }
  if (!foundSoftwareSchema) {
    errors.push(`${tag} Missing SoftwareApplication JSON-LD schema.`);
  }

  if (errors.length === 0) {
    console.log(`  ✓ ${tag}: H1 verified, metrics verified, FAQPage & SoftwareApplication JSON-LD verified.`);
    totalPassed++;
  }
}

if (errors.length > 0) {
  console.error('\n❌ Verification errors encountered:');
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log(`\n🎉 Success! All ${totalPassed}/${scenarios.length} scenario pages perfectly verified.\n`);
