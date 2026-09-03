/**
 * Pure mathematical functions for Time Value of Money (TVM) calculations.
 * Adheres to standard financial sign conventions:
 * - Negative values represent cash outflows (payments, deposits, investments).
 * - Positive values represent cash inflows (loans received, withdrawals, cash-out).
 */

export interface TVMParams {
  pv?: number;
  fv?: number;
  pmt?: number;
  rate?: number; // Annual rate as decimal (e.g. 0.07 for 7%)
  periods?: number; // Total number of periods
  compoundingFrequency?: number; // Compounding periods per year (1 for annual, 12 for monthly, etc.)
  paymentFrequency?: number; // Payments per year
  timing?: 'beginning' | 'end'; // Payment timing
}

/**
 * Solves for the missing TVM variable.
 */
export function calculateTVM(solveFor: 'pv' | 'fv' | 'pmt' | 'rate' | 'periods', params: Required<Omit<TVMParams, 'pv' | 'fv' | 'pmt' | 'rate' | 'periods'>> & Partial<TVMParams>): number {
  const timing = params.timing === 'beginning' ? 1 : 0;
  const cFreq = params.compoundingFrequency;
  const pFreq = params.paymentFrequency;
  const rAnnual = params.rate ?? 0;
  
  let r = 0;
  if (rAnnual !== 0) {
    r = Math.pow(1 + rAnnual / cFreq, cFreq / pFreq) - 1;
  }
  
  const n = params.periods ?? 0;
  const pv = params.pv ?? 0;
  const fv = params.fv ?? 0;
  const pmt = params.pmt ?? 0;

  switch (solveFor) {
    case 'fv':
      return solveFV(pv, pmt, r, n, timing);
    case 'pv':
      return solvePV(fv, pmt, r, n, timing);
    case 'pmt':
      return solvePMT(pv, fv, r, n, timing);
    case 'periods':
      return solvePeriods(pv, fv, pmt, r, timing);
    case 'rate':
      const periodicRate = solveRate(pv, fv, pmt, n, timing);
      if (periodicRate === 0) return 0;
      return (Math.pow(1 + periodicRate, pFreq / cFreq) - 1) * cFreq;
    default:
      throw new Error(`Invalid TVM solve target: ${solveFor}`);
  }
}

function solveFV(pv: number, pmt: number, r: number, n: number, timing: number): number {
  if (r === 0) {
    return -(pv + pmt * n);
  }
  const compound = Math.pow(1 + r, n);
  const annuityFactor = ((compound - 1) / r) * (1 + r * timing);
  return -(pv * compound + pmt * annuityFactor);
}

function solvePV(fv: number, pmt: number, r: number, n: number, timing: number): number {
  if (r === 0) {
    return -(fv + pmt * n);
  }
  const compound = Math.pow(1 + r, n);
  const annuityFactor = ((compound - 1) / r) * (1 + r * timing);
  return -(fv + pmt * annuityFactor) / compound;
}

function solvePMT(pv: number, fv: number, r: number, n: number, timing: number): number {
  if (n <= 0) return NaN;
  if (r === 0) {
    return -(pv + fv) / n;
  }
  const compound = Math.pow(1 + r, n);
  const annuityFactor = ((compound - 1) / r) * (1 + r * timing);
  if (annuityFactor === 0) return NaN;
  return -(pv * compound + fv) / annuityFactor;
}

function solvePeriods(pv: number, fv: number, pmt: number, r: number, timing: number): number {
  if (r === 0) {
    if (pmt === 0) return 0;
    return -(pv + fv) / pmt;
  }
  
  const tFactor = pmt * (1 + r * timing) / r;
  const numerator = tFactor - fv;
  const denominator = pv + tFactor;
  
  if (denominator === 0) return NaN;
  const val = numerator / denominator;
  if (val <= 0 || isNaN(val) || !isFinite(val)) return NaN;
  if (1 + r <= 0) return NaN;
  
  return Math.log(val) / Math.log(1 + r);
}

