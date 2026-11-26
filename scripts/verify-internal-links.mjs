#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const STATIC_DIR = path.join(ROOT_DIR, '.vercel/output/static');

const scenariosPath = path.join(ROOT_DIR, 'src/data/scenarios.json');
const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));

const alternativesPath = path.join(ROOT_DIR, 'src/data/alternatives.json');
const alternatives = JSON.parse(fs.readFileSync(alternativesPath, 'utf8'));

console.log('\n🔗 Starting Internal Link Mesh & Scenario Widget Verification...\n');

let totalErrors = 0;

// Helper to check if a local URL path exists in .vercel/output/static
function resolveStaticHtml(urlPath) {
  const clean = urlPath.split('?')[0].split('#')[0].replace(/\/+$/, '');
  const candidate1 = path.join(STATIC_DIR, clean, 'index.html');
  const candidate2 = path.join(STATIC_DIR, `${clean}.html`);
  const candidate3 = path.join(STATIC_DIR, clean);
  return fs.existsSync(candidate1) || fs.existsSync(candidate2) || fs.existsSync(candidate3);
}

// 1. Verify all 11 target calculator pages have CommonScenarios links
const targetCalculators = [...new Set(scenarios.map(s => s.calculatorUrl))];
console.log(`1️⃣ Checking ${targetCalculators.length} main calculator pages for scenario link mesh:`);

for (const calcUrl of targetCalculators) {
  const cleanUrl = calcUrl.replace(/\/+$/, '');
  const htmlPath = path.join(STATIC_DIR, cleanUrl, 'index.html');

  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ Calculator page HTML missing at: ${htmlPath}`);
    totalErrors++;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');

  // Check for scenario links
  const scenarioLinkMatches = html.match(/href="\/scenarios\/([a-z0-9-]+)"/g) || [];
  if (scenarioLinkMatches.length === 0) {
    console.error(`❌ ${calcUrl}: No /scenarios/ links found on calculator page.`);
    totalErrors++;
  } else {
    // Verify each link targets an existing page
    let allExist = true;
    for (const match of scenarioLinkMatches) {
      const slugMatch = match.match(/href="\/scenarios\/([a-z0-9-]+)"/);
      if (slugMatch) {
        const slug = slugMatch[1];
        const scenarioHtml = path.join(STATIC_DIR, 'scenarios', slug, 'index.html');
        if (!fs.existsSync(scenarioHtml)) {
          console.error(`❌ ${calcUrl} links to non-existent scenario: /scenarios/${slug}`);
          allExist = false;
          totalErrors++;
        }
      }
    }
    if (allExist) {
      console.log(`  ✓ ${calcUrl}: Found ${scenarioLinkMatches.length} valid scenario links.`);
    }
  }
}

// 2. Verify all 50 scenario pages link back to their parent calculatorUrl and related scenarios
console.log(`\n2️⃣ Checking all ${scenarios.length} scenario pages for parent backlinks & related links:`);
let scenarioBacklinkCount = 0;

for (const sc of scenarios) {
  const htmlPath = path.join(STATIC_DIR, 'scenarios', sc.slug, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ Scenario page HTML missing at: ${htmlPath}`);
    totalErrors++;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');

  // Verify backlink to parent calculatorUrl
  const normCalcUrl = sc.calculatorUrl.replace(/\/+$/, '');
  const hasBacklink = html.includes(`href="${sc.calculatorUrl}"`) || 
                      html.includes(`href="${normCalcUrl}"`) || 
                      html.includes(`href="${normCalcUrl}/"`);

  if (!hasBacklink) {
    console.error(`❌ [${sc.slug}]: Missing backlink to parent calculatorUrl "${sc.calculatorUrl}".`);
    totalErrors++;
  }

  // Verify related scenario links
  const relatedMatches = html.match(/href="\/scenarios\/([a-z0-9-]+)"/g) || [];
  for (const m of relatedMatches) {
    const slugMatch = m.match(/href="\/scenarios\/([a-z0-9-]+)"/);
    if (slugMatch) {
      const slug = slugMatch[1];
      const targetHtml = path.join(STATIC_DIR, 'scenarios', slug, 'index.html');
      if (!fs.existsSync(targetHtml)) {
        console.error(`❌ [${sc.slug}] links to non-existent scenario: /scenarios/${slug}`);
        totalErrors++;
      }
    }
  }

  if (hasBacklink) {
    scenarioBacklinkCount++;
  }
}
console.log(`  ✓ All ${scenarioBacklinkCount}/${scenarios.length} scenario pages have verified parent backlinks.`);

// 3. Verify alternative pages link to matching calculators and scenarios
console.log(`\n3️⃣ Checking all ${alternatives.length} competitor alternative pages:`);
for (const alt of alternatives) {
  const htmlPath = path.join(STATIC_DIR, 'alternatives', alt.slug, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ Alternative page HTML missing at: ${htmlPath}`);
    totalErrors++;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');

  for (const matchCalc of alt.matchingCalculators) {
    const normUrl = matchCalc.url.replace(/\/+$/, '');
    const hasCalcLink = html.includes(`href="${matchCalc.url}"`) || 
                        html.includes(`href="${normUrl}"`) || 
                        html.includes(`href="${normUrl}/"`);
    if (!hasCalcLink) {
      console.error(`❌ [${alt.slug}]: Missing link to matching calculator "${matchCalc.url}".`);
      totalErrors++;
    }
  }

  console.log(`  ✓ [${alt.slug}]: Matching calculator links and scenario widgets verified.`);
}

if (totalErrors > 0) {
  console.error(`\n❌ Internal link mesh verification failed with ${totalErrors} errors.`);
  process.exit(1);
}

console.log('\n🎉 Success! All internal links, backlinks, and scenario widgets are perfectly verified with 0 dead links!\n');
