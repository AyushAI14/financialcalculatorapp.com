/**
 * Formats a number as a currency string.
 * @example formatCurrency(1234.56) // "$1,234.56"
 */
export function formatCurrency(value: number, locale = 'en-US', currency = 'USD'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Formats a number as a percentage string.
 * @example formatPercentage(0.05) // "5.00%"
 */
export function formatPercentage(value: number, decimals = 2, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Formats a number with comma separators.
 * @example formatNumber(1234567.89) // "1,234,567.89"
 */
export function formatNumber(value: number, decimals = 2, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Safely parses a string input into a float, returning a default value if invalid.
 */
export function safeParseFloat(value: string | undefined | null, defaultValue = 0): number {
  if (!value) return defaultValue;
  const parsed = parseFloat(value.toString().replace(/,/g, ''));
  return isNaN(parsed) ? defaultValue : parsed;
}
