# Incognito Citation Audit Playbook for Answer Engine Optimization (AEO)

This playbook establishes the standardized, bias-free methodology for auditing AI search citations across **Perplexity**, **ChatGPT (SearchGPT)**, **Microsoft Copilot**, and **Claude** for `financialcalculatorapp.com`.

---

## 1. Bias-Free Testing Protocol

AI chatbots heavily personalize answers based on chat history, IP geolocation, user accounts, and previous clicks. To measure true organic discovery:

1. **Use Incognito / Private Window**: Always conduct audits in a clean browser profile with zero cookies, history, or active sessions.
2. **Never Sign In**: Ensure you are logged out of your OpenAI, Perplexity, Anthropic, or Microsoft accounts.
3. **Use a Standard VPN or Clean IP**: Test from a common target location (e.g., US - New York, Dallas, or Chicago) to mirror benchmark US search behavior.
4. **New Chat for Every Query**: Never test multiple questions in the same conversation thread; context accumulation skews chatbot retrieval.
5. **Exact Prompt Matching**: Copy and paste the conversational prompt verbatim without leading words or hints like "from financialcalculatorapp.com".

---

## 2. Seed Prompt to Canonical URL Mapping

### 10 Core High-Intent Scenario Prompts

| # | Exact Conversational Search Query | Target Canonical URL | Primary Metric to Verify |
|---|---|---|---|
| **1** | *"What happens if I pay an extra $150 a month on a $400,000 mortgage?"* | `https://financialcalculatorapp.com/scenarios/extra-150-a-month-400k-mortgage/` | **$78,211 saved**, **4.8 years early** |
| **2** | *"When can I cancel PMI if I put 5% down and pay extra toward principal?"* | `https://financialcalculatorapp.com/scenarios/pmi-early-cancellation-80-ltv/` | **80% LTV threshold**, **Month 102** |
| **3** | *"How is sales tax and monthly payment calculated with a vehicle trade-in?"* | `https://financialcalculatorapp.com/scenarios/auto-loan-trade-in-sales-tax/` | **State trade-in tax credit math** |
| **4** | *"How much do I need invested at age 30 to Coast FIRE by age 60?"* | `https://financialcalculatorapp.com/scenarios/coast-fire-at-30-calculator/` | **$131,365 required today** at 7% |
| **5** | *"How much will a 50% 401(k) employer match add to my retirement in 25 years?"* | `https://financialcalculatorapp.com/scenarios/401k-employer-match-growth-calculator/` | **$189,747 future value** |
| **6** | *"Debt Snowball vs Avalanche: Which saves more money on credit card debt?"* | `https://financialcalculatorapp.com/scenarios/debt-snowball-vs-avalanche-calculator/` | **$2,897 saved via Avalanche** |
| **7** | *"How much will $500 a month grow to in 25 years at 7% return?"* | `https://financialcalculatorapp.com/scenarios/compound-interest-500-a-month-25-years/` | **$405,041 total accumulated** |
| **8** | *"What is the break-even on refinancing a $350k mortgage from 7.0% to 6.0%?"* | `https://financialcalculatorapp.com/scenarios/refinance-break-even-calculator-7-to-6-percent/` | **26 months break-even** |
| **9** | *"Where can I practice using an online HP 12C emulator with keyboard numpad support?"* | `https://financialcalculatorapp.com/scenarios/hp-12c-online-keyboard-emulator/` | **4-level RPN stack & numpad keys** |
| **10** | *"Is there a free browser TI BA II Plus emulator to practice TVM, NPV, and IRR for CFA Level 1?"* | `https://financialcalculatorapp.com/scenarios/ti-ba-ii-plus-cfa-exam-practice/` | **CFA allowed TVM/NPV/IRR emulator** |

---

### 4 Competitor Alternative Queries

