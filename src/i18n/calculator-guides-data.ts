export interface GuideTip {
  title: string;
  desc: string;
}

export interface CalculatorGuide {
  title: string;
  intro: string;
  section1Title: string;
  section1Content: string;
  formulaTitle: string;
  formula: string;
  formulaExplanation: string;
  section2Title: string;
  tips: GuideTip[];
}

export const calculatorGuides: Record<string, CalculatorGuide> = {
  // 1. Mortgage
  "mortgage": {
    title: "Understanding Mortgage Payments & Amortization",
    intro: "A mortgage is typically the largest financial commitment of a lifetime. Understanding how your monthly payment is divided between principal, interest, taxes, and insurance is essential to managing your long-term housing wealth.",
    section1Title: "Components of Your Monthly Payment (PITI)",
    section1Content: "A standard mortgage payment consists of four core elements: Principal (the portion that reduces your outstanding debt), Interest (the lender's fee for borrowing), Taxes (local municipal property taxes), and Insurance (homeowners hazard insurance plus Private Mortgage Insurance if down payment is below 20%). Homeowners association (HOA) fees may also apply.",
    formulaTitle: "Standard Amortization Formula",
    formula: "M = P * [r(1 + r)^n] / [(1 + r)^n - 1]",
    formulaExplanation: "Where M is the monthly principal and interest payment, P is the principal loan amount, r is the monthly interest rate (annual nominal rate divided by 12), and n is the total number of monthly payments across the term.",
    section2Title: "Strategies to Save on Mortgage Interest",
    tips: [
      { title: "Accelerate Principal Repayment", desc: "Paying even an extra $100 per month directly toward principal reduces compounding interest and can shave years off your loan term." },
      { title: "Bi-Weekly Payments", desc: "Making half-payments every two weeks results in 26 half-payments (13 full monthly payments annually), cutting your payoff timeline significantly." },
      { title: "Cancel PMI Early", desc: "Once your loan-to-value ratio reaches 80% through principal paydown or home appreciation, request the cancellation of Private Mortgage Insurance." }
    ]
  },

  // 2. Loan Calculator
  "loan": {
    title: "Understanding Amortization & Loan Mechanics",
    intro: "Amortization is the process of spreading out a loan into a series of equal periodic payments. While each periodic payment is identical, the proportion of the payment going toward interest versus principal changes dynamically over time.",
    section1Title: "How Amortization Shifts Over Time",
    section1Content: "In the early periods of a loan, the outstanding balance is high, meaning the vast majority of each payment covers accumulated interest charges while the principal balance declines slowly. As the loan matures and principal decreases, subsequent interest charges shrink, directing an increasing majority of each payment toward debt reduction.",
    formulaTitle: "The Monthly Payment Formula",
    formula: "PMT = P * [r(1 + r)^n] / [(1 + r)^n - 1]",
    formulaExplanation: "Where PMT is the recurring periodic payment, P is the loan principal, r is the periodic interest rate (annual interest rate divided by payment frequency per year), and n is the total number of repayment periods.",
    section2Title: "Ways to Minimize Total Loan Costs",
    tips: [
      { title: "Shorter Loan Term", desc: "Choosing a shorter duration (e.g., 15 years instead of 30) dramatically lowers the total lifetime interest paid, despite higher monthly installments." },
      { title: "Round Up Payments", desc: "Rounding your monthly payment up to the nearest hundred dollars directly amortizes the principal faster and accelerates your debt-free date." },
      { title: "Avoid Deferrals", desc: "Deferring loan payments extends your amortization schedule and causes additional interest to accrue, increasing your total borrowing expense." }
    ]
  },

  // 3. Debt Payoff
  "debt-payoff": {
    title: "Choosing Your Debt Payoff Strategy",
    intro: "Eliminating multiple consumer debts requires discipline and a proven strategic framework. The two most effective debt elimination strategies are the Debt Snowball and the Debt Avalanche methods.",
    section1Title: "Snowball vs. Avalanche Methodology",
    section1Content: "The Debt Snowball method prioritizes paying off debts from smallest balance to largest, regardless of interest rates, generating psychological momentum through early wins. The Debt Avalanche method targets debts from highest interest rate to lowest, mathematically minimizing total interest costs and accelerating payoff time.",
    formulaTitle: "The Debt Rollover Mechanism",
    formula: "Target Payment = Minimum Due + Discretionary Cash + Rolled-Over Payments",
    formulaExplanation: "You maintain minimum payments across all active debts while funneling all surplus cash into the primary target debt. When that debt is eradicated, its entire monthly budget rolls into the next debt on your prioritized roster.",
    section2Title: "Keys to Successful Debt Elimination",
    tips: [
      { title: "Automate All Minimums", desc: "Set all non-targeted debts to autopay their minimums to protect your credit score from late fees and interest penalties." },
      { title: "Stop New Debt Accumulation", desc: "Temporarily pause using credit cards while paying down balances to prevent neutralizing your repayment progress." },
      { title: "Consider Hybrid Approaches", desc: "Pay off 1 or 2 small debts first for quick motivation, then switch to high-interest debts for mathematical efficiency." }
    ]
  },

  // 4. Refinance
  "refinance": {
    title: "How Loan Refinancing Works",
    intro: "Refinancing involves replacing an existing loan with a new loan that offers more favorable terms, such as a lower interest rate, a different repayment term, or lower monthly payments.",
    section1Title: "Evaluating the Financial Advantage",
    section1Content: "A successful refinance lowers your overall cost of borrowing. However, closing costs (application fees, origination charges, appraisals, and legal fees) typically range between 2% and 6% of the loan value, meaning the savings must outweigh these upfront expenses.",
    formulaTitle: "Refinance Break-Even Point",
    formula: "Break-Even (Months) = Total Closing Costs / Monthly Payment Savings",
    formulaExplanation: "If closing costs total $3,600 and your new mortgage payment is $180 lower per month, your break-even point is exactly 20 months ($3,600 / $180). You must stay in the home longer than 20 months to achieve real net savings.",
    section2Title: "Best Practices Before Refinancing",
    tips: [
      { title: "Check Prepayment Penalties", desc: "Review your current loan agreement to confirm your current lender does not impose hefty penalties for paying off the loan early." },
      { title: "Shop Multiple Lenders", desc: "Compare Loan Estimates from at least three different lenders to evaluate both interest rates and associated origination fees." },
      { title: "Watch the Loan Term", desc: "Resetting a mortgage back to a full 30-year term may lower your monthly payment but can increase the total lifetime interest you pay." }
    ]
  },

  // 5. Student Loan
  "student-loan": {
    title: "Navigating Student Loan Repayment & Forgiveness",
    intro: "Federal and private student loans offer various repayment strategies. Understanding Income-Driven Repayment (IDR) plans like SAVE, PAYE, and IBR helps borrowers optimize monthly cash flow and qualify for loan forgiveness.",
    section1Title: "How Income-Driven Repayment Operates",
    section1Content: "IDR plans calculate your monthly payment based on family size and discretionary income rather than total loan balance. Under programs like SAVE, payments are capped at 5% to 10% of discretionary income above 225% of the federal poverty line, with unpaid interest subsidized to prevent balance inflation.",
    formulaTitle: "Discretionary Income Calculation",
    formula: "Discretionary Income = Adjusted Gross Income (AGI) - (Poverty Guideline * 2.25)",
    formulaExplanation: "The required payment under the SAVE plan is calculated as a percentage of this discretionary surplus, ensuring that low-income borrowers may qualify for $0 monthly payments while still making progress toward forgiveness.",
    section2Title: "Maximizing Student Loan Forgiveness",
    tips: [
      { title: "Annual Recertification", desc: "Recertify your family size and income annually on studentaid.gov to keep your income-driven payment amounts accurate." },
      { title: "Public Service Loan Forgiveness (PSLF)", desc: "Full-time employees of qualifying 501(c)(3) non-profits and government agencies can receive tax-free forgiveness after 120 qualifying payments." },
      { title: "Avoid Voluntary Capitalization", desc: "Minimizing plan switches prevents unpaid interest from capitalizing into your principal balance." }
    ]
  },

  // 6. DTI
  "dti": {
    title: "Understanding Debt-to-Income (DTI) Ratios",
    intro: "Your Debt-to-Income ratio is one of the most critical metrics underwriters use to evaluate your creditworthiness and loan qualification capacity.",
    section1Title: "Front-End vs. Back-End Ratios",
    section1Content: "Front-end DTI only measures your housing costs (mortgage principal, interest, taxes, and insurance) against gross income. Back-end DTI incorporates all recurring debt payments—including auto loans, student loans, personal loans, and credit card minimums.",
    formulaTitle: "The DTI Formula",
    formula: "DTI (%) = (Total Monthly Debt Payments / Gross Monthly Income) * 100",
    formulaExplanation: "Under the standard 28/36 underwriting guideline, lenders prefer front-end housing ratios under 28% and back-end total debt ratios under 36%, though some conventional loans allow up to 43% to 50%.",
    section2Title: "Steps to Improve Your DTI Ratio",
    tips: [
      { title: "Pay Off Small Balances", desc: "Completely eliminating a small loan wipes out its entire monthly minimum payment from your DTI equation." },
      { title: "Document Additional Income", desc: "Including verifiable bonuses, side income, or alimony increases the denominator of the ratio, instantly improving your score." },
      { title: "Avoid New Credit Inquiries", desc: "Do not finance vehicles, furniture, or new credit cards in the months leading up to a major mortgage application." }
    ]
  },

  // 7. APR
  "apr": {
    title: "Understanding APR vs. Nominal Interest Rate",
    intro: "When comparing loan offers, the nominal interest rate tells only part of the story. The Annual Percentage Rate (APR) reflects the true annualized cost of credit including upfront points and lender fees.",
    section1Title: "Why APR Matters for Borrowers",
    section1Content: "The nominal interest rate is used to calculate your monthly payment, but the APR amortizes origination fees, appraisal costs, discount points, and lender fees over the full term. A loan with a lower interest rate but exorbitant closing fees can easily have a higher APR than a slightly higher-rate loan with zero fees.",
    formulaTitle: "Effective APR Concept",
    formula: "APR = [((Total Fees + Total Interest) / Principal) / Loan Term in Days] * 365 * 100",
    formulaExplanation: "APR provides a standardized benchmark allowing borrowers to compare financing products from different lenders that have completely different fee schedules.",
    section2Title: "Smart Borrowing Tactics",
    tips: [
      { title: "Match Your Timeline", desc: "If you plan to stay in the home for only 3-5 years, a higher rate with zero closing fees is often more economical than paying thousands in points for a lower APR." },
      { title: "Compare Official Loan Estimates", desc: "Review Page 3 of the standard CFPB Loan Estimate form where the 5-year costs and total APR are explicitly disclosed." },
      { title: "Negotiate Lender Credits", desc: "Ask lenders for credits that offset upfront fees in exchange for a fractional adjustment to your nominal interest rate." }
    ]
  },

  // 8. Rent vs Buy
  "rent-vs-buy": {
    title: "The Economics of Renting vs. Buying",
    intro: "Deciding whether to buy a home or continue renting is one of the most consequential wealth-building decisions you will ever make. The financial outcome depends on time horizon, market conditions, and investment discipline.",
    section1Title: "Hidden Costs of Homeownership",
    section1Content: "While renting has a predictable monthly ceiling, a mortgage is merely the minimum monthly cost of owning a home. Homeowners must budget for ongoing maintenance (1% to 2% of home value annually), property tax increases, homeowners insurance, HOA fees, and transactional closing costs.",
    formulaTitle: "Opportunity Cost Comparison",
    formula: "Net Home Wealth vs. (Down Payment + Monthly Savings Invested at Compound Growth Rate)",
    formulaExplanation: "Buying typically outperforms renting only when the buyer stays in the home for at least 4 to 7 years, allowing equity accumulation and property appreciation to overcome substantial upfront acquisition and sales commissions.",
    section2Title: "Decision Framework",
    tips: [
      { title: "Time Horizon Assessment", desc: "If you anticipate moving within 3 years for career or personal reasons, renting almost always wins due to high transaction friction." },
      { title: "Invest the Difference", desc: "If renting is cheaper than buying in your local market, you must diligently invest the monthly surplus into index funds to build wealth." },
      { title: "Account for Lifestyle Flexibility", desc: "Renting provides career mobility and maintenance freedom, whereas owning offers inflation-hedged housing security and personal autonomy." }
    ]
  },

  // 9. Home Affordability
  "home-affordability": {
    title: "How Much House Can You Truly Afford?",
    intro: "Lenders determine how much you *can* borrow, but only you can decide how much you *should* spend. Realistic budgeting ensures you build home equity without becoming house-poor.",
    section1Title: "The 28/36 Rule and Down Payment Sizing",
    section1Content: "Conservative financial planning advises limiting housing costs to 28% of gross monthly income, and total debt obligations to 36%. A down payment of 20% or more protects you against market downturns, secures superior interest rates, and eliminates Private Mortgage Insurance.",
    formulaTitle: "Max Home Budget Formula",
    formula: "Max Price = (Affordable Loan Principal based on Max Monthly P&I) + Cash Down Payment",
    formulaExplanation: "Your maximum purchase price is calculated by backing out property taxes, insurance, and HOA dues from your allowable monthly payment budget, and solving for the maximum amortized loan size.",
    section2Title: "Safeguards Against Overspending",
    tips: [
      { title: "Preserve an Emergency Reserve", desc: "Never deplete all your liquid savings for the down payment; retain at least 3 to 6 months of living expenses after closing." },
      { title: "Budget for Immediate Repairs", desc: "Set aside 1% to 3% of the home price for initial moving costs, furniture, and unexpected post-move repairs." },
      { title: "Stress-Test for Rate Increases", desc: "If considering an adjustable-rate mortgage (ARM), verify that your income can comfortably absorb the maximum possible interest cap." }
    ]
  },

  // 10. Auto Loan
  "auto-loan": {
    title: "Smart Vehicle Financing & The 20/4/10 Rule",
    intro: "Vehicles are depreciating assets. Structuring your auto loan properly prevents you from ending up upside-down—owing more on the loan than the car is worth on the open market.",
    section1Title: "The 20/4/10 Guideline",
    section1Content: "Financial advisors recommend the 20/4/10 rule: put down at least 20% in cash or trade-in equity, finance for no longer than 4 years (48 months), and ensure total transportation expenses (loan installment, insurance, fuel, and maintenance) remain under 10% of gross monthly income.",
    formulaTitle: "Total Cost of Financing",
    formula: "Total Loan Cost = (Monthly Payment * Term Months) + Down Payment - Vehicle Purchase Price",
    formulaExplanation: "Lengthening an auto loan to 72 or 84 months artificially reduces monthly payments but dramatically increases interest charges and heightens negative equity risk during trade-in.",
    section2Title: "Car Buying Strategies",
    tips: [
      { title: "Get Pre-Approved", desc: "Obtain financing pre-approval from a bank or credit union before visiting dealerships to establish a competitive interest rate baseline." },
      { title: "Separate Trade-In Negotiations", desc: "Negotiate the vehicle purchase price, trade-in value, and financing terms as three distinct, independent transactions." },
      { title: "Beware Add-On Fees", desc: "Scrutinize dealer documentation fees, extended warranties, and paint protection packages that inflate the financed balance." }
    ]
  },

  // 11. Credit Card Payoff
  "credit-card-payoff": {
    title: "Escaping the High-Interest Credit Card Trap",
    intro: "Credit card debt carries some of the highest interest rates in personal finance. Understanding how compounding interest and minimum payments work is the key to achieving financial freedom.",
    section1Title: "The Danger of Minimum Payments",
    section1Content: "Credit card issuers typically set minimum monthly payments at just 1% to 2% of the outstanding balance plus accrued interest. Because the minimum payment shrinks as your balance slowly drops, paying only the minimum can extend repayment over decades and cost multiples of the original purchase in interest.",
    formulaTitle: "Daily Compounding Formula",
    formula: "Daily Interest = Balance * (APR / 365)",
    formulaExplanation: "Credit card interest compounds daily based on your average daily balance. Accelerating principal payments immediately reduces subsequent daily interest charges.",
    section2Title: "Accelerated Payoff Tactics",
    tips: [
      { title: "Fixed Monthly Payments", desc: "Instead of letting your monthly payment decrease as your balance falls, maintain a fixed, aggressive payment until the balance reaches zero." },
      { title: "0% APR Balance Transfers", desc: "Transfer high-interest balances to a 0% introductory APR card to allocate 100% of your monthly payment to principal during the promo window." },
      { title: "Call for Rate Reductions", desc: "Cardholders in good standing can often negotiate a 2% to 5% APR reduction simply by calling customer support." }
    ]
  },

  // 12. Retirement Planner
  "retirement-planner": {
    title: "Building a Sustainable Retirement Nest Egg",
    intro: "Retirement planning is about ensuring your accumulated wealth outlives your retirement years. Balancing savings rates, asset allocation, and withdrawal strategies guarantees financial independence.",
    section1Title: "The 4% Rule & Spending Targets",
    section1Content: "The classic Trinity Study suggests that withdrawing 4% of your investment portfolio in your first retirement year, and adjusting that dollar amount for inflation annually, provides a 95%+ probability that your savings will endure for at least 30 years in a balanced stock/bond portfolio.",
    formulaTitle: "Target Retirement Corpus (Rule of 25)",
    formula: "Target Nest Egg = Anticipated Annual Retirement Expenses * 25",
    formulaExplanation: "If you anticipate needing $60,000 per year from your portfolio to cover living expenses, your target retirement fund is $1,500,000 ($60,000 * 25).",
    section2Title: "Longevity Planning Principles",
    tips: [
      { title: "Account for Inflation", desc: "A 3% inflation rate doubles living costs roughly every 24 years; maintaining a portion of your portfolio in equities is essential to preserve purchasing power." },
      { title: "Delay Social Security", desc: "Delaying Social Security retirement benefits from age 62 to age 70 increases your guaranteed lifetime monthly payout by up to 77%." },
      { title: "Diversify Tax Buckets", desc: "Holding assets in taxable, tax-deferred (Traditional), and tax-free (Roth) accounts provides maximum tax flexibility in retirement." }
    ]
  },

  // 13. 401(k)
  "401k": {
    title: "Maximizing Your Workplace 401(k) Plan",
    intro: "A 401(k) is one of the most powerful wealth-building tools available to employees, offering automated investing, tax advantages, and employer matching contributions.",
    section1Title: "The Power of the Employer Match",
    section1Content: "An employer match is essentially free compensation. If an employer matches 50% of contributions up to 6% of salary, contributing 6% yields an immediate, guaranteed 50% return on your invested dollars before market growth even occurs.",
    formulaTitle: "Compound 401(k) Growth",
    formula: "FV = PV*(1+r)^t + PMT * [((1+r)^t - 1) / r]",
    formulaExplanation: "Combines your starting balance growth with the future value of recurring monthly contributions and employer matches over your career horizon.",
    section2Title: "401(k) Optimization Rules",
    tips: [
      { title: "Capture the Full Match First", desc: "Never contribute less than the exact threshold required to capture 100% of your company's matching dollars—it is guaranteed compensation." },
      { title: "Roth vs. Traditional Selection", desc: "Choose Roth 401(k) if you are currently in a lower tax bracket to lock in tax-free distributions; choose Traditional to maximize immediate tax deductions if you are in your peak earning years." },
      { title: "Track Milestones by Age", desc: "Aim for 1x your annual salary by age 30, 3x by 40, 6x by 50, and 10x by age 67 to maintain retirement income replacement." },
      { title: "Plan for 4% Safe Withdrawals", desc: "Use the 4% rule to convert your nest egg into sustainable monthly income: every $1,000,000 provides approximately $3,333/month in retirement." },
      { title: "Solo 401(k) for Self-Employed", desc: "Entrepreneurs and freelancers can contribute as both employee and employer up to the combined $69,000 limit, far exceeding standard IRA caps." }
    ]
  },

  // 14. IRA Comparison
  "ira-comparison": {
    title: "Roth IRA vs. Traditional IRA: Strategic Comparison",
    intro: "Individual Retirement Accounts (IRAs) provide supplemental tax-advantaged savings outside of employer plans. Deciding between Traditional and Roth hinges on your current versus future expected tax brackets.",
    section1Title: "Tax Treatment Comparison",
    section1Content: "Traditional IRA contributions are made with pre-tax dollars, lowering your current taxable income, but distributions in retirement are taxed as ordinary income. Roth IRA contributions are made with post-tax dollars; your balance grows completely tax-free, and all qualified retirement withdrawals are 100% exempt from federal and state income taxes.",
    formulaTitle: "Break-Even Tax Rate Rule",
    formula: "If Current Marginal Tax Rate > Retirement Tax Rate → Traditional; Else → Roth",
    formulaExplanation: "Younger investors in lower income brackets generally benefit far more from the tax-free compounding of a Roth IRA, while peak earners may prefer immediate Traditional deductions.",
    section2Title: "IRA Execution Strategies",
    tips: [
      { title: "Penalty-Free Roth Principal", desc: "Roth IRA original contributions (not earnings) can be withdrawn at any time, for any reason, with zero taxes or penalties." },
      { title: "No RMDs on Roth IRAs", desc: "Unlike Traditional IRAs that mandate Required Minimum Distributions starting at age 73, Roth IRAs have no lifetime RMDs, making them ideal for estate planning." },
      { title: "Backdoor Roth Technique", desc: "High earners phased out by Roth income limits can make non-deductible Traditional IRA contributions and convert them to a Roth." }
    ]
  },

  // 15. Compound Interest
  "compound-interest": {
    title: "The Mathematical Engine of Compound Interest",
    intro: "Albert Einstein famously called compound interest the eighth wonder of the world. It is the process by which interest generates interest, transforming modest regular savings into substantial long-term wealth.",
    section1Title: "Compounding Frequencies & Growth Curves",
    section1Content: "With simple interest, you only earn a return on your initial deposit. With compound interest, every return earned is folded back into your principal base, creating an exponential growth curve that accelerates with time and compounding frequency (daily, monthly, annually).",
    formulaTitle: "Compound Interest Formula",
    formula: "A = P * (1 + r/n)^(n*t)",
    formulaExplanation: "Where A is final accrued balance, P is the initial principal, r is the annual nominal interest rate, n is the number of times interest compounds per year, and t is the time elapsed in years.",
    section2Title: "Maximizing Compound Returns",
    tips: [
      { title: "Start as Early as Possible", desc: "Time is the exponential multiplier in compounding. Ten years of early investing often outperforms thirty years of late investing." },
      { title: "Reinvest All Dividends", desc: "Always activate automatic dividend reinvestment (DRIP) to continually add new shares that participate in subsequent growth." },
      { title: "Minimize Advisory Fees", desc: "A 1% annual advisory fee can devour over 25% of your compounding gains over a 30-year investment period." }
    ]
  },

  // 16. TVM
  "tvm": {
    title: "Mastering the Time Value of Money (TVM)",
    intro: "The Time Value of Money is the foundational bedrock of all modern finance: a dollar in hand today is worth more than a dollar promised in the future because today's dollar can be invested to earn returns.",
    section1Title: "The Five Core TVM Variables",
    section1Content: "Every TVM calculation solves for one unknown among five interconnected financial variables: Present Value (PV), Future Value (FV), Interest Rate per Period (Rate), Total Number of Periods (Nper), and Periodic Payment (PMT).",
    formulaTitle: "Fundamental Discounting Formula",
    formula: "PV = FV / (1 + r)^n",
    formulaExplanation: "Discounting future cash flows back to today's present value allows investors to compare assets, capital projects, annuities, and bonds on an objective, equal footing.",
    section2Title: "Practical TVM Applications",
    tips: [
      { title: "Evaluate Lump Sum vs. Annuity", desc: "Use TVM discounting to evaluate whether accepting a lump-sum payout or monthly annuity is financially superior for pensions or lotteries." },
      { title: "Annuity Due vs. Ordinary Annuity", desc: "Payments made at the beginning of each period (annuity due) earn one additional cycle of interest compared to payments made at the end (ordinary annuity)." },
      { title: "Account for Opportunity Costs", desc: "Always set the discount rate equal to your expected alternative rate of return on similar-risk investments." }
    ]
  },

  // 17. ROI
  "roi": {
    title: "Measuring Investment Success: ROI & CAGR",
    intro: "Return on Investment (ROI) evaluates the financial efficiency of an asset or business venture. For multi-year holdings, Annualized ROI (CAGR) provides the true geometric rate of return.",
    section1Title: "Simple ROI vs. Annualized Return (CAGR)",
    section1Content: "Simple ROI calculates the total percentage gain over an entire holding period, but ignores duration. A 50% return achieved over 2 years represents a 22.5% annualized return, whereas the same 50% return over 10 years represents only a 4.1% annualized return.",
    formulaTitle: "Compound Annual Growth Rate (CAGR)",
    formula: "CAGR = (Ending Value / Beginning Value)^(1 / Years) - 1",
    formulaExplanation: "CAGR standardizes volatile returns into a constant annual growth rate, allowing fair, direct performance comparisons between different asset classes and holding periods.",
    section2Title: "ROI Evaluation Checklist",
    tips: [
      { title: "Factor in Total Costs", desc: "Always deduct transaction commissions, taxes, maintenance, and carrying costs from your gross profit before computing net ROI." },
      { title: "Adjust for Inflation", desc: "Deduct the prevailing inflation rate from your nominal CAGR to measure your real purchasing power gains." },
      { title: "Assess Risk Adjustments", desc: "A high ROI on a high-volatility asset must be weighed against the probability of permanent capital loss." }
    ]
  },

  // 18. Savings Goal
  "savings-goal": {
    title: "Reverse-Engineering Your Savings Goals",
    intro: "Whether saving for a home down payment, emergency buffer, or dream vacation, reverse-engineering your monthly savings target turns ambitious financial goals into actionable monthly steps.",
    section1Title: "Target Sizing & Asset Placement",
    section1Content: "For savings goals needed in less than 3 years, capital preservation is paramount. Funds should reside in high-yield savings accounts (HYSAs), money market accounts, or short-term CDs rather than volatile stock markets.",
    formulaTitle: "Required Periodic Savings",
    formula: "PMT = (FV - PV*(1+r)^n) * [ r / ((1+r)^n - 1) ]",
    formulaExplanation: "Calculates the exact monthly contribution needed to bridge the gap between your current savings and future target, taking into account accrued compound interest.",
    section2Title: "Goal Achievement Systems",
    tips: [
      { title: "Pay Yourself First", desc: "Automate transfers into dedicated savings accounts on payday before discretionary spending occurs." },
      { title: "Separate Accounts by Goal", desc: "Establish separate digital savings sub-accounts for distinct goals (e.g., 'Emergency Fund', 'Down Payment', 'Car') to prevent cross-spending." },
      { title: "Windfall Allocation", desc: "Direct at least 50% of bonuses, tax refunds, and cash gifts toward your priority savings target to shave months off your timeline." }
    ]
  },

  // 19. Stock Return
  "stock-return": {
    title: "Analyzing Stock Market Returns & Compounding",
    intro: "Total stock returns consist of both share price appreciation (capital gains) and dividend income. Understanding how these elements interact is essential for long-term equity investors.",
    section1Title: "Capital Gains vs. Total Return",
    section1Content: "A stock's price chart only reflects price changes. Total return accounts for all cash dividends distributed to shareholders. Historically, reinvested dividends have contributed over 40% of the S&P 500's total cumulative returns over multi-decade horizons.",
    formulaTitle: "Total Stock Return Formula",
    formula: "Total Return (%) = [ (Ending Price - Buy Price + Total Dividends) / Buy Price ] * 100",
    formulaExplanation: "Calculates your comprehensive gain or loss including cash dividends received during the entire holding period.",
    section2Title: "Equity Investing Guidelines",
    tips: [
      { title: "Hold for the Long Haul", desc: "Historically, the probability of positive returns in the S&P 500 exceeds 94% over any rolling 10-year period and 100% over 20-year periods." },
      { title: "Diversify Across Sectors", desc: "Holding broad-market index funds (like total market or S&P 500 ETFs) eliminates individual company bankruptcy risk." },
      { title: "Tax-Loss Harvesting", desc: "In taxable brokerage accounts, strategically selling losing positions can offset capital gains and up to $3,000 of ordinary income." }
    ]
  },

  // 20. CAPM
  "capm": {
    title: "The Capital Asset Pricing Model (CAPM) Framework",
    intro: "CAPM is the benchmark financial model used by corporate finance professionals and portfolio managers to establish the required rate of return for a risky asset based on its systematic market risk.",
    section1Title: "Understanding Beta and Systematic Risk",
    section1Content: "Systematic risk (market-wide risk) cannot be eliminated through diversification. Beta (β) quantifies an asset's sensitivity relative to the broader market. A beta of 1.0 indicates market-level volatility; beta > 1.0 indicates higher volatility (aggressive growth); beta < 1.0 indicates lower volatility (defensive stocks).",
    formulaTitle: "The CAPM Formula",
    formula: "Expected Return = Rf + Beta * (Rm - Rf)",
    formulaExplanation: "Where Rf is the risk-free rate (e.g., 10-year US Treasury yield), Beta is the asset's sensitivity coefficient, and (Rm - Rf) represents the equity market risk premium.",
    section2Title: "Applying CAPM in Portfolio Construction",
    tips: [
      { title: "Assess Hurdle Rates", desc: "Companies use CAPM to calculate their Cost of Equity, setting the minimum return benchmark for evaluating major capital investments." },
      { title: "Balance Portfolio Beta", desc: "Pair high-beta growth stocks with low-beta dividend aristocrats or utilities to achieve an overall portfolio beta close to 1.0." },
      { title: "Evaluate Alpha", desc: "Alpha measures whether an active fund manager actually generated returns above the expected benchmark return predicted by CAPM." }
    ]
  },

  // 21. Dividend
  "dividend": {
    title: "The Power of Dividend Growth & Reinvestment",
    intro: "Dividend investing provides passive cash flow and acts as a stabilizing force during market downturns. Reinvesting dividends unleashes powerful compounding growth across decades.",
    section1Title: "Yield on Cost vs. Current Dividend Yield",
    section1Content: "Current dividend yield is the annual dividend divided by the current share price. Yield on Cost (YOC) measures the annual dividend divided by your original purchase price. As dividend-growing companies raise their payouts year after year, your personal Yield on Cost can climb to 10%, 20%, or higher.",
    formulaTitle: "Dividend Compounding Mechanics",
    formula: "Next Shares = Current Shares + [ (Current Shares * Dividend Per Share) / Market Price ]",
    formulaExplanation: "Automatic Dividend Reinvestment Plans (DRIP) buy new fractional shares every quarter without trading fees, increasing the share count that receives the subsequent dividend payout.",
    section2Title: "Dividend Portfolio Best Practices",
    tips: [
      { title: "Look for Dividend Aristocrats", desc: "Focus on companies with 25+ consecutive years of increasing dividend payments, which proves durable competitive advantages." },
      { title: "Check the Payout Ratio", desc: "A payout ratio below 60% indicates a safe, sustainable dividend with room for future growth, whereas ratios above 85% signal risk of dividend cuts." },
      { title: "Tax Location Optimization", desc: "Hold high-yielding dividend stocks and REITs inside tax-advantaged accounts (like Roth IRAs) to avoid annual dividend income tax drag." }
    ]
  },

  // 22. Inflation
  "inflation": {
    title: "Understanding Inflation & Protecting Purchasing Power",
    intro: "Inflation is the steady rise in prices over time, acting as an invisible tax that erodes the purchasing power of idle cash. Beating inflation is the primary prerequisite of wealth accumulation.",
    section1Title: "The Consumer Price Index & The Rule of 72",
    section1Content: "Inflation is tracked through consumer price indices (CPI) that monitor a representative basket of goods and services. Using the Rule of 72, dividing 72 by a 3% inflation rate shows that living expenses double roughly every 24 years.",
    formulaTitle: "Future Purchasing Power Formula",
    formula: "Real Purchasing Power = Nominal Amount / (1 + Inflation Rate)^Years",
    formulaExplanation: "Reveals the true future purchasing capacity of cash savings after compounding price inflation is factored in.",
    section2Title: "Inflation-Hedging Strategies",
    tips: [
      { title: "Hold Equities", desc: "High-quality businesses can raise product prices to keep pace with inflation, making diversified stock portfolios the premier long-term inflation hedge." },
      { title: "Treasury Inflation-Protected Securities (TIPS)", desc: "TIPS adjust their principal value upward with changes in the CPI, ensuring your principal keeps pace with official inflation." },
      { title: "Real Estate & Tangible Assets", desc: "Property values and rental incomes historically rise during inflationary periods while fixed mortgage payments stay constant." }
    ]
  },

  // 23. Paycheck
  "paycheck": {
    title: "Demystifying Your Paycheck: Gross vs. Net Pay",
    intro: "Understanding the deductions on your paystub—including federal and state taxes, FICA contributions, and retirement withholding—helps you optimize take-home pay and tax refunds.",
    section1Title: "Pre-Tax vs. Post-Tax Deductions",
    section1Content: "Pre-tax deductions (such as Traditional 401k contributions, health insurance premiums, and HSA/FSA deposits) lower your Adjusted Gross Income before income taxes are computed. Post-tax deductions (like Roth contributions or charitable payroll deductions) are subtracted after taxes are finalized.",
    formulaTitle: "Net Take-Home Calculation",
    formula: "Net Pay = Gross Pay - Pre-Tax Deductions - Taxes (Federal, FICA, State, Local) - Post-Tax Deductions",
    formulaExplanation: "FICA tax funds Social Security (6.2% up to the wage limit) and Medicare (1.45% plus 0.9% on high earners). Federal withholding depends on your W-4 form elections.",
    section2Title: "Paycheck Optimization Tips",
    tips: [
      { title: "Calibrate Form W-4", desc: "Adjust your withholding allowances so you don't receive massive tax refunds, which represent an interest-free loan to the government." },
      { title: "Maximize Health Savings Accounts (HSAs)", desc: "HSA contributions through payroll are triple-tax-exempt: pre-tax on contribution, tax-free on growth, and tax-free on qualified medical withdrawals." },
      { title: "Audit Year-End Paystubs", desc: "Verify that cumulative retirement contributions and pre-tax insurance totals match your annual elections before W-2s are finalized." }
    ]
  },

  // 24. Net Worth
  "net-worth": {
    title: "Tracking & Growing Your Net Worth",
    intro: "Your net worth is the ultimate scorecard of personal financial health. It measures the exact difference between what you own and what you owe at any given snapshot in time.",
    section1Title: "Assets vs. Liabilities Hierarchy",
    section1Content: "Assets encompass liquid cash, retirement accounts, taxable investments, home equity, vehicles, and real property. Liabilities include mortgage balances, student loans, auto loans, personal loans, and credit card balances.",
    formulaTitle: "Net Worth Calculation",
    formula: "Net Worth = Total Assets - Total Liabilities",
    formulaExplanation: "Tracking your net worth quarterly reveals your financial trajectory, proving whether debt paydown and investment growth are steadily compounding over time.",
    section2Title: "Net Worth Acceleration Rules",
    tips: [
      { title: "Focus on High-ROI Assets", desc: "Prioritize acquiring appreciating assets (stocks, real estate, productive businesses) over depreciating consumables (luxury vehicles, electronics)." },
      { title: "Track Quarterly, Not Daily", desc: "Ignore daily stock market noise; tracking net worth quarterly or semi-annually provides a strategic, calm view of progress." },
      { title: "Don't Overvalue Personal Property", desc: "Avoid counting everyday furniture or used clothing in your asset ledger; track only genuine, verifiable market assets." }
    ]
  },

  // 25. Emergency Fund
  "emergency-fund": {
    title: "Building Your Financial Fortress: The Emergency Fund",
    intro: "An emergency fund is not an investment designed to generate high returns—it is an insurance policy that prevents unexpected financial emergencies from forcing you into high-interest debt.",
    section1Title: "Target Sizing Guidelines",
    section1Content: "Most financial planners advise keeping 3 to 6 months of bare-bones essential living expenses in an emergency fund. Freelancers, commissioned workers, or single-income families should target 9 to 12 months for greater insulation against volatile earnings.",
    formulaTitle: "Essential Expense Triage",
    formula: "Target Fund = (Essential Housing + Groceries + Utilities + Minimum Debt Payments + Healthcare) * Target Months",
    formulaExplanation: "Do not include discretionary dining out, vacations, or luxury subscriptions when computing your baseline monthly survival budget.",
    section2Title: "Storage & Governance Rules",
    tips: [
      { title: "Keep it Liquid & Safe", desc: "Store your emergency fund in an FDIC-insured High-Yield Savings Account (HYSA) or money market fund with zero market risk." },
      { title: "Separate from Checking", desc: "Keep the fund in a separate bank from your daily checking account to eliminate the temptation of casual spending." },
      { title: "Replenish Immediately", desc: "When genuine emergencies strike, pause discretionary investing and channel all spare cash flow to rebuild the reserve." }
    ]
  },

  // 26. Fee Impact
  "fee-impact": {
    title: "The Silent Wealth Killer: Investment Fees",
    intro: "A difference of just 1% in annual investment fees can wipe out hundreds of thousands of dollars over a 30-year investing career due to the loss of compounding returns on those deducted fees.",
    section1Title: "Expense Ratios & Advisory Fees",
    section1Content: "The expense ratio is the annual percentage fee charged by mutual funds and ETFs for management and operations. When coupled with 1% wealth management AUM fees, total fee drag can easily exceed 1.5% to 2% annually.",
    formulaTitle: "Fee Drag Compounding Formula",
    formula: "Terminal Wealth Loss = Portfolio Value at Gross Return - Portfolio Value at Net Return",
    formulaExplanation: "Every dollar surrendered in fees is a dollar that can never again compound, depriving you of decades of exponential growth.",
    section2Title: "Cost-Slashing Strategies",
    tips: [
      { title: "Use Low-Cost Index ETFs", desc: "Switch to broad-market index ETFs that charge ultra-low expense ratios between 0.02% and 0.05% annually." },
      { title: "Avoid Front-End Loads", desc: "Never purchase mutual funds that charge upfront sales loads (e.g., 5.75%), which instantly deduct principal before investing." },
      { title: "Scrutinize Workplace 401(k) Menus", desc: "Identify and petition for institutional-share class index funds within your company's retirement plan lineup." }
    ]
  },

  // 27. College Savings
  "college-savings": {
    title: "Planning Ahead with 529 College Savings Plans",
    intro: "Higher education costs consistently outpace general inflation. A state-sponsored 529 plan offers parents and grandparents a tax-advantaged vehicle to save for university and vocational education.",
    section1Title: "529 Tax Perks & SECURE 2.0 Flexibility",
    section1Content: "Contributions to a 529 plan grow 100% tax-free at the federal level, and qualified withdrawals for tuition, fees, room, and board are completely tax-exempt. Under the SECURE 2.0 Act, up to $35,000 of leftover 529 funds can be rolled over into the beneficiary's Roth IRA.",
    formulaTitle: "Required College Contribution",
    formula: "Future Tuition = Current Annual Cost * (1 + Education Inflation Rate)^Years to College",
    formulaExplanation: "Higher education tuition has historically grown at 4% to 6% per year, meaning planning must account for accelerated cost increases.",
    section2Title: "529 Execution Guidelines",
    tips: [
      { title: "Check State Tax Deductions", desc: "Over 30 states offer state income tax deductions or credits for contributing to your home state's sponsored 529 plan." },
      { title: "Use Age-Based Portfolios", desc: "Select age-based asset allocation tracks that automatically shift from aggressive equities to conservative bonds as your child approaches high school graduation." },
      { title: "FAFSA Asset Treatment", desc: "Parent-owned 529 plans are assessed at a low 5.64% rate on federal financial aid applications, minimizing impact on need-based grants." }
    ]
  },

  // 28. Crypto DCA
  "crypto-dca": {
    title: "Mastering Dollar-Cost Averaging (DCA) in Volatile Markets",
    intro: "Dollar-Cost Averaging is an investment discipline where you invest fixed cash sums at regular calendar intervals, eliminating the emotional pitfalls of market timing.",
    section1Title: "Why DCA Tames Severe Volatility",
    section1Content: "In hyper-volatile asset classes like cryptocurrency, attempting to time market peaks and troughs often leads to panic selling at bottoms and FOMO buying at tops. DCA automatically acquires more units when prices crash and fewer units when prices surge, systematically lowering your average cost basis.",
    formulaTitle: "Average Cost Basis Formula",
    formula: "Average Unit Price = Total Cash Invested / Total Units Acquired",
    formulaExplanation: "The harmonic mean math of dollar-cost averaging ensures that your average purchase price is always lower than the simple arithmetic average of the market's fluctuating spot prices.",
    section2Title: "DCA Operational Best Practices",
    tips: [
      { title: "Automate Recurring Purchases", desc: "Set up automatic recurring bank transfers and buys directly inside your brokerage or exchange to remove human hesitation." },
      { title: "Align with Pay Cycles", desc: "Schedule weekly or bi-weekly buys on the day your paycheck arrives to practice disciplined wealth-building." },
      { title: "Secure Cold Storage", desc: "Transfer accumulated cryptocurrency holdings into self-custody hardware wallets to eliminate third-party exchange counterparty risk." }
    ]
  },

  // 29. Tip
  "tip": {
    title: "Dining & Service Tipping Etiquette",
    intro: "Tipping guidelines vary widely across hospitality sectors and geographic regions. Understanding tipping norms ensures fair compensation for service staff while avoiding overpaying.",
    section1Title: "North American Standards & Bill Splitting",
    section1Content: "In the United States and Canada, restaurant dining tipping standards range from 15% for adequate service, 18% for solid service, to 20% or more for outstanding service. Traditional etiquette recommends calculating tip percentages on the pre-tax food and beverage subtotal.",
    formulaTitle: "Split Bill Calculation",
    formula: "Per-Person Share = (Food & Drinks Subtotal + Sales Tax + Calculated Tip) / Number of Diners",
    formulaExplanation: "Enables fair group bill splitting, ensuring all parties contribute their exact proportional share of dining expenses and service gratuity.",
    section2Title: "Tipping Best Practices",
    tips: [
      { title: "Check for Included Gratuity", desc: "Always inspect the itemized bill for parties of 6 or more, as restaurants frequently add an automatic 18% to 20% gratuity." },
      { title: "Tip Cash When Convenient", desc: "Leaving cash tips ensures servers receive their gratuity immediately without processing delays." },
      { title: "Reward Exceptional Hospitality", desc: "For exceptional fine dining service or special requests handled with care, tipping 22% to 25% is an appreciated gesture." }
    ]
  },

  // 30. Discount
  "discount": {
    title: "Calculating Sales Discounts, Markdowns & Final Costs",
    intro: "Retail discounts, promotional coupon codes, and stacked clearance promotions can be confusing. Knowing how to calculate percentage savings and sales tax ensures you understand the true final checkout price.",
    section1Title: "Sequential vs. Additive Discounts",
    section1Content: "Retail stores frequently offer stacked promotions, such as 'Take 20% off, plus an extra 10% off at checkout'. These discounts are applied sequentially, not additively: a 20% discount followed by a 10% discount yields an effective total discount of 28%, not 30%.",
    formulaTitle: "Discount & Final Price Formula",
    formula: "Final Price = Original Price * (1 - Discount Rate) * (1 + Sales Tax Rate)",
    formulaExplanation: "Sales tax in most jurisdictions is computed on the discounted net purchase price, meaning your tax liability is reduced proportionally by the store discount.",
    section2Title: "Smart Shopping Strategies",
    tips: [
      { title: "Evaluate Cost Per Use", desc: "A heavily discounted item you rarely use is still a waste of money; evaluate purchase decisions based on expected lifetime utility." },
      { title: "Verify Price Baselines", desc: "Check historical price trackers online to confirm that a '50% off' promotion isn't simply an inflated MSRP markdown." },
      { title: "Combine Promo Codes & Cash Back", desc: "Layer store promotional coupons with credit card cash-back rewards to maximize overall savings." }
    ]
  },

  // 31. HP 12C Financial Emulator
  "hp-12c": {
    title: "Mastering the HP 12C: RPN Logic, Keystrokes & Financial Math",
    intro: "First introduced by Hewlett-Packard in 1981, the HP 12C is the iconic gold-standard financial calculator used by commercial real estate underwriters, fixed-income analysts, and CFA charterholders worldwide.",
    section1Title: "Reverse Polish Notation (RPN) & Stack Mechanics",
    section1Content: "Unlike traditional algebraic calculators, the HP 12C operates on Reverse Polish Notation (RPN). Numbers are placed onto a 4-level operational stack (registers X, Y, Z, and T) using the [ENTER] key, and mathematical operators execute immediately without parentheses. This eliminates order-of-operation ambiguity, drastically cuts keystroke count, and accelerates complex financial modeling.",
    formulaTitle: "RPN Compound Interest & TVM Equation",
    formula: "PV + PMT * [1 - (1 + i)^(-n)] / i + FV * (1 + i)^(-n) = 0",
    formulaExplanation: "The fundamental five-variable TVM equation governing the HP 12C top row ([n], [i], [PV], [PMT], [FV]). Cash outflows (deposits or payments) must be entered as negative numbers via the [CHS] (Change Sign) key.",
    section2Title: "When Should You Use an HP 12C?",
    tips: [
      { title: "Commercial Real Estate & Debt Amortization", desc: "The HP 12C features dedicated hardware routines for odd-period interest, loan amortization tables, and uneven cash-flow IRR/NPV calculations." },
      { title: "CFA, CFP & FRM Exam Authorization", desc: "The HP 12C is one of the only calculators officially sanctioned by the CFA Institute, GARP, and the CFP Board for proctored examination rooms." },
      { title: "Keystroke Efficiency Under Pressure", desc: "RPN logic reduces overall keystrokes by 20% to 35% compared to algebraic entry, saving crucial seconds during timed professional testing." }
    ]
  },

  // 32. TI BA II Plus Simulator
  "ti-ba-ii-plus": {
    title: "TI BA II Plus Guide: TVM Solving, P/Y Settings & Exam Mastery",
    intro: "The Texas Instruments BA II Plus is the most popular financial calculator for CFA, CFP, and finance students. Mastering its worksheet architecture and menu conventions prevents costly mistakes on exam day.",
    section1Title: "The Critical P/Y and C/Y Setting",
    section1Content: "By default, the TI BA II Plus is configured with P/Y (Payments per Year) set to 12. Most finance curricula and CFA exam questions assume annual periodicity (P/Y = 1). Many candidates adjust P/Y to 1 by pressing [2nd] [I/Y] 1 [ENTER] and manually dividing nominal rates by compounding periods to avoid unexpected compounding errors.",
    formulaTitle: "Time Value of Money (TVM) System",
    formula: "PV + PMT * [ (1 - (1 + r)^(-n)) / r ] * (1 + r * B) + FV * (1 + r)^(-n) = 0",
    formulaExplanation: "Where B = 1 for BGN mode (annuities due, advance lease payments) and B = 0 for END mode (ordinary loans). Press [CPT] followed by any variable to solve for the unknown value.",
    section2Title: "Exam Day Best Practices & Common Mistakes",
    tips: [
      { title: "Always Clear TVM Registers", desc: "Press [2nd] [CLR TVM] before beginning every new calculation. Residual values left from prior problems cause silent calculation errors." },
      { title: "Verify BGN vs. END Mode", desc: "Ensure 'BGN' is not showing in the display banner unless specifically solving for payments due at the beginning of the period." },
      { title: "Strict Cash Flow Sign Convention", desc: "Never enter both PV and FV as positive numbers when solving for interest rate or payment. Money going out is negative; money coming in is positive." }
    ]
  },

  // 33. Future Value
  "future-value": {
    title: "Future Value (FV) Calculations & Compounding Horizon",
    intro: "Future Value quantifies the purchasing power and accumulated growth of money invested today over a designated horizon at an expected compound interest rate.",
    section1Title: "Lump Sum vs. Annuity Compounding",
    section1Content: "Future Value can be calculated for a single lump-sum investment today, or for an ongoing series of regular periodic additions (an annuity). Compounding frequency (daily, monthly, quarterly, annually) determines how quickly interest begins earning interest on itself.",
    formulaTitle: "Comprehensive Future Value Formula",
    formula: "FV = PV * (1 + r/m)^(m*t) + PMT * [((1 + r/m)^(m*t) - 1) / (r/m)]",
    formulaExplanation: "Where PV is the initial lump sum, PMT is the regular recurring payment, r is the annual nominal interest rate, m is the compounding frequency per year, and t is the investment horizon in years.",
    section2Title: "Strategies to Maximize Future Value",
    tips: [
      { title: "Prioritize Early Contributions", desc: "Due to exponential compound interest, cash invested in your 20s produces multiples of the final wealth generated by identical amounts invested in your 40s." },
      { title: "Compounding Frequency Advantage", desc: "Daily or monthly compounding generates higher nominal terminal value than annual compounding at identical nominal APY rates." },
      { title: "Factor in Inflation", desc: "Always discount nominal Future Value by an estimated inflation rate (2.5% to 3.0%) to understand your true future purchasing power." }
    ]
  },

  // 34. Investment Calculator
  "investment": {
    title: "Investment Portfolio Projections & Asset Accumulation",
    intro: "Building long-term wealth through diversified investing requires understanding compound growth, recurring contributions, volatility drag, and management fee erosion.",
    section1Title: "Nominal Growth vs. Real Purchasing Power",
    section1Content: "While stock market indices like the S&P 500 have historically returned approximately 10% nominal annually before inflation, long-term financial planning must account for historical inflation (~3%) and asset management expense ratios (0.03% to 1.5%), yielding an expected real return of 6.5% to 7.0%.",
    formulaTitle: "Compound Portfolio Growth Formula",
    formula: "A = P * (1 + r/n)^(n*t) + PMT * [((1 + r/n)^(n*t) - 1) / (r/n)]",
    formulaExplanation: "Calculates total portfolio accumulation with initial principal (P), periodic deposit installments (PMT), effective annual rate (r), compounding periods (n), and total years (t).",
    section2Title: "Portfolio Optimization Guidelines",
    tips: [
      { title: "Automate Dollar-Cost Averaging", desc: "Scheduling automatic recurring deposits removes psychological hesitation and eliminates the risk of mistiming market cycles." },
      { title: "Minimize Expense Ratios", desc: "A 1% annual advisory or fund expense ratio can siphon away over 25% of your final portfolio value across a 30-year investing career." },
      { title: "Reinvest All Dividends", desc: "Reinvesting quarterly equity dividends accounts for nearly half of the total cumulative return of the broader stock market over multi-decade periods." }
    ]
  },

  // 35. Salary Increase
  "salary-increase": {
    title: "Evaluating Pay Raises, Marginal Taxes & Take-Home Impact",
    intro: "A salary increase is an exciting milestone, but progressive marginal tax brackets, FICA payroll withholdings, and pre-tax retirement deductions mean your net take-home boost differs from your gross percentage raise.",
    section1Title: "Marginal Tax Brackets vs. Effective Tax Rates",
    section1Content: "A common misconception is that entering a higher tax bracket reduces your total take-home pay. Progressive tax systems tax only the portion of income that exceeds the lower bracket threshold at the higher rate, meaning a pay raise always results in higher net take-home earnings.",
    formulaTitle: "Pay Raise & Net Change Formula",
    formula: "Gross Increase = New Salary - Old Salary; Net Hourly = (New Salary * (1 - Marginal Tax Rate)) / 2,080",
    formulaExplanation: "Based on standard full-time employment of 2,080 annual work hours (40 hours per week for 52 weeks), accounting for marginal federal, state, and payroll tax deductions.",
    section2Title: "Maximizing the Value of a Raise",
    tips: [
      { title: "Avoid Lifestyle Creep", desc: "Divert at least 50% of any net salary raise directly into automated retirement contributions (401k, Roth IRA) before your lifestyle expenses inflate." },
      { title: "Evaluate Benefit Offsets", desc: "A higher salary may phase you out of certain tax deductions, child tax credits, or student loan income-driven repayment benefits." },
      { title: "Negotiate Non-Salary Perks", desc: "If salary caps are rigid, negotiate extra paid time off, remote work flexibility, or additional employer retirement matching." }
    ]
  },

  // 36. Debt Consolidation
  "debt-consolidation": {
    title: "Debt Consolidation Strategies & Interest Savings",
    intro: "Debt consolidation rolls multiple high-interest debts—such as credit cards and store loans—into a single loan with a lower interest rate, simplifying your budget and accelerating your payoff date.",
    section1Title: "How Consolidation Lowers Borrowing Costs",
    section1Content: "By replacing variable credit card interest rates (often 20% to 28% APR) with a fixed-rate personal loan or balance transfer loan (often 8% to 14% APR), a much larger share of each monthly payment goes directly toward principal reduction.",
    formulaTitle: "Weighted Average Interest Rate Formula",
    formula: "Weighted APR = Sum(Balance_i * APR_i) / Total_Balance",
    formulaExplanation: "Calculates your overall current effective borrowing rate compared to the new consolidation loan interest rate to determine net savings.",
    section2Title: "Best Practices When Consolidating Debt",
    tips: [
      { title: "Avoid Running Up New Debt", desc: "Do not charge new purchases to cleared credit cards while paying off the consolidation loan, or you will double your total debt burden." },
      { title: "Compare Origination Fees", desc: "Ensure loan origination fees (typically 1% to 6%) do not exceed the interest savings generated over the life of the loan." },
      { title: "Maintain an Emergency Fund", desc: "Keep a basic buffer of $1,000 to $2,000 in cash so unexpected life events do not force you back into high-interest credit card debt." }
    ]
  },

  // 37. Social Security
  "social-security": {
    title: "Maximizing Social Security Retirement Benefits",
    intro: "Deciding when to claim Social Security retirement benefits is one of the most critical financial decisions for older adults. Claiming early permanently reduces monthly income, while delaying past Full Retirement Age provides substantial lifetime increases.",
    section1Title: "Claiming Age vs. Benefit Amount (Age 62 to 70)",
    section1Content: "Claiming as early as age 62 reduces your baseline monthly check by up to 30% for life. Waiting until Full Retirement Age (67 for those born in 1960 or later) gives you 100% of your Primary Insurance Amount (PIA). Delaying further up to age 70 yields delayed retirement credits of 8% per year (up to 124% to 132% of PIA).",
    formulaTitle: "Social Security Benefit Adjustment Formula",
    formula: "Adjusted Benefit = PIA * (1 - Early Reduction % + Delayed Credits %)",
    formulaExplanation: "Adjusts your Primary Insurance Amount based on the number of months between your actual claiming date and Full Retirement Age.",
    section2Title: "Strategic Claiming Considerations",
    tips: [
      { title: "Analyze Breakeven Life Expectancy", desc: "The cumulative breakeven age between claiming at 62 vs. 70 is typically between ages 78 and 82. If family longevity is strong, delaying pays off dramatically." },
      { title: "Coordinate Spousal & Survivor Benefits", desc: "The higher-earning spouse should generally delay until age 70 to maximize the surviving spouse's lifetime benefit." },
      { title: "Monitor the Earnings Test", desc: "Claiming before Full Retirement Age while continuing to work full-time temporarily withholds benefits if earnings exceed annual statutory limits." }
    ]
  },

  // 38. FIRE Calculator
  "fire-calculator": {
    title: "Financial Independence, Retire Early (FIRE) Blueprint",
    intro: "The FIRE movement is built on the mathematical principle that your annual investment returns can permanently cover all living expenses once your portfolio reaches a defined multiple of your lifestyle costs.",
    section1Title: "The Rule of 25 and Safe Withdrawal Rates",
    section1Content: "Based on historical market returns and the Trinity Study, a 4% initial safe withdrawal rate (adjusted annually for inflation) gives an investment portfolio a 95%+ probability of lasting 30 years. To determine your FIRE target number, multiply your annual living expenses by 25 (or by 33 for an ultra-safe 3% withdrawal rate).",
    formulaTitle: "The Core FIRE Target Formula",
    formula: "FIRE Number = Annual Living Expenses / Safe Withdrawal Rate (e.g. 0.04)",
    formulaExplanation: "Calculates the total invested portfolio required before you can sustainably live off investment returns indefinitely.",
    section2Title: "Key Accelerators to Reach Early Retirement",
    tips: [
      { title: "Maximize Your Savings Rate", desc: "Saving 50% to 70% of your take-home pay can compress a traditional 40-year working career into just 10 to 17 years." },
      { title: "Control the Big Three Expenses", desc: "Housing, transportation, and groceries represent over 60% of most household budgets; optimizing these yields the fastest timeline gains." },
      { title: "Diversify Asset Allocation", desc: "Hold low-cost total market index funds with adequate cash cushions to mitigate sequence-of-returns risk during market downturns." }
    ]
  },

  // 39. Superannuation
  "superannuation": {
    title: "Superannuation & Retirement Compounding Guide",
    intro: "Superannuation is a tax-advantaged compulsory retirement framework where employer contributions and voluntary salary sacrifices grow over decades to provide retirement security.",
    section1Title: "The Super Guarantee & Concessional Contributions",
    section1Content: "Employer Superannuation Guarantee (SG) contributions are taxed at a concessional rate of 15% inside the super fund, significantly lower than personal marginal tax rates, maximizing compounding efficiency.",
    formulaTitle: "Superannuation Projection Formula",
    formula: "FV = Balance * (1 + r)^t + Annual_Super * [((1 + r)^t - 1) / r]",
    formulaExplanation: "Forecasts super balance accumulation factoring in employer contributions, voluntary salary sacrifice, investment returns, and fund fees.",
    section2Title: "Ways to Boost Your Super Nest Egg",
    tips: [
      { title: "Consolidate Multiple Accounts", desc: "Merging fragmented super accounts eliminates duplicate administration fees and unnecessary insurance premiums." },
      { title: "Salary Sacrifice Pre-Tax Cash", desc: "Directing pre-tax earnings into super reduces personal taxable income while growing your balance at concessional tax rates." },
      { title: "Review Investment Options", desc: "Younger workers with multi-decade horizons typically benefit from high-growth or index-heavy investment allocations." }
    ]
  },

  // 40. Amortization Schedule Calculator
  "amortization-schedule": {
    title: "The Mathematical Mechanics of Loan Amortization",
    intro: "Amortization is the systematic reduction of debt through regular periodic installments. Understanding the mathematical split between principal and interest is the cornerstone of effective debt management and wealth acceleration.",
    section1Title: "Why Interest Dominates Early Loan Payments",
    section1Content: "Because interest is accrued directly against your remaining unpaid balance, early payments are heavily weighted toward interest charges. As monthly payments gradually reduce the outstanding principal balance, the interest charge diminishes, creating a convex curve where principal reduction rapidly accelerates in the final third of the loan term.",
    formulaTitle: "Standard Amortization & Accelerated Payoff Equation",
    formula: "M = P * [r(1 + r)^n] / [(1 + r)^n - 1]",
    formulaExplanation: "Where M is periodic payment, P is principal balance, r is periodic rate (annual rate / 12), and n is total payment periods. When extra principal ΔP is added, the remaining periods n_new decreases logarithmically: n_new = -ln(1 - r*P / (M + ΔP)) / ln(1 + r).",
    section2Title: "Pro Strategies to Accelerate Payoff & Slash Interest",
    tips: [
      { title: "Designate Extra Cash Directly to Principal", desc: "Ensure your lender applies surplus funds to principal rather than advancing future scheduled payments." },
      { title: "Target the Critical First 7 Years", desc: "Extra payments made in the first 84 months generate the highest lifetime ROI because they permanently eliminate decades of compounding interest." },
      { title: "Export and Track Your Progress", desc: "Download our CSV schedule to import into your budget spreadsheet and cross-verify with your monthly lender statement." }
    ]
  },

  // 41. Certificate of Deposit (CD) Calculator
  "cd-calculator": {
    title: "Certificate of Deposit Yields, Compounding & Laddering",
    intro: "Certificates of Deposit (CDs) offer guaranteed, risk-free returns backed by federal insurance. Mastering CD math allows you to capture top-tier interest rates without sacrificing rolling financial liquidity.",
    section1Title: "Nominal Rate vs. Annual Percentage Yield (APY)",
    section1Content: "Banks advertise both the interest rate and the APY. While the nominal rate determines periodic interest accrual, APY factors in the compounding frequency (daily or monthly). High-frequency compounding (365 days) yields slightly faster growth than annual compounding.",
    formulaTitle: "Compound Interest APY Formula",
    formula: "APY = (1 + r / n)^n - 1",
    formulaExplanation: "Where r is the nominal annual interest rate and n is the compounding frequency per year (e.g., 365 for daily compounding or 12 for monthly compounding). Ending balance is calculated as A = P * (1 + r/n)^(n*t).",
    section2Title: "Advanced CD Laddering & Liquidity Tactics",
    tips: [
      { title: "Build a 5-Tranche Rolling Ladder", desc: "Stagger your capital across 1, 2, 3, 4, and 5-year CDs so that 20% of your portfolio matures every single year with zero penalty." },
      { title: "Compare Early Withdrawal Penalties", desc: "Review bank penalty clauses (e.g., 90 vs 180 days of interest) before locking away emergency cash." },
      { title: "Monitor the Yield Curve", desc: "In inverted yield curve environments, short-term 6-month to 12-month CDs often pay higher APYs than 5-year notes." }
    ]
  },

  // 42. Required Minimum Distribution (RMD) Calculator
  "rmd-calculator": {
    title: "IRS Required Minimum Distributions & SECURE Act 2.0 Rules",
    intro: "The IRS grants decades of tax deferral on traditional retirement accounts, but eventually mandates annual taxable withdrawals once you reach statutory age. Calculating exact distributions avoids severe federal tax penalties.",
    section1Title: "SECURE Act 2.0 Age Thresholds & IRS Uniform Tables",
    section1Content: "Under SECURE Act 2.0 legislation, the mandatory beginning age for RMDs increased to age 73 for those born between 1951 and 1959, and will rise to age 75 for individuals born in 1960 or later. Annual distributions are calculated using your December 31 prior-year balance divided by your IRS Uniform Lifetime Table III life expectancy factor.",
    formulaTitle: "Official IRS RMD Equation",
    formula: "RMD = Account_Balance_(Prior_Dec_31) / Distribution_Period_(IRS_Table_III)",
    formulaExplanation: "Where Distribution Period is the IRS life expectancy divisor corresponding to your age on December 31 of the distribution year (e.g., 26.5 for age 73, 24.6 for age 75).",
    section2Title: "Tax Optimization & Inherited IRA Rules",
    tips: [
      { title: "Watch the Strict December 31 Deadline", desc: "Failing to withdraw your full RMD results in a 25% federal excise tax penalty on the shortfall (reduced to 10% if corrected in 2 years)." },
      { title: "Utilize Qualified Charitable Distributions (QCDs)", desc: "Individuals age 70½ and older can donate up to $105,000 directly from an IRA to a qualified charity to satisfy RMDs with zero taxable income." },
      { title: "Navigate the Inherited IRA 10-Year Rule", desc: "Non-eligible beneficiaries must fully deplete inherited traditional IRA accounts by the 10th anniversary of the original owner's death." }
    ]
  }

};
