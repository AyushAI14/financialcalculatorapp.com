import { getEffectiveCurrency, getCurrencyInfo, isSupportedCurrency, formatCurrencyTick } from './currency';
export { formatCurrencyTick };

export function formatCurrency(value: number, locale?: string, currency?: string): string {
  const currentLang = typeof document !== 'undefined' ? document.documentElement.lang : undefined;
  const selectedCurrency = currency && isSupportedCurrency(currency)
    ? currency.toUpperCase()
    : getEffectiveCurrency(currentLang);
  
  const meta = getCurrencyInfo(selectedCurrency);
  
  let selectedLocale = locale;
  if (!selectedLocale) {
    if (typeof document !== 'undefined' && document.documentElement.lang) {
      selectedLocale = document.documentElement.lang;
    } else {
      selectedLocale = meta.locale;
    }
  }

  const decimals = meta.decimals;

  try {
    return new Intl.NumberFormat(selectedLocale, {
      style: 'currency',
      currency: meta.code,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  } catch (e) {
    return new Intl.NumberFormat(meta.locale, {
      style: 'currency',
      currency: meta.code,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }
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

/**
 * Escapes special HTML characters to prevent XSS attacks when interpolating into innerHTML.
 */
export function escapeHtml(str: unknown): string {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
