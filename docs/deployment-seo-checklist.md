# Production Deployment & AEO Distribution Checklist

This document details the step-by-step procedure for deploying the **Reverse Prompt SEO & Answer Engine Optimization (AEO)** infrastructure to production for `financialcalculatorapp.com`.

---

## Step 1: Deploy to Production (Vercel)

Ensure all staged code and datasets are committed and pushed to `main`:

```bash
# 1. Review status
git status

# 2. Add modified and new files
git add public/ src/ scripts/ docs/ package.json

# 3. Commit with descriptive semantic message
git commit -m "feat(aeo): implement reverse-prompt seo engine with 50 scenarios, alternatives, and indexnow"

# 4. Push to remote repository (triggers Vercel production build)
git push origin main
```

---

## Step 2: Verify Production Endpoints (HTTP 200)

Once the Vercel build succeeds, verify that production is actively serving the new endpoints:

```bash
# 1. Verify IndexNow Verification Key File (Must return HTTP 200 and match key string)
curl -sI https://financialcalculatorapp.com/783a88171a72f912dc082752500078ca.txt

# 2. Verify AI Robots.txt & Sitemap directive
curl -s https://financialcalculatorapp.com/robots.txt | grep -E "GPTBot|PerplexityBot|Sitemap"

# 3. Verify Sitemap.xml contains scenario routes
curl -s https://financialcalculatorapp.com/sitemap.xml | grep -m 5 "scenarios"

# 4. Verify a Sample Scenario Page returns HTTP 200
curl -sI https://financialcalculatorapp.com/scenarios/extra-150-a-month-400k-mortgage/
```

---

## Step 3: Trigger Live IndexNow Submission

Once Step 2 confirms HTTP 200 on production, trigger the live batch submission of all 750 URLs across Microsoft Bing, Copilot, and Perplexity:

```bash
# Submit live batch to IndexNow API
npm run indexnow:submit
```

**Expected Response**:
`HTTP Status: 200 OK` or `202 Accepted`

---

## Step 4: Submit Sitemap to Google Search Console

1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Select property: `https://financialcalculatorapp.com/` (or domain property `financialcalculatorapp.com`).
3. In the left navigation, click on **Sitemaps** (under Indexing).
4. Under **Add a new sitemap**, enter:
   `sitemap.xml`
5. Click **Submit**.
6. Verify status shows **Success** and confirms discovery of all web and scenario pages.

---

## Step 5: Post-Deployment Incognito & AI Citation Audit

Periodically test target prompts in conversational search engines to verify citations and snippet inclusion:

| Platform | Verification Test Query | Expected Trigger / Citation |
|---|---|---|
| **Perplexity** | *"What happens if I pay an extra $150 a month on a $400,000 mortgage?"* | Direct citation of `financialcalculatorapp.com/scenarios/extra-150-a-month-400k-mortgage/` |
| **ChatGPT / SearchGPT** | *"How much is a 100% 401k match up to 4% worth in 30 years on an $85,000 salary?"* | Inverted pyramid quote of $321,167 future value |
| **Perplexity / Copilot** | *"Is there a free online TI BA II Plus emulator with TVM keys for CFA exam?"* | Direct link to `/emulators/ti-ba-ii-plus/` & `/scenarios/ti-ba-ii-plus-cfa-exam-practice/` |
| **Google Search** | `site:financialcalculatorapp.com/scenarios/` | Indexation count confirmation for all 50 scenarios |
