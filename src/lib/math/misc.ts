/**
 * Pure mathematical functions for Credit Card Payoff, Auto Loan, Tip, and Discount calculations.
 */

// ─── CREDIT CARD PAYOFF ───

export interface CreditCardPayoffParams {
  balance: number;
  rate: number; // annual decimal (e.g. 0.189 for 18.9%)
  paymentType: 'fixed' | 'percent';
  paymentValue: number; // fixed monthly amount OR minimum percentage (e.g. 0.03 for 3%)
  minimumPaymentLimit?: number; // absolute dollar minimum (e.g. $25)
}

export interface CreditCardScheduleEntry {
  month: number;
  startingBalance: number;
  payment: number;
  interest: number;
  principal: number;
  endingBalance: number;
}

export function simulateCreditCardPayoff(params: CreditCardPayoffParams): {
  schedule: CreditCardScheduleEntry[];
  totalInterest: number;
  monthsToPayoff: number;
  isStuck: boolean; // true if interest exceeds payment (negative amortization)
} {
  const { balance, rate, paymentType, paymentValue, minimumPaymentLimit = 25 } = params;
  const schedule: CreditCardScheduleEntry[] = [];
  
  const rMonthly = rate / 12;
  let currentBalance = balance;
  let totalInterest = 0;
  let month = 0;
  let isStuck = false;
  
  const maxMonths = 600; // 50 years cap to prevent infinite loop

  while (currentBalance > 0.01 && month < maxMonths) {
    month++;
    const startingBalance = currentBalance;
    const interest = currentBalance * rMonthly;
    totalInterest += interest;
    
    // Determine payment
    let payment = 0;
    if (paymentType === 'fixed') {
      payment = paymentValue;
    } else {
      // Percentage of balance
      payment = Math.max(startingBalance * paymentValue, minimumPaymentLimit);
    }
    
    // Payoff boundary check
    if (payment >= startingBalance + interest) {
      payment = startingBalance + interest;
    }
    
    const principal = payment - interest;
    
    // Check for negative amortization (balance grows or payment is too small to cover interest)
    if (principal <= 0) {
      isStuck = true;
      break;
    }
    
    currentBalance = startingBalance + interest - payment;
    
    schedule.push({
      month,
      startingBalance,
      payment,
      interest,
      principal,
      endingBalance: currentBalance
    });
  }

  return {
    schedule,
    totalInterest,
    monthsToPayoff: isStuck ? Infinity : month,
    isStuck
  };
}

// ─── AUTO LOAN ───

export interface AutoLoanParams {
  vehiclePrice: number;
  downPayment: number;
  tradeInValue: number;
  salesTaxPct: number; // annual decimal (e.g. 0.07)
  fees: number; // title, registration, dealer fees
  interestRate: number; // annual decimal
  termMonths: number;
}

export function calculateAutoLoan(params: AutoLoanParams) {
  const { vehiclePrice, downPayment, tradeInValue, salesTaxPct, fees, interestRate, termMonths } = params;
  
  // Calculate sales tax on net price (often vehiclePrice - tradeIn, depending on state, let's do standard price * tax)
  const salesTax = vehiclePrice * salesTaxPct;
  const totalTaxAndFees = salesTax + fees;
  
  // Net loan amount
  const principal = Math.max(0, (vehiclePrice + totalTaxAndFees) - downPayment - tradeInValue);
  
  // Monthly payment
  const r = interestRate / 12;
  const n = termMonths;
  
  let monthlyPayment = 0;
  if (n > 0) {
    if (r === 0) {
      monthlyPayment = principal / n;
    } else {
      monthlyPayment = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
  }
  
  const totalCost = monthlyPayment * n;
  const totalInterest = Math.max(0, totalCost - principal);

  return {
    financedAmount: principal,
    salesTax,
    monthlyPayment,
    totalInterest,
    totalCost: financedAmount => financedAmount + downPayment + tradeInValue + totalInterest // total cost of ownership including cash paid
  };
}

// ─── TIP CALCULATOR ───

export interface TipParams {
  billAmount: number;
  tipPct: number; // decimal (e.g. 0.18 for 18%)
  splitCount: number;
}

export function calculateTip(params: TipParams) {
  const { billAmount, tipPct, splitCount } = params;
  const tipAmount = billAmount * tipPct;
  const totalAmount = billAmount + tipAmount;
  const tipPerPerson = splitCount > 0 ? tipAmount / splitCount : tipAmount;
  const totalPerPerson = splitCount > 0 ? totalAmount / splitCount : totalAmount;

  return {
    tipAmount,
    totalAmount,
    tipPerPerson,
    totalPerPerson
  };
}

// ─── DISCOUNT AND TAX ───

export interface DiscountParams {
  originalPrice: number;
  discountPct: number; // decimal (e.g. 0.20 for 20%)
  taxPct: number; // decimal (e.g. 0.08 for 8%)
}

export function calculateDiscountAndTax(params: DiscountParams) {
  const { originalPrice, discountPct, taxPct } = params;
  
  const discountAmount = originalPrice * discountPct;
  const discountedPrice = originalPrice - discountAmount;
  const taxAmount = discountedPrice * taxPct;
  const finalPrice = discountedPrice + taxAmount;

  return {
    discountAmount,
    discountedPrice,
    taxAmount,
    finalPrice
  };
}