function solveRate(pv: number, fv: number, pmt: number, n: number, timing: number): number {
  if (n <= 0) return NaN;
  let r0 = 0.05;
  let r1 = 0.08;
  
  const f = (r: number) => {
    if (r === 0) return pv + pmt * n + fv;
    const compound = Math.pow(1 + r, n);
    const annuityFactor = ((compound - 1) / r) * (1 + r * timing);
    return pv * compound + pmt * annuityFactor + fv;
  };
  
  let y0 = f(r0);
  let y1 = f(r1);
  
  const maxIterations = 100;
  const tolerance = 1e-10;
  
  for (let i = 0; i < maxIterations; i++) {
    if (Math.abs(y1 - y0) < 1e-15) {
      break;
    }
    const r2 = r1 - y1 * (r1 - r0) / (y1 - y0);
    const y2 = f(r2);
    if (Math.abs(y2) < tolerance) {
      return r2;
    }
    r0 = r1;
    y0 = y1;
    r1 = r2;
    y1 = y2;
  }
  
  let low = -0.99;
  let high = 2.0;
  let yLow = f(low);
  let yHigh = f(high);
  
  if (yLow * yHigh < 0) {
    for (let i = 0; i < 100; i++) {
      const mid = (low + high) / 2;
      const yMid = f(mid);
      if (Math.abs(yMid) < tolerance) {
        return mid;
      }
      if (yLow * yMid < 0) {
        high = mid;
        yHigh = yMid;
      } else {
        low = mid;
        yLow = yMid;
      }
    }
  }
  return Math.abs(f(r1)) < 1e-4 ? r1 : NaN;
}

export interface ScheduleEntry {
  period: number;
  beginningBalance: number;
  payment: number;
  principal: number;
  interest: number;
  endingBalance: number;
}

/**
 * Generates period-by-period TVM schedule.
 * NOTE: `principal` is the raw cash-flow contribution for the period
 * (equal to `payment`), while `interest` is reported separately.
 * `endingBalance = beginningBalance + interest + payment`.
 */
export function generateTVMSchedule(params: Required<TVMParams>): ScheduleEntry[] {
  const schedule: ScheduleEntry[] = [];
  const timing = params.timing === 'beginning' ? 1 : 0;
  const cFreq = Math.max(1, params.compoundingFrequency || 12);
  const pFreq = Math.max(1, params.paymentFrequency || 12);
  
  let r = 0;
  if (params.rate !== 0) {
    r = Math.pow(1 + params.rate / cFreq, cFreq / pFreq) - 1;
  }
  
  let balance = params.pv;
  const pmt = params.pmt;
  const maxPeriods = Math.min(Math.max(1, Math.floor(params.periods || 0)), 2400);
  
  for (let i = 1; i <= maxPeriods; i++) {
    const beginningBalance = balance;
    let interest = 0;
    let payment = pmt;
    let principal = 0;
    
    if (timing === 1) {
      const adjusted = beginningBalance + payment;
      interest = adjusted * r;
      principal = payment;
      balance = adjusted + interest;
    } else {
      interest = beginningBalance * r;
      principal = payment;
      balance = beginningBalance + interest + payment;
    }
    
    schedule.push({
      period: i,
      beginningBalance,
      payment,
      principal,
      interest,
      endingBalance: balance
    });
  }
  return schedule;
}

// ─── COMPOUND INTEREST CALCULATOR MATHEMATICS ───

export interface CompoundInterestParams {
  principal: number;
  monthlyContribution: number;
  rate: number;
  years: number;
  compoundingFrequency: number;
  timing: 'beginning' | 'end';
}

export interface CompoundInterestEntry {
  year: number;
  startingBalance: number;
  contributions: number;
  interest: number;
  endingBalance: number;
  totalContributions: number;
  totalInterest: number;
}

