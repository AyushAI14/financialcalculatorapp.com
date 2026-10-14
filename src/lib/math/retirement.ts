/**
 * Pure mathematical functions for Retirement, 401k, Dividend, and Stock/CAPM calculations.
 */

// ─── RETIREMENT PLANNER ───

export interface RetirementParams {
  currentAge: number;
  retirementAge: number;
  lifeExpectancy: number;
  currentSavings: number;
  monthlyContribution: number;
  contributionIncreaseRate: number; // annual growth rate of contribution (e.g. inflation)
  investmentReturnPre: number; // annual return pre-retirement (decimal)
  investmentReturnPost: number; // annual return post-retirement (decimal)
  inflationRate: number; // annual inflation rate (decimal)
  monthlyIncomeNeededPost: number; // monthly spending needed during retirement (in today's dollars)
}

export interface RetirementYearSimulation {
  age: number;
  startingBalance: number;
  contributions: number;
  withdrawals: number;
  interest: number;
  endingBalance: number;
}

export function simulateRetirementPath(params: RetirementParams): {
  schedule: RetirementYearSimulation[];
  targetNestEgg: number;
  actualNestEgg: number;
  isFundingSufficient: boolean;
} {
  const {
    currentAge, retirementAge, lifeExpectancy, currentSavings,
    monthlyContribution, contributionIncreaseRate,
    investmentReturnPre, investmentReturnPost, inflationRate,
    monthlyIncomeNeededPost
  } = params;

  const schedule: RetirementYearSimulation[] = [];
  
  let balance = currentSavings;
  let currentMonthlyContribution = monthlyContribution;
  
  // Calculate pre-retirement phase with safe upper bounds
  const yearsToRetire = Math.min(Math.max(0, retirementAge - currentAge), 100);
  const yearsInRetirement = Math.min(Math.max(0, lifeExpectancy - retirementAge), 100);

  if (yearsToRetire <= 0 || yearsInRetirement <= 0) {
    return {
      schedule: [{
        age: currentAge,
        startingBalance: currentSavings,
        contributions: 0,
        withdrawals: 0,
        interest: 0,
        endingBalance: currentSavings
      }],
      actualNestEgg: currentSavings,
      targetNestEgg: 0,
      isFundingSufficient: false
    };
  }

  // Simulate pre-retirement years (accumulation)
  for (let y = 1; y <= yearsToRetire; y++) {
    const age = currentAge + y - 1;
    const startingBalance = balance;
    
    // Sum monthly contributions for the year
    const yearContribution = currentMonthlyContribution * 12;
    
    // Compound balance and contributions
    // Assume deposits are monthly (end of month compounding)
    const rMonthly = Math.pow(1 + investmentReturnPre, 1 / 12) - 1;
    let interestEarned = 0;
    
    for (let m = 1; m <= 12; m++) {
      const interest = balance * rMonthly;
      interestEarned += interest;
      balance = balance + interest + currentMonthlyContribution;
    }
    
    schedule.push({
      age,
      startingBalance,
      contributions: yearContribution,
      withdrawals: 0,
      interest: interestEarned,
      endingBalance: balance
    });
    
    // Inflate monthly contributions for the next year
    currentMonthlyContribution = currentMonthlyContribution * (1 + contributionIncreaseRate);
  }

  const actualNestEgg = balance;

  // Calculate required nest egg at retirement age
  // We need to support 'monthlyIncomeNeededPost' (adjusted for inflation at retirement age)
  // for 'yearsInRetirement' years.
  const monthlySpendingInflationAdjusted = monthlyIncomeNeededPost * Math.pow(1 + inflationRate, yearsToRetire);
  
  // Solve for present value of annuity at retirement age
  // using post-retirement interest rate adjusted for inflation (real return rate)
  const realPostReturn = (1 + investmentReturnPost) / (1 + inflationRate) - 1;
  const rPostMonthly = Math.pow(1 + realPostReturn, 1 / 12) - 1;
  const totalMonthsPost = yearsInRetirement * 12;
  
  let targetNestEgg = 0;
  if (realPostReturn === 0) {
    targetNestEgg = monthlySpendingInflationAdjusted * totalMonthsPost;
  } else {
    targetNestEgg = monthlySpendingInflationAdjusted * (1 - Math.pow(1 + rPostMonthly, -totalMonthsPost)) / rPostMonthly;
  }

  // Simulate post-retirement years (withdrawal phase)
  let inflatedWithdrawalMonthly = monthlySpendingInflationAdjusted;

  for (let y = 1; y <= yearsInRetirement; y++) {
    const age = retirementAge + y - 1;
    const startingBalance = balance;
    
    let yearWithdrawal = 0;
    let interestEarned = 0;
    const rPostMonthlyActual = Math.pow(1 + investmentReturnPost, 1 / 12) - 1;

    for (let m = 1; m <= 12; m++) {
      if (balance > 0) {
        // Withdraw at beginning of month
        const actualWithdrawal = Math.min(balance, inflatedWithdrawalMonthly);
        balance = balance - actualWithdrawal;
        yearWithdrawal += actualWithdrawal;
        
        // Compound
        const interest = balance * rPostMonthlyActual;
        interestEarned += interest;
        balance = balance + interest;
      }
    }

    schedule.push({
      age,
      startingBalance,
      contributions: 0,
      withdrawals: yearWithdrawal,
      interest: interestEarned,
      endingBalance: balance
    });

    // Inflate monthly withdrawals for the next year
    inflatedWithdrawalMonthly = inflatedWithdrawalMonthly * (1 + inflationRate);
  }

  const isFundingSufficient = actualNestEgg >= targetNestEgg;

  return {
    schedule,
    targetNestEgg: Math.round(targetNestEgg),
    actualNestEgg: Math.round(actualNestEgg),
    isFundingSufficient
  };
}

