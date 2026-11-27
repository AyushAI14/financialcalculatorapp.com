---
title: "Mortgage Recast Calculator: Re-Amortization Formula vs. Refinance Math"
description: "Calculate exact mortgage recast payments, remaining-term re-amortization math, lump-sum break-even vs. refinancing, and servicer curtailment traps."
pubDate: 2026-11-27
author: "Quantitative Finance & Modeling Review Board"
tags: ["mortgage recast", "mortgage calculator", "refinance", "amortization", "loan math"]
---

You wire **$80,000** to your mortgage servicer after selling a prior home or vesting company stock, expecting your **$2,844.31** monthly principal-and-interest bill on a **$450,000** loan (`6.50%`, 30-year fixed) to drop by more than **$500/month**. Then your next statement generates—and your required payment is still **$2,844.31** to the exact cent. Worse, you plug your new **$353,877.59** balance into a generic online mortgage calculator and get **$2,236.75/month**, only to have your servicer quote **$2,319.86/month**—an unexpected **$83.11/month** (`$997.32/year`) mismatch.

Nothing glitched on the bank's side. You just collided with the mathematical boundary separating **principal curtailment**, **naive 360-month re-entry**, and **true remaining-term mortgage recasting** (re-amortization).

Almost every standard mortgage or extra-payment calculator locks `PMT` constant and solves for a shorter payoff horizon (`N' < N`). A **mortgage recast** executes the exact mathematical inverse: it **freezes your contract maturity date (`n_rem = N - t`)**, **preserves your original interest rate (`r`)**, and **re-solves for a permanently lower monthly payment (`PMT_recast`)** after applying a lump-sum principal reduction (`L`)—for a flat servicer fee of **$150 to $500** instead of thousands in refinance closing costs.

---

## 1. The Exact Mortgage Recast Formula (And Why Standard Calculators Get It Wrong)

To model a **mortgage recast** accurately, you must solve a two-stage Time Value of Money (TVM) system: first locating your exact scheduled or actual balance at month `t`, then re-amortizing `(B_t - L)` strictly across the **remaining contract months (`N - t`)**—never back out to `360` months.

### Stage 1: Remaining Principal Balance at Month `t` (`B_t`)

Given original loan amount `P_0`, nominal annual interest rate `r` (`i = r / 12`), and original term `N` months (e.g., `360`), your baseline monthly Principal & Interest (`PMT_0`) is:

```text
PMT_0 = P_0 * [ i * (1 + i)^N ] / [ (1 + i)^N - 1 ]
```

If you have made `t` scheduled payments without prior prepayments, your exact unpaid principal balance `B_t` before the lump sum is:

```text
B_t = P_0 * (1 + i)^t - PMT_0 * [ ((1 + i)^t - 1) / i ]
```

*(If you previously made extra principal payments, substitute your actual statement payoff balance `B_actual` for `B_t`—which triggers an important servicer divergence covered in Section 2.)*

### Stage 2: Re-Amortized Recast Payment (`PMT_recast`)

Subtract your lump-sum principal payment `L` to obtain the post-curtailment balance `B_post = B_t - L`, and compute `n_rem = N - t` (the number of months remaining until your **original contract maturity date**):

```text
PMT_recast = (B_t - L) * [ i * (1 + i)^n_rem ] / [ (1 + i)^n_rem - 1 ]
```

Where:
* **`B_t - L`** = Post-lump-sum principal balance (`B_post`).
* **`i`** = Original monthly periodic rate (`r / 12`).
* **`n_rem`** = Exact remaining months to original contract maturity (`N - t`).

### Worked Benchmark: $450,000 Mortgage at 6.50% (Month 36, $80,000 Lump Sum)

Assume you originated a **$450,000** 30-year fixed mortgage (`N = 360`) at **6.50%** (`i = 0.065 / 12 = 0.00541667`):

1. **Original Monthly P&I (`PMT_0`):** **$2,844.31**
2. **Balance After 36 Months (`B_36`):** **$433,877.59** *(Out of `$102,395.02` paid in 3 years, `$86,272.61` went to interest and only `$16,122.41` retired principal.)*
3. **Post-Lump-Sum Balance (`B_post`):** `$433,877.59 - $80,000.00` = **$353,877.59**
4. **Remaining Contract Term (`n_rem`):** `360 - 36` = **324 months** (27 years)
5. **Exact Recast Payment (`PMT_recast`):**
   `PMT_recast = $353,877.59 × [0.00541667 × (1.00541667)^324] / [(1.00541667)^324 - 1]` = **$2,319.86/month**
