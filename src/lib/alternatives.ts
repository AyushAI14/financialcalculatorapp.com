import rawAlternatives from '../data/alternatives.json';
import type { AlternativeDefinition } from '../types/alternative';

export const allAlternatives: AlternativeDefinition[] = rawAlternatives as AlternativeDefinition[];

export function getAllAlternatives(): AlternativeDefinition[] {
  return allAlternatives;
}

export function getAlternativeBySlug(slug: string): AlternativeDefinition | undefined {
  return allAlternatives.find((a) => a.slug === slug);
}