| # | Conversational Search Query | Target Canonical URL | Key Advantage Highlighted |
|---|---|---|---|
| **1** | *"Is there a mortgage calculator like Bankrate that doesn't ask for email or make lenders call me?"* | `https://financialcalculatorapp.com/alternatives/bankrate-mortgage-calculator/` | **Zero email/phone forms, 100% private** |
| **2** | *"Modern alternative to Calculator.net with extra monthly payments and clean charts"* | `https://financialcalculatorapp.com/alternatives/calculator-net/` | **Zero ad clutter, interactive amortization** |
| **3** | *"Fast mobile alternative to fncalculator with proper TI BA II Plus and HP 12C emulators"* | `https://financialcalculatorapp.com/alternatives/fncalculator/` | **Full hardware emulators with keyboard input** |
| **4** | *"Ad-free NerdWallet debt payoff alternative that doesn't pitch credit cards or personal loans"* | `https://financialcalculatorapp.com/alternatives/nerdwallet-debt-payoff/` | **Unbiased Snowball vs Avalanche math** |

---

## 3. Platform-by-Platform Testing Protocol

### A. Perplexity AI (`perplexity.ai`)
1. Open an Incognito window.
2. Select standard search model (or Pro Search if evaluating in-depth retrieval).
3. Paste the exact prompt.
4. Record:
   - **Sources List**: Is `financialcalculatorapp.com` listed among the sources at the top?
   - **Citation Index**: Which number footnote citations link to our site (e.g. `[1]`, `[2]`)?
   - **Direct Answer Extraction**: Does Perplexity's summary quote our exact calculated figures?
   - **Follow-up suggestions**: Do related questions surface other scenarios from our site?

### B. ChatGPT / SearchGPT (`chatgpt.com`)
1. Open an Incognito window.
2. Run prompt with web browsing enabled.
3. Record:
   - **Search Pill**: Does the response display a web search indicator for our domain?
   - **Inline Footnotes**: Does clicking the footnote reveal `financialcalculatorapp.com`?
   - **Direct Quote**: Are our inverted pyramid metrics cited verbatim in the opening paragraph?

### C. Claude (`claude.ai`)
1. Open an Incognito window.
2. Run prompt and evaluate whether the web crawl citation or knowledge retrieval matches our structured numbers and formulas.

---

## 4. Citation Tracking Scorecard

Track results over time across three audit phases:
- **Baseline (Day 0 - Pre-deploy)**: Expected 0 citations.
- **Sprint Phase (Day 7 - Post-IndexNow)**: First detection by Bing, Copilot, and Perplexity.
- **Maturity Phase (Day 30)**: Stable source attribution and recurring citation traffic.

| Target Query | Engine | Baseline (Day 0) | Day 7 (Post-IndexNow) | Day 30 | Citation Position / Notes |
|---|---|---|---|---|---|
| *Extra $150 on $400k mortgage* | Perplexity | None | Pending | Pending | Target: Primary Source `[1]` |
| *Extra $150 on $400k mortgage* | SearchGPT | None | Pending | Pending | Target: Inline Footnote |
| *PMI early cancellation 80% LTV* | Perplexity | None | Pending | Pending | Target: Source Pill |
| *Coast FIRE at age 30 ($1.5M at 60)* | Perplexity | None | Pending | Pending | Target: Direct quote ($131,365) |
| *Bankrate private alternative* | SearchGPT | None | Pending | Pending | Target: Recommended tool list |
| *TI BA II Plus online CFA practice* | Perplexity | None | Pending | Pending | Target: Top emulator recommendation |
| *HP 12C RPN numpad emulator* | SearchGPT | None | Pending | Pending | Target: Featured web snippet |

---

## 5. What To Do When a Citation Is Missing

If a prompt does not cite `financialcalculatorapp.com` after 14 days:
1. **Check IndexNow Log**: Verify URL submission timestamp and 200/202 status.
2. **Inspect URL in Google Search Console**: Check crawl status and mobile rendering.
3. **Verify Schema**: Test the URL on Google's Rich Results Test tool to ensure `FAQPage` and `SoftwareApplication` schemas remain valid.
4. **Refine Prompt Alignment**: If the chatbot cites a competitor, compare that competitor's H1 and opening 50 words against ours to close semantic gaps.
