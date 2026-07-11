# FinCompute: Calculator Implementation Plan

This document outlines the strategic plan to build out all ~40 individual financial calculators, ensuring mathematical accuracy and a premium Vercel-inspired design aesthetic.

## 1. Architectural Strategy

We will leverage Astro's file-based routing and component system alongside Vanilla Javascript to ensure maximum performance and maintainability.

### 1.1 Directory Structure
We will adopt a category-based routing structure to keep the URLs clean and logical:
```text
src/
├── components/
│   ├── ui/                 # Reusable Vercel-like UI components (Inputs, Sliders, Cards, Badges)
│   └── calculators/        # The specific calculator forms and result displays
├── layouts/
│   ├── Layout.astro        # Base site layout
│   └── CalculatorLayout.astro # Specific layout for calculator pages (with sidebar/navigation)
├── lib/
│   ├── math/               # Pure JS files containing the financial formulas
│   │   ├── finance.ts      # TVM, ROI, Compound Interest math
│   │   ├── loan.ts         # Amortization, APR, Mortgage math
│   │   └── retirement.ts   # 401k, IRA, Social Security math
│   └── utils.ts            # Formatting functions (Currency, Percentages, Dates)
└── pages/
    ├── finance/
    │   ├── tvm.astro
    │   └── roi.astro
    ├── loan/
    │   └── mortgage.astro
    └── ...
```

### 1.2 Core UI Components
Before building the individual calculators, we will build a library of highly reusable, accessible, and beautifully styled form components:
- `NumberInput`: For currency and percentage inputs.
- `RangeSlider`: For visual adjustments of terms (e.g., years, interest rate).
- `ToggleSwitch`: For binary choices (e.g., Beginning vs. End of period).
- `ResultCard`: A large, prominent display for the final calculated number, utilizing the Geist font's tabular figures for beautiful numbers.
- `AmortizationTable`: A styled data table for displaying schedules.
- `DonutChart` & `BarChart`: Lightweight SVG or Canvas charts (using Chart.js or pure SVG) to visualize data.

### 1.3 Mathematical Logic & Validation
All calculations will be decoupled from the UI. They will exist in `src/lib/math/` as pure functions with comprehensive TypeScript typings.
- **Accuracy**: We will use exact mathematical formulas (e.g., standard Time Value of Money formulas for PV, FV, PMT, RATE, NPER).
- **Validation**: Inputs will be validated on the client side before calculation to prevent `NaN` or `Infinity` edge cases.

---

## 2. Phased Implementation Roadmap

To ensure quality, we will build the calculators in logical batches.

### Phase 1: Foundation & Infrastructure
- [ ] Create `CalculatorLayout.astro` with a sidebar for quick navigation between calculators.
- [ ] Build the core form UI components (`Input.astro`, `Select.astro`, `ResultCard.astro`).
- [ ] Implement the `utils.ts` library for standard currency formatting (`$1,234.56`) and percentage formatting.
- [ ] Setup Chart.js (or similar lightweight library) for visual data representation.

### Phase 2: Core Finance & Investment
- [ ] **TVM Calculator**: The flagship calculator (Present Value, Future Value, PMT, Rate, Periods).
- [ ] **Compound Interest Calculator**: Includes visual growth charts and breakdown of principal vs. interest.
- [ ] **ROI Calculator**: Return on Investment with annualized return metrics.
- [ ] **Savings Goal Calculator**: How much to save monthly to reach a specific target.

### Phase 3: Loans & Mortgages
- [ ] **Standard Loan Calculator**: Monthly payments and total interest.
- [ ] **Amortization Schedule Generator**: Detailed month-by-month breakdown table.
- [ ] **APR Calculator**: Calculating effective APR with fees included.
- [ ] **Rent vs. Buy Calculator**: Complex comparison math.
- [ ] **Home Affordability Calculator**: Based on DTI (Debt-to-Income) ratios.

### Phase 4: Retirement & Stock
- [ ] **Retirement Planner**: Forecasting nest egg based on current savings and contributions.
- [ ] **401k Contribution Calculator**: Maximizing employer match.
- [ ] **Stock Return / CAPM Calculator**: Capital Asset Pricing Model metrics.
- [ ] **Dividend Calculator**: Reinvestment impact over time.

