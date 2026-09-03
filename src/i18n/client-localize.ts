import translationsData from './translations.json';
import { faqTranslations } from './faqs';
import { ui } from './ui';

export function initClientLocalization() {
  if (typeof window === 'undefined') return;

  const getTargetLang = (): string => {
    const htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    if (htmlLang && htmlLang !== 'en') {
      if (htmlLang.startsWith('zh-cn') || htmlLang.startsWith('zh-hans') || htmlLang === 'zh') return 'zh-cn';
      if (htmlLang.startsWith('zh-tw') || htmlLang.startsWith('zh-hant')) return 'zh-tw';
      return htmlLang.split('-')[0];
    }
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0) {
      const seg = pathParts[0].toLowerCase();
      if (seg in translationsData || seg in faqTranslations || seg in ui) {
        return seg;
      }
    }
    return 'en';
  };

  const currentLang = getTargetLang();
  if (currentLang === 'en') return;

  const faqDict: Record<string, string> = (faqTranslations as any)[currentLang] || {};
  const jsonDict: Record<string, string> = (translationsData as any)[currentLang] || {};
  const uiDict: Record<string, string> = (ui as any)[currentLang] || {};
  const dict: Record<string, string> = { ...uiDict, ...jsonDict, ...faqDict };
  if (!dict || Object.keys(dict).length === 0) return;

  // Build sorted keys by length descending to match longer phrases first
  const sortedKeys = Object.keys(dict).sort((a, b) => b.length - a.length);

  function translateValue(val: string): string | null {
    if (!val) return null;
    const trimmed = val.trim();
    if (!trimmed) return null;

    // 1. Direct exact match
    if (dict[trimmed]) {
      return val.replace(trimmed, dict[trimmed]);
    }

    // 2. Case-insensitive exact match
    const lower = trimmed.toLowerCase();
    for (const key of Object.keys(dict)) {
      if (key.toLowerCase() === lower) {
        return val.replace(trimmed, dict[key]);
      }
    }

    // 3. Strip surrounding punctuation/quotes/colons if any
    const unquoted = trimmed.replace(/^["'“:\s]+|["'”:\s]+$/g, '');
    if (unquoted && dict[unquoted]) {
      return val.replace(unquoted, dict[unquoted]);
    }

    return null;
  }

  function localizeElement(el: Element) {
    // Skip script and style tags
    if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'NOSCRIPT') return;

    // Check direct full match on summary, p, headings, button, label
    if (el.matches('summary, p, h1, h2, h3, h4, button, label')) {
      const fullText = el.textContent?.trim();
      if (fullText && dict[fullText]) {
        const svg = el.querySelector('svg');
        if (svg) {
          el.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim()) {
              const tr = translateValue(node.nodeValue);
              if (tr) node.nodeValue = tr;
            } else if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName === 'SPAN') {
              const tr = translateValue((node as Element).textContent || '');
              if (tr) (node as Element).textContent = tr;
            }
          });
          return;
        } else {
          el.textContent = dict[fullText];
          return;
        }
      }
    }

    // Text nodes in relevant elements
    if (
      el.matches(
        'label, button, h1, h2, h3, h4, h5, summary, th, td, .preset-btn, .result-card-title, p, span, a, strong, b'
      )
    ) {
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
          const raw = node.nodeValue;
          // Avoid translating pure numbers or currencies
          if (/^[\s0-9.,$%€£₹+\-/()]+$/.test(raw)) return;

          const translated = translateValue(raw);
          if (translated && translated !== raw) {
            node.nodeValue = translated;
          }
        }
      });
    }

    // Input & Textarea Placeholders
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      if (el.placeholder) {
        const translated = translateValue(el.placeholder);
        if (translated) {
          el.placeholder = translated;
        }
      }
    }

    // Tooltips / Titles
    if (el.hasAttribute('title')) {
      const title = el.getAttribute('title');
      if (title && !title.startsWith('Rates:')) {
        const translated = translateValue(title);
        if (translated) {
          el.setAttribute('title', translated);
        }
      }
    }
  }

  function runFullPass() {
    const elements = document.querySelectorAll(
      'label, button, h1, h2, h3, h4, summary, th, td, .preset-btn, .result-card-title, p, span, a, input[placeholder], textarea[placeholder]'
    );
    elements.forEach(localizeElement);
  }

  // Initial pass
  runFullPass();

  // Also run pass when calculator calculations update the DOM
  let debounceTimeout: any = null;
  const observer = new MutationObserver(() => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      observer.disconnect();
      runFullPass();
      startObserving();
    }, 50);
  });

  function startObserving() {
    const main = document.querySelector('main');
    if (main) {
      observer.observe(main, { childList: true, subtree: true });
    }
  }

  startObserving();
}
