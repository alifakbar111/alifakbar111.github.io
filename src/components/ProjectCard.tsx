import type { Project } from '../data/types';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group flex flex-col bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-teal-400/50 hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-white font-semibold text-base">{project.name}</h3>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-400 transition-colors shrink-0 mt-0.5"
            aria-label={`View ${project.name}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
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