### Phase 5: Miscellaneous & Polishing
- [ ] **Credit Card Payoff**: Time and interest to zero balance.
- [ ] **Tip & Discount Calculators**: Simple, fast, mobile-friendly tools.
- [ ] SEO Optimization: Meta tags, schema markup for each calculator to ensure high search ranking.
- [ ] Final UI Polish: Hover states, micro-animations, and responsive testing.

---

## 3. SEO & Discoverability
Since `fncalculator.com` generates a lot of organic traffic, our SEO must be perfect:
- Every calculator will have a dedicated `<title>` and `<meta name="description">`.
- Use an `<h1>` that accurately describes the tool (e.g., "Free Compound Interest Calculator").
- Include a textual explanation of *how* the calculation works beneath each calculator to capture long-tail search queries.

## 4. Next Steps
If you approve this plan, we will immediately begin **Phase 1**, setting up the `CalculatorLayout` and the core UI components, followed by our first real calculator: the **TVM Calculator**.


---

# (NEW) Implementation Plan: FinCompute Feature Enhancements & New Calculators

This document details the step-by-step technical plan to implement the requested features, improvements, and new calculators on FinCompute.com. The changes are grouped by priority and feature area.

---

## 1. Goal Description

Enhance FinCompute.com from a basic set of financial calculators into a professional, highly discoverable, and highly engaging financial tool suite.
This will be achieved by:
1. **SEO Enhancements**: Structured data (JSON-LD), customized meta tags per page, Open Graph/Twitter tags, related calculators suggestions, and homepage filtering.
2. **New Calculators**: 13 brand new calculators covering mortgages, debt payoff, inflation, tax paychecks, refinancing, net worth, emergency funds, investment fee impacts, student loans, IRA choices, college savings, debt ratios, and crypto DCA.
3. **Engagement Features**: Real-time URL query parameter sync, CSV amortization schedules export, print-optimized styling, scenario comparison, input tooltips, preset buttons, recently used widgets, and local scenario saving.
4. **Trust & UX**: "How it works" sections, formulas with real values, last-updated tags, privacy notes, feedback widgets, and error validation.
5. **Content & SEO Growth**: Astro Blog Content Collections, financial glossary pages, and custom comparison pages.
6. **Technical Utilities**: Multi-currency selector, dark mode validation, lazy loaded charts, and offline PWA capability.

---

## 2. Proposed Architectural Changes

We will implement these changes using modular components and utility files to ensure clean code and performance.

### 2.1 Reusable UI Primitives
We will update our custom components in `src/components/ui/` to support new features globally:
* **`Input.astro`**: Add `tooltip?: string` and error-handling capabilities.
* **`CalculatorLayout.astro`**: Integrate JSON-LD generation (FAQ + WebApplication), Related Calculators footer, Feedback widget, Last Updated badges, and Browser Privacy note.
* **`Layout.astro`**: Add dynamic meta description, canonical link, Open Graph tags, and header Multi-currency dropdown.

---

## 3. Component Details & Code Snippets

### 3.1 SEO & Meta Headers (`Layout.astro` & `CalculatorLayout.astro`)
#### [MODIFY] `src/layouts/Layout.astro`
Extend props to include `description` and `canonicalUrl` (or auto-calculate if omitted). Add Open Graph and Twitter cards tags.
```astro
---
// src/layouts/Layout.astro
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
  canonicalUrl?: string;
}

const { 
  title, 
  description = "A premium suite of financial calculators for all your needs.",
  canonicalUrl 
} = Astro.props;

const resolvedCanonical = canonicalUrl || new URL(Astro.url.pathname, Astro.site || 'https://fincompute.com').href;
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="canonical" href={resolvedCanonical} />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={resolvedCanonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/og-image.png" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={resolvedCanonical} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/og-image.png" />
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-sans/style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-mono/style.css" />
    <!-- ... Rest of header (theme checking) ... -->
  </head>
  <!-- ... Rest of Layout ... -->
</html>
```

