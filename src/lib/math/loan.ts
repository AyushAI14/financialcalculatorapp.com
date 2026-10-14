/**
 * Pure mathematical functions for Loan, Amortization, APR, and Mortgage calculations.
 */

// ─── STANDARD LOAN CALCULATOR ───

export interface LoanParams {
  principal: number;
  rate: number; // annual rate as decimal (e.g. 0.055)
  years: number;
  compoundingFrequency?: number; // default monthly (12)
}

export interface AmortizationPeriod {
  period: number;
  startingBalance: number;
  payment: number;
  principal: number;
  interest: number;
  endingBalance: number;
}

export function calculateLoanPMT(params: LoanParams): number {
  const { principal, rate, years, compoundingFrequency = 12 } = params;
  if (years <= 0 || compoundingFrequency <= 0) return 0;
  const r = rate / compoundingFrequency;
  const n = years * compoundingFrequency;

  if (n <= 0) return 0;
  if (r === 0) return principal / n;
  const denom = Math.pow(1 + r, n) - 1;
  if (denom === 0) return principal / n;
  return principal * (r * Math.pow(1 + r, n)) / denom;
}

export function generateAmortizationSchedule(params: LoanParams): AmortizationPeriod[] {
  const { principal, rate, years, compoundingFrequency = 12 } = params;
  const schedule: AmortizationPeriod[] = [];
  if (years <= 0 || compoundingFrequency <= 0 || principal <= 0) return schedule;
  
  const pmt = calculateLoanPMT(params);
  const r = rate / compoundingFrequency;
  const totalPeriods = Math.min(years * compoundingFrequency, 2400);
  
  let balance = principal;
  for (let i = 1; i <= totalPeriods; i++) {
    const startingBalance = balance;
    let interest = balance * r;
    let principalPaid = pmt - interest;

    // Boundary check for last period — settle exact remaining balance
    if (balance - principalPaid < 0.01 || i === totalPeriods) {
      principalPaid = balance;
      interest = r === 0 ? 0 : startingBalance * r;
      const payment = principalPaid + interest;
      balance = 0;
      schedule.push({
        period: i,
        startingBalance,
        payment,
        principal: principalPaid,
        interest,
        endingBalance: balance
      });
      continue;
    } else {
      balance = balance - principalPaid;
    }
    
    schedule.push({
      period: i,
      startingBalance,
      payment: principalPaid + interest,
      principal: principalPaid,
      interest,
      endingBalance: balance
    });
  }
  return schedule;
}

// Helper to collapse monthly amortization into yearly summaries
export interface YearlyAmortizationSummary {
  year: number;
  startingBalance: number;
  totalPayments: number;
  principal: number;
  interest: number;
  endingBalance: number;
}

export function compileYearlyAmortization(monthlySchedule: AmortizationPeriod[], periodsPerYear: number = 12): YearlyAmortizationSummary[] {
  const yearly: YearlyAmortizationSummary[] = [];
  const ppy = Math.max(1, periodsPerYear);
  
  for (let y = 1; y <= Math.ceil(monthlySchedule.length / ppy); y++) {
    const startIdx = (y - 1) * ppy;
    const endIdx = Math.min(y * ppy - 1, monthlySchedule.length - 1);
    
    const yearStart = monthlySchedule[startIdx];
    const yearEnd = monthlySchedule[endIdx];
    if (!yearStart || !yearEnd) continue;
    
    let totalPayments = 0;
    let principal = 0;
    let interest = 0;
    
    for (let i = startIdx; i <= endIdx; i++) {
      totalPayments += monthlySchedule[i].payment;
      principal += monthlySchedule[i].principal;
      interest += monthlySchedule[i].interest;
    }
    
    yearly.push({
      year: y,
      startingBalance: yearStart.startingBalance,
      totalPayments,
      principal,
      interest,
      endingBalance: yearEnd.endingBalance
    });
  }
  return yearly;
}

// ─── APR CALCULATOR ───

export interface APRParams {
  loanAmount: number;
  interestRate: number; // nominal annual as decimal (e.g. 0.06)
  termYears: number;
  extraFees: number; // origination, points, closing fees
}

