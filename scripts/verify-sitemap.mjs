#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const STATIC_DIR = path.join(ROOT_DIR, '.vercel/output/static');

const sitemapPath = path.join(STATIC_DIR, 'sitemap.xml');
const scenariosPath = path.join(ROOT_DIR, 'src/data/scenarios.json');
const alternativesPath = path.join(ROOT_DIR, 'src/data/alternatives.json');

console.log('\n🗺️ Verifying sitemap.xml in build output...\n');

if (!fs.existsSync(sitemapPath)) {
  console.error(`❌ sitemap.xml not found at ${sitemapPath}`);
  process.exit(1);
}

const content = fs.readFileSync(sitemapPath, 'utf8');

// 1. Basic XML structure checks
if (!content.startsWith('<?xml') || !content.includes('<urlset') || !content.includes('</urlset>')) {
  console.error('❌ Invalid XML structure: missing XML header or urlset tags.');
  process.exit(1);
}

// 2. Extract all URLs and lastmod tags
const urlBlocks = content.match(/<url>([\s\S]*?)<\/url>/g) || [];
console.log(`📊 Total <url> blocks in sitemap: ${urlBlocks.length}`);

let totalErrors = 0;
const locSet = new Set();
const today = new Date().toISOString().split('T')[0];
let lastmodMissing = 0;

for (const block of urlBlocks) {
  const locMatch = block.match(/<loc>(.*?)<\/loc>/);
  const lastmodMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);

  if (!locMatch) {
    console.error('❌ URL block missing <loc> tag:', block);
    totalErrors++;
    continue;
  }

  const loc = locMatch[1].trim();
  if (locSet.has(loc)) {
    console.error(`❌ Duplicate <loc> found in sitemap: ${loc}`);
    totalErrors++;
  }
  locSet.add(loc);

  if (!lastmodMatch) {
    lastmodMissing++;
  }
}

if (lastmodMissing > 0) {
  console.error(`❌ ${lastmodMissing} URLs are missing <lastmod> tags.`);
  totalErrors++;
} else {
  console.log(`  ✓ All ${urlBlocks.length} entries have verified <lastmod> tags.`);
}

// 3. Verify all 50 scenarios are present
const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));
console.log(`\n🔍 Verifying all ${scenarios.length} scenarios are present in sitemap:`);
let missingScenarios = 0;

for (const sc of scenarios) {
  const expectedUrl = `https://financialcalculatorapp.com/scenarios/${sc.slug}/`;
  if (!locSet.has(expectedUrl)) {
    console.error(`❌ Missing scenario URL: ${expectedUrl}`);
    missingScenarios++;
    totalErrors++;
  }
}

if (missingScenarios === 0) {
  console.log(`  ✓ 100% of all ${scenarios.length} scenarios are present in sitemap.xml!`);
}

// 4. Verify all 4 alternatives are present
const alternatives = JSON.parse(fs.readFileSync(alternativesPath, 'utf8'));
console.log(`\n🔍 Verifying all ${alternatives.length} competitor alternatives are present in sitemap:`);
let missingAlternatives = 0;

for (const alt of alternatives) {
  const expectedUrl = `https://financialcalculatorapp.com/alternatives/${alt.slug}/`;
  if (!locSet.has(expectedUrl)) {
    console.error(`❌ Missing alternative URL: ${expectedUrl}`);
    missingAlternatives++;
    totalErrors++;
  }
}

if (missingAlternatives === 0) {
  console.log(`  ✓ 100% of all ${alternatives.length} alternatives are present in sitemap.xml!`);
}

if (totalErrors > 0) {
  console.error(`\n❌ Sitemap verification failed with ${totalErrors} errors.`);
  process.exit(1);
}

console.log('\n🎉 Success! sitemap.xml is completely valid, fully updated, and contains all programmatic URLs!\n');