#### [MODIFY] `src/layouts/CalculatorLayout.astro`
* Inject JSON-LD (FAQPage + WebApplication schema) directly inside `Layout.astro` head (we can pass slot `head` or add schema directly).
* Render "Related Calculators", "Last Updated", "Privacy Note", and "Feedback Widget".
```astro
---
// src/layouts/CalculatorLayout.astro
import Layout from './Layout.astro';

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  title: string;
  description?: string;
  faqs?: FAQItem[];
  lastUpdated?: string;
}

const { title, description, faqs = [], lastUpdated = "July 2026" } = Astro.props;

// Determine related calculators in the same category
const currentPath = Astro.url.pathname;
let currentCategory = categories.find(cat => cat.links.some(link => link.url === currentPath));
const relatedLinks = currentCategory 
  ? currentCategory.links.filter(l => l.url !== currentPath).slice(0, 3)
  : [];

// Schema creation
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": title,
  "description": description,
  "applicationCategory": "FinancialApplication",
  "operatingSystem": "All"
};

const faqSchema = faqs.length > 0 ? {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
} : null;
---
<Layout title={title} description={description}>
  <!-- Inject Structured Data -->
  <script type="application/ld+json" set:html={JSON.stringify(webAppSchema)} />
  {faqSchema && <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />}

  <div class="max-w-[1400px] mx-auto py-4 lg:py-8 flex flex-col lg:flex-row gap-8">
    <!-- Navigation ... -->
    <main class="flex-1 bg-canvas border border-hairline rounded-lg p-6 lg:p-10 shadow-sm min-h-[600px] relative">
      <!-- Last Updated Badge -->
      <div class="absolute top-4 right-6 text-[10px] font-mono text-mute bg-canvas-soft px-2 py-0.5 rounded border border-hairline">
        Updated: {lastUpdated}
      </div>

      <div class="mb-10">
        <h1 class="text-3xl font-semibold tracking-[-1.28px] text-ink mb-3">{title}</h1>
        {description && <p class="text-body text-base max-w-3xl">{description}</p>}
      </div>

      <slot />

      <!-- Browser Privacy Note -->
      <div class="mt-12 p-4 bg-canvas-soft border border-hairline border-dashed rounded-md text-xs text-mute flex items-center gap-2">
        <span>🔒</span>
        <span><strong>Privacy Guarantee:</strong> All calculation formulas execute client-side in your web browser. We do not store or transmit your financial details.</span>
      </div>

      <!-- Related Calculators Section -->
      {relatedLinks.length > 0 && (
        <div class="mt-16 border-t border-hairline pt-8">
          <h3 class="text-sm font-mono text-mute uppercase tracking-wider mb-4">Related Calculators</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedLinks.map(link => (
              <a href={link.url} class="p-4 bg-canvas-soft border border-hairline rounded hover:border-hairline-strong transition-colors block text-sm font-medium text-ink">
                {link.name} →
              </a>
            ))}
          </div>
        </div>
      )}

      <!-- Feedback Widget -->
      <div class="mt-12 border-t border-hairline pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span class="text-xs text-mute font-mono">Was this calculator helpful?</span>
        <div id="feedback-widget" class="flex items-center gap-2">
          <button class="feedback-btn px-3 py-1 bg-canvas-soft hover:bg-canvas-soft-2 text-xs border border-hairline rounded-full cursor-pointer" data-val="yes">👍 Yes</button>
          <button class="feedback-btn px-3 py-1 bg-canvas-soft hover:bg-canvas-soft-2 text-xs border border-hairline rounded-full cursor-pointer" data-val="no">👎 No</button>
        </div>
      </div>
    </main>
  </div>
</Layout>

<script>
  // Feedback Widget Handlers
  const buttons = document.querySelectorAll('.feedback-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const widget = document.getElementById('feedback-widget');
      if (widget) {
        widget.innerHTML = `<span class="text-xs text-success font-medium animate-fade-in">Thank you for your feedback!</span>`;
      }
    });
  });
</script>
```

---