export function calculateAPR(params: APRParams): number {
  const { loanAmount, interestRate, termYears, extraFees } = params;
  if (termYears <= 0 || loanAmount <= 0) return 0;
  
  if (extraFees === 0) {
    return interestRate;
  }
  
  const netProceeds = loanAmount - extraFees;
  const n = termYears * 12;
  
  if (netProceeds <= 0) return NaN; // Fees equal or exceed loan amount
  
  const pmt = calculateLoanPMT({
    principal: loanAmount,
    rate: interestRate,
    years: termYears,
    compoundingFrequency: 12
  });
  
  if (pmt <= 0) return 0;
  
  const f = (i: number) => {
    if (i === 0) return netProceeds - pmt * n;
    return netProceeds * i - pmt * (1 - Math.pow(1 + i, -n));
  };
  
  let low = 0.0;
  let high = Math.max(0.5, (pmt * n / netProceeds) / n);
  while (f(high) < 0 && high < 10.0) {
    high *= 2;
  }
  
  let iRate = interestRate / 12;
  const tolerance = 1e-10;
  
  if (f(low) * f(high) <= 0) {
    for (let iter = 0; iter < 100; iter++) {
      iRate = (low + high) / 2;
      const val = f(iRate);
      if (Math.abs(val) < tolerance) break;
      if (val > 0) {
        high = iRate;
      } else {
        low = iRate;
      }
    }
  }
  
  return iRate * 12;
}

// ─── HOME AFFORDABILITY ───

export interface AffordabilityParams {
  grossMonthlyIncome: number;
  monthlyDebt: number; // car loans, student loans, cards
  downPayment: number;
  interestRate: number; // annual rate as decimal
  termYears: number;
  propertyTaxRate?: number; // annual decimal, default 0.012 (1.2%)
  homeownerInsuranceAnnual?: number; // default $1200
  hoaMonthly?: number; // default $0
  frontEndDTI?: number; // default 28% (0.28)
  backEndDTI?: number; // default 36% (0.36)
}