// ─── 401K CONTRIBUTION & EMPLOYER MATCH ───

export interface FourOhOneKParams {
  annualSalary: number;
  salaryIncreaseRate: number; // annual decimal
  contributionPct: number; // employee contribution (decimal)
  current401kBalance: number;
  employerMatchPct: number; // employer matching percentage (e.g. 50% match = 0.50)
  employerMaxMatchPct: number; // employer matching ceiling (e.g. up to 6% of salary = 0.06)
  annualReturn: number; // investment growth decimal
  taxRate: number; // employee marginal tax rate decimal (for pre-tax savings display)
  yearsToRetire: number;
}

export interface FourOhOneKYearSimulation {
  year: number;
  salary: number;
  startingBalance: number;
  employeeContributions: number;
  employerMatch: number;
  interest: number;
  endingBalance: number;
  taxSavings: number;
}

export function simulate401KPath(params: FourOhOneKParams): FourOhOneKYearSimulation[] {
  const {
    annualSalary, salaryIncreaseRate, contributionPct, current401kBalance,
    employerMatchPct, employerMaxMatchPct, annualReturn, taxRate, yearsToRetire
  } = params;

  const schedule: FourOhOneKYearSimulation[] = [];
  let balance = current401kBalance;
  let salary = annualSalary;

  const safeYearsToRetire = Math.min(Math.max(0, Math.floor(yearsToRetire || 0)), 100);

  if (safeYearsToRetire <= 0) {
    return [{
      year: 0,
      salary: annualSalary,
      startingBalance: current401kBalance,
      employeeContributions: 0,
      employerMatch: 0,
      interest: 0,
      endingBalance: current401kBalance,
      taxSavings: 0
    }];
  }

  for (let y = 1; y <= safeYearsToRetire; y++) {
    const startingBalance = balance;
    
    // Calculate employee annual contribution
    const employeeContributions = salary * contributionPct;
    
    // Calculate employer match
    // Standard rule: matches matchingPct up to maxMatchingPct of salary
    const matchedSalaryPct = Math.min(contributionPct, employerMaxMatchPct);
    const employerMatch = salary * matchedSalaryPct * employerMatchPct;
    
    // Total annual contributions
    const totalDeposits = employeeContributions + employerMatch;
    
    // pre-tax tax savings
    const taxSavings = employeeContributions * taxRate;
    
    // Compound monthly
    const rMonthly = Math.pow(1 + annualReturn, 1 / 12) - 1;
    const monthlyDeposit = totalDeposits / 12;
    let interestEarned = 0;
    
    for (let m = 1; m <= 12; m++) {
      const interest = balance * rMonthly;
      interestEarned += interest;
      balance = balance + interest + monthlyDeposit;
    }

    schedule.push({
      year: y,
      salary,
      startingBalance,
      employeeContributions,
      employerMatch,
      interest: interestEarned,
      endingBalance: balance,
      taxSavings
    });

    // Inflate salary for next year
    salary = salary * (1 + salaryIncreaseRate);
  }

  return schedule;
}