6. **Monthly Cash Flow Relief (`ΔPMT`):** `$2,844.31 - $2,319.86` = **-$524.44/month** (**$6,293.31/year** freed up)
7. **Fee Break-Even (`$250` Recast Fee):** `$250 / $524.44` = **0.48 months** (**15 days**)

Notice why plugging `$353,877.59` into a standard 30-year mortgage widget fails: resetting `N = 360` outputs **`$2,236.75/month`**, understating your required recast payment by **`$83.11/month`** (`$997.32/year`) because a recast cannot legally extend your maturity date beyond Month 360.

---

## 2. Deep Technical Mechanics: Curtailment vs. Recast vs. Refinance

Understanding what happens inside a lender's amortization engine prevents three expensive mistakes: paying a recast fee when you wanted interest elimination, mispricing a refinance against a low-rate mortgage, or accidentally resetting your amortization clock.

```text
================================================================================
PIPELINE A: STANDARD LUMP-SUM CURTAILMENT (Payment Frozen, Term Shrinks)
================================================================================
  B_36 ($433,877.59) - $80,000 ──► B_post = $353,877.59
                                          │
                                          ▼ (Hold PMT = $2,844.31, Solve for N')
                             Payoff Drops: 324 mo -> 208 mo (-9.7 Years)
                             Remaining Interest: $236,154.41 (Saves $251,523.18)
                             [TRAP: Zero monthly budget relief—still owe $2,844.31/mo]

================================================================================
PIPELINE B: MORTGAGE RECAST ($250 Fee, Rate Locked, Term Frozen at 324 Mo)
================================================================================
  B_36 ($433,877.59) - $80,000 ──► B_post = $353,877.59
                                          │
                                          ▼ (Hold n_rem = 324 mo, Rate = 6.50%)
                             New PMT = $2,319.86/mo (-$524.44/mo Cash Flow)
                             Remaining Interest: $397,757.74 (Saves $89,919.85)
                             [PARADOX: Costs +$161,603.33 more interest than Pipeline A]

================================================================================
PIPELINE C: HYBRID "RECAST + VOLUNTARY PAY" ARBITRAGE (Best of Both Worlds)
================================================================================
  Execute Recast ($250 Fee) ──► Legal Floor = $2,319.86/mo (Liquidity Insurance)
                                          │
                                          ▼ (Voluntarily Auto-Pay $2,844.31/mo)
                             Payoff = 208 mo | Interest Saved = $251,523.18
                             [Drop back to $2,319.86 anytime during layoff/emergency]
================================================================================
```

### Mechanics 1: The $161,603.33 Recast Interest Paradox (And How to Beat It)

Look closely at the two interest figures on that exact **$80,000** lump sum:
* **If you do NOT recast** and keep paying **$2,844.31/month**, your remaining lifetime interest drops from **$487,677.59** to **$236,154.41**—saving **$251,523.18** and retiring the mortgage in **208 months** (nearly a decade early).
* **If you DO recast** and pay the lower **$2,319.86/month** across all remaining **324 months**, your remaining lifetime interest is **$397,757.74**—saving **$89,919.85** vs. baseline, which means **recasting forfeits `$161,603.33` of potential interest savings** compared to pure curtailment.

Why? Because lowering your mandatory `PMT` slows your monthly principal paydown for the next 27 years, allowing `6.50%` interest to compound against a slower-declining balance.

**The Quantitative Arbitrage:** Pay the **$250** recast fee to legally lower your *contractual floor* to **$2,319.86/month**, then configure automatic payments for your old **$2,844.31/month** (adding `+$524.44/month` principal-only curtailment). You lock in the full **$251,523.18** interest savings and 208-month payoff of Pipeline A—while retaining the unilateral contractual right to drop back down to `$2,319.86` in any month an unexpected medical bill, tuition payment, or job disruption hits.

### Mechanics 2: The Proportional Scaling Law (And Where Prior Extra Payments Break It)

When you have never made prior extra principal payments (`B_actual = B_scheduled`), a mortgage recast obeys an exact algebraic scaling identity:

```text
PMT_recast = PMT_0 * [ (B_t - L) / B_t ]
```