export function calculateHomeAffordability(params: AffordabilityParams) {
  const {
    grossMonthlyIncome,
    monthlyDebt,
    downPayment,
    interestRate,
    termYears,
    propertyTaxRate = 0.012,
    homeownerInsuranceAnnual = 1200,
    hoaMonthly = 0,
    frontEndDTI = 0.28,
    backEndDTI = 0.36
  } = params;

  // Max monthly payment allowed under Front-End (Housing) DTI
  const maxFrontEnd = grossMonthlyIncome * frontEndDTI;
  
  // Max monthly housing payment allowed under Back-End (Total Debt) DTI
  const maxBackEnd = (grossMonthlyIncome * backEndDTI) - monthlyDebt;

  // The binding budget limit
  const maxHousingPayment = Math.max(0, Math.min(maxFrontEnd, maxBackEnd));
  
  // Monthly costs for insurance and HOA
  const monthlyIns = homeownerInsuranceAnnual / 12;
  const maxAvailableForPIAndTax = maxHousingPayment - monthlyIns - hoaMonthly;

  if (maxAvailableForPIAndTax <= 0) {
    return {
      affordableHomePrice: 0,
      affordableLoanAmount: 0,
      monthlyPaymentLimit: maxHousingPayment,
      frontEndLimit: maxFrontEnd,
      backEndLimit: maxBackEnd
    };
  }

  // P&I factor per dollar of loan:
  // a = [r(1+r)^n] / [(1+r)^n - 1]
  const r = interestRate / 12;
  const n = termYears * 12;
  if (n <= 0) {
    return {
      affordableHomePrice: 0,
      affordableLoanAmount: 0,
      monthlyPaymentLimit: Math.round(maxHousingPayment),
      frontEndLimit: Math.round(maxFrontEnd),
      backEndLimit: Math.round(maxBackEnd)
    };
  }
  const a = r === 0 ? (1 / n) : (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  
  // Tax factor per dollar of home price:
  // b = taxRate / 12
  const b = propertyTaxRate / 12;

  // Solve: maxAvailableForPIAndTax = Loan * a + HomePrice * b
  // Since Loan = HomePrice - Downpayment
  // maxAvailableForPIAndTax = (HomePrice - DownPayment) * a + HomePrice * b
  // maxAvailableForPIAndTax = HomePrice * (a + b) - DownPayment * a
  // HomePrice = (maxAvailableForPIAndTax + DownPayment * a) / (a + b)
  const affordableHomePrice = (maxAvailableForPIAndTax + downPayment * a) / (a + b);
  const affordableLoanAmount = Math.max(0, affordableHomePrice - downPayment);

  return {
    affordableHomePrice: Math.round(affordableHomePrice),
    affordableLoanAmount: Math.round(affordableLoanAmount),
    monthlyPaymentLimit: Math.round(maxHousingPayment),
    frontEndLimit: Math.round(maxFrontEnd),
    backEndLimit: Math.round(maxBackEnd)
  };
}

// ─── RENT VS BUY CALCULATOR ───

export interface RentVsBuyParams {
  // Rent parameters
  monthlyRent: number;
  rentInflation: number; // annual decimal (e.g. 0.03)
  renterInvestmentReturn: number; // annual decimal (e.g. 0.07)
  
  // Buy parameters
  homePrice: number;
  downPayment: number;
  mortgageRate: number; // annual decimal
  mortgageTermYears: number;
  propertyTaxRate: number; // annual decimal
  insuranceAnnual: number;
  maintenanceRate: number; // annual decimal of home value
  appreciationRate: number; // annual decimal (e.g. 0.04)
  buyingFeesRate: number; // percentage of home price (e.g. 0.02)
  sellingFeesRate: number; // percentage of home price (e.g. 0.06)
  
  // General
  simulationYears: number;
}

export interface RentVsBuyYearSimulation {
  year: number;
  rentPaid: number;
  renterPortfolioValue: number;
  buyHousingCostsPaid: number;
  homeValue: number;
  remainingMortgage: number;
  buyerHomeEquity: number; // homeValue - remainingMortgage
  buyerNetWorth: number; // homeEquity - sellingFees
}

export function simulateRentVsBuy(params: RentVsBuyParams): RentVsBuyYearSimulation[] {
  const {
    monthlyRent, rentInflation, renterInvestmentReturn,
    homePrice, downPayment, mortgageRate, mortgageTermYears,
    propertyTaxRate, insuranceAnnual, maintenanceRate, appreciationRate,
    buyingFeesRate, sellingFeesRate, simulationYears
  } = params;

  const list: RentVsBuyYearSimulation[] = [];

  // Initialize mortgage
  const loanAmount = homePrice - downPayment;
  const mSchedule = generateAmortizationSchedule({
    principal: loanAmount,
    rate: mortgageRate,
    years: mortgageTermYears
  });

  // INITIAL STATE
  // Renter starts with downpayment + buying fees in their investment portfolio
  // (Assuming if they don't buy, they invest this lump sum)
  const initialBuyingFees = homePrice * buyingFeesRate;
  let renterPortfolio = downPayment + initialBuyingFees;
  
  let currentHomeValue = homePrice;
  let currentRent = monthlyRent;
  let currentInsurance = insuranceAnnual;

  const safeSimulationYears = Math.min(Math.max(1, Math.floor(simulationYears || 0)), 100);

  for (let y = 1; y <= safeSimulationYears; y++) {
    // 1. Rent cash flows
    const annualRentPaid = currentRent * 12;
    
    // 2. Buy cash flows
    // Home appreciates
    currentHomeValue = currentHomeValue * (1 + appreciationRate);
    
    // Property taxes, insurance, maintenance
    const annualPropTax = currentHomeValue * propertyTaxRate;
    const annualMaintenance = currentHomeValue * maintenanceRate;
    
    // Get mortgage balance and interest for the year
    const monthStartIdx = (y - 1) * 12;
    const monthEndIdx = Math.min(y * 12 - 1, mSchedule.length - 1);
    
    let yearMortgagePaid = 0;
    let yearEndingMortgage = 0;
    
    if (monthStartIdx < mSchedule.length) {
      for (let i = monthStartIdx; i <= monthEndIdx; i++) {
        yearMortgagePaid += mSchedule[i].payment;
      }
      yearEndingMortgage = mSchedule[monthEndIdx].endingBalance;
    } else {
      // Mortgage already paid off
      yearMortgagePaid = 0;
      yearEndingMortgage = 0;
    }

    const buyHousingCostsPaid = yearMortgagePaid + annualPropTax + currentInsurance + annualMaintenance;

    // 3. Net Cash Flow comparison
    // We assume the buyer and renter spend the same total amount of money.
    // Renter's surplus/deficit = Buy Housing Costs - Rent Housing Costs
    // If renting is cheaper, renter deposits the savings into their portfolio.
    // If renting is more expensive, renter must withdraw from their portfolio.
    const renterNetSavings = buyHousingCostsPaid - annualRentPaid;
    
    // Grow renter portfolio
    renterPortfolio = (renterPortfolio + renterNetSavings) * (1 + renterInvestmentReturn);
    if (renterPortfolio < 0) renterPortfolio = 0; // cannot go below zero

    // Buyer's metrics
    const buyerHomeEquity = Math.max(0, currentHomeValue - yearEndingMortgage);
    const sellingFees = currentHomeValue * sellingFeesRate;
    const buyerNetWorth = buyerHomeEquity - sellingFees;

    list.push({
      year: y,
      rentPaid: annualRentPaid,
      renterPortfolioValue: renterPortfolio,
      buyHousingCostsPaid,
      homeValue: currentHomeValue,
      remainingMortgage: yearEndingMortgage,
      buyerHomeEquity,
      buyerNetWorth
    });

    // Inflate rent and insurance for next year
    currentRent = currentRent * (1 + rentInflation);
    currentInsurance = currentInsurance * (1 + rentInflation); // assume insurance inflates similarly
  }

  return list;
}

// ─── DEBT SNOWBALL VS AVALANCHE PAYOFF SIMULATOR ───

export interface DebtItem {
  name: string;
  balance: number;
  rate: number; // e.g. 0.18 for 18%
  minPayment: number;
}

export interface DebtSimPeriod {
  month: number;
  balance: number;
  interest: number;
}

export interface DebtSimResult {
  months: number;
  totalInterest: number;
  history: DebtSimPeriod[];
  isNegativeAmortization?: boolean;
}

export function simulateDebtPayoff(
  debts: DebtItem[],
  totalMonthlyPayment: number,
  strategy: 'snowball' | 'avalanche'
): DebtSimResult {
  const activeDebts = debts.map(d => ({ ...d }));
  let months = 0;
  let totalInterest = 0;
  const history: DebtSimPeriod[] = [];

  const maxMonths = 600; // 50 years cap
  const initialMonthlyInterest = activeDebts.reduce((sum, d) => sum + d.balance * (d.rate / 12), 0);
  const minPaymentsSum = activeDebts.reduce((sum, d) => sum + d.minPayment, 0);
  const isNegativeAmortization = totalMonthlyPayment < initialMonthlyInterest || totalMonthlyPayment < minPaymentsSum;

  if (isNegativeAmortization) {
    return {
      months: Infinity,
      totalInterest: Infinity,
      history: [],
      isNegativeAmortization: true
    };
  }

  while (activeDebts.some(d => d.balance > 0.01) && months < maxMonths) {
    months++;
    let monthlyInterest = 0;
    
    // 1. Accrue interest first
    activeDebts.forEach(d => {
      if (d.balance > 0) {
        const interest = d.balance * (d.rate / 12);
        d.balance += interest;
        monthlyInterest += interest;
        totalInterest += interest;
      }
    });

    // 2. Pay minimums on all active debts
    let availableFunds = totalMonthlyPayment;
    
    activeDebts.forEach(d => {
      if (d.balance > 0) {
        const payment = Math.min(d.balance, d.minPayment);
        d.balance -= payment;
        availableFunds -= payment;
      }
    });

    // 3. Allocate leftover funds to the target debt based on strategy
    if (availableFunds > 0) {
      const remainingDebts = activeDebts.filter(d => d.balance > 0);
      
      if (remainingDebts.length > 0) {
        if (strategy === 'snowball') {
          // smallest balance first
          remainingDebts.sort((a, b) => a.balance - b.balance);
        } else {
          // highest interest rate first
          remainingDebts.sort((a, b) => b.rate - a.rate);
        }

        const target = remainingDebts[0];
        const extraPayment = Math.min(target.balance, availableFunds);
        target.balance -= extraPayment;
      }
    }

    const currentTotalBalance = activeDebts.reduce((acc, d) => acc + Math.max(0, d.balance), 0);
    history.push({
      month: months,
      balance: currentTotalBalance,
      interest: monthlyInterest
    });

    if (currentTotalBalance <= 0.01) break;
  }

  const stillUnpaid = activeDebts.some(d => d.balance > 0.01);

  return {
    months: (stillUnpaid && months >= maxMonths) ? Infinity : months,
    totalInterest,
    history,
    isNegativeAmortization: isNegativeAmortization || (stillUnpaid && months >= maxMonths)
  };
}

// ─── REFINANCE CALCULATOR ───

export interface RefinanceParams {
  currentBalance: number;
  currentRate: number; // e.g. 0.065
  currentTermRemaining: number; // remaining years
  newRate: number; // e.g. 0.05
  newTerm: number; // new loan term in years
  closingCosts: number;
}

export interface RefinanceResult {
  currentPMT: number;
  newPMT: number;
  monthlySavings: number;
  breakEvenMonths: number;
  currentTotalRemaining: number;
  newTotalCost: number;
  lifetimeSavings: number;
}

export function calculateRefinance(params: RefinanceParams): RefinanceResult {
  const { currentBalance, currentRate, currentTermRemaining, newRate, newTerm, closingCosts } = params;

  // Monthly P&I for current loan
  const currentPMT = calculateLoanPMT({
    principal: currentBalance,
    rate: currentRate,
    years: currentTermRemaining
  });

  // Monthly P&I for new loan
  const newPMT = calculateLoanPMT({
    principal: currentBalance,
    rate: newRate,
    years: newTerm
  });

  const monthlySavings = currentPMT - newPMT;
  const breakEvenMonths = closingCosts <= 0 ? 0 : (monthlySavings > 0 ? closingCosts / monthlySavings : Infinity);

  // Total costs over remaining life of current loan
  const currentTotalRemaining = currentPMT * (currentTermRemaining * 12);
  // Total costs of new loan over its term + closing costs
  const newTotalCost = (newPMT * (newTerm * 12)) + closingCosts;

  const lifetimeSavings = currentTotalRemaining - newTotalCost;

  return {
    currentPMT,
    newPMT,
    monthlySavings,
    breakEvenMonths,
    currentTotalRemaining,
    newTotalCost,
    lifetimeSavings
  };
}

// ─── STUDENT LOAN IDR REPAYMENT ───

export interface StudentLoanParams {
  balance: number;
  rate: number;
  agi: number;
  familySize: number;
  plan: 'SAVE' | 'PAYE' | 'IBR';
  loanType: 'undergrad' | 'grad' | 'mixed';
}

export interface StudentLoanResult {
  monthlyPayment: number;
  discretionaryIncome: number;
  povertyThreshold: number;
  standardPMT: number;
}

export function calculateStudentLoanIDR(params: StudentLoanParams): StudentLoanResult {
  const { balance, rate, agi, familySize, plan, loanType } = params;

  // 2026 Federal Poverty Guidelines (simplified estimate)
  const povertyBase = 15800 + (familySize - 1) * 5400;

  let multiplier = 1.5; // standard IBR/PAYE
  let paymentPercentage = 0.10; // standard IBR/PAYE 10%

  if (plan === 'SAVE') {
    multiplier = 2.25; // 225%
    if (loanType === 'undergrad') {
      paymentPercentage = 0.05; // 5%
    } else if (loanType === 'grad') {
      paymentPercentage = 0.10; // 10%
    } else {
      paymentPercentage = 0.075; // Mixed undergrad/grad average
    }
  } else if (plan === 'IBR') {
    paymentPercentage = 0.10;
  }

  const povertyThreshold = povertyBase * multiplier;
  const discretionaryIncome = Math.max(0, agi - povertyThreshold);
  const annualPayment = discretionaryIncome * paymentPercentage;
  const monthlyPayment = Math.max(0, annualPayment / 12);

  const standardPMT = calculateLoanPMT({
    principal: balance,
    rate: rate,
    years: 10
  });

  return {
    monthlyPayment,
    discretionaryIncome,
    povertyThreshold,
    standardPMT
  };
}

// ─── DEBT-TO-INCOME (DTI) ───

export interface DTIParams {
  grossMonthlyIncome: number;
  monthlyHousing: number;
  carLoans: number;
  studentLoans: number;
  creditCards: number;
  otherDebts: number;
}

export interface DTIResult {
  frontEndDTI: number;
  backEndDTI: number;
  totalDebt: number;
  totalOtherDebt: number;
  frontEndSafe: boolean;
  backEndSafe: boolean;
}

export function calculateDTI(params: DTIParams): DTIResult {
  const { grossMonthlyIncome, monthlyHousing, carLoans, studentLoans, creditCards, otherDebts } = params;

  const totalOtherDebt = carLoans + studentLoans + creditCards + otherDebts;
  const totalDebt = monthlyHousing + totalOtherDebt;

  if (grossMonthlyIncome <= 0) {
    return {
      frontEndDTI: totalDebt > 0 ? Infinity : 0,
      backEndDTI: totalDebt > 0 ? Infinity : 0,
      totalDebt,
      totalOtherDebt,
      frontEndSafe: false,
      backEndSafe: false
    };
  }

  const frontEndDTI = monthlyHousing / grossMonthlyIncome;
  const backEndDTI = totalDebt / grossMonthlyIncome;

  const frontEndSafe = frontEndDTI <= 0.28;
  const backEndSafe = backEndDTI <= 0.36;

  return {
    frontEndDTI,
    backEndDTI,
    totalDebt,
    totalOtherDebt,
    frontEndSafe,
    backEndSafe
  };
}

// ─── REFINANCE TRAJECTORY & BREAK-EVEN ENGINE ───

export interface RefinanceTrajectoryEntry {
  year: number;
  month: number;
  label: string;
  currentCumulativeCost: number;
  newCumulativeCost: number;
  netCumulativeSavings: number;
  currentBalance: number;
  newBalance: number;
}

export function generateRefinanceTrajectory(params: RefinanceParams): {
  trajectory: RefinanceTrajectoryEntry[];
  breakEvenMonths: number | null;
  breakEvenYear: number | null;
  monthlySavings: number;
  lifetimeSavings: number;
} {
  const { currentBalance, currentRate, currentTermRemaining, newRate, newTerm, closingCosts } = params;

  const currentPMT = calculateLoanPMT({
    principal: currentBalance,
    rate: currentRate,
    years: currentTermRemaining
  });

  const newPMT = calculateLoanPMT({
    principal: currentBalance,
    rate: newRate,
    years: newTerm
  });

  const monthlySavings = currentPMT - newPMT;
  const breakEvenMonths = closingCosts <= 0 ? 0 : (monthlySavings > 0 ? closingCosts / monthlySavings : null);
  const breakEvenYear = breakEvenMonths !== null ? breakEvenMonths / 12 : null;

  const currentMonths = Math.round(currentTermRemaining * 12);
  const newMonths = Math.round(newTerm * 12);
  const totalMonths = Math.min(Math.max(currentMonths, newMonths), 360);

  // Remaining balance helper using exact amortization
  function calcBalance(principal: number, annualRate: number, totalTermMonths: number, m: number): number {
    if (m >= totalTermMonths) return 0;
    if (annualRate <= 0) {
      return Math.max(0, principal - (principal / totalTermMonths) * m);
    }
    const r = annualRate / 12;
    const pmt = calculateLoanPMT({ principal, rate: annualRate, years: totalTermMonths / 12 });
    const factor = Math.pow(1 + r, m);
    const bal = principal * factor - pmt * ((factor - 1) / r);
    return Math.max(0, bal);
  }

  // Sample intervals: yearly, plus Year 0 and optionally Break-even
  const sampleMonths: number[] = [0];
  const step = totalMonths <= 60 ? 6 : 12; // 6-month steps for short loans, yearly for mortgages

  for (let m = step; m <= totalMonths; m += step) {
    sampleMonths.push(m);
  }
  if (!sampleMonths.includes(totalMonths)) {
    sampleMonths.push(totalMonths);
  }

  // Include breakEven month if within horizon and not already present
  if (breakEvenMonths !== null && breakEvenMonths > 0 && breakEvenMonths < totalMonths) {
    const roundedBreakEven = Math.round(breakEvenMonths);
    if (!sampleMonths.includes(roundedBreakEven)) {
      sampleMonths.push(roundedBreakEven);
      sampleMonths.sort((a, b) => a - b);
    }
  }

  const trajectory: RefinanceTrajectoryEntry[] = sampleMonths.map((m) => {
    // Current loan cumulative cost
    const currentPaidMonths = Math.min(m, currentMonths);
    const currentCumulativeCost = currentPMT * currentPaidMonths;
    const currBal = calcBalance(currentBalance, currentRate, currentMonths, m);

    // New loan cumulative cost (includes closing costs from month 0)
    const newPaidMonths = Math.min(m, newMonths);
    const newCumulativeCost = closingCosts + (newPMT * newPaidMonths);
    const nBal = calcBalance(currentBalance, newRate, newMonths, m);

    const netCumulativeSavings = currentCumulativeCost - newCumulativeCost;
    const yr = parseFloat((m / 12).toFixed(1));

    return {
      year: yr,
      month: m,
      label: m === 0 ? 'Start' : `Yr ${yr}`,
      currentCumulativeCost: Math.round(currentCumulativeCost),
      newCumulativeCost: Math.round(newCumulativeCost),
      netCumulativeSavings: Math.round(netCumulativeSavings),
      currentBalance: Math.round(currBal),
      newBalance: Math.round(nBal)
    };
  });

  const lifetimeSavings = (currentPMT * currentMonths) - ((newPMT * newMonths) + closingCosts);

  return {
    trajectory,
    breakEvenMonths,
    breakEvenYear,
    monthlySavings,
    lifetimeSavings
  };
}

// ─── STUDENT LOAN IDR TRAJECTORY ENGINE ───

export interface StudentLoanTrajectoryEntry {
  year: number;
  label: string;
  idrBalance: number;
  idrCumulativePaid: number;
  idrMonthlyPayment: number;
  standardBalance: number;
  standardCumulativePaid: number;
  isForgiven: boolean;
}

export function generateStudentLoanTrajectory(params: StudentLoanParams): {
  trajectory: StudentLoanTrajectoryEntry[];
  forgivenessYears: number;
  totalIdrPaid: number;
  totalStandardPaid: number;
  forgivenAmount: number;
  savingsVsStandard: number;
} {
  const { balance, rate, agi, familySize, plan, loanType } = params;

  // Undergrad loans forgiven after 20 years, Grad/Mixed after 25 years
  const forgivenessYears = (plan === 'SAVE' && loanType === 'undergrad') ? 20 : (loanType === 'undergrad' ? 20 : 25);
  const standardYears = 10;
  const standardPMT = calculateLoanPMT({ principal: balance, rate, years: standardYears });
  const totalStandardPaid = standardPMT * (standardYears * 12);

  const povertyBase = 15800 + (familySize - 1) * 5400;
  const multiplier = plan === 'SAVE' ? 2.25 : 1.5;
  const povertyShield = povertyBase * multiplier;
  const planRate = plan === 'SAVE' ? (loanType === 'undergrad' ? 0.05 : loanType === 'grad' ? 0.10 : 0.075) : 0.10;

  const trajectory: StudentLoanTrajectoryEntry[] = [];

  let curIdrBalance = balance;
  let cumIdrPaid = 0;
  const monthlyRate = rate / 12;

  // Year 0 starting point
  trajectory.push({
    year: 0,
    label: 'Start',
    idrBalance: Math.round(balance),
    idrCumulativePaid: 0,
    idrMonthlyPayment: Math.round(Math.max(0, ((Math.max(0, agi - povertyShield) * planRate) / 12))),
    standardBalance: Math.round(balance),
    standardCumulativePaid: 0,
    isForgiven: false
  });

  // Project year by year
  for (let y = 1; y <= forgivenessYears; y++) {
    // Standard 3% modest annual income growth
    const inflatedAgi = agi * Math.pow(1.03, y - 1);
    const discretionaryIncome = Math.max(0, inflatedAgi - povertyShield);
    const annualIdrPayment = discretionaryIncome * planRate;
    const monthlyIdrPayment = annualIdrPayment / 12;

    // Simulate 12 months for IDR balance
    for (let m = 1; m <= 12; m++) {
      if (curIdrBalance <= 0) break;
      const monthlyInterest = curIdrBalance * monthlyRate;

      if (plan === 'SAVE') {
        // SAVE: 100% unpaid interest subsidy prevents balance growth
        if (monthlyIdrPayment > monthlyInterest) {
          curIdrBalance = Math.max(0, curIdrBalance - (monthlyIdrPayment - monthlyInterest));
        }
        // If monthlyIdrPayment <= monthlyInterest, government waives excess interest, balance unchanged
      } else {
        // PAYE / IBR: Unpaid interest accumulates (bounded to 1.5x principal cap)
        if (monthlyIdrPayment >= monthlyInterest) {
          curIdrBalance = Math.max(0, curIdrBalance - (monthlyIdrPayment - monthlyInterest));
        } else {
          curIdrBalance = Math.min(balance * 1.5, curIdrBalance + (monthlyInterest - monthlyIdrPayment));
        }
      }
      cumIdrPaid += monthlyIdrPayment;
    }

    // Standard 10-year balance & cumulative paid
    let stdBal = 0;
    let stdCumPaid = totalStandardPaid;
    if (y < standardYears) {
      const mStd = y * 12;
      const factor = Math.pow(1 + monthlyRate, mStd);
      stdBal = Math.max(0, balance * factor - standardPMT * ((factor - 1) / monthlyRate));
      stdCumPaid = standardPMT * mStd;
    }

    const isForgiven = (y === forgivenessYears);
    const balanceBeforeForgiveness = curIdrBalance;
    if (isForgiven) {
      curIdrBalance = 0; // Forgiven!
    }

    trajectory.push({
      year: y,
      label: `Yr ${y}`,
      idrBalance: Math.round(isForgiven ? 0 : curIdrBalance),
      idrCumulativePaid: Math.round(cumIdrPaid),
      idrMonthlyPayment: Math.round(monthlyIdrPayment),
      standardBalance: Math.round(stdBal),
      standardCumulativePaid: Math.round(stdCumPaid),
      isForgiven
    });

    if (isForgiven) {
      const forgivenAmount = Math.max(0, Math.round(balanceBeforeForgiveness));
      return {
        trajectory,
        forgivenessYears,
        totalIdrPaid: Math.round(cumIdrPaid),
        totalStandardPaid: Math.round(totalStandardPaid),
        forgivenAmount,
        savingsVsStandard: Math.round(totalStandardPaid - cumIdrPaid)
      };
    }
  }

  return {
    trajectory,
    forgivenessYears,
    totalIdrPaid: Math.round(cumIdrPaid),
    totalStandardPaid: Math.round(totalStandardPaid),
    forgivenAmount: 0,
    savingsVsStandard: Math.round(totalStandardPaid - cumIdrPaid)
  };
}


