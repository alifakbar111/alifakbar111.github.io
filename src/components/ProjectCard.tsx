import type { Project } from '../data/types';

interface Props {
  project: Project;
}

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group flex flex-col bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-teal-400/50 hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-white font-semibold text-base">{project.name}</h3>
        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal-400 transition-colors"
              aria-label={`${project.name} repository`}
            >
              <GitHubIcon />
            </a>
          )}
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal-400 transition-colors"
              aria-label={`${project.name} live site`}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs text-teal-400 bg-teal-400/10 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