// ─── DIVIDEND CALCULATOR ───

export interface DividendParams {
  initialInvestment: number;
  annualContribution: number;
  dividendYield: number; // annual yield decimal (e.g. 0.035 for 3.5%)
  dividendGrowthRate: number; // annual increase in dividend yield (decimal)
  sharePriceGrowthRate: number; // annual appreciation of principal (decimal)
  reinvestDividends: boolean;
  taxRate: number; // tax rate on dividends decimal (e.g. 0.15)
  years: number;
}

export interface DividendYearSimulation {
  year: number;
  startingBalance: number;
  deposits: number;
  dividendsEarned: number;
  taxesPaid: number;
  appreciation: number;
  endingBalance: number;
  totalDividendsCum: number;
}

export function simulateDividends(params: DividendParams): DividendYearSimulation[] {
  const {
    initialInvestment, annualContribution, dividendYield, dividendGrowthRate,
    sharePriceGrowthRate, reinvestDividends, taxRate, years
  } = params;

  const schedule: DividendYearSimulation[] = [];
  const safeYears = Math.min(Math.max(1, Math.floor(years || 0)), 100);
  
  let balance = initialInvestment;
  let currentYield = dividendYield;
  let cumDividends = 0;

  for (let y = 1; y <= safeYears; y++) {
    const startingBalance = balance;
    
    // Add annual contribution at beginning of year
    balance += annualContribution;
    
    // Calculate dividend earned on starting + contribution
    const grossDividends = balance * currentYield;
    const taxes = grossDividends * taxRate;
    const netDividends = grossDividends - taxes;
    
    cumDividends += grossDividends;
    
    let reinvestedAmount = 0;
    if (reinvestDividends) {
      reinvestedAmount = netDividends;
      balance += reinvestedAmount;
    }
    
    // Apply stock price appreciation
    const appreciation = balance * sharePriceGrowthRate;
    balance += appreciation;

    schedule.push({
      year: y,
      startingBalance,
      deposits: annualContribution,
      dividendsEarned: grossDividends,
      taxesPaid: taxes,
      appreciation,
      endingBalance: balance,
      totalDividendsCum: cumDividends
    });

    // Adjust dividend yield based on payout growth relative to share price growth
    const growthFactor = (1 + dividendGrowthRate) / (1 + sharePriceGrowthRate);
    currentYield = Math.max(0, Math.min(currentYield * growthFactor, 1.0));
  }

  return schedule;
}

// ─── STOCK RETURN & CAPM ───

export interface CAPMParams {
  riskFreeRate: number; // decimal (e.g. 0.04 for 4%)
  beta: number; // beta coefficient
  marketReturn: number; // expected market return decimal (e.g. 0.09)
}

export function calculateCAPM(params: CAPMParams): number {
  const { riskFreeRate, beta, marketReturn } = params;
  
  // CAPM Formula: E(R) = Rf + beta * (Rm - Rf)
  return riskFreeRate + beta * (marketReturn - riskFreeRate);
}

export interface StockReturnParams {
  buyPrice: number;
  sellPrice: number;
  shares: number;
  dividendsPaid: number; // total dividend per share
  holdingPeriodYears: number;
}

