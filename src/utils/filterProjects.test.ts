import { describe, it, expect } from 'vitest';
import { filterProjects } from './filterProjects';
import type { Project } from '../data/types';

const mockProjects: Project[] = [
  { name: 'A', description: '', tags: [], category: 'work' },
  { name: 'B', description: '', tags: [], category: 'side' },
  { name: 'C', description: '', tags: [], category: 'work' },
];

describe('filterProjects', () => {
  it('returns all projects when filter is "all"', () => {
    expect(filterProjects(mockProjects, 'all')).toHaveLength(3);
  });

  it('returns only work projects when filter is "work"', () => {
    const result = filterProjects(mockProjects, 'work');
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.category === 'work')).toBe(true);
  });

  it('returns only side projects when filter is "side"', () => {
    const result = filterProjects(mockProjects, 'side');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('B');
  });

  it('returns empty array when no projects match filter', () => {
    expect(filterProjects([], 'work')).toEqual([]);
  });
});
