import type { Lang } from './ui';
import { guidesBatchEsZh } from './calculator-guides-es-zh.ts';
import { guidesBatchEurope } from './calculator-guides-europe.ts';
import { guidesBatchAsia } from './calculator-guides-asia.ts';
import { guidesBatchRest } from './calculator-guides-rest.ts';

export const allGuidesTranslations: Record<Lang, Record<string, string>> = {
  en: {},
  es: {},
  'zh-cn': {},
  'zh-tw': {},
  de: {},
  ja: {},
  fr: {},
  ko: {},
  it: {},
  pt: {},
  ar: {},
  hi: {},
  ru: {},
  id: {}
};

const guideBatches = [
  guidesBatchEsZh,
  guidesBatchEurope,
  guidesBatchAsia,
  guidesBatchRest,
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
