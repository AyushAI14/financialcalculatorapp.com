import rawScenarios from '../data/scenarios.json';
import type { ScenarioDefinition } from '../types/scenario';

export const allScenarios: ScenarioDefinition[] = rawScenarios as unknown as ScenarioDefinition[];

export function getAllScenarios(): ScenarioDefinition[] {
  return allScenarios;
}

export function getScenarioBySlug(slug: string): ScenarioDefinition | undefined {
  return allScenarios.find((s) => s.slug === slug);
}

export function getScenariosByCategory(category: string): ScenarioDefinition[] {
  return allScenarios.filter((s) => s.category === category);
}

export function getScenariosForCalculator(
  calculatorUrl: string,
  categoryFallback?: string,
  limit: number = 6
): ScenarioDefinition[] {
  const normUrl = calculatorUrl.replace(/\/+$/, '') || '/';
  const directMatches = allScenarios.filter(
    (s) => s.calculatorUrl.replace(/\/+$/, '') === normUrl
  );

  if (directMatches.length >= limit) {
    return directMatches.slice(0, limit);
  }

  const category = categoryFallback || directMatches[0]?.category;
  if (!category) {
    return directMatches;
  }

  const categoryMatches = allScenarios.filter(
    (s) => s.category === category && !directMatches.some((d) => d.slug === s.slug)
  );

  return [...directMatches, ...categoryMatches].slice(0, limit);
}

export function validateScenarios(scenarios: ScenarioDefinition[] = allScenarios): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const slugs = new Set<string>();

  for (let i = 0; i < scenarios.length; i++) {
    const s = scenarios[i];
    const prefix = `Scenario #${i + 1} (${s.slug || 'unknown'}):`;

    if (!s.slug || typeof s.slug !== 'string' || !/^[a-z0-9-]+$/.test(s.slug)) {
      errors.push(`${prefix} Invalid slug format. Must be lowercase alphanumeric with hyphens.`);
    }

    if (slugs.has(s.slug)) {
      errors.push(`${prefix} Duplicate slug "${s.slug}". Slugs must be unique.`);
    }
    slugs.add(s.slug);

    if (!s.query || s.query.trim().length === 0) {
      errors.push(`${prefix} Missing query.`);
    }

    if (!s.calculatorUrl || !s.calculatorUrl.startsWith('/')) {
      errors.push(`${prefix} Invalid calculatorUrl "${s.calculatorUrl}". Must start with "/".`);
    }

    if (!s.directAnswer || !s.directAnswer.summary || !s.directAnswer.takeaway) {
      errors.push(`${prefix} Missing directAnswer summary or takeaway.`);
    }

    if (!Array.isArray(s.directAnswer?.metrics) || s.directAnswer.metrics.length === 0) {
      errors.push(`${prefix} directAnswer.metrics must be a non-empty array.`);
    }

    if (!Array.isArray(s.faqs) || s.faqs.length === 0) {
      errors.push(`${prefix} faqs must be a non-empty array.`);
    } else {
      for (let j = 0; j < s.faqs.length; j++) {
        const faq = s.faqs[j];
        if (!faq.question || !faq.answer) {
          errors.push(`${prefix} FAQ #${j + 1} is missing question or answer.`);
        }
      }
    }

    if (!s.seo || !s.seo.title || !s.seo.description) {
      errors.push(`${prefix} Missing SEO title or description.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
