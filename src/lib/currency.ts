import type { Lang } from '../i18n/ui';
import { safeGetItem, safeSetItem, safeRemoveItem } from './storage';

export type CurrencyCode =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'JPY'
  | 'CAD'
  | 'AUD'
  | 'CHF'
  | 'BRL';

export interface CurrencyMeta {
  code: CurrencyCode;
  symbol: string;
  name: string;
  decimals: number;
  rate: number; // Conversion rate relative to 1 USD
  locale: string; // Canonical formatting locale
}

export const STORAGE_KEY_CURRENCY = 'currency';
export const STORAGE_KEY_MANUAL_OVERRIDE = 'currency_manual_override';

/**
 * Currency metadata specifications.
 * Baseline conversion rates are approximate relative to 1.0 USD.
 */
export const CURRENCIES: Record<CurrencyCode, CurrencyMeta> = {
  USD: { code: 'USD', symbol: '$', name: 'USD ($)', decimals: 2, rate: 1.0, locale: 'en-US' },
  EUR: { code: 'EUR', symbol: '€', name: 'EUR (€)', decimals: 2, rate: 0.92, locale: 'de-DE' },
  GBP: { code: 'GBP', symbol: '£', name: 'GBP (£)', decimals: 2, rate: 0.79, locale: 'en-GB' },
  JPY: { code: 'JPY', symbol: '¥', name: 'JPY (¥)', decimals: 0, rate: 155.0, locale: 'ja-JP' },
  CAD: { code: 'CAD', symbol: 'CA$', name: 'CAD (CA$)', decimals: 2, rate: 1.37, locale: 'en-CA' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'AUD (A$)', decimals: 2, rate: 1.52, locale: 'en-AU' },
  CHF: { code: 'CHF', symbol: 'CHF', name: 'CHF (CHF)', decimals: 2, rate: 0.9, locale: 'de-CH' },
  BRL: { code: 'BRL', symbol: 'R$', name: 'BRL (R$)', decimals: 2, rate: 5.6, locale: 'pt-BR' },
};

/**
 * Default currency mapping per supported language.
 */
export const LANG_TO_CURRENCY: Record<Lang, CurrencyCode> = {
  en: 'USD',
  es: 'EUR',
  de: 'EUR',
  ja: 'JPY',
  fr: 'EUR',
  pt: 'BRL',
};

/**
 * Validates whether a given string is a supported CurrencyCode.
 */
export function isSupportedCurrency(code: unknown): code is CurrencyCode {
  return typeof code === 'string' && code.toUpperCase() in CURRENCIES;
}

/**
 * Returns currency metadata for a given code (defaults to USD if unrecognized).
 */
export function getCurrencyInfo(code?: string | null): CurrencyMeta {
  if (code && isSupportedCurrency(code)) {
    return CURRENCIES[code.toUpperCase() as CurrencyCode];
  }
  return CURRENCIES.USD;
}

/**
 * Returns the currency symbol (e.g. '$', '€', '¥', '₹').
 */
export function getCurrencySymbol(code?: string | null): string {
  return getCurrencyInfo(code).symbol;
}

/**
 * Returns standard minor fraction digits for a currency (0 for JPY/KRW/IDR, 2 for others).
 */
export function getCurrencyDecimals(code?: string | null): number {
  return getCurrencyInfo(code).decimals;
}

/**
 * Returns the approximate conversion rate vs USD.
 */
export function getCurrencyRate(code?: string | null): number {
  return getCurrencyInfo(code).rate;
}

/**
 * Returns the default currency for a given language code.
 */
export function getLanguageDefaultCurrency(lang?: string | null): CurrencyCode {
  if (lang && lang in LANG_TO_CURRENCY) {
    return LANG_TO_CURRENCY[lang as Lang];
  }
  return 'USD';
}

/**
 * Checks if the user has explicitly chosen a manual currency preference.
 */
export function isManualCurrencyOverride(): boolean {
  return safeGetItem(STORAGE_KEY_MANUAL_OVERRIDE) === 'true';
}

/**
 * Explicitly sets the user's currency preference and marks the manual override flag.
 */
export function setManualCurrency(currency: CurrencyCode): void {
  safeSetItem(STORAGE_KEY_CURRENCY, currency);
  safeSetItem(STORAGE_KEY_MANUAL_OVERRIDE, 'true');
}

/**
 * Clears the manual override flag and snaps the currency to the current language's default.
 */
export function resetCurrencyToAuto(lang?: string | null): CurrencyCode {
  safeRemoveItem(STORAGE_KEY_MANUAL_OVERRIDE);
  const defaultCurr = getLanguageDefaultCurrency(lang);
  safeSetItem(STORAGE_KEY_CURRENCY, defaultCurr);
  return defaultCurr;
}

/**
 * Determines the effective active currency following the priority:
 * 1. URL search parameter `?currency=XYZ` (if valid, saves as manual override)
 * 2. User's explicit manual selection (if `currency_manual_override === 'true'`)
 * 3. Default currency for the given language
 */
export function getEffectiveCurrency(lang?: string | null): CurrencyCode {
  // 1. Check URL query parameters (client-side only)
  if (typeof window !== 'undefined' && window.location?.search) {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlCurrency = params.get('currency')?.toUpperCase();
      if (urlCurrency && isSupportedCurrency(urlCurrency)) {
        setManualCurrency(urlCurrency);
        return urlCurrency;
      }
    } catch (e) {
      // URL parsing fallback
    }
  }

  // 2. Check if user has an explicit manual override stored
  if (isManualCurrencyOverride()) {
    const stored = safeGetItem(STORAGE_KEY_CURRENCY).toUpperCase();
    if (isSupportedCurrency(stored)) {
      return stored;
    }
  }

  // 3. Auto-sync: default to the active language's currency
  const langCurrency = getLanguageDefaultCurrency(lang);
  safeSetItem(STORAGE_KEY_CURRENCY, langCurrency);
  return langCurrency;
}

/**
 * Returns an array of all supported currencies for dropdown rendering.
 */
export function getAllCurrencies(): CurrencyMeta[] {
  return Object.values(CURRENCIES);
}

export type ConversionMode = 'convert' | 'symbol_only';
export const STORAGE_KEY_CONVERSION_MODE = 'currency_conversion_mode';

/**
 * Returns the current conversion mode ('convert' = dynamic exchange rates, 'symbol_only' = nominal 1:1 units).
 */
export function getConversionMode(): ConversionMode {
  const stored = safeGetItem(STORAGE_KEY_CONVERSION_MODE);
  if (stored === 'symbol_only' || stored === 'convert') {
    return stored;
  }
  return 'convert';
}

/**
 * Persists the chosen conversion mode.
 */
export function setConversionMode(mode: ConversionMode): void {
  safeSetItem(STORAGE_KEY_CONVERSION_MODE, mode);
}

/**
 * Toggles between 'convert' and 'symbol_only' mode and returns the new mode.
 */
export function toggleConversionMode(): ConversionMode {
  const nextMode: ConversionMode = getConversionMode() === 'convert' ? 'symbol_only' : 'convert';
  setConversionMode(nextMode);
  return nextMode;
}
