import type { Lang } from './ui';
import { guidesZhTw } from './calculator-guides-zh-tw.ts';
import { guidesJa } from './calculator-guides-ja.ts';
import { guidesKo } from './calculator-guides-ko.ts';

export const guidesBatchAsia: Partial<Record<Lang, Record<string, string>>> = {
  "zh-tw": guidesZhTw,
  ja: guidesJa,
  ko: guidesKo,
};