export function calculateCompoundInterest(params: CompoundInterestParams) {
  const { principal, monthlyContribution, rate, years, compoundingFrequency, timing } = params;
  
  const pFreq = 12;
  const cFreq = compoundingFrequency;
  
  let rPmt = 0;
  if (rate !== 0) {
    rPmt = Math.pow(1 + rate / cFreq, cFreq / pFreq) - 1;
  }
  
  const N = pFreq * years;
  const tFactor = timing === 'beginning' ? (1 + rPmt) : 1;
  
  const fvPrincipal = principal * Math.pow(1 + rate / cFreq, cFreq * years);
  
  let fvAnnuity = 0;
  if (rPmt === 0) {
    fvAnnuity = monthlyContribution * N;
  } else {
    fvAnnuity = monthlyContribution * ((Math.pow(1 + rPmt, N) - 1) / rPmt) * tFactor;
  }
  
  const totalBalance = fvPrincipal + fvAnnuity;
  const totalContributions = monthlyContribution * N;
  const totalInterest = totalBalance - principal - totalContributions;
  
  return {
    totalBalance,
    totalContributions: principal + totalContributions,
    totalInterest
  };
}

export function generateCompoundInterestSchedule(params: CompoundInterestParams): CompoundInterestEntry[] {
  const { principal, monthlyContribution, rate, years, compoundingFrequency, timing } = params;
  
  const schedule: CompoundInterestEntry[] = [];
  const pFreq = 12;
  const cFreq = Math.max(1, compoundingFrequency || 12);
  
  let rPmt = 0;
  if (rate !== 0) {
    rPmt = Math.pow(1 + rate / cFreq, cFreq / pFreq) - 1;
  }
  
  let currentBalance = principal;
  let cumContributions = principal;
  let cumInterest = 0;
  
  const safeYears = Math.min(Math.max(0, Math.floor(years || 0)), 100);
  if (safeYears === 0) {
    return [{
      year: 0,
      startingBalance: principal,
      contributions: 0,
      interest: 0,
      endingBalance: principal,
      totalContributions: principal,
      totalInterest: 0
    }];
  }

  for (let y = 1; y <= safeYears; y++) {
    const startingBalance = currentBalance;
    let yearContributions = 0;
    let yearInterest = 0;
    
    for (let m = 1; m <= 12; m++) {
      const pmt = monthlyContribution;
      yearContributions += pmt;
      
      if (timing === 'beginning') {
        const adjusted = currentBalance + pmt;
        const interest = adjusted * rPmt;
        yearInterest += interest;
        currentBalance = adjusted + interest;
      } else {
        const interest = currentBalance * rPmt;
        yearInterest += interest;
        currentBalance = currentBalance + interest + pmt;
      }
    }
    
    cumContributions += yearContributions;
    cumInterest += yearInterest;
    
    schedule.push({
      year: y,
      startingBalance,
      contributions: yearContributions,
      interest: yearInterest,
      endingBalance: currentBalance,
      totalContributions: cumContributions,
      totalInterest: cumInterest
    });
  }
  return schedule;
}

// ─── ROI CALCULATOR MATHEMATICS ───

export interface ROIParams {
  initialInvestment: number;
  finalValue: number;
  length: number;
  lengthUnit: 'years' | 'months' | 'days';
  additionalExpenses?: number;
  additionalReturns?: number;
}

export function calculateROI(params: ROIParams) {
  const initialCost = params.initialInvestment + (params.additionalExpenses ?? 0);
  const totalReturns = params.finalValue + (params.additionalReturns ?? 0);
  
  const netProfit = totalReturns - initialCost;
  const roi = initialCost === 0 ? NaN : (netProfit / initialCost);
  
  let years = params.length;
  if (params.lengthUnit === 'months') {
    years = params.length / 12;
  } else if (params.lengthUnit === 'days') {
    years = params.length / 365;
  }
  
  let annualizedRoi = NaN;
  if (years > 0 && initialCost > 0) {
    if (totalReturns === 0) {
      annualizedRoi = -1.0; // -100% total loss
    } else if (totalReturns > 0) {
      annualizedRoi = Math.pow(totalReturns / initialCost, 1 / years) - 1;
    }
  } else if (years === 0 && !isNaN(roi)) {
    annualizedRoi = roi;
  }
  
  return {
    netProfit,
    roi,
    annualizedRoi
  };
}

