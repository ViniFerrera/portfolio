import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Folder } from 'lucide-react'
import { IconGithub } from '../ui/BrandIcons'
import SectionWrapper from '../ui/SectionWrapper'
import { projects, categories } from '../../data/portfolio'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categoryId === activeFilter)

  return (
    <SectionWrapper id="projetos" ariaLabel="Projetos">
      <p className="text-xs uppercase tracking-[2px] font-semibold text-accent mb-2">
        Meu trabalho
      </p>
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight mb-3">
        Projetos em Destaque
      </h2>
      <p className="text-base-300 light:text-light-400 mb-6 max-w-lg leading-relaxed text-sm">
        Uma seleção dos projetos que mais me orgulho.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filtros de projeto">
        {categories.map(cat => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeFilter === cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 min-h-[40px]
              ${activeFilter === cat.id
                ? 'bg-accent text-base-900 shadow-[0_0_16px_rgba(96,165,250,0.2)]'
                : `bg-base-700/50 text-base-200 border border-base-600/40
                   hover:border-accent/40 hover:text-accent
                   light:bg-light-700/50 light:text-light-300 light:border-light-600/40
                   light:hover:border-accent/40 light:hover:text-accent`
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="tabpanel"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-5 rounded-xl
                bg-base-800/60 border border-base-600/40
                light:bg-light-800/60 light:border-light-700/40
                hover:border-accent/50 hover:-translate-y-1
                transition-all duration-250"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center
                    bg-accent/10 text-accent"
                >
                  <Folder size={20} />
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver ${project.title} no GitHub`}
                      className="w-9 h-9 flex items-center justify-center rounded-md
                        text-base-300 hover:text-accent
                        light:text-light-400 light:hover:text-accent
                        transition-colors duration-150"
                    >
                      <IconGithub size={16} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver demo de ${project.title}`}
                      className="w-9 h-9 flex items-center justify-center rounded-md
                        text-base-300 hover:text-accent
                        light:text-light-400 light:hover:text-accent
                        transition-colors duration-150"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Image placeholder */}
              {project.imageUrl && (
                <div className="mb-3 rounded-lg overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-36 object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <h3 className="text-sm font-bold mb-1.5">{project.title}</h3>
              <p className="text-xs text-base-300 light:text-light-400 leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tecnologias">
                {project.tech.map(t => (
                  <span
                    key={t}
                    role="listitem"
                    className="px-2.5 py-0.5 rounded text-[11px] font-medium
                      bg-purple/10 text-purple border border-purple/15
                      light:bg-purple/8 light:border-purple/12"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}
