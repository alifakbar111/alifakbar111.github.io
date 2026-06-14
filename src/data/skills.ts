import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  { category: 'Frontend Core', skills: ['React JS', 'Next.js', 'TypeScript', 'JavaScript'] },
  { category: 'Other Frameworks', skills: ['Vue.js', 'Nuxt', 'Astro', 'Alpine.js', 'HTMX'] },
  {
    category: 'UI Libraries',
    skills: ['Tailwind CSS', 'MUI', 'shadcn/ui', 'Radix UI', 'Chakra UI', 'Vuetify'],
  },
  { category: 'Architecture', skills: ['Component-Driven Design', 'Atomic Design'] },
  { category: 'Testing', skills: ['Jest', 'RTL', 'Playwright', 'Cypress'] },
  {
    category: 'Version Control',
    skills: ['Git', 'Trunk-based dev', 'PR review', 'Semantic versioning'],
  },
  { category: 'Quality', skills: ['ESLint', 'Prettier', 'Husky', 'Lighthouse CI'] },
  { category: 'AI Tooling', skills: ['Claude', 'GitHub Copilot', 'Cursor', 'OpenCode', 'Cline'] },
  { category: 'DevOps / Tools', skills: ['Docker', 'CI/CD (GitHub Actions)', 'PostgreSQL'] },
  { category: 'Backend (light)', skills: ['Go', 'Python / FastAPI', 'REST API integration'] },
];