### 3.2 Homepage Filter Box & Recently Used (`index.astro`)
#### [MODIFY] `src/pages/index.astro`
Add a fuzzy search filter box and a "Recently Used" section populated from `localStorage`.
```html
<!-- Search & Filter Box -->
<div class="relative max-w-md mx-auto mb-12">
  <input 
    type="text" 
    id="calc-search" 
    placeholder="Search calculators (e.g. mortgage, snowball, inflation)..." 
    class="w-full h-11 bg-canvas border border-hairline rounded-lg px-4 text-sm focus:outline-none focus:border-hairline-strong shadow-sm"
  />
</div>

<!-- Recently Used Section (Empty by default, shown via client JS) -->
<div id="recently-used-section" class="hidden max-w-4xl mx-auto mb-12 p-5 bg-canvas border border-hairline rounded-lg">
  <h3 class="text-xs font-mono text-mute uppercase tracking-wider mb-3">Recently Used</h3>
  <div id="recently-used-list" class="flex flex-wrap gap-2"></div>
</div>
```
```javascript
<script>
  // Search Logic
  const searchInput = document.getElementById('calc-search') as HTMLInputElement;
  const categories = document.querySelectorAll('#categories-section > div');

  searchInput?.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    categories.forEach(cat => {
      let hasMatch = false;
      const links = cat.querySelectorAll('ul li');
      links.forEach(li => {
        const text = li.textContent?.toLowerCase() || '';
        if (text.includes(query)) {
          (li as HTMLElement).style.display = 'block';
          hasMatch = true;
        } else {
          (li as HTMLElement).style.display = 'none';
        }
      });
      (cat as HTMLElement).style.display = hasMatch ? 'flex' : 'none';
    });
  });

  // Recently Used
  const recents = JSON.parse(localStorage.getItem('recent_calculators') || '[]');
  const recentsSection = document.getElementById('recently-used-section');
  const recentsList = document.getElementById('recently-used-list');

  if (recents.length > 0 && recentsSection && recentsList) {
    recentsSection.classList.remove('hidden');
    recentsList.innerHTML = recents.map((item: any) => `
      <a href="${item.url}" class="px-3 py-1 text-xs bg-canvas-soft hover:bg-canvas-soft-2 border border-hairline rounded-full text-body hover:text-ink transition-colors">
        ${item.name}
      </a>
    `).join('');
  }
</script>
```

---

### 3.3 New Reusable Capabilities

#### A. Shareable URL Sync & Preset Scenarios
Create a utility function to synchronize inputs and push/read from query params.
```typescript
// src/lib/shareable.ts
export function syncInputsWithURL(formId: string, onUpdate: () => void) {
  const form = document.getElementById(formId) as HTMLFormElement;
  if (!form) return;

  // 1. Read parameters on mount
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    const el = form.elements.namedItem(key) as HTMLInputElement | HTMLSelectElement;
    if (el) el.value = value;
  });

  // 2. Add listener to push changes to URL
  form.addEventListener('input', () => {
    const fd = new FormData(form);
    const newParams = new URLSearchParams();
    fd.forEach((value, key) => {
      if (value) newParams.set(key, value.toString());
    });
    const newUrl = `${window.location.pathname}?${newParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
    onUpdate();
  });
}
```

#### B. Amortization Schedule CSV Export
Provide a direct "Export to CSV" mechanism for calculators containing tabular reports:
```typescript
// src/lib/csv-exporter.ts
export function downloadTableAsCSV(tableId: string, filename = 'schedule.csv') {
  const table = document.getElementById(tableId);
  if (!table) return;
  
  let csvContent = "";
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    const cols = row.querySelectorAll('th, td');
    const rowData = Array.from(cols)
      .map(col => `"${col.textContent?.trim().replace(/"/g, '""')}"`)
      .join(',');
    csvContent += rowData + "\r\n";
  });
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

#### C. Tooltip and Error Inputs (`Input.astro`)
#### [MODIFY] `src/components/ui/Input.astro`
Modify inputs to optionally render description tooltips and error placeholders.
```astro
---
// src/components/ui/Input.astro
interface Props {
  id: string;
  label: string;
  type?: 'text' | 'number';
  placeholder?: string;
  value?: string | number;
  prefix?: string;
  suffix?: string;
  tooltip?: string;
}

const { id, label, type = 'text', placeholder = '', value = '', prefix, suffix, tooltip } = Astro.props;
---
<div class="flex flex-col gap-1.5 w-full relative">
  <div class="flex items-center gap-1.5">
    <label for={id} class="text-sm font-medium text-ink">{label}</label>
    {tooltip && (
      <div class="group relative cursor-help">
        <span class="w-3.5 h-3.5 rounded-full border border-mute text-[10px] text-mute flex items-center justify-center font-mono hover:bg-canvas-soft">?</span>
        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-primary text-on-primary text-[10px] leading-normal rounded shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
          {tooltip}
        </div>
      </div>
    )}
  </div>
  <div class="relative flex items-center">
    {prefix && <span class="absolute left-3 text-mute text-sm pointer-events-none">{prefix}</span>}
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      class:list={[
        "w-full h-10 bg-canvas text-ink text-sm border border-hairline rounded-sm transition-colors focus:outline-none focus:border-hairline-strong focus:ring-1 focus:ring-hairline-strong shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
        prefix ? "pl-7" : "pl-3",
        suffix ? "pr-8" : "pr-3"
      ]}
    />
    {suffix && <span class="absolute right-3 text-mute text-sm pointer-events-none">{suffix}</span>}
  </div>
  <!-- Error Container -->
  <span id={`${id}-error`} class="text-[10px] text-error hidden font-medium mt-0.5 leading-none"></span>
</div>
```

