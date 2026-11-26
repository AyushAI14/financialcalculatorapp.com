#!/usr/bin/env node

/**
 * AEO & Bot-Visibility Readiness Checker
 * Usage:
 *   node scripts/verify-live-aeo.mjs --local   (Inspects local static build output in .vercel/output/static)
 *   node scripts/verify-live-aeo.mjs --prod    (Probes live production https://financialcalculatorapp.com)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const STATIC_DIR = path.join(ROOT_DIR, '.vercel/output/static');

const isProd = process.argv.includes('--prod');
const baseUrl = isProd ? 'https://financialcalculatorapp.com' : 'local';

console.log(`\n🛡️ Running AEO Bot-Visibility & Readiness Checker [Mode: ${isProd ? 'PRODUCTION LIVE' : 'LOCAL BUILD'}]...\n`);

let totalPassed = 0;
let totalFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    totalPassed++;
  } else {
    console.error(`  ❌ FAILED: ${message}`);
    totalFailed++;
  }
}

async function fetchOrRead(relPath) {
  if (isProd) {
    try {
      const url = `${baseUrl}/${relPath.replace(/^\/+/, '')}`;
      const res = await fetch(url);
      const text = await res.text();
      return { status: res.status, ok: res.ok, content: text };
    } catch (e) {
      return { status: 0, ok: false, error: e.message, content: '' };
    }
  } else {
    const filePath = path.join(STATIC_DIR, relPath);
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        return { status: 200, ok: true, content: fs.readFileSync(filePath, 'utf8') };
      }
      if (stat.isDirectory()) {
        const indexPath = path.join(filePath, 'index.html');
        if (fs.existsSync(indexPath)) {
          return { status: 200, ok: true, content: fs.readFileSync(indexPath, 'utf8') };
        }
      }
    }
    // Check if relPath + .html exists
    const htmlPath = path.join(STATIC_DIR, `${relPath}.html`);
    if (fs.existsSync(htmlPath)) {
      return { status: 200, ok: true, content: fs.readFileSync(htmlPath, 'utf8') };
    }
    return { status: 404, ok: false, content: '' };
  }
}

async function runCheck() {
  // 1. Robots.txt
  console.log('1️⃣ Checking robots.txt and AI bot directives:');
  const robots = await fetchOrRead('robots.txt');
  assert(robots.ok, `robots.txt is accessible (status: ${robots.status})`);
  assert(robots.content.includes('User-agent: GPTBot'), 'robots.txt whitelists GPTBot');
  assert(robots.content.includes('User-agent: PerplexityBot'), 'robots.txt whitelists PerplexityBot');
  assert(robots.content.includes('User-agent: ClaudeBot'), 'robots.txt whitelists ClaudeBot');
  assert(robots.content.includes('User-agent: Google-Extended'), 'robots.txt whitelists Google-Extended');
  assert(robots.content.includes('Sitemap: https://financialcalculatorapp.com/sitemap.xml'), 'robots.txt declares correct Sitemap directive');

  // 2. llms.txt & llms-full.txt
  console.log('\n2️⃣ Checking llms.txt standard files:');
  const llms = await fetchOrRead('llms.txt');
  assert(llms.ok, `llms.txt is accessible (status: ${llms.status})`);
  assert(llms.content.includes('https://financialcalculatorapp.com/'), 'llms.txt contains platform URLs');

  const llmsFull = await fetchOrRead('llms-full.txt');
  assert(llmsFull.ok, `llms-full.txt is accessible (status: ${llmsFull.status})`);

  // 3. IndexNow Key
  console.log('\n3️⃣ Checking IndexNow API key verification file:');
  const keyFile = await fetchOrRead('783a88171a72f912dc082752500078ca.txt');
  assert(keyFile.ok, `IndexNow key file is accessible (status: ${keyFile.status})`);
  assert(keyFile.content.trim() === '783a88171a72f912dc082752500078ca', 'IndexNow key file content matches exact 32-hex key');

  // 4. sitemap.xml
  console.log('\n4️⃣ Checking sitemap.xml ingestion readiness:');
  const sitemap = await fetchOrRead('sitemap.xml');
  assert(sitemap.ok, `sitemap.xml is accessible (status: ${sitemap.status})`);
  assert(sitemap.content.includes('<urlset'), 'sitemap.xml has valid <urlset> wrapper');
  assert(sitemap.content.includes('<lastmod>'), 'sitemap.xml contains fresh <lastmod> timestamps');
  assert(sitemap.content.includes('/scenarios/'), 'sitemap.xml contains /scenarios/ URLs');
  assert(sitemap.content.includes('/alternatives/'), 'sitemap.xml contains /alternatives/ URLs');

  // 5. Sample Scenario Page
  console.log('\n5️⃣ Checking Sample Scenario Page (/scenarios/extra-150-a-month-400k-mortgage):');
  const sampleScenario = await fetchOrRead('scenarios/extra-150-a-month-400k-mortgage');
  assert(sampleScenario.ok, `Sample scenario page is accessible (status: ${sampleScenario.status})`);
  
  const scenariosJson = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'src/data/scenarios.json'), 'utf8'));
  const scData = scenariosJson.find((s) => s.slug === 'extra-150-a-month-400k-mortgage');
  if (scData) {
    for (const m of scData.directAnswer.metrics) {
      assert(sampleScenario.content.includes(m.value), `Scenario contains verified metric (${m.label}: ${m.value})`);
    }
  }
  assert(sampleScenario.content.includes('"@type":"FAQPage"') || sampleScenario.content.includes('"@type": "FAQPage"'), 'Scenario contains FAQPage JSON-LD');
  assert(sampleScenario.content.includes('"@type":"SoftwareApplication"') || sampleScenario.content.includes('"@type": "SoftwareApplication"'), 'Scenario contains SoftwareApplication JSON-LD');

  // 6. Sample Alternative Page
  console.log('\n6️⃣ Checking Sample Alternative Page (/alternatives/bankrate-mortgage-calculator):');
  const sampleAlternative = await fetchOrRead('alternatives/bankrate-mortgage-calculator');
  assert(sampleAlternative.ok, `Sample alternative page is accessible (status: ${sampleAlternative.status})`);
  assert(sampleAlternative.content.includes('<table'), 'Alternative page contains side-by-side comparison table');
  
  const altJson = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'src/data/alternatives.json'), 'utf8'));
  const altData = altJson.find((a) => a.slug === 'bankrate-mortgage-calculator');
  if (altData) {
    assert(sampleAlternative.content.includes(altData.competitorName), `Alternative page references competitor name: ${altData.competitorName}`);
  }
  assert(sampleAlternative.content.includes('"@type":"FAQPage"') || sampleAlternative.content.includes('"@type": "FAQPage"'), 'Alternative page contains FAQPage JSON-LD');

  console.log(`\n========================================`);
  console.log(`Summary: ${totalPassed} passed, ${totalFailed} failed.`);
  console.log(`========================================\n`);

  if (totalFailed > 0) {
    if (isProd) {
      console.log('ℹ️ Note: If failed in PRODUCTION mode, ensure your latest code has been pushed and deployed to Vercel.');
    }
    process.exit(1);
  }

  console.log('🎉 Readiness check passed 100%! Infrastructure is fully primed for AEO crawler discovery.\n');
}

runCheck().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