// ─── INFLATION & PURCHASING POWER ───

export interface InflationResult {
  futurePrice: number;
  purchasingPower: number;
}

export function calculateInflation(amount: number, rate: number, years: number): InflationResult {
  const futurePrice = amount * Math.pow(1 + rate, years);
  const purchasingPower = amount / Math.pow(1 + rate, years);
  return { futurePrice, purchasingPower };
}

// ─── PAYCHECK GROSS-TO-NET ───

export interface PaycheckParams {
  grossPay: number;
  payFrequency: 'weekly' | 'biweekly' | 'semimonthly' | 'monthly';
  preTaxDeductions: number;
  postTaxDeductions: number;
  stateTaxRate: number;
}

export interface PaycheckResult {
  annualGross: number;
  annualFederalTax: number;
  annualFicaTax: number;
  annualStateTax: number;
  annualNet: number;
  perPeriodGross: number;
  perPeriodFederal: number;
  perPeriodFica: number;
  perPeriodState: number;
  perPeriodNet: number;
  periods: number;
}

export function calculatePaycheck(params: PaycheckParams): PaycheckResult {
  const { grossPay, payFrequency, preTaxDeductions, postTaxDeductions, stateTaxRate } = params;

  const annualPreTax = Math.max(0, grossPay - preTaxDeductions);
  
  // Federal standard deduction, single filer. 2025 IRS: $15,000.
  // Brackets below are 2025 single-filer federal brackets (IRS Rev. Proc. 2024-40).
  const standardDeduction = 15000;
  const taxableFederal = Math.max(0, annualPreTax - standardDeduction);

  const brackets = [
    { limit: 11925, rate: 0.10 },
    { limit: 48475, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250525, rate: 0.32 },
    { limit: 626350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ];

  let federalTax = 0;
  let remainingTaxable = taxableFederal;
  let previousLimit = 0;

  for (const b of brackets) {
    const range = b.limit - previousLimit;
    const taxableInRange = Math.min(remainingTaxable, range);
    federalTax += taxableInRange * b.rate;
    remainingTaxable -= taxableInRange;
    previousLimit = b.limit;
    if (remainingTaxable <= 0) break;
  }

  // FICA: Social Security (6.2% up to wage-base cap, 2025: $176,100) + Medicare (1.45% base, +0.9% > $200k)
  const ssTax = Math.min(grossPay, 176100) * 0.062;
  const medBase = grossPay * 0.0145;
  const medAdditional = Math.max(0, grossPay - 200000) * 0.009;
  const medicareTax = medBase + medAdditional;
  const ficaTax = ssTax + medicareTax;

  // State Tax
  const stateTax = annualPreTax * stateTaxRate;

  // Net annual take-home
  const annualNet = Math.max(0, annualPreTax - federalTax - ficaTax - stateTax - postTaxDeductions);

  let periods = 12;
  if (payFrequency === 'weekly') periods = 52;
  else if (payFrequency === 'biweekly') periods = 26;
  else if (payFrequency === 'semimonthly') periods = 24;

  return {
    annualGross: grossPay,
    annualFederalTax: federalTax,
    annualFicaTax: ficaTax,
    annualStateTax: stateTax,
    annualNet,
    perPeriodGross: grossPay / periods,
    perPeriodFederal: federalTax / periods,
    perPeriodFica: ficaTax / periods,
    perPeriodState: stateTax / periods,
    perPeriodNet: annualNet / periods,
    periods
  };
}

// ─── NET WORTH TRACKER ───

export interface NetWorthResult {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
}

export function calculateNetWorth(assets: number[], liabilities: number[]): NetWorthResult {
  const totalAssets = assets.reduce((a, b) => a + b, 0);
  const totalLiabilities = liabilities.reduce((a, b) => a + b, 0);
  return {
    totalAssets,
    totalLiabilities,
    netWorth: totalAssets - totalLiabilities
  };
}

// ─── EMERGENCY FUND CALCULATOR ───

export interface EmergencyFundResult {
  targetAmount: number;
  shortfall: number;
  progressPercent: number;
  monthsToGoal: number;
}

export function calculateEmergencyFund(monthlyExpenses: number, currentSavings: number, targetMonths: number, monthlyContribution: number): EmergencyFundResult {
  const targetAmount = monthlyExpenses * targetMonths;
  const shortfall = Math.max(0, targetAmount - currentSavings);
  const progressPercent = targetAmount > 0 ? (currentSavings / targetAmount) * 100 : 100;
  const monthsToGoal = (monthlyContribution > 0 && shortfall > 0) ? shortfall / monthlyContribution : 0;
  return { targetAmount, shortfall, progressPercent, monthsToGoal };
}

// ─── INVESTMENT FEE / EXPENSE RATIO IMPACT ───

export interface FeeImpactResult {
  valueA: number;
  valueB: number;
  valueNoFee: number;
  lostToFeesA: number;
  lostToFeesB: number;
  difference: number;
  totalContributions: number;
}

/**
 * Fee impact assumes beginning-of-month contributions: (balance + monthly) * (1 + r).
 * This is consistent across fee/college/crypto calculators; 401k uses monthly averaging.
 */
export function calculateFeeImpact(
  initial: number,
  monthly: number,
  returnRate: number,
  feeA: number,
  feeB: number,
  years: number
): FeeImpactResult {
  const safeYears = Math.min(Math.max(1, Math.floor(years || 0)), 100);
  const periods = safeYears * 12;
  const rA = (returnRate - feeA) / 12;
  const rB = (returnRate - feeB) / 12;
  const rNoFee = returnRate / 12;

  let valA = initial;
  let valB = initial;
  let valNoFee = initial;
  let cumContributions = initial;

  for (let m = 1; m <= periods; m++) {
    valA = (valA + monthly) * (1 + rA);
    valB = (valB + monthly) * (1 + rB);
    valNoFee = (valNoFee + monthly) * (1 + rNoFee);
    cumContributions += monthly;
  }

  const lostToFeesA = valNoFee - valA;
  const lostToFeesB = valNoFee - valB;
  const difference = valA - valB;

  return {
    valueA: valA,
    valueB: valB,
    valueNoFee: valNoFee,
    lostToFeesA,
    lostToFeesB,
    difference,
    totalContributions: cumContributions
  };
}

// ─── ROTH VS TRADITIONAL IRA COMPARISON ───

export interface CompareIRAResult {
  rothBalance: number;
  tradBalanceGross: number;
  tradBalanceNet: number;
  totalTaxSavings: number;
  rothWins: boolean;
}

export function compareIRA(
  currentAge: number,
  retirementAge: number,
  annualContribution: number,
  rateOfReturn: number,
  currentTaxRate: number,
  retirementTaxRate: number
): CompareIRAResult {
  const years = Math.min(Math.max(0, retirementAge - currentAge), 100);
  if (years <= 0) return { rothBalance: 0, tradBalanceGross: 0, tradBalanceNet: 0, totalTaxSavings: 0, rothWins: true };

  let rothBalance = 0;
  let tradBalanceGross = 0;
  let taxSavingsBalance = 0;
  const annualTaxSavings = annualContribution * currentTaxRate;
  
  for (let y = 1; y <= years; y++) {
    rothBalance = (rothBalance + annualContribution) * (1 + rateOfReturn);
    tradBalanceGross = (tradBalanceGross + annualContribution) * (1 + rateOfReturn);
    taxSavingsBalance = (taxSavingsBalance + annualTaxSavings) * (1 + rateOfReturn);
  }

  // Net value of invested annual tax savings after capital gains tax (estimated 15% long-term capital gains tax)
  const totalTaxSavedContributed = annualTaxSavings * years;
  const taxSavingsGains = Math.max(0, taxSavingsBalance - totalTaxSavedContributed);
  const netInvestedTaxSavings = taxSavingsBalance - (taxSavingsGains * 0.15);

  // Traditional total net value combines post-tax IRA distributions + after-tax proceeds of invested tax deductions
  const tradBalanceNet = (tradBalanceGross * (1 - retirementTaxRate)) + netInvestedTaxSavings;
  const totalTaxSavings = annualTaxSavings * years;

  return {
    rothBalance,
    tradBalanceGross,
    tradBalanceNet,
    totalTaxSavings,
    rothWins: rothBalance > tradBalanceNet
  };
}

// ─── COLLEGE SAVINGS (529) CALCULATOR ───

export interface CollegeSavingsResult {
  total4YearCost: number;
  endingBalance: number;
  shortfall: number;
  pmtNeeded: number;
}

export function calculateCollegeSavings(
  currentAge: number,
  enrollmentAge: number,
  currentAnnualCost: number,
  costInflation: number,
  currentSaved: number,
  monthlyContribution: number,
  returnRate: number
): CollegeSavingsResult {
  const yearsToSave = Math.min(Math.max(0, enrollmentAge - currentAge), 50);
  if (yearsToSave <= 0) return { total4YearCost: currentAnnualCost * 4, endingBalance: currentSaved, shortfall: 0, pmtNeeded: 0 };

  let total4YearCost = 0;
  for (let i = 0; i < 4; i++) {
    total4YearCost += currentAnnualCost * Math.pow(1 + costInflation, yearsToSave + i);
  }

  let balance = currentSaved;
  const monthlyReturn = returnRate / 12;
  const totalMonths = yearsToSave * 12;
  for (let m = 1; m <= totalMonths; m++) {
    balance = (balance + monthlyContribution) * (1 + monthlyReturn);
  }

  const shortfall = Math.max(0, total4YearCost - balance);

  const fvSaved = currentSaved * Math.pow(1 + monthlyReturn, totalMonths);
  const targetFromPMT = Math.max(0, total4YearCost - fvSaved);
  const pmtNeeded = monthlyReturn === 0 ? (targetFromPMT / totalMonths) : (targetFromPMT * monthlyReturn) / (Math.pow(1 + monthlyReturn, totalMonths) - 1);

  return {
    total4YearCost,
    endingBalance: balance,
    shortfall,
    pmtNeeded
  };
}

// ─── CRYPTO DCA CALCULATOR ───

export interface CryptoDCAPeriod {
  period: number;
  invested: number;
  value: number;
}

export interface CryptoDCAResult {
  totalInvested: number;
  futureValue: number;
  profit: number;
  roi: number;
  history: CryptoDCAPeriod[];
}

export function calculateCryptoDCA(
  purchaseAmount: number,
  frequency: 'weekly' | 'monthly',
  years: number,
  projectedAnnualGrowth: number
): CryptoDCAResult {
  const safeYears = Math.min(Math.max(1, years || 1), 50);
  let periods = safeYears * 12;
  let rate = projectedAnnualGrowth / 12;
  if (frequency === 'weekly') {
    periods = safeYears * 52;
    rate = projectedAnnualGrowth / 52;
  }

  let balance = 0;
  let invested = 0;
  const history: CryptoDCAPeriod[] = [];

  for (let p = 1; p <= periods; p++) {
    balance = (balance + purchaseAmount) * (1 + rate);
    invested += purchaseAmount;
    history.push({ period: p, invested, value: balance });
  }

  return {
    totalInvested: invested,
    futureValue: balance,
    profit: balance - invested,
    roi: invested > 0 ? (balance - invested) / invested : 0,
    history
  };
}

