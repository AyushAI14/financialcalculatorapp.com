export interface CalculatorDefinition {
  url: string;
  nameKey: string;
  defaultName: string;
  descKey: string;
  defaultDesc: string;
  calcKey?: string;
  badge?: string;
}

export interface CategoryDefinition {
  key: string;
  nameKey: string;
  defaultName: string;
  icon: string;
  calculators: CalculatorDefinition[];
}

export const CATEGORIES_DATA: CategoryDefinition[] = [
  {
    key: 'emulators',
    nameKey: 'cat.emulators',
    defaultName: 'Hardware Emulators',
    icon: '⚡',
    calculators: [
      {
        url: '/emulators/hp-12c',
        nameKey: 'calc.hp12c.name',
        defaultName: 'HP 12C Financial Emulator',
        descKey: 'calc.hp12c.desc',
        defaultDesc: 'Interactive simulation of the classic HP 12C with RPN logic and amortization tables.',
        calcKey: 'hp-12c',
        badge: 'Classic RPN'
      },
      {
        url: '/emulators/ti-ba-ii-plus',
        nameKey: 'calc.tiba2.name',
        defaultName: 'TI BA II Plus Simulator',
        descKey: 'calc.tiba2.desc',
        defaultDesc: 'Full emulator for CFA and finance students to compute TVM, cash flows, and IRR.',
        calcKey: 'ti-ba-ii-plus',
        badge: 'CFA Exam'
      }
    ]
  },
  {
    key: 'finance',
    nameKey: 'cat.finance',
    defaultName: 'Finance & Investment',
    icon: '📈',
    calculators: [
      {
        url: '/finance/compound-interest',
        nameKey: 'calc.compound.name',
        defaultName: 'Compound Interest Calculator',
        descKey: 'calc.compound.desc',
        defaultDesc: 'See how your money multiplies over time with recurring contributions and compound growth.',
        calcKey: 'compound-interest'
      },
      {
        url: '/finance/daily-compound-interest',
        nameKey: 'calc.dailycompound.name',
        defaultName: 'Daily Compound Interest',
        descKey: 'calc.dailycompound.desc',
        defaultDesc: 'Calculate how daily compounding accelerates your savings balance and annual yield.',
        calcKey: 'daily-compound-interest'
      },
      {
        url: '/finance/tvm',
        nameKey: 'calc.tvm.name',
        defaultName: 'TVM Calculator',
        descKey: 'calc.tvm.desc',
        defaultDesc: 'Solve for present value, future value, interest rate, payments, or time periods in seconds.',
        calcKey: 'tvm'
      },
      {
        url: '/finance/savings-goal',
        nameKey: 'calc.savingsgoal.name',
        defaultName: 'Savings Goal Calculator',
        descKey: 'calc.savingsgoal.desc',
        defaultDesc: 'Find out exactly how much you need to save each month to hit your financial milestone.',
        calcKey: 'savings-goal'
      },
      {
        url: '/finance/roi',
        nameKey: 'calc.roi.name',
        defaultName: 'ROI Calculator',
        descKey: 'calc.roi.desc',
        defaultDesc: 'Measure the net percentage return and annualized profitability of any investment.',
        calcKey: 'roi'
      },
      {
        url: '/finance/stock-return',
        nameKey: 'calc.stockreturn.name',
        defaultName: 'Stock Return Calculator',
        descKey: 'calc.stockreturn.desc',
        defaultDesc: 'Calculate total gains, annualized return (CAGR), and dividend growth for any stock or fund.',
        calcKey: 'stock-return'
      },
      {
        url: '/finance/dividend',
        nameKey: 'calc.dividend.name',
        defaultName: 'Dividend Calculator',
        descKey: 'calc.dividend.desc',
        defaultDesc: 'Forecast your passive dividend income and the power of automatic dividend reinvestment (DRIP).',
        calcKey: 'dividend'
      },
      {
        url: '/finance/inflation',
        nameKey: 'calc.inflation.name',
        defaultName: 'Inflation Calculator',
        descKey: 'calc.inflation.desc',
        defaultDesc: 'Discover how inflation erodes purchasing power over time and what your future dollars will buy.',
        calcKey: 'inflation'
      },
      {
        url: '/finance/paycheck',
        nameKey: 'calc.paycheck.name',
        defaultName: 'Paycheck Calculator',
        descKey: 'calc.paycheck.desc',
        defaultDesc: 'Estimate your take-home pay after federal, state, and FICA payroll tax deductions.',
        calcKey: 'paycheck'
      },
      {
        url: '/finance/net-worth',
        nameKey: 'calc.networth.name',
        defaultName: 'Net Worth Tracker',
        descKey: 'calc.networth.desc',
        defaultDesc: 'Track your complete financial health by subtracting total debts and liabilities from assets.',
        calcKey: 'net-worth'
      },
      {
        url: '/finance/emergency-fund',
        nameKey: 'calc.emergencyfund.name',
        defaultName: 'Emergency Fund Calculator',
        descKey: 'calc.emergencyfund.desc',
        defaultDesc: 'Determine your ideal cash safety cushion based on your essential monthly living expenses.',
        calcKey: 'emergency-fund'
      },
      {
        url: '/finance/fee-impact',
        nameKey: 'calc.feeimpact.name',
        defaultName: 'Investment Fee Calculator',
        descKey: 'calc.feeimpact.desc',
        defaultDesc: 'Reveal how hidden management fees and expense ratios reduce your long-term retirement wealth.',
        calcKey: 'fee-impact'
      },
      {
        url: '/finance/college-savings',
        nameKey: 'calc.collegesavings.name',
        defaultName: 'College Savings (529)',
        descKey: 'calc.collegesavings.desc',
        defaultDesc: 'Project tuition costs and model tax-advantaged 529 savings to fund future education.',
        calcKey: 'college-savings'
      },
      {
        url: '/finance/crypto-dca',
        nameKey: 'calc.cryptodca.name',
        defaultName: 'Crypto DCA Calculator',
        descKey: 'calc.cryptodca.desc',
        defaultDesc: 'Simulate dollar-cost averaging (DCA) into Bitcoin, Ethereum, and crypto assets with recurring purchases.',
        calcKey: 'crypto-dca',
        badge: 'Crypto'
      },
      {
        url: '/finance/capm',
        nameKey: 'calc.capm.name',
        defaultName: 'CAPM Calculator',
        descKey: 'calc.capm.desc',
        defaultDesc: 'Calculate the expected rate of return for an asset using Capital Asset Pricing Model based on beta.',
        calcKey: 'capm'
      }
    ]
  },
  {
    key: 'loan',
    nameKey: 'cat.loan',
    defaultName: 'Loan & Mortgage',
    icon: '🏠',
    calculators: [
      {
        url: '/loan/calculator',
        nameKey: 'calc.loan.name',
        defaultName: 'Loan Calculator',
        descKey: 'calc.loan.desc',
        defaultDesc: 'Calculate monthly payments, total interest costs, and full amortization payoff schedules.',
        calcKey: 'loan'
      },
      {
        url: '/loan/mortgage',
        nameKey: 'calc.mortgage.name',
        defaultName: 'Mortgage Calculator',
        descKey: 'calc.mortgage.desc',
        defaultDesc: 'Estimate total monthly payments including principal, interest, taxes, insurance, and PMI.',
        calcKey: 'mortgage'
      },
      {
        url: '/loan/debt-consolidation',
        nameKey: 'calc.debtconsolidation.name',
        defaultName: 'Debt Consolidation Calculator',
        descKey: 'calc.debtconsolidation.desc',
        defaultDesc: 'See if combining multiple high-interest credit lines into one loan lowers your payments.',
        calcKey: 'debt-consolidation'
      },
      {
        url: '/loan/debt-payoff',
        nameKey: 'calc.debtsnowball.name',
        defaultName: 'Debt Snowball vs Avalanche',
        descKey: 'calc.debtsnowball.desc',
        defaultDesc: 'Compare Debt Snowball vs. Avalanche to see which payoff order eliminates balances fastest.',
        calcKey: 'debt-payoff'
      },
      {
        url: '/loan/refinance',
        nameKey: 'calc.loanrefinance.name',
        defaultName: 'Loan Refinance Calculator',
        descKey: 'calc.loanrefinance.desc',
        defaultDesc: 'Find your break-even point and discover if a lower interest rate offsets closing costs.',
        calcKey: 'refinance'
      },
      {
        url: '/loan/student-loan',
        nameKey: 'calc.studentloan.name',
        defaultName: 'Student Loan IDR Calculator',
        descKey: 'calc.studentloan.desc',
        defaultDesc: 'Compare standard and income-driven repayment plans (IDR/SAVE) to lower monthly payments.',
        calcKey: 'student-loan'
      },
      {
        url: '/loan/dti',
        nameKey: 'calc.dti.name',
        defaultName: 'Debt-to-Income (DTI) Calculator',
        descKey: 'calc.dti.desc',
        defaultDesc: 'Check your debt-to-income ratio against bank lending standards before applying for a loan.',
        calcKey: 'dti'
      },
      {
        url: '/loan/apr',
        nameKey: 'calc.apr.name',
        defaultName: 'APR Calculator',
        descKey: 'calc.apr.desc',
        defaultDesc: 'Uncover true borrowing costs by factoring upfront lender fees into nominal interest rates.',
        calcKey: 'apr'
      },
      {
        url: '/loan/rent-vs-buy',
        nameKey: 'calc.rentvsbuy.name',
        defaultName: 'Rent vs Buy Calculator',
        descKey: 'calc.rentvsbuy.desc',
        defaultDesc: 'Compare homeownership equity against renting and investing the difference.',
        calcKey: 'rent-vs-buy'
      },
      {
        url: '/loan/home-affordability',
        nameKey: 'calc.homeaffordability.name',
        defaultName: 'Home Affordability Calculator',
        descKey: 'calc.homeaffordability.desc',
        defaultDesc: 'Determine your maximum home purchase budget based on income, down payment, and monthly debt.',
        calcKey: 'home-affordability'
      }
    ]
  },
  {
    key: 'credit',
    nameKey: 'cat.credit',
    defaultName: 'Credit Card & Auto',
    icon: '💳',
    calculators: [
      {
        url: '/credit-card/payoff',
        nameKey: 'calc.creditcardpayoff.name',
        defaultName: 'Credit Card Payoff Calculator',
        descKey: 'calc.creditcardpayoff.desc',
        defaultDesc: 'Calculate how long minimum payments take to clear and how much extra payments save on interest.',
        calcKey: 'credit-card-payoff'
      },
      {
        url: '/auto/loan',
        nameKey: 'calc.autoloan.name',
        defaultName: 'Auto & Car Finance Calculator',
        descKey: 'calc.autoloan.desc',
        defaultDesc: 'Plan your vehicle purchase with sales tax, trade-in value, and monthly loan payments.',
        calcKey: 'auto-loan'
      }
    ]
  },
  {
    key: 'retirement',
    nameKey: 'cat.retirement',
    defaultName: 'Retirement & Wealth',
    icon: '⏳',
    calculators: [
      {
        url: '/retirement/401k',
        nameKey: 'calc.401k.name',
        defaultName: '401(k) Contribution Planner',
        descKey: 'calc.401k.desc',
        defaultDesc: 'Maximize your employer match and project how paycheck contributions grow your nest egg.',
        calcKey: '401k'
      },
      {
        url: '/retirement/social-security',
        nameKey: 'calc.socialsecurity.name',
        defaultName: 'Social Security Estimator',
        descKey: 'calc.socialsecurity.desc',
        defaultDesc: 'Estimate monthly benefits and see how claiming early vs. late changes lifetime income.',
        calcKey: 'social-security'
      },
      {
        url: '/retirement/fire-calculator',
        nameKey: 'calc.fire.name',
        defaultName: 'FIRE Calculator',
        descKey: 'calc.fire.desc',
        defaultDesc: 'Calculate your Financial Independence number and how many years until early retirement.',
        calcKey: 'fire-calculator'
      },
      {
        url: '/retirement/superannuation',
        nameKey: 'calc.superannuation.name',
        defaultName: 'Superannuation Calculator',
        descKey: 'calc.superannuation.desc',
        defaultDesc: 'Model Australian super balances with employer contributions, salary sacrifice, and tax concessions.',
        calcKey: 'superannuation'
      },
      {
        url: '/retirement/ira-comparison',
        nameKey: 'calc.iracomparison.name',
        defaultName: 'Roth vs Trad IRA',
        descKey: 'calc.iracomparison.desc',
        defaultDesc: 'Compare upfront tax deductions versus tax-free retirement withdrawals to choose the right IRA.',
        calcKey: 'ira-comparison'
      },
      {
        url: '/retirement/planner',
        nameKey: 'calc.retirement.name',
        defaultName: 'Retirement Planner',
        descKey: 'calc.retirement.desc',
        defaultDesc: 'Project total retirement savings, safe withdrawal rates, and annual retirement income.',
        calcKey: 'retirement-planner'
      }
    ]
  },
  {
    key: 'compare',
    nameKey: 'cat.compare',
    defaultName: 'Comparisons & Decisions',
    icon: '⚖️',
    calculators: [
      {
        url: '/compare/snowball-vs-avalanche',
        nameKey: 'compare.snowball.name',
        defaultName: 'Snowball vs Avalanche Decision',
        descKey: 'compare.snowball.desc',
        defaultDesc: 'Compare Debt Snowball vs. Avalanche strategies side-by-side to minimize total interest or maximize motivation.',
        badge: 'Comparison'
      },
      {
        url: '/compare/roth-vs-traditional-ira',
        nameKey: 'compare.ira.name',
        defaultName: 'Roth vs Traditional IRA Guide',
        descKey: 'compare.ira.desc',
        defaultDesc: 'Compare tax deductions, income limits, and tax-free retirement growth between Roth and Traditional IRAs.',
        badge: 'Comparison'
      },
      {
        url: '/compare/apr-vs-nominal',
        nameKey: 'compare.apr.name',
        defaultName: 'APR vs Nominal Rate Analysis',
        descKey: 'compare.apr.desc',
        defaultDesc: 'Understand how upfront fees, points, and compounding frequency separate nominal rates from true APR.',
        badge: 'Comparison'
      }
    ]
  }
];