Check our benchmark: `$2,844.3061 × ($353,877.59 / $433,877.59) = $2,319.86`. Because `PMT_0` already amortizes `B_t` over `n_rem` at rate `i`, reducing the principal by `18.44%` reduces the payment by *exactly* `18.44%`.

**Where this shortcut breaks:** Suppose during Years 1–3 you paid an extra **$300/month** toward principal, pushing your actual Month-36 balance down to **$421,988.08** (instead of the scheduled `$433,877.59`). When you add the **$80,000** lump sum (`B_post = $341,988.08`):
* **Wrong proportional shortcut (`B_actual` ratio):** `$2,844.31 × ($341,988.08 / $421,988.08) = $2,305.10/month` ❌
* **True servicer recast (`n_rem = 324`):** Re-amortizing `$341,988.08` over the full `324` months to your original maturity date yields **`$2,241.92/month`** ✅

You gain an extra **`$63.18/month`** in payment relief because a formal recast **absorbs and re-amortizes all `$11,889.51` of your prior extra principal payments** back out to the original 30-year maturity date!

### Mechanics 3: Recast vs. Refinance Math (6.50% vs. 5.75%, and the 3.50% Rate-Lock Trap)

Compare recasting our `$353,877.59` post-lump-sum balance at **6.50%** (`324` months, `$250` fee) against **refinancing** into a new **30-year (`360`-month)** loan at **5.75%** with **$6,500** in closing costs:

| Strategy (on $353,877.59 Post-Lump-Sum Balance) | Interest Rate | Term (`n`) | Upfront Fee | New Monthly P&I | Total Remaining Interest + Fees | Net Outcome vs. Recast |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Baseline (No Lump Sum)** | 6.50% | 324 mo | $0 | $2,844.31 | $487,677.59 | Baseline |
| **Lump Sum Curtailment (No Recast)** | 6.50% | 208 mo | $0 | $2,844.31 | **$236,154.41** | **-$161,853.33 Total Cost** *(No cash-flow drop)* |
| **Mortgage Recast** | **6.50%** | **324 mo** | **$250** | **$2,319.86** | **$398,007.74** | **0.48-mo fee break-even; preserves clock** |
| **Refinance (5.75%, Fees Paid Cash)** | 5.75% | 360 mo | $6,500 | $2,065.13 | $396,070.49 | 24.5-mo break-even vs. recast; **+36 mo debt** |
| **Refinance (5.75%, Fees Rolled In)** | 5.75% | 360 mo | $0 cash (`$360,378` bal) | $2,103.07 | $396,726.09 | Higher balance; **+36 mo debt** |

Notice that even with a **75-basis-point rate drop** (`6.50% -> 5.75%`), refinancing resets your amortization clock back to `360` months (adding 3 full years of payments) and charges `$6,250` more in fees, taking **24.5 months** just to recoup the closing-cost gap against recasting.

And if you hold a **3.50%** fixed mortgage (`$400,000` original loan, Month 60 balance `$358,788.29`, `$80,000` lump sum -> `$278,788.29` remaining):
* **Recast at 3.50% (`300` months):** Payment drops from `$1,796.18` to **`$1,395.68/month`** (`-$400.50/mo`), with **`$139,915.68`** remaining interest.
* **Refinance at 5.75% (`360` months):** Payment actually **rises** to **`$1,626.93/month`** (`+$231.25/mo` *worse* than recasting!) and explodes remaining interest to **`$306,907.51`** (`+$166,991.83` extra interest). Never refinance out of a below-market rate just to lower a payment—**recast instead.**

---

## 3. Lump-Sum Sensitivity Matrix & Edge-Case Reference Table

### Table A: How Lump-Sum Size Changes Recast Relief vs. Curtailment ($450k @ 6.50%, Month 36)

| Lump Sum (`L`) | Post-Lump Balance | Recast PMT (`n=324`) | Monthly Cash Flow Drop | Recast Interest Saved | Curtailment Payoff (`PMT=$2,844.31`) | Curtailment Interest Saved |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **$25,000** | $408,877.59 | **$2,680.42** | -$163.89/mo | $28,099.95 | 280 mo *(-3.7 yrs)* | $102,522.31 |
| **$50,000** | $383,877.59 | **$2,516.53** | -$327.78/mo | $56,199.91 | 244 mo *(-6.7 yrs)* | $180,103.30 |
| **$80,000** | $353,877.59 | **$2,319.86** | -$524.44/mo | $89,919.85 | 208 mo *(-9.7 yrs)* | $251,523.18 |
| **$100,000** | $333,877.59 | **$2,188.75** | -$655.55/mo | $112,399.81 | 187 mo *(-11.4 yrs)* | $289,691.24 |
| **$150,000** | $283,877.59 | **$1,860.97** | -$983.33/mo | $168,599.72 | 144 mo *(-15.0 yrs)* | $361,991.76 |