---

## 4. 13 New Calculators Specification

The following calculators will be implemented. Calculations will follow strict mathematical formulations with validation logic in `src/lib/math/`.

### 4.1 Mortgage Calculator
* **Path**: `/loan/mortgage`
* **Formulas**:
  * Monthly Interest Rate ($r$): $AnnualRate / 12$
  * Loan Amount ($P$): $HomeValue - DownPayment$
  * Monthly P&I ($PMT$): $P \cdot \frac{r(1+r)^N}{(1+r)^N - 1}$
  * Monthly Taxes: $(HomeValue \cdot TaxRate) / 12$
  * Monthly Home Insurance: $Insurance / 12$
  * Monthly PMI: $(LoanAmount \cdot PMIRate) / 12$ (only if $DownPayment < 20\%$ of $HomeValue$)
  * Total Payment: $PMT + MonthlyTaxes + MonthlyInsurance + MonthlyPMI + HOA$

### 4.2 Debt Snowball vs Avalanche Payoff
* **Path**: `/loan/debt-payoff`
* **Strategy Math**:
  * Collect arrays of debts: `{ name, balance, rate, minPayment }`
  * Add user's total payment budget ($TotalBudget > \sum MinPayments$)
  * Run monthly iterations simulating payments:
    * Apply min payment to all active debts.
    * Allocate extra funds ($TotalBudget - \sum MinPayments$) to the targeted debt:
      * **Snowball**: Target is debt with smallest balance.
      * **Avalanche**: Target is debt with highest interest rate.
    * Continue until all balances are zero. Calculate total interest paid and payoff duration (months) for both methods.

### 4.3 Inflation & Purchasing Power
* **Path**: `/finance/inflation`
* **Formulas**:
  * Future adjusted value (needed to match original purchase power): $FV = PV \cdot (1 + inflation\_rate)^n$
  * Past purchase power equivalent: $PV = FV / (1 + inflation\_rate)^n$

### 4.4 Paycheck & Take-Home Pay (Gross → Net)
* **Path**: `/finance/paycheck`
* **Formulas**:
  * Regularize income to Annual Gross Pay ($G$)
  * Social Security Tax: $6.2\% \cdot \min(G, 176100)$ (standard cap for 2026)
  * Medicare Tax: $1.45\% \cdot G + (0.9\% \cdot \max(0, G - 200000))$
  * Federal Income Tax: Run $G$ after Pre-tax Deductions through IRS brackets (Single/Married).
  * Net Pay: $Gross - FICA - IncomeTax - PreTaxDeductions - PostTaxDeductions$

### 4.5 Refinance Calculator
* **Path**: `/loan/refinance`
* **Formulas**:
  * Calculate current monthly payment and new refinancing payment.
  * Monthly savings: $CurrentPMT - NewPMT$
  * Break-Even Point (months): $ClosingCosts / MonthlySavings$

### 4.6 Net Worth Tracker
* **Path**: `/finance/net-worth`
* **Formulas**:
  * Sum of all Liquid/Real Estate Assets ($TotalAssets$)
  * Sum of all Short-term/Mortgage Liabilities ($TotalLiabilities$)
  * $NetWorth = TotalAssets - TotalLiabilities$

### 4.7 Emergency Fund Calculator
* **Path**: `/finance/emergency-fund`
* **Formulas**:
  * Monthly expense total: $\sum Housing + Utilities + Food + Trans + Ins$
  * Target savings: $MonthlyExpenses \cdot TargetMonths$
  * Gap: $\max(0, TargetSavings - CurrentSavings)$
  * Time to reach: $Gap / MonthlyContribution$

