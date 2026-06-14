export type ProjectCategory = 'work' | 'side';

export interface Project {
  name: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  repo?: string;
  site?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
