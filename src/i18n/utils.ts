import { ui, defaultLang, showDefaultLang, languages, hreflangMap, rtlLangs, type Lang } from './ui';
import translationsData from './translations.json';
import { faqTranslations } from './faqs';

/**
 * Extracts language code from a given URL or Astro.currentLocale.
 */
export function getLangFromUrl(url: URL, currentLocale?: string): Lang {
  if (currentLocale) {
    if (currentLocale in languages) {
      return currentLocale as Lang;
    }
    const lower = currentLocale.toLowerCase();
    for (const key of Object.keys(languages)) {
      if (lower.startsWith(key)) return key as Lang;
    }
  }
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

/**
 * Returns true if the language is Right-to-Left (e.g. Arabic).
 */
export function isRtl(lang: Lang | string): boolean {
  return rtlLangs.has(lang as Lang);
}

/**
 * Strips any locale prefix from the pathname.
 * e.g. /es/loan/mortgage -> /loan/mortgage
 */
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  const clean = pathname.replace(/\/+$/, '');
  return clean ? clean : '/';
}

/**
 * Translation hook following the Astro i18n recipe.
 */
export function useTranslations(lang: Lang) {
  const currentFaq = (faqTranslations as any)[lang] || {};
  const currentJson = (translationsData as any)[lang] || {};
  const currentUi = ui[lang] || {};

  return function t(key: string, fallback?: string): string {
    if (!key) return fallback || '';
    if (key in currentFaq) {
      return currentFaq[key];
    }
    if (key in currentJson) {
      return currentJson[key];
    }
    if (key in currentUi) {
      return currentUi[key];
    }

    if (fallback) {
      if (fallback in currentFaq) {
        return currentFaq[fallback];
      }
      if (fallback in currentJson) {
        return currentJson[fallback];
      }
      if (fallback in currentUi) {
        return currentUi[fallback];
      }
    }

    const defaultFaq = (faqTranslations as any)[defaultLang] || {};
    const defaultJson = (translationsData as any)[defaultLang] || {};
    const defaultUi = ui[defaultLang] || {};

    if (key in defaultFaq) {
      return defaultFaq[key];
    }
    if (key in defaultJson) {
      return defaultJson[key];
    }
    if (key in defaultUi) {
      return defaultUi[key];
    }

    return fallback !== undefined ? fallback : key;
  };
}

/**
 * Translated path helper following the Astro i18n recipe.
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    if (!path || path.startsWith('#')) return path;
    const cleanPath = getPathWithoutLocale(path);
    const hasExtension = /\.[a-z0-9]+$/i.test(cleanPath);
    const formattedPath = (cleanPath === '/' || cleanPath.endsWith('/') || hasExtension)
      ? cleanPath
      : `${cleanPath}/`;
    
    if (!showDefaultLang && targetLang === defaultLang) {
      return formattedPath;
    }
    
    if (formattedPath === '/') {
      return `/${targetLang}/`;
    }
    
    return `/${targetLang}${formattedPath}`;
  };
}

export interface HreflangItem {
  code: string;
  href: string;
}

/**
 * Computes all hreflang markup links for SEO / Google search ranking.
 */
export function getHreflangList(currentUrl: URL, siteUrl = 'https://financialcalculatorapp.com'): HreflangItem[] {
  const baseUrl = siteUrl.replace(/\/+$/, '');
  const cleanPath = getPathWithoutLocale(currentUrl.pathname);
  const pathSuffix = cleanPath === '/' ? '' : (cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`);
  
  const list: HreflangItem[] = [];

  // x-default points to default language (English)
  list.push({
    code: 'x-default',
    href: `${baseUrl}${pathSuffix || '/'}`
  });

  // Each language
  for (const [langKey, codes] of Object.entries(hreflangMap) as [Lang, string[]][]) {
    const href = langKey === defaultLang && !showDefaultLang
      ? `${baseUrl}${pathSuffix || '/'}`
      : `${baseUrl}/${langKey}${pathSuffix}`;

    for (const code of codes) {
      list.push({
        code,
        href
      });
    }
  }

  return list;
}

/**
 * Returns all available languages with target URLs for language pickers.
 */
export function getLanguageOptions(currentUrl: URL, activeLocale?: Lang) {
  const cleanPath = getPathWithoutLocale(currentUrl.pathname);
  const currentLang = activeLocale || getLangFromUrl(currentUrl);

  return Object.entries(languages).map(([code, label]) => {
    const lang = code as Lang;
    const url = lang === defaultLang && !showDefaultLang
      ? (cleanPath === '/' ? '/' : (cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`))
      : (cleanPath === '/' ? `/${lang}/` : (cleanPath.endsWith('/') ? `/${lang}${cleanPath}` : `/${lang}${cleanPath}/`));

    return {
      code: lang,
      label,
      url,
      isActive: lang === currentLang
    };
  });
}