export function calculateStockReturns(params: StockReturnParams) {
  const { buyPrice, sellPrice, shares, dividendsPaid, holdingPeriodYears } = params;
  
  const initialCost = buyPrice * shares;
  const salesProceeds = sellPrice * shares;
  const totalDividends = dividendsPaid * shares;
  
  const netGain = (salesProceeds + totalDividends) - initialCost;
  const totalReturnPct = initialCost === 0 ? 0 : (netGain / initialCost);
  
  let annualizedReturn = 0;
  if (holdingPeriodYears > 0 && initialCost > 0 && (salesProceeds + totalDividends) > 0) {
    annualizedReturn = Math.pow((salesProceeds + totalDividends) / initialCost, 1 / holdingPeriodYears) - 1;
  }

  return {
    initialCost,
    salesProceeds,
    totalDividends,
    netGain,
    totalReturnPct,
    annualizedReturn
  };
}

// ─── FIRE TRAJECTORY & MILESTONES ENGINE ───

export interface FireTrajectoryParams {
  currentAge: number;
  currentNetWorth: number;
  annualSavings: number;
  annualExpenses: number;
  swr: number; // e.g. 0.04
  realReturn: number; // e.g. 0.07
}

export interface FireTrajectoryEntry {
  age: number;
  year: number;
  label: string;
  netWorth: number;
  fireTarget: number;
  leanTarget: number;
  fatTarget: number;
  passiveIncome: number;
  isFireReached: boolean;
}

export function generateFireTrajectory(params: FireTrajectoryParams): {
  trajectory: FireTrajectoryEntry[];
  fireGoal: number;
  leanGoal: number;
  fatGoal: number;
  yearsToFire: number;
  fireAge: number;
  fundedPct: number;
} {
  const { currentAge, currentNetWorth, annualSavings, annualExpenses, swr, realReturn } = params;

  const fireGoal = swr > 0 ? annualExpenses / swr : 0;
  const leanGoal = fireGoal * 0.8;
  const fatGoal = fireGoal * 1.5;

  // Calculate years to FIRE
  let yearsToFire = 0;
  let testBalance = currentNetWorth;
  const maxSimYears = 60;

  if (currentNetWorth >= fireGoal) {
    yearsToFire = 0;
  } else if (realReturn <= 0 && annualSavings <= 0) {
    yearsToFire = 99;
  } else {
    while (testBalance < fireGoal && yearsToFire < maxSimYears) {
      testBalance = testBalance * (1 + realReturn) + annualSavings;
      yearsToFire++;
    }
  }

  const fireAge = currentAge + yearsToFire;
  const fundedPct = fireGoal > 0 ? Math.min(100, (currentNetWorth / fireGoal) * 100) : 0;

  // Horizon: project at least 5 years past FIRE, up to age 75 or 30 years min
  const horizonYears = Math.min(
    maxSimYears,
    Math.max(yearsToFire + 8, 25, 65 - currentAge)
  );

  const trajectory: FireTrajectoryEntry[] = [];
  let currentNW = currentNetWorth;

  // Age 0 / Year 0
  trajectory.push({
    age: Math.round(currentAge),
    year: 0,
    label: `Age ${Math.round(currentAge)}`,
    netWorth: Math.round(currentNW),
    fireTarget: Math.round(fireGoal),
    leanTarget: Math.round(leanGoal),
    fatTarget: Math.round(fatGoal),
    passiveIncome: Math.round(currentNW * swr),
    isFireReached: currentNW >= fireGoal
  });

  for (let y = 1; y <= horizonYears; y++) {
    const age = Math.round(currentAge + y);
    const reached = currentNW >= fireGoal;

    if (!reached) {
      // Accumulation phase: investing savings + compound growth
      currentNW = currentNW * (1 + realReturn) + annualSavings;
    } else {
      // Post-FIRE phase: portfolio sustains annual expenses (indexed to real return)
      currentNW = Math.max(0, (currentNW - annualExpenses) * (1 + realReturn));
    }

    trajectory.push({
      age,
      year: y,
      label: `Age ${age}`,
      netWorth: Math.round(currentNW),
      fireTarget: Math.round(fireGoal),
      leanTarget: Math.round(leanGoal),
      fatTarget: Math.round(fatGoal),
      passiveIncome: Math.round(currentNW * swr),
      isFireReached: reached || (currentNW >= fireGoal)
    });
  }

  return {
    trajectory,
    fireGoal: Math.round(fireGoal),
    leanGoal: Math.round(leanGoal),
    fatGoal: Math.round(fatGoal),
    yearsToFire,
    fireAge,
    fundedPct
  };
}

