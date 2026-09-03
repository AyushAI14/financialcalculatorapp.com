import type { Lang } from './ui';
import { guidesRu } from './calculator-guides-ru.ts';
import { guidesId } from './calculator-guides-id.ts';
import { guidesHi } from './calculator-guides-hi.ts';
import { guidesAr } from './calculator-guides-ar.ts';

export const guidesBatchRest: Partial<Record<Lang, Record<string, string>>> = {
  ar: guidesAr,
  hi: guidesHi,
  ru: guidesRu,
  id: guidesId,
};
