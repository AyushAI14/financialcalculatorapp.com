import type { Lang } from './ui';
import { guidesBatchEsZh } from './calculator-guides-es-zh.ts';
import { guidesBatchEurope } from './calculator-guides-europe.ts';
import { guidesBatchAsia } from './calculator-guides-asia.ts';

export const allGuidesTranslations: Record<Lang, Record<string, string>> = {
  en: {},
  es: {},
  de: {},
  ja: {},
  fr: {},
  pt: {}
};

const guideBatches = [
  guidesBatchEsZh,
  guidesBatchEurope,
  guidesBatchAsia,
];

for (const b of guideBatches) {
  for (const lang of Object.keys(b) as Lang[]) {
    if (!allGuidesTranslations[lang]) {
      allGuidesTranslations[lang] = {};
    }
    if (b[lang]) {
      Object.assign(allGuidesTranslations[lang], b[lang]);
    }
  }
}
