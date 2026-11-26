#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const HOST = 'financialcalculatorapp.com';
const ORIGIN = `https://${HOST}`;

/**
 * Automatically locate the IndexNow key in public/
 */
function findIndexNowKey() {
  const files = fs.readdirSync(PUBLIC_DIR);
  for (const file of files) {
    if (!file.endsWith('.txt')) continue;
    const keyCandidate = file.replace(/\.txt$/, '');
    if (/^[0-9a-fA-F]{32,128}$/.test(keyCandidate)) {
      const content = fs.readFileSync(path.join(PUBLIC_DIR, file), 'utf8').trim();
      if (content === keyCandidate) {
        return {
          key: keyCandidate,
          filename: file,
          location: `${ORIGIN}/${file}`
        };
      }
    }
  }
  return null;
}

/**
 * Collect candidate URLs from sitemap.xml, scenarios.json, alternatives.json, and llms.txt
 */
function getTargetUrls() {
  const urls = new Set([`${ORIGIN}/`]);

  // 1. Check generated sitemap.xml in build output
  const sitemapCandidates = [
    path.join(ROOT_DIR, '.vercel/output/static/sitemap.xml'),
    path.join(ROOT_DIR, 'dist/client/sitemap.xml'),
    path.join(ROOT_DIR, 'public/sitemap.xml')
  ];

  for (const sitemapPath of sitemapCandidates) {
    if (fs.existsSync(sitemapPath)) {
      const content = fs.readFileSync(sitemapPath, 'utf8');
      const matches = content.match(/<loc>(https:\/\/financialcalculatorapp\.com\/[^<]+)<\/loc>/g) || [];
      for (const m of matches) {
        const cleanLoc = m.replace(/<\/?loc>/g, '').trim();
        urls.add(cleanLoc);
      }
    }
  }

  // 2. Add scenarios directly
  const scenariosPath = path.join(ROOT_DIR, 'src/data/scenarios.json');
  if (fs.existsSync(scenariosPath)) {
    try {
      const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));
      for (const s of scenarios) {
        urls.add(`${ORIGIN}/scenarios/${s.slug}/`);
      }
    } catch (e) {
      console.warn('Warning: Could not parse scenarios.json:', e.message);
    }
  }

  // 3. Add alternatives directly
  const alternativesPath = path.join(ROOT_DIR, 'src/data/alternatives.json');
  if (fs.existsSync(alternativesPath)) {
    try {
      const alternatives = JSON.parse(fs.readFileSync(alternativesPath, 'utf8'));
      for (const a of alternatives) {
        urls.add(`${ORIGIN}/alternatives/${a.slug}/`);
      }
    } catch (e) {
      console.warn('Warning: Could not parse alternatives.json:', e.message);
    }
  }

  // 4. Add URLs from public/llms.txt
  const llmsPath = path.join(PUBLIC_DIR, 'llms.txt');
  if (fs.existsSync(llmsPath)) {
    const content = fs.readFileSync(llmsPath, 'utf8');
    const matches = content.match(/https:\/\/financialcalculatorapp\.com\/[^\s)\]]+/g) || [];
    for (const url of matches) {
      urls.add(url.replace(/\/+$/, '') + '/');
    }
  }

  return Array.from(urls).sort();
}

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run') || !args.includes('--submit');

  console.log('🔍 Locating IndexNow key in public/ ...');
  const keyInfo = findIndexNowKey();

  if (!keyInfo) {
    console.error('❌ Error: No valid IndexNow key file found in public/ directory.');
    process.exit(1);
  }

  console.log(`✅ IndexNow Key Found: ${keyInfo.key}`);
  console.log(`📍 Key Location: ${keyInfo.location}`);

  const urlList = getTargetUrls();
  console.log(`📋 Total Target URLs loaded: ${urlList.length}`);

  const payload = {
    host: HOST,
    key: keyInfo.key,
    keyLocation: keyInfo.location,
    urlList: urlList
  };

  if (isDryRun) {
    console.log('\n--- [DRY-RUN MODE] IndexNow Payload ---');
    console.log(JSON.stringify(payload, null, 2));
    console.log('\n✅ Dry-run payload generated successfully! (No requests sent)');
    console.log('To submit live in Phase 4, run: node scripts/indexnow.mjs --submit');
    return;
  }

  console.log('\n🚀 Submitting IndexNow batch request to api.indexnow.org...');
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log(`HTTP Status: ${response.status} ${response.statusText}`);
    if (response.status === 200 || response.status === 202) {
      console.log('✅ IndexNow submission successful!');
    } else {
      const text = await response.text();
      console.error('⚠️ IndexNow response message:', text);
    }
  } catch (err) {
    console.error('❌ Failed to post IndexNow payload:', err);
    process.exit(1);
  }
}

main();