### 4.8 Investment Fee & Expense Ratio Impact
* **Path**: `/finance/fee-impact`
* **Formulas**:
  * Growth without fees: $A_1 = P(1+r)^t$
  * Growth with fees: $A_2 = P(1+r-fee)^t$
  * Cumulative opportunity loss: $A_1 - A_2$

### 4.9 Student Loan IDR Repayment
* **Path**: `/loan/student-loan`
* **Formulas**:
  * Discretionary Income ($DI$): $AGI - (PovertyGuideline \cdot 1.5)$ (or $2.25$ for SAVE plan)
  * Monthly repayment limit: $(DI \cdot planPercentage) / 12$
  * Project interest accumulation, monthly balance, and outstanding forgiveness amounts.

### 4.10 Roth vs Traditional IRA
* **Path**: `/retirement/ira-comparison`
* **Formulas**:
  * Traditional: Grow pre-tax contributions $C$ over time $N$. Maturity Value: $FV \cdot (1 - FutureTaxRate)$
  * Roth: Grow net after-tax contributions $C \cdot (1 - CurrentTaxRate)$ over time $N$. Maturity Value: $FV$ (tax-free).

### 4.11 College Savings (529)
* **Path**: `/finance/college-savings`
* **Formulas**:
  * Estimate total cost of attendance across 4 years adjusted for inflation: $\sum_{y=0}^3 Cost \cdot (1+Inflation)^{AgeTarget - AgeCurrent + y}$
  * Standard TVM formulas to solve for monthly savings required to meet target.

### 4.12 Debt-to-Income (DTI) Ratio
* **Path**: `/loan/dti`
* **Formulas**:
  * Front-End DTI: $HousingExpenses / MonthlyGrossIncome$
  * Back-End DTI: $(HousingExpenses + CreditCards + AutoLoans + StudentLoans) / MonthlyGrossIncome$

### 4.13 Crypto DCA Calculator
* **Path**: `/finance/crypto-dca`
* **Formulas**:
  * Simulate monthly/weekly investments into crypto asset using historical prices.
  * $TotalCoins = \sum (Contribution / PurchasePrice)$
  * $PortfolioValue = TotalCoins \cdot CurrentPrice$

---

## 5. Content & SEO Growth

### 5.1 Blog Section with Astro Content Collections
1. **Define Schema**: Create `src/content/config.ts` defining metadata schema (title, date, description, tags).
2. **Setup Folder**: Create `src/content/blog/` to host markdown guides.
3. **Setup Routes**:
   * `/blog`: Displays post index.
   * `/blog/[slug]`: Renders single markdown articles with full responsive styling.

### 5.2 Glossary Section
* **Route**: `/glossary`
* **Features**: A searchable index of terms like APR, CAGR, DTI, compound interest, PMI, amortisation.

### 5.3 Comparison Landing Pages
* **Routes**: `/compare/roth-vs-401k`, `/compare/rent-vs-buy`
* **Features**: Textual guides containing dynamic embedded mini-widgets.

---

## 6. Technical Additions & PWA Support

### 6.1 Multi-Currency Selector
* Add a currency dropdown in the header to support USD ($), GBP (£), EUR (€), and INR (₹).
* Store selection in `localStorage`.
* Update `formatCurrency` inside `src/lib/utils.ts` to respect selected currency and dynamically apply exchange rates (or just currency symbols for local equivalence).

### 6.2 Print Styles (@media print)
In `src/styles/global.css`, suppress header, navigation, and sidebar panels, expanding results columns into full-bleed printable pages.

### 6.3 Lazy Load Charts
Initialize Chart.js instances inside an `IntersectionObserver` callback to reduce CPU loading during page scrolling.

### 6.4 Offline PWA Support
1. Create a `manifest.json` under `/public/manifest.json`.
2. Configure a Service Worker script (`/public/sw.js`) that intercepts network requests, caches layout structures and static assets, allowing all interactive calculators to run completely offline.

---

## 7. Verification Plan

### 7.1 Local Compilation & Lint Checks
```bash
npm run build
```

### 7.2 Manual Validation Checklist
* Search box filters correctly on homepage.
* Shareable query params restore inputs.
* CSV downloads match calculated arrays.
* Validation messages are clearly shown when inputting negative values.
* JSON-LD schemas are successfully validated in Google Structured Data testing tools.