### Table B: Mortgage Recast Edge-Case & Servicer Trap Matrix

| Edge Case / Failure Mode | Observable Symptom | Root Mathematical or Policy Cause | Governing Rule / Equation | Exact Engineering Fix |
| :--- | :--- | :--- | :--- | :--- |
| **Unrequested Curtailment Trap** | Wired `$80k`, but next bill stays `$2,844.31` | Servicer treats lump sum as normal principal prepayment (`PMT` locked) | `N' = -ln(1 - i×B_post/PMT_0) / ln(1+i)` | Request a formal **Recast Agreement** *before* wiring funds |
| **360-Month Calculator Bug** | Calculator shows `$2,236.75`; bank quotes `$2,319.86` | Entered `N = 360` instead of remaining contract months `n_rem = N - t` | `n_rem = Original_Term - Elapsed_Months` | Always solve `PMT` over exact `n_rem` (`324`, not `360`) |
| **FHA / VA / USDA Ineligibility** | Servicer rejects recast request outright | Government-backed loans (FHA, VA, USDA) & most Jumbos disallow recasting | Program servicing rules (Fannie/Freddie conventional only) | Confirm Conventional status; otherwise curtail or compare [Refinance](/loan/refinance/) |
| **Escrow & PMI Non-Reduction** | P&I drops `$524`, but total draft drops less than expected | Property tax/insurance escrow doesn't re-amortize; PMI stays until requested | `LTV = B_post / Original_Price <= 0.80` (HPA 1998) | Submit written [PMI Cancellation](/blog/understanding-mortgage-pmi/) request when crossing 80% LTV |
| **Prior Extra-Payment Drift** | Proportional ratio (`B_post/B_actual`) overstates new PMT | Servicer re-amortizes *all* cumulative extra principal back to contract maturity | `PMT_recast = f(B_actual - L, i, N - t)` | Compute `PMT` from actual payoff balance and `N - t` |
| **Mid-Cycle Interest Accrual Gap** | Recast effective date slips 30–60 days | Lenders require lump sum to clear before billing cycle cutoff + signed agreement | 1–2 billing cycles processing lag | Wire lump sum by the 10th–15th and confirm effective date in writing |

---

> ### Model Your Exact Recast, Extra Principal & Refinance Break-Even Now (100% Private)
>
> Stop guessing with generic mortgage widgets that hide remaining-term math or confuse curtailment with re-amortization. Test your exact loan balance, lump sum, and payoff tradeoffs in our free, zero-tracking in-browser tools:
>
> 1. **[Amortization Schedule Calculator](/loan/amortization-schedule/):** Enter your current balance and remaining years (`n_rem`) to compute your exact **recast monthly payment**, model **one-time lump sums** vs. **extra monthly principal**, inspect the interactive payoff curve, and export a full month-by-month CSV ledger.
> 2. **[Mortgage Calculator with PMI & Escrow](/loan/mortgage/):** Check how your non-amortizing taxes, homeowners insurance, HOA, and PMI affect total monthly cash flow after a recast.
> 3. **[Loan Refinance Break-Even Calculator](/loan/refinance/):** Compare your **recast payment** (`$250` fee, original rate) directly against a **new refinance offer** (`closing costs` + `rate drop`) to find the exact break-even month.
> 4. **[Time Value of Money (TVM) & Emulator Suite](/finance/tvm/):** Run `AMORT` balances and re-amortization keystrokes live in our [TI BA II Plus Online Simulator](/emulators/ti-ba-ii-plus/) or [HP 12C RPN Emulator](/emulators/hp-12c/).

---

## 4. Step-by-Step Practical Workflow: Auditing & Executing a Mortgage Recast

Follow this five-step engineering sequence before wiring a lump sum to your mortgage servicer.

