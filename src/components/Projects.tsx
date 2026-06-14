import { useState } from 'react';
import { filterProjects, type FilterValue } from '../utils/filterProjects';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Work', value: 'work' },
  { label: 'Side Projects', value: 'side' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const filtered = filterProjects(projects, activeFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Projects</h2>
        <div className="w-10 h-0.5 bg-teal-400 mb-10"></div>

        <div className="flex gap-1 mb-10 border-b border-gray-800">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                activeFilter === value
                  ? 'border-teal-400 text-teal-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