// ─── SUPERANNUATION TRAJECTORY ENGINE ───

export interface SuperTrajectoryParams {
  currentSuper: number;
  salary: number;
  currentAge: number;
  retireAge: number;
  sgRate: number; // e.g. 0.12
  salarySacrificeMonthly: number;
  grossReturn: number; // e.g. 0.075
  fees: number; // e.g. 0.008
}

export interface SuperTrajectoryEntry {
  age: number;
  year: number;
  label: string;
  totalBalance: number;
  startingBalance: number;
  cumEmployerContrib: number; // net of 15% tax
  cumSacrificeContrib: number; // net of 15% tax
  compoundGrowth: number;
  baselineBalance: number; // balance without salary sacrifice
}

export function generateSuperTrajectory(params: SuperTrajectoryParams): {
  trajectory: SuperTrajectoryEntry[];
  finalBalance: number;
  baselineBalance: number;
  sacrificeBonus: number;
  totalEmployerPaid: number;
  asfaSingle: number;
  asfaCouple: number;
} {
  const {
    currentSuper,
    salary,
    currentAge,
    retireAge,
    sgRate,
    salarySacrificeMonthly,
    grossReturn,
    fees
  } = params;

  const netAnnualRate = Math.max(0, grossReturn - fees);
  const totalYears = Math.max(1, Math.min(60, Math.round(retireAge - currentAge)));

  // Australian Super statutory 15% contributions tax on concessional contributions
  const annualEmployerContrib = salary * sgRate;
  const netEmployerDeposit = annualEmployerContrib * 0.85;

  const annualSacrifice = salarySacrificeMonthly * 12;
  const netSacrificeDeposit = annualSacrifice * 0.85;

  const netAnnualDeposit = netEmployerDeposit + netSacrificeDeposit;

  const trajectory: SuperTrajectoryEntry[] = [];

  let balance = currentSuper;
  let baseBalance = currentSuper;
  let cumEmployer = 0;
  let cumSacrifice = 0;
  let grossEmployerPaid = 0;

  // Year 0
  trajectory.push({
    age: Math.round(currentAge),
    year: 0,
    label: `Age ${Math.round(currentAge)}`,
    totalBalance: Math.round(currentSuper),
    startingBalance: Math.round(currentSuper),
    cumEmployerContrib: 0,
    cumSacrificeContrib: 0,
    compoundGrowth: 0,
    baselineBalance: Math.round(currentSuper)
  });

  for (let y = 1; y <= totalYears; y++) {
    const age = Math.round(currentAge + y);

    balance = (balance + netAnnualDeposit) * (1 + netAnnualRate);
    baseBalance = (baseBalance + netEmployerDeposit) * (1 + netAnnualRate);

    cumEmployer += netEmployerDeposit;
    cumSacrifice += netSacrificeDeposit;
    grossEmployerPaid += annualEmployerContrib;

    const compoundGrowth = Math.max(0, balance - currentSuper - cumEmployer - cumSacrifice);

    trajectory.push({
      age,
      year: y,
      label: `Age ${age}`,
      totalBalance: Math.round(balance),
      startingBalance: Math.round(currentSuper),
      cumEmployerContrib: Math.round(cumEmployer),
      cumSacrificeContrib: Math.round(cumSacrifice),
      compoundGrowth: Math.round(compoundGrowth),
      baselineBalance: Math.round(baseBalance)
    });
  }

  const sacrificeBonus = Math.max(0, Math.round(balance - baseBalance));

  return {
    trajectory,
    finalBalance: Math.round(balance),
    baselineBalance: Math.round(baseBalance),
    sacrificeBonus,
    totalEmployerPaid: Math.round(grossEmployerPaid),
    asfaSingle: 595000,
    asfaCouple: 690000
  };
}

