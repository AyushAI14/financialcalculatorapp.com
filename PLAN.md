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
