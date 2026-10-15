# SEO Action Backlog

> Prioritized queue of SEO changes ordered by impact and ranking velocity.

## Priority 1: Critical Technical & Crawlability Fixes (Immediate)
- [ ] **Fix 308 Internal Redirect Hops:** Update all internal links across `src/i18n/blogs.ts`, `src/pages/retirement/401k.astro`, and `src/content/blog/*.md` to include trailing slashes (`/loan/apr/`, `/loan/mortgage/`, etc.).
- [ ] **Unblock Mobile Render-Blocking Fonts:** Defer or self-host `Plus Jakarta Sans` and `geist-mono` in `src/layouts/Layout.astro` to improve mobile FCP from 4.4s to <1.5s.
- [ ] **Dynamic Lazy-Loading of Chart.js:** Replace static `import Chart from 'chart.js/auto'` with dynamic imports across calculators to eliminate ~72 KiB of blocking JavaScript.
- [ ] **Inject JSON-LD WebSite & Organization Schemas:** Add root structured data in `Layout.astro` with Sitelinks SearchBox markup.

## Priority 2: Title Tag & SERP CTR Optimizations
- [ ] **Remove Trailing Brand Deadweight:** Shorten titles to 40–55 characters so Google SERPs stop truncating with ellipses (` | financialcalculatorapp.com` -> concise titles).
- [ ] **Fix Inverted Foreign Titles:** Put primary keywords at the front for `es`, `de`, `ja`, and `pt` versions instead of domain first.
- [ ] **Align Homepage H1 and Meta:** Match H1 to "Free Financial Calculators" with secondary value proposition ("100% Private, Zero Sign-Up").

## Priority 3: 30-Day Blitz SEO Campaign (HP 12C)
- [ ] **Target Page:** `/emulators/hp-12c/` and `/pt/emulators/hp-12c/`.
- [ ] **On-Page Enhancement:** Add a 1-page RPN Keystroke Quick Reference and FAQ section beneath the virtual calculator.
- [ ] **Internal Linking:** Add contextual cards from Homepage, Calculators index, and TVM calculator to the HP 12C emulator.
- [ ] **Outreach:** Submit to financial modeling resource hubs and CFA student portals.

## Priority 4: Content Depth & E-E-A-T (Blog Refresher)
- [ ] **Expand 6 Blog Posts:** Upgrade each post from ~350 words to 1,500+ words with calculation tables, infographics, and interactive CTA blocks.
- [ ] **Add Author Credentials & Disclaimer:** Replace anonymous team signature with named financial writer/analyst bio and CFP/CPA review stamp.
- [ ] **Connect Glossary Terms to Calculators:** Link terms in `/glossary/` directly to `/loan/apr/`, `/loan/mortgage/`, `/finance/tvm/`, etc.

## Priority 5: New Gap Content & Competitor Comparisons
- [ ] Build `/compare/hp-12c-vs-ti-ba-ii-plus/`: Comparison page targeting CFA/FRM exam students.
- [ ] Build `/compare/financialcalculatorapp-vs-fncalculator/`: Privacy, design, and mobile comparison.
- [ ] Create embeddable widget code snippets (`<iframe ...>`) for mortgage and compound interest calculators.