### Step 1: Verify Servicer & Loan Eligibility Rules
Before moving cash out of a high-yield savings account or brokerage, confirm four contractual requirements with your mortgage servicer:
1. **Loan Type:** Standard **Conventional (Fannie Mae / Freddie Mac)** fixed or adjustable loans generally qualify. **FHA, VA, and USDA loans are ineligible** under federal servicing rules, and many non-conforming **Jumbo** portfolio loans prohibit recasts.
2. **Minimum Principal Reduction (`L_min`):** Most major servicers (Chase, Wells Fargo, Rocket Mortgage, Bank of America, Pennymac) require a lump sum of **$5,000 to $10,000**, or **10% of the unpaid principal balance**.
3. **Recast Administrative Fee:** Expect **$150 to $500** (most commonly **$250–$300**). Note that New York and select state servicing rules sometimes cap or waive recast fees.
4. **Account Standing:** Zero 30-day late payments in the past 12 months, and no pending forbearance or modification.

### Step 2: Check Your Exact Unpaid Principal Balance (`B_t`) & Remaining Term (`n_rem`)
Pull your latest monthly statement—never rely on rough mental estimates—and record:
* **Current Principal Balance (`B_t`):** e.g., `$433,877.59`
* **Original Maturity Date -> Remaining Months (`n_rem`):** Count exact months from your next scheduled due date to the contractual maturity date (e.g., `324` months). Do **not** use the shortened payoff month shown on extra-payment trackers!

### Step 3: Verify Your Exact Recast Payment on a TI BA II Plus or HP 12C
Cross-check your servicer's quote down to the penny using our [TI BA II Plus Emulator](/emulators/ti-ba-ii-plus/) or [HP 12C Emulator](/emulators/hp-12c/).

**TI BA II Plus Keystrokes (`$450k` @ `6.50%`, `360` mo, Month `36` + `$80k` Lump Sum):**
1. Press `[2nd] [CLR TVM]`, then confirm `[2nd] [P/Y]` is set to `12 [ENTER]` and `C/Y = 12` *(see our [`P/Y` vs `C/Y` setup guide](/blog/what-is-p-y-on-financial-calculator/) to avoid dividing interest rates twice)*. Press `[2nd] [QUIT]`.
2. Enter original loan: `360 [N]`, `6.5 [I/Y]`, `450000 [PV]`, `0 [FV]`, `[CPT] [PMT]` -> displays **`-2,844.31`**.
3. Open Amortization worksheet: `[2nd] [AMORT]`. Set `P1 = 1 [ENTER] [↓]`, `P2 = 36 [ENTER] [↓]`.
4. Read `BAL` -> displays **`433,877.42`** *(within `$0.17` of unrounded `$433,877.59` due to cent-rounded monthly payments)*. Press `[2nd] [QUIT]`.
5. Compute recast payment: `433877.59 [-] 80000 [=]` (`353,877.59`) -> `[PV]`. Enter remaining term `324 [N]`, `0 [FV]`, `[CPT] [PMT]` -> displays **`-2,319.86`**.

**HP 12C RPN Keystrokes (`[f] [AMORT]` + Re-Amortization):**
1. Press `[f] [FIN] [f] [2]`.
2. `360 [n]`, `6.5 [g] [12÷]` *(stores periodic `0.5417%` in `i`)*, `450000 [PV]`, `0 [FV]`, `[PMT]` -> displays **`-2,844.31`**.
3. Compute 36-month balance: `36 [f] [AMORT]` (displays total interest `-86,272.58`), press `[x⇄y]` (displays principal `-16,122.58`), press `[RCL] [PV]` -> displays **`433,877.42`**.
4. Subtract lump sum on the RPN stack: `80000 [-] [PV]`.
5. Enter remaining term: `324 [n]`, `[PMT]` -> displays **`-2,319.86`**.

### Step 4: Trigger Simultaneous PMI Cancellation (If Crossing 80% LTV)
If your original home purchase price was **$500,000** (`$450,000` loan = `90%` LTV, paying `~$240/month` in Private Mortgage Insurance), your `$80,000` lump sum slashes Loan-to-Value from `86.8%` down to **`70.78%`** (`$353,877.59 / $500,000`).

**Crucial legal catch:** Re-amortizing your P&I payment does **not** automatically cancel PMI in most servicer workflows. Under the federal **Homeowners Protection Act of 1998**, submit a written PMI cancellation request the same week your recast closes—boosting your combined monthly cash-flow savings from **$524.44** to **`$764.44/month`** (`$9,173/year`).

