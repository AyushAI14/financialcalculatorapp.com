export interface ScenarioMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ScenarioFaq {
  question: string;
  answer: string;
}

export interface ScenarioDirectAnswer {
  summary: string;
  takeaway: string;
  metrics: ScenarioMetric[];
  mathProof?: string;
}

export interface ScenarioSeo {
  title: string;
  description: string;
  badge: string;
}

export interface ScenarioDefinition {
  slug: string;
  query: string; // The verbatim conversational query / H1
  category: 'loan' | 'mortgage' | 'auto' | 'retirement' | 'finance' | 'compare' | 'emulators';
  calculatorKey: string;
  calculatorUrl: string;
  preloadedInputs: Record<string, any>;
  directAnswer: ScenarioDirectAnswer;
  faqs: ScenarioFaq[];
  seo: ScenarioSeo;
}
