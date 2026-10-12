import type { Lang } from './ui';
import { guidesBatch1 } from './calculator-guides-batch1.ts';

export const guidesBatchEsZh: Partial<Record<Lang, Record<string, string>>> = {
  // Spanish (es) - inherited from batch1 to guarantee 100% 30/30 coverage
  es: guidesBatch1.es || {},
};
