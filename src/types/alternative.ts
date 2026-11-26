export interface AlternativeComparisonPoint {
  feature: string;
  competitor: string;
  us: string;
  advantage: 'us' | 'neutral';
}

export interface AlternativeMatchingCalculator {
  name: string;
  url: string;
  description: string;
}

export interface AlternativeFaq {
  question: string;
  answer: string;
}

export interface AlternativeSeo {
  title: string;
  description: string;
  badge: string;
}

export interface AlternativeDefinition {
  slug: string;
  competitorName: string;
  h1: string;
  badge: string;
  summary: string;
  takeaway: string;
  comparisonPoints: AlternativeComparisonPoint[];
  matchingCalculators: AlternativeMatchingCalculator[];
  faqs: AlternativeFaq[];
  seo: AlternativeSeo;
}
