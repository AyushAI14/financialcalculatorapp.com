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
  if (r === 0) {
    return -(pv + fv) / n;
  }
  const compound = Math.pow(1 + r, n);
  const annuityFactor = ((compound - 1) / r) * (1 + r * timing);
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
  
  if (numerator <= 0 && denominator <= 0) return NaN;
  if (numerator >= 0 && denominator <= 0) return NaN;
  if (numerator <= 0 && denominator >= 0) return NaN;
  
  const val = numerator / denominator;
  if (val <= 0) return NaN;
  
  return Math.log(val) / Math.log(1 + r);
}

function solveRate(pv: number, fv: number, pmt: number, n: number, timing: number): number {
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
  return r1;
}

export interface ScheduleEntry {
  period: number;
  beginningBalance: number;
  payment: number;
  principal: number;
  interest: number;
  endingBalance: number;
}

export function generateTVMSchedule(params: Required<TVMParams>): ScheduleEntry[] {
  const schedule: ScheduleEntry[] = [];
  const timing = params.timing === 'beginning' ? 1 : 0;
  const cFreq = params.compoundingFrequency;
  const pFreq = params.paymentFrequency;
  
  let r = 0;
  if (params.rate !== 0) {
    r = Math.pow(1 + params.rate / cFreq, cFreq / pFreq) - 1;
  }
  
  let balance = params.pv;
  const pmt = params.pmt;
  
  for (let i = 1; i <= params.periods; i++) {
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
  const cFreq = compoundingFrequency;
  
  let rPmt = 0;
  if (rate !== 0) {
    rPmt = Math.pow(1 + rate / cFreq, cFreq / pFreq) - 1;
  }
  
  let currentBalance = principal;
  let cumContributions = principal;
  let cumInterest = 0;
  
  for (let y = 1; y <= years; y++) {
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
  const roi = initialCost === 0 ? 0 : (netProfit / initialCost);
  
  let years = params.length;
  if (params.lengthUnit === 'months') {
    years = params.length / 12;
  } else if (params.lengthUnit === 'days') {
    years = params.length / 365;
  }
  
  let annualizedRoi = 0;
  if (years > 0 && initialCost > 0 && totalReturns > 0) {
    annualizedRoi = Math.pow(totalReturns / initialCost, 1 / years) - 1;
  }
  
  return {
    netProfit,
    roi,
    annualizedRoi
  };
}