### Step 5: Audit Opportunity Cost Against Your After-Tax Hurdle Rate
Before locking `$80,000` into home equity, compare your mortgage rate `r` against your **after-tax risk-free yield**:
* **If your mortgage rate is `<= 4.00%`** (e.g., `3.25%–3.75%` fixed): Paying down principal yields only `3.25%–3.75%` pre-tax, often *below* safe U.S. Treasury Bills or CDs even after taxes—making recasting strictly a cash-flow/peace-of-mind move rather than a return-maximizing one.
* **If your mortgage rate is `>= 6.00%`** and you take the **Standard Deduction**: Every dollar paid into a `6.50%` mortgage earns a **risk-free, tax-free `6.50%`** return—equivalent to earning **`8.55%` to `9.29%` pre-tax** in a `24%`–`30%` combined marginal tax bracket. Recasting + voluntarily paying the old payment is mathematically superior to almost any fixed-income alternative.

---

## 5. Troubleshooting & Featured Snippet FAQ

### How much does a mortgage recast lower my payment?
A mortgage recast lowers your monthly Principal & Interest (`P&I`) payment roughly **in direct proportion to the percentage of principal you pay off**—provided you have not made prior extra payments. Formula: `New PMT = Current PMT × (Post-Lump Balance ÷ Pre-Lump Balance)`. For example, paying `$80,000` toward a `$433,877.59` balance (`18.44%` reduction) on a `6.50%` loan with `324` months left cuts your monthly P&I by `18.44%`, from **`$2,844.31`** to **`$2,319.86`** (`-$524.44/month`).

### Is it better to recast a mortgage or make extra principal payments?
Making an extra lump-sum principal payment **without recasting** saves dramatically more lifetime interest because your required monthly payment stays higher and pays off the loan years sooner (on our `$450k` example, saving **`$251,523`** vs. **`$89,920`** for recasting). **Recasting is better** when you want permanent monthly cash-flow relief or lower debt-to-income (`DTI`) flexibility—or when you recast to lower your mandatory payment floor and still voluntarily pay the higher amount whenever cash flow allows.

### Can you recast an FHA, VA, or USDA mortgage?
**No.** Government-backed mortgages—including **FHA, VA, and USDA** home loans—are generally **not eligible** for standard mortgage recasting under federal servicing guidelines. Only **Conventional loans** (typically backed by Fannie Mae or Freddie Mac) and select portfolio loans allow re-amortization. Borrowers with FHA or VA loans can still make penalty-free lump-sum principal prepayments to shorten their payoff timeline, or explore refinancing into a conventional mortgage.

### Does recasting a mortgage remove PMI automatically?
**No.** A mortgage recast only re-amortizes your **Principal & Interest (`P&I`)**; it does not adjust property taxes, homeowners insurance escrow, or automatically cancel **Private Mortgage Insurance (PMI)**. However, if your lump-sum principal payment drops your loan balance to **80% or less of your home's original value**, you gain the legal right under the Homeowners Protection Act to submit a written cancellation request to remove PMI immediately.

### What is the difference between a mortgage recast and refinancing?
A **mortgage recast** keeps your existing loan contract, original interest rate, and remaining payoff date intact—simply recalculating a lower monthly payment on a smaller balance for a **`$150–$500` fee** with no credit check or appraisal. **Refinancing** replaces your loan with a brand-new mortgage, requires full underwriting, appraisal, and **2% to 5% closing costs (`$5,000–$12,000+`)**, changes your interest rate, and usually resets your payoff term back to 15 or 30 years.

---

## Next Steps: Optimize Your Mortgage Payoff & Cash Flow

Run your exact balance, lump sum, and interest tradeoffs across our interconnected suite:
* Model your **post-recast monthly payment**, **lump-sum curtailment**, and **full CSV payoff ledger** in the **[Amortization Schedule Calculator](/loan/amortization-schedule/)**.
* Check **PMI cancellation thresholds** and full PITI housing costs in our **[Mortgage Calculator](/loan/mortgage/)** and **[How to Calculate PMI Guide](/blog/understanding-mortgage-pmi/)**.
* Compare **recasting vs. refinancing** closing-cost break-even dates in the **[Loan Refinance Calculator](/loan/refinance/)**.
* Audit how lowering your required monthly housing payment improves your debt ratios in our **[Home Affordability & 28/36 DTI Guide](/blog/how-much-house-can-i-afford/)** and **[Rent vs. Buy Calculator](/loan/rent-vs-buy/)**.
