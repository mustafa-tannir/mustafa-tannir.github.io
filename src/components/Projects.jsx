import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col h-full bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-primary/40 hover:bg-gray-900/80 transition-all duration-300">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="px-2.5 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-5 hover:gap-2 transition-all"
        >
          Live Demo <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-semibold mb-2">Things I've built</p>
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle mt-2">
          A selection of projects I'm proud of.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
