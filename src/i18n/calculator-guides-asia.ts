import type { Lang } from './ui';
import { guidesJa } from './calculator-guides-ja.ts';

export const guidesBatchAsia: Partial<Record<Lang, Record<string, string>>> = {
  ja: guidesJa,
};
