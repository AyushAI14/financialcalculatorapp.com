export interface FAQItem {
  question: string;
  answer: string;
}

export const calculatorFaqsData: Record<string, FAQItem[]> = {
  // 1. Mortgage
  'mortgage': [
    {
      question: "How is a mortgage payment calculated?",
      answer: "A standard monthly mortgage payment consists of Principal & Interest (P&I), property taxes, homeowners insurance, private mortgage insurance (PMI) if down payment is under 20%, and homeowner association (HOA) fees. For the complete mathematical formula and a comparison with reverse mortgages, read our comprehensive guide: <a href=\"/blog/what-is-a-reverse-mortgage-how-it-works/\" class=\"text-primary underline font-medium\">What is a Reverse Mortgage & How Payments Work</a>."
    },
    {
      question: "What is PMI and when do I pay it?",
      answer: "Private Mortgage Insurance (PMI) is a policy that protects the lender if you default. It is typically required on conventional loans if your down payment is less than 20% of the home purchase price."
    },
    {
      question: "What does PITI stand for?",
      answer: "PITI stands for Principal, Interest, Taxes, and Insurance. These are the four basic components that make up a homeowner's monthly housing payment. Together, they reflect the true cost of owning a home on a month-to-month basis."
    },
    {
      question: "Is a 15-year mortgage better than a 30-year mortgage?",
      answer: "A 15-year mortgage typically offers a lower interest rate and allows you to pay off your home twice as fast, saving you tens of thousands of dollars in interest. However, a 30-year mortgage has lower monthly payments, which provides greater cash flow flexibility."
    },
    {
      question: "How do extra payments affect my mortgage payoff schedule?",
      answer: "Any extra money you pay towards your mortgage is applied directly to the principal balance. This reduces the remaining loan balance and decreases the amount of interest that accumulates, helping you pay off your mortgage years ahead of schedule."
    }
  ],

  // 2. Loan Calculator
  'loan': [
    {
      question: "How does an amortized loan work?",
      answer: "With an amortized loan, you make equal periodic payments. Early in the loan term, the majority of each payment goes toward interest. Over time, an increasing portion goes toward paying down the principal balance until the debt is fully paid off."
    },
    {
      question: "What is the difference between fixed-rate and variable-rate loans?",
      answer: "A fixed-rate loan maintains the exact same interest rate and payment throughout the loan term. A variable-rate loan has an interest rate that adjusts periodically based on benchmark interest rates, which can increase or decrease your payments."
    },
    {
      question: "Can I pay off my loan early without penalty?",
      answer: "Most consumer loans and conventional mortgages allow prepayment without penalties, but some lenders include a prepayment penalty clause. Always verify your loan agreement terms before making accelerated principal payments."
    }
  ],

  // 3. Debt Payoff (Snowball vs Avalanche)
  'debt-payoff': [
    {
      question: "What is the Debt Snowball method?",
      answer: "The Debt Snowball method involves paying off your smallest debt balances first, regardless of interest rates. It builds psychological momentum and motivation through quick wins."
    },
    {
      question: "What is the Debt Avalanche method?",
      answer: "The Debt Avalanche method involves paying off your highest interest rate debts first. Mathematically, this minimizes the total interest you pay and helps you become debt-free faster."
    },
    {
      question: "Which method is better: Debt Snowball or Debt Avalanche?",
      answer: "Mathematically, the Debt Avalanche method is superior because it minimizes the total interest paid. However, studies show that the Debt Snowball method is often more successful in practice because the psychological momentum helps people stick to their plan."
    },
    {
      question: "How does the 'extra payment' roll over in these strategies?",
      answer: "You continue paying minimums on all debts and add your extra cash to the target debt. Once that target debt is fully paid off, you roll its entire payment into the next debt on your list."
    },
    {
      question: "Can I do a hybrid of Snowball and Avalanche?",
      answer: "Yes. Many people pay off one or two small debts first to free up immediate cash flow (Snowball), and then pivot to targeting the remaining debts by highest interest rate (Avalanche)."
    }
  ],

  // 4. Refinance
  'refinance': [
    {
      question: "When should I refinance my loan?",
      answer: "It generally makes sense to refinance if you can secure a lower interest rate, reduce your monthly payment, or shorten your term, provided your total interest savings exceed the closing costs."
    },
    {
      question: "What closing costs are associated with refinancing?",
      answer: "Refinancing costs typically include application fees, origination fees, appraisal costs, title search and insurance, credit report fees, and recording fees, ranging from 2% to 6% of the loan amount."
    },
    {
      question: "How do I calculate my refinance break-even point?",
      answer: "Divide your total refinance closing costs by your monthly payment savings. If closing costs are $3,000 and you save $150 per month, your break-even point is 20 months ($3,000 / $150)."
    },
    {
      question: "What is a 'no-closing-cost' refinance?",
      answer: "A no-closing-cost refinance means the lender either rolls the closing fees into your new total loan balance or charges a slightly higher interest rate to cover them."
    },
    {
      question: "Does refinancing lower my monthly payment or total interest?",
      answer: "It depends on the term. Refinancing to a lower rate with the same or shorter term saves on both. Resetting your term back to 30 years lowers the monthly payment but can increase total lifetime interest."
    }
  ],

  // 5. Student Loan IDR
  'student-loan': [
    {
      question: "What is the SAVE plan?",
      answer: "The Saving on a Valuable Education (SAVE) plan is an income-driven repayment (IDR) plan that protects discretionary income up to 225% of the poverty line, lowers payments to 5%-10%, and stops unpaid interest from accumulating."
    },
    {
      question: "How is discretionary income calculated for student loans?",
      answer: "Discretionary income is the difference between your Adjusted Gross Income (AGI) and a percentage of the federal poverty guideline for your family size (150% for PAYE/IBR, 225% for SAVE)."
    },
    {
      question: "How does student loan forgiveness work under IDR plans?",
      answer: "If you pay under an IDR plan for 20 or 25 years (or 10 years under SAVE for low initial balances), any remaining student debt is forgiven."
    },
    {
      question: "Which IDR plan is best for me?",
      answer: "For most borrowers, the SAVE plan offers the lowest monthly payment and the best interest subsidy. Borrowers with very high incomes relative to debt may prefer PAYE or IBR due to payment caps."
    },
    {
      question: "Can I switch student loan repayment plans at any time?",
      answer: "Yes, you can apply to switch repayment plans for free at studentaid.gov. However, switching plans can sometimes cause unpaid interest to capitalize."
    }
  ],

  // 6. DTI
  'dti': [
    {
      question: "What is the 28/36 rule?",
      answer: "The 28/36 rule is a standard mortgage underwriting guideline stating that housing costs should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%."
    },
    {
      question: "How does DTI affect my mortgage application?",
      answer: "Lenders use DTI to measure your ability to manage monthly payments. Lower DTIs below 36% receive the most favorable mortgage terms and lowest interest rates."
    },
    {
      question: "What is the difference between front-end and back-end DTI?",
      answer: "Front-end DTI only includes housing expenses (mortgage, property tax, insurance, HOA). Back-end DTI includes housing plus all recurring debts like credit cards, auto loans, and student loans."
    },
    {
      question: "What is the maximum DTI ratio lenders will accept?",
      answer: "Conventional mortgages typically prefer back-end DTIs of 36% to 43%. Government-backed loans like FHA and VA may allow DTIs up to 50% with strong compensating factors."
    },
    {
      question: "How can I lower my Debt-to-Income ratio?",
      answer: "You can lower your DTI by increasing gross income or paying off smaller debts completely to eliminate their recurring monthly minimum payments."
    }
  ],

  // 7. APR
  'apr': [
    {
      question: "What is the difference between interest rate and APR?",
      answer: "The interest rate is the nominal cost of borrowing the principal balance. The Annual Percentage Rate (APR) reflects the total annual cost of the loan including points, broker fees, and origination charges."
    },
    {
      question: "Why is APR higher than the advertised interest rate?",
      answer: "APR is higher because it amortizes all upfront lender fees, discount points, and closing costs into the effective yearly rate, revealing the true cost of credit."
    },
    {
      question: "Is APR useful for comparing different loan offers?",
      answer: "Yes, APR is the best metric for comparing loan offers with different fee structures, provided you plan to keep the loan for its full term."
    }
  ],

  // 8. Rent vs Buy
  'rent-vs-buy': [
    {
      question: "How long do I need to stay in a home for buying to beat renting?",
      answer: "Because upfront closing costs, moving fees, and commissions are substantial, homeowners usually need to stay in a property for 4 to 7 years for buying to financially outperform renting."
    },
    {
      question: "What hidden costs of homeownership should renters consider?",
      answer: "Homeowners must pay property taxes, homeowners insurance, maintenance and repairs (typically 1-2% of home value annually), HOA dues, and potential capital improvement costs."
    },
    {
      question: "What is the opportunity cost of buying a home?",
      answer: "The money spent on down payment, closing costs, and ongoing property maintenance could otherwise remain invested in liquid assets like index funds that compound over time."
    },
    {
      question: "What is the 5% rule for renting vs. buying?",
      answer: "The 5% rule estimates that homeownership costs roughly 5% of a property's value annually in unrecoverable expenses (1% property tax, 1% maintenance, and 3% cost of capital). Divide by 12 to find your break-even monthly rent. If you can rent an equivalent home for less, renting plus investing the savings builds greater wealth. For detailed math and worked case studies, read our complete guide: <a href=\"/blog/how-to-decide-rent-vs-buy/\" class=\"text-primary underline font-medium\">How to Decide: Rent vs. Buy Your Home</a>."
    }
  ],

  // 9. Home Affordability
  'home-affordability': [
    {
      question: "How much income should I spend on a mortgage?",
      answer: "Most financial experts recommend spending no more than 25% to 28% of your gross monthly income on housing costs (the front-end DTI guideline). For a deep dive into bank underwriting formulas, salary matrices, and the 28/36 rule, read our complete guide: <a href=\"/blog/how-much-house-can-i-afford/\" class=\"text-primary underline font-medium\">How Much House Can I Afford?</a>."
    },
    {
      question: "How does down payment size impact affordability?",
      answer: "A larger down payment reduces your loan amount, eliminates Private Mortgage Insurance (PMI) if you put down 20%, and lowers your monthly mortgage payment."
    },
    {
      question: "How do interest rates affect purchasing power?",
      answer: "Every 1% increase in mortgage interest rates reduces your home purchasing power by roughly 10% for the same monthly payment budget."
    }
  ],

  // 10. Auto Loan
  'auto-loan': [
    {
      question: "What is the 20/4/10 rule for buying a car?",
      answer: "The 20/4/10 rule recommends putting down at least 20%, financing for no longer than 4 years (48 months), and keeping total vehicle expenses under 10% of gross monthly income."
    },
    {
      question: "Is a longer auto loan term better?",
      answer: "Longer terms (like 72 or 84 months) lower your monthly payment, but you pay substantially more total interest and risk becoming 'underwater' (owing more than the vehicle is worth)."
    },
    {
      question: "How does vehicle depreciation affect my loan?",
      answer: "New cars depreciate rapidly (often losing 20% in the first year). Without an adequate down payment, you risk owing more on your loan than the car's market value."
    }
  ],

  // 11. Credit Card Payoff
  'credit-card-payoff': [
    {
      question: "Why does paying only the minimum take so long?",
      answer: "Credit card minimum payments are often set around 1% to 2% of the balance plus accrued interest. As the balance slowly drops, the required minimum drops, extending payoff times to decades."
    },
    {
      question: "How much faster can I pay off credit cards by paying extra?",
      answer: "Paying even $50 or $100 above the minimum payment can cut your payoff timeline by several years and save thousands of dollars in compounding interest charges."
    },
    {
      question: "Should I use a balance transfer card to pay off debt?",
      answer: "A 0% APR balance transfer credit card can save significant interest if you pay off the full balance during the promotional period (typically 12-21 months) and factor in the 3%-5% transfer fee."
    }
  ],

  // 12. Retirement Planner
  'retirement-planner': [
    {
      question: "What is the 4% rule in retirement planning?",
      answer: "The 4% rule suggests that withdrawing 4% of your retirement portfolio in the first year, adjusted for inflation annually thereafter, provides a high probability that your nest egg will last at least 30 years."
    },
    {
      question: "How much money do I need to retire comfortably?",
      answer: "A common benchmark is accumulating 25 times your anticipated annual retirement expenses, or replacing 70% to 80% of your pre-retirement income."
    },
    {
      question: "How does inflation impact retirement spending?",
      answer: "Inflation steadily reduces the purchasing power of your savings. At a 3% inflation rate, everyday living expenses double roughly every 24 years, requiring growing investment portfolios."
    }
  ],

  // 13. 401(k)
  '401k': [
    {
      question: "How much should I contribute to my 401(k)?",
      answer: "Most financial advisors recommend contributing at least 15% of your gross annual salary toward retirement (including employer matching). At a minimum, always contribute enough to capture your employer's full matching contribution—missing the match is walking away from free money and an instant 50% to 100% return. For 2024, the IRS employee elective deferral limit is $23,000 per year, or $30,500 if you are age 50 or older."
    },
    {
      question: "How does this 401(k) calculator with match calculate employer contributions?",
      answer: "The 401k calculator with match applies your employer's matching formula (e.g., 50% or 100%) up to your company's matching ceiling (e.g., up to 6% of salary). For example, on a $95,000 salary with a 6% contribution ($5,700), a 50% match adds an extra $2,850/year in employer deposits. The calculator projects both your personal deferrals and employer matching contributions compounded across your entire retirement horizon."
    },
    {
      question: "How much should I have in my 401(k) by age?",
      answer: "Standard retirement benchmarks (such as Fidelity guidelines) suggest having: 1x your annual salary by age 30; 2x by age 35; 3x by age 40; 4x by age 45; 6x by age 50; 8x by age 60; and 10x your final salary by age 67. If you earn $90,000 at age 40, your target 401(k) balance is approximately $270,000 to remain on track for complete income replacement."
    },
    {
      question: "Should I do a Roth or Traditional 401(k)?",
      answer: "In a Traditional 401(k), you contribute pre-tax dollars, lowering your taxable income and federal tax liability today; withdrawals in retirement are taxed as ordinary income. In a Roth 401(k), you contribute after-tax dollars, but your investment earnings grow completely tax-free and all qualified distributions in retirement are 100% tax-free. If you are in a low tax bracket now (early career), choose Roth; if you are currently in your peak earning years and highest tax bracket, choose Traditional."
    },
    {
      question: "How much does a 401(k) contribution reduce my taxes?",
      answer: "Every dollar contributed to a pre-tax Traditional 401(k) reduces your taxable income dollar-for-dollar. The tax savings formula is: Annual Contribution × Marginal Tax Rate. For example, contributing $10,000 at a 24% federal tax bracket plus 5% state tax saves $2,900 in total taxes. Your take-home pay only drops by $7,100 while your retirement nest egg grows by a full $10,000."
    },
    {
      question: "How much will my 401(k) be worth at retirement?",
      answer: "Your projected 401(k) balance depends on compound interest, contribution rate, employer matching, and time. For example, contributing $600 per month starting at age 30 with a $25,000 starting balance and an average 7.5% annual return yields approximately $1,350,000 by age 65. The vast majority of this total (over 70%) comes from compound investment growth rather than out-of-pocket deposits."
    },
    {
      question: "How much in a 401(k) do I need to retire?",
      answer: "Under the Rule of 25 (the inverse of the 4% safe withdrawal rule), you need roughly 25 to 30 times your planned annual retirement living expenses minus Social Security. If you need $60,000 per year from your portfolio, your target retirement nest egg is $1,500,000 ($60,000 × 25). This nest egg provides sustainable inflation-adjusted income throughout a 30-year retirement."
    },
    {
      question: "How much will my 401(k) pay me per month in retirement?",
      answer: "Based on the 4% safe withdrawal rule, your monthly payout is estimated as: (Ending 401k Balance × 0.04) ÷ 12. For example, a $500,000 401(k) generates ~$1,667/month ($20,000/year); a $1,000,000 401(k) generates ~$3,333/month ($40,000/year); and a $1,500,000 401(k) generates ~$5,000/month ($60,000/year). Combined with Social Security, this replaces 70% to 90% of pre-retirement income."
    },
    {
      question: "How long will my 401(k) last in retirement?",
      answer: "If you follow the 4% safe withdrawal rule and maintain a balanced portfolio (e.g. 60% equities and 40% fixed income), historical market data from the Trinity Study indicates a 95%+ probability that your savings will last at least 30 years. Withdrawing at a higher rate (such as 6% or 7% annually) significantly increases the risk of exhausting funds within 15 to 20 years during market downturns. Read our complete guide: <a href=\"/blog/how-much-401k-reduces-taxes-pays-monthly-lasts/\" class=\"text-primary underline font-medium\">401(k) Taxes, Monthly Payouts, and Longevity Guide</a>."
    },
    {
      question: "How much tax and penalty do I pay on early 401(k) withdrawals?",
      answer: "Withdrawing funds from a Traditional 401(k) before age 59½ triggers a 10% IRS early withdrawal penalty PLUS ordinary federal and state income taxes on the distributed amount. For someone in the 22% federal bracket and 5% state bracket, an early withdrawal of $20,000 forfeits $7,400 (37%) to penalties and taxes, leaving only $12,600. Key exceptions to the penalty include the Rule of 55 (leaving an employer at age 55 or older), qualifying hardship distributions, or Substantially Equal Periodic Payments (SEPP / Rule 72t)."
    },
    {
      question: "What is a Solo 401(k) and how does it work for the self-employed?",
      answer: "A Solo 401(k) (or One-Participant 401k) is a retirement plan for self-employed professionals, freelancers, and small business owners with no full-time W-2 employees (other than a spouse). It allows dual contributions: up to $23,000 in elective employee deferrals ($30,500 if age 50+) PLUS an employer profit-sharing contribution up to 25% of net adjusted business earnings (20% for sole proprietors), up to a combined maximum of $69,000 in 2024."
    },
    {
      question: "Can I borrow against my 401(k) instead of taking an early withdrawal?",
      answer: "Yes, many employer plans permit a 401(k) loan for up to 50% of your vested balance or $50,000, whichever is less. A 401(k) loan avoids income tax and the 10% IRS penalty because you repay principal and interest back into your own account (usually over 5 years). However, if you leave your employer before repaying, the remaining balance usually becomes due by the federal tax filing deadline, or it converts into a taxable early distribution."
    }
  ],

  // 14. Roth vs Traditional IRA
  'ira-comparison': [
    {
      question: "What is the key difference between a Roth and Traditional IRA?",
      answer: "Traditional IRA contributions are generally made pre-tax (reducing your current taxable income), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; growth and withdrawals in retirement are completely tax-free."
    },
    {
      question: "Which IRA plan is better for me?",
      answer: "If you expect your tax bracket to be higher in retirement than it is today, a Roth IRA is better. If you expect your tax bracket in retirement to be lower, a Traditional IRA is better."
    },
    {
      question: "What are the contribution limits for IRAs in 2024?",
      answer: "For 2024, the annual contribution limit for Traditional and Roth IRAs is $7,000 for individuals under age 50, and $8,000 for individuals age 50 or older."
    },
    {
      question: "Are there income limits for contributing to Traditional and Roth IRAs?",
      answer: "Roth IRAs have income phase-out ranges that restrict high earners. Anyone with earned income can contribute to a Traditional IRA, but tax deductibility may be limited by income and workplace retirement coverage."
    },
    {
      question: "Can I withdraw money from my IRA before age 59½ without penalty?",
      answer: "Roth IRA original contributions can be withdrawn at any time penalty-free. Withdrawing investment earnings early or withdrawing Traditional IRA funds before 59½ usually incurs income taxes and a 10% penalty."
    }
  ],

  // 15. Compound Interest
  'compound-interest': [
    {
      question: "What is compound interest?",
      answer: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It causes your wealth to grow exponentially over time."
    },
    {
      question: "What is the Rule of 72?",
      answer: "The Rule of 72 is a quick mental formula to estimate how many years it takes to double your money. Divide 72 by your annual interest rate (e.g. at 8%, your money doubles in about 9 years)."
    },
    {
      question: "How does compounding frequency affect total returns?",
      answer: "The more frequently interest compounds (annually, monthly, daily), the higher your effective annual yield (APY) will be, as interest starts earning interest sooner."
    }
  ],

  // 16. TVM (Time Value of Money)
  'tvm': [
    {
      question: "What is the Time Value of Money (TVM)?",
      answer: "The Time Value of Money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested and earn interest over time."
    },
    {
      question: "How does this online TVM calculator solve Time Value of Money equations?",
      answer: "This financial TVM calculator uses standard compound interest and discounted cash flow formulas to solve for any of the five core TVM variables: Present Value (PV), Future Value (FV), Periodic Payment (PMT), Annual Interest Rate (I/Y), and Number of Compounding Periods (N)."
    },
    {
      question: "How do I use this as a Future Value calculator?",
      answer: "Select 'Future Value (FV)' as the solve-for target. Input your current principal balance (PV), planned recurring periodic deposits (PMT), interest rate, and duration. The calculator computes the total compounded ending balance instantly."
    },
    {
      question: "What is the difference between an ordinary annuity and annuity due?",
      answer: "In an ordinary annuity, payments occur at the end of each period (standard for loans and mortgages). In an annuity due, payments occur at the beginning of each period (common in lease and insurance contracts), earning an extra compounding cycle of interest."
    }
  ],

  // 17. ROI
  'roi': [
    {
      question: "How is Return on Investment (ROI) calculated?",
      answer: "ROI is calculated by subtracting the initial cost of the investment from the final value, and dividing that net gain by the initial cost: ROI = (Net Profit / Cost of Investment) × 100%."
    },
    {
      question: "What is the difference between simple ROI and annualized ROI?",
      answer: "Simple ROI measures total percentage return regardless of duration. Annualized ROI (CAGR) standardizes the return into a per-year geometric rate, enabling fair comparison between investments held for different lengths of time."
    },
    {
      question: "What is considered a good ROI?",
      answer: "Historically, the broad stock market (S&P 500) has returned an average of 7% to 10% annually before inflation. Investments with higher expected returns generally involve higher risk of capital loss."
    }
  ],

  // 18. Savings Goal
  'savings-goal': [
    {
      question: "How do I calculate how much to save monthly for a goal?",
      answer: "You divide your target savings amount by the number of months until your deadline, while factoring in the compounding interest earned on your growing balance."
    },
    {
      question: "Should I keep savings goal funds in high-yield savings or stocks?",
      answer: "For goals under 3 to 5 years (like a car or home down payment), keep funds in safe, liquid instruments like High-Yield Savings Accounts (HYSA) or CDs. For goals 5+ years away, a diversified investment portfolio may be suitable."
    },
    {
      question: "How can I stay on track with my savings goals?",
      answer: "Automate recurring monthly transfers into a dedicated savings account immediately after your paycheck arrives (the 'pay yourself first' strategy)."
    }
  ],

  // 19. Stock Return
  'stock-return': [
    {
      question: "How do I calculate stock returns?",
      answer: "Total stock return equals capital gains (ending price minus purchase price) plus any dividends received, divided by the original purchase cost."
    },
    {
      question: "What is CAGR in stock returns?",
      answer: "Compound Annual Growth Rate (CAGR) measures the geometric mean annual return of a stock over multiple years, smoothing out annual market fluctuations."
    },
    {
      question: "What is the difference between simple return and annualized return?",
      answer: "Simple return measures absolute percentage gain over the entire holding period, while annualized return shows the steady annual rate required to achieve that result."
    }
  ],

  // 20. CAPM
  'capm': [
    {
      question: "What is the Capital Asset Pricing Model (CAPM)?",
      answer: "CAPM calculates an asset's expected return based on its risk relative to the overall market, using the formula: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate)."
    },
    {
      question: "What does Asset Beta (β) represent?",
      answer: "Beta measures an asset's volatility compared to the broader market. A beta of 1.0 indicates market-level volatility; above 1.0 indicates higher volatility, and below 1.0 indicates lower volatility."
    },
    {
      question: "What is the Risk-Free Rate?",
      answer: "The risk-free rate is the theoretical rate of return of an investment with zero risk of default, typically represented by long-term government bond yields (like 10-year US Treasuries)."
    },
    {
      question: "What is the Market Risk Premium?",
      answer: "The market risk premium is the additional return investors demand for choosing risky market equities over risk-free government securities."
    }
  ],

  // 21. Dividend
  'dividend': [
    {
      question: "What is dividend yield versus yield on cost?",
      answer: "Dividend yield is the annual dividend divided by the current stock price. Yield on cost is the annual dividend divided by your original purchase price, which increases as companies raise their dividends over time."
    },
    {
      question: "What is a Dividend Reinvestment Plan (DRIP)?",
      answer: "A DRIP automatically uses your cash dividend payments to purchase additional shares or fractional shares of the stock, compounding your share count and future payouts without commission fees."
    },
    {
      question: "Are dividend payments guaranteed?",
      answer: "No, company boards can reduce, suspend, or eliminate dividend payouts at any time depending on company profitability and economic conditions."
    }
  ],

  // 22. Inflation
  'inflation': [
    {
      question: "What is inflation?",
      answer: "Inflation is the general rise in prices for goods and services over time, resulting in a decline in the purchasing power of money."
    },
    {
      question: "How does inflation affect my savings?",
      answer: "Cash sitting in zero-interest accounts loses purchasing power each year. If inflation is 3%, $100 today will only buy about $97 worth of goods next year."
    },
    {
      question: "How is inflation officially measured?",
      answer: "Inflation is primarily measured using the Consumer Price Index (CPI), which tracks price changes across a standard market basket of consumer goods and services."
    },
    {
      question: "What is the historical average inflation rate?",
      answer: "In the United States, inflation has historically averaged between 2.5% and 3.2% per year over long multi-decade horizons."
    },
    {
      question: "How can I protect my money from losing value to inflation?",
      answer: "Investing in assets whose earnings outpace inflation—such as diversified equities, Treasury Inflation-Protected Securities (TIPS), real estate, and inflation-indexed bonds."
    }
  ],

  // 23. Paycheck
  'paycheck': [
    {
      question: "What is FICA tax?",
      answer: "FICA is a federal payroll tax that funds Social Security (6.2% on wages up to the wage base limit) and Medicare (1.45% plus an additional 0.9% on high earners)."
    },
    {
      question: "What is the difference between pre-tax and post-tax deductions?",
      answer: "Pre-tax deductions (like 401k and health insurance) reduce your taxable gross income before taxes are computed. Post-tax deductions (like Roth contributions or wage garnishments) are taken after taxes."
    },
    {
      question: "What is the difference between gross pay and net pay?",
      answer: "Gross pay is the total amount earned before any taxes or deductions. Net pay (take-home pay) is the actual cash deposited into your bank account after all deductions."
    },
    {
      question: "How does my W-4 filing status affect my paycheck?",
      answer: "Your W-4 form informs your employer how much federal income tax to withhold each pay period based on your filing status, dependents, and other income."
    },
    {
      question: "Why do state and local taxes vary so much?",
      answer: "State income tax rates range from 0% (in states like Texas, Florida, and Washington) to over 13% in high-tax states, while some cities also impose local municipal income taxes."
    }
  ],

  // 24. Net Worth
  'net-worth': [
    {
      question: "What is net worth?",
      answer: "Net worth is the total market value of everything you own (assets) minus everything you owe to creditors (liabilities)."
    },
    {
      question: "How often should I calculate my net worth?",
      answer: "Reviewing your net worth quarterly or semi-annually gives you a clear high-level view of your financial health without obsessing over daily market swings."
    },
    {
      question: "What counts as an asset vs. a liability?",
      answer: "Assets include bank balances, investment accounts, home equity, and retirement funds. Liabilities include mortgages, student loans, car loans, and credit card debt."
    },
    {
      question: "Should I include my house and mortgage in my net worth?",
      answer: "Yes, you include the current fair market value of the home under assets and the remaining mortgage balance under liabilities. The difference is your home equity."
    },
    {
      question: "What does it mean to have a negative net worth?",
      answer: "A negative net worth means your total debts exceed your total assets. This is common for young adults and recent graduates with student loans."
    }
  ],

  // 25. Emergency Fund
  'emergency-fund': [
    {
      question: "How much emergency fund is recommended?",
      answer: "Most financial planners recommend saving 3 to 6 months of essential living expenses, or 9 to 12 months for freelancers or single-income households."
    },
    {
      question: "What expenses should be included in an emergency fund budget?",
      answer: "Include only non-negotiable living costs: housing (rent/mortgage), utilities, groceries, basic transportation, minimum debt payments, and healthcare insurance."
    },
    {
      question: "Where should I keep my emergency fund?",
      answer: "In a dedicated High-Yield Savings Account (HYSA) or money market account where it is FDIC-insured, earns interest, and can be accessed immediately without risk."
    },
    {
      question: "Should I pay off debt or build an emergency fund first?",
      answer: "Build a starter emergency fund of 1 month of expenses or $1,000 to $2,000 first, then aggressively pay off high-interest consumer debt before expanding to 3-6 months."
    },
    {
      question: "When is it appropriate to use emergency fund savings?",
      answer: "Use it only for genuine, unexpected emergencies: sudden medical bills, unexpected car repairs, or living expenses following job loss."
    }
  ],

  // 26. Fee Impact
  'fee-impact': [
    {
      question: "What is an expense ratio?",
      answer: "An expense ratio is the annual percentage fee charged by mutual funds and ETFs to cover fund management, administrative expenses, and operating costs."
    },
    {
      question: "How do fees compound over time?",
      answer: "Fees are deducted annually from your total assets, meaning you lose both the fee money and all future compounding returns that money would have earned."
    },
    {
      question: "What is a good expense ratio for an index fund?",
      answer: "Low-cost index funds and ETFs typically have expense ratios between 0.02% and 0.10%, whereas actively managed mutual funds often charge 0.60% to 1.50% or more."
    },
    {
      question: "What other investment fees should I look out for?",
      answer: "Watch out for advisory fees (AUM fees of 1%), front-end or back-end sales loads, trading commissions, account maintenance fees, and custodial charges."
    },
    {
      question: "How much can a 1% fee difference affect my retirement savings?",
      answer: "A 1% annual fee difference can erode 25% to 30% of your total ending portfolio wealth over a 30-year investment horizon."
    }
  ],

  // 27. College Savings (529)
  'college-savings': [
    {
      question: "What is a 529 plan?",
      answer: "A 529 plan is a tax-advantaged savings and investment plan designed to encourage saving for future higher education expenses with tax-free growth and qualified withdrawals."
    },
    {
      question: "How fast do college costs increase?",
      answer: "Historically, higher education tuition and fees have increased at an annual rate of 4% to 6%, outpacing general consumer inflation."
    },
    {
      question: "What happens to 529 funds if my child does not go to college?",
      answer: "You can change the beneficiary to another qualifying family member, use up to $10,000 for student loan repayment, or roll over up to $35,000 into a Roth IRA under SECURE 2.0 rules."
    },
    {
      question: "Can I use a 529 plan for trade schools or K-12 tuition?",
      answer: "Yes, qualified distributions can cover accredited trade schools, vocational programs, apprenticeships, and up to $10,000 per year for K-12 private school tuition."
    },
    {
      question: "How does a 529 plan impact financial aid eligibility?",
      answer: "Parent-owned 529 plans are assessed as parental assets on the FAFSA at a maximum rate of 5.64%, having minimal negative impact on financial aid eligibility."
    }
  ],

  // 28. Crypto DCA
  'crypto-dca': [
    {
      question: "What is Dollar-Cost Averaging (DCA)?",
      answer: "Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the asset's fluctuating market price."
    },
    {
      question: "How does DCA apply to high-volatility assets like Crypto?",
      answer: "DCA prevents emotional decisions during extreme market peaks and crashes, automatically buying more units when prices are low and fewer when prices are high."
    },
    {
      question: "Is DCA better than investing a lump sum?",
      answer: "Lump sum investing historically wins in steadily rising markets, but DCA provides superior peace of mind, lower emotional risk, and downside protection in highly volatile markets."
    },
    {
      question: "What is the best frequency for crypto DCA?",
      answer: "Weekly or bi-weekly DCA aligned with your pay cycle is ideal for capturing market volatility while keeping trading fees manageable."
    },
    {
      question: "Does DCA guarantee profits in cryptocurrency?",
      answer: "No, DCA does not protect against prolonged declines or failing crypto projects; it only ensures you achieve the weighted average market purchase price."
    }
  ],

  // 29. Tip Calculator
  'tip': [
    {
      question: "What is the standard tipping percentage?",
      answer: "In the United States and Canada, standard restaurant tipping guidelines range from 15% for adequate service, 18% for good service, to 20% or more for exceptional service."
    },
    {
      question: "Should tips be calculated before or after sales tax?",
      answer: "Etiquette traditionally dictates calculating the tip percentage on the pre-tax food and beverage subtotal, though many automated payment terminals calculate tip on the post-tax total."
    },
    {
      question: "How do you split a bill evenly among friends?",
      answer: "Calculate the total bill including food, beverages, tax, and tip, and divide the total amount equally by the number of paying participants."
    }
  ],

  // 30. Discount and Tax
  'discount': [
    {
      question: "How do you calculate a percentage discount?",
      answer: "Multiply the original price by the discount percentage divided by 100 to find the savings, and subtract that amount from the original price: Final Price = Original Price × (1 - Discount%)."
    },
    {
      question: "How do multiple stacked discounts work?",
      answer: "Stacked discounts apply sequentially rather than additively. For example, 20% off plus an extra 10% off results in an effective 28% total discount, not 30%."
    },
    {
      question: "Is sales tax applied before or after store discounts?",
      answer: "In most jurisdictions, sales tax is calculated on the discounted post-sale price, meaning you pay sales tax only on the actual money spent."
    }
  ],

  // 31. Salary Increase Calculator
  'salary-increase': [
    {
      question: "What is a good salary increase percentage?",
      answer: "Historically, standard annual cost-of-living adjustments (COLA) range from 3% to 4%, strong performance or merit raises average 4% to 7%, and promotions or job changes typically command a 10% to 20%+ increase in base compensation."
    },
    {
      question: "How do I calculate a salary increase percentage?",
      answer: "Subtract your old salary from your new salary to determine the dollar raise, divide that difference by your old salary, and multiply by 100: Raise % = ((New Salary - Old Salary) / Old Salary) × 100%."
    },
    {
      question: "How do I convert an hourly pay raise into an annual salary increase?",
      answer: "Assuming a standard 40-hour work week and 52 weeks per year (2,080 working hours annually), multiply your hourly raise by 2,080. For example, a $2.50/hour raise equals an annual gross increase of $5,200 ($2.50 × 2,080)."
    },
    {
      question: "Will a pay raise push me into a higher tax bracket and reduce my take-home pay?",
      answer: "No. United States federal income taxes use progressive marginal tax brackets. Only the dollars earned above each tax bracket threshold are taxed at the higher marginal rate; income below the threshold remains taxed at the lower previous rates. A pay raise will always increase your net take-home pay."
    }
  ],

  // 32. Future Value Calculator
  'future-value': [
    {
      question: "What is Future Value (FV)?",
      answer: "Future Value (FV) is the monetary value of a current asset, lump sum, or cash flow stream at a specified date in the future, based on an assumed rate of growth or compounding interest."
    },
    {
      question: "What is the formula for calculating Future Value with regular contributions?",
      answer: "For a lump sum with regular periodic additions: FV = PV × (1 + r/m)^(m×t) + PMT × [((1 + r/m)^(m×t) - 1) / (r/m)], where PV is present value, r is annual interest rate, m is compounding frequency per year, t is time in years, and PMT is periodic contribution."
    },
    {
      question: "What is the difference between an ordinary annuity and annuity due for future value?",
      answer: "In an ordinary annuity, contributions are deposited at the end of each period. In an annuity due, contributions are made at the beginning of each period, which gives every contribution an extra period to compound and results in a higher ending future value."
    },
    {
      question: "How does compounding frequency impact the future value of an investment?",
      answer: "More frequent compounding cycles (such as monthly or daily versus annually) result in higher future values because interest earned in earlier cycles begins generating its own interest sooner."
    }
  ],

  // 33. Investment Calculator
  'investment': [
    {
      question: "What is a realistic annual rate of return for an investment calculator?",
      answer: "Historically, the broad US stock market (S&P 500) has generated an average nominal return of approximately 10% annually over long multi-decade horizons (or roughly 7% after adjusting for inflation). A diversified portfolio of stocks and bonds typically targets 6% to 8% nominal annual return."
    },
    {
      question: "How do regular recurring investments compare to a one-time lump sum?",
      answer: "Regular recurring investments (Dollar-Cost Averaging) reduce timing risk and volatility by consistently purchasing shares at both market highs and lows. While lump-sum investing mathematically outperforms about 68% of the time due to long-term market upward trends, recurring monthly deposits instill discipline and build substantial wealth steadily."
    },
    {
      question: "What is the difference between nominal return and real return?",
      answer: "Nominal return is the raw percentage gain generated by your investments before inflation. Real return is the purchasing power gain after subtracting the rate of inflation (Real Return ≈ Nominal Return - Inflation Rate)."
    },
    {
      question: "How does compound interest multiply investment portfolios over time?",
      answer: "Compound growth creates exponential portfolio expansion. In the early years, personal contributions make up the majority of your balance; however, after 10 to 20 years, investment returns and compounded earnings account for over 60% to 80% of total portfolio value."
    }
  ]
};

export function getCalculatorFaqs(calcKey: string): FAQItem[] {
  return calculatorFaqsData[calcKey] || [];
}