export interface LocalizedCalculatorItem {
  id: string;
  url: string;
  name: string;
  snippet: string;
  categoryKey: string;
  categoryName: string;
  icon: string;
  badge?: string;
  calcKey?: string;
}

export interface LocalizedCategory {
  key: string;
  name: string;
  icon: string;
  count: number;
  links: { name: string; url: string; badge?: string }[];
  calculators: LocalizedCalculatorItem[];
}

export function getLocalizedCategories(t: (key: string, fallback?: string) => string): LocalizedCategory[] {
  return CATEGORIES_DATA.map(cat => {
    const categoryName = t(cat.nameKey, cat.defaultName);
    const calculators: LocalizedCalculatorItem[] = cat.calculators.map(c => ({
      id: c.url.replace(/^\//, '').replace(/\//g, '-'),
      url: c.url,
      name: t(c.nameKey, c.defaultName),
      snippet: t(c.descKey, c.defaultDesc),
      categoryKey: cat.key,
      categoryName,
      icon: cat.icon,
      badge: c.badge,
      calcKey: c.calcKey
    }));

    return {
      key: cat.key,
      name: categoryName,
      icon: cat.icon,
      count: calculators.length,
      links: calculators.map(c => ({ name: c.name, url: c.url, badge: c.badge })),
      calculators
    };
  });
}

export function getAllCalculatorsFlat(t: (key: string, fallback?: string) => string): LocalizedCalculatorItem[] {
  const categories = getLocalizedCategories(t);
  return categories.flatMap(cat => cat.calculators);
}

export const PATH_TO_CALC_KEY: Record<string, string> = CATEGORIES_DATA.reduce((acc, cat) => {
  cat.calculators.forEach(c => {
    if (c.calcKey) {
      acc[c.url] = c.calcKey;
    }
  });
  return acc;
}, {} as Record<string, string>);
