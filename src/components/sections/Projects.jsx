import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { IconGithub } from '../ui/BrandIcons'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { projects, categories } from '../../data/portfolio'

const catColors = {
  data:  'rgba(201,255,0,0.15)',
  web:   'rgba(100,180,255,0.15)',
  power: 'rgba(180,100,255,0.15)',
  all:   'rgba(255,255,255,0.1)',
}
const catTextColors = {
  data:  '#c9ff00',
  web:   '#64b4ff',
  power: '#b464ff',
  all:   '#fff',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, isInView } = useScrollReveal(0.08)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categoryId === activeFilter)

  return (
    <section
      id="projetos"
      ref={ref}
      className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32
        border-b border-[rgba(237,238,244,0.07)]"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-12"
      >
        <span className="section-num text-lime font-mono text-[11px] tracking-[3px]">04/</span>
        <span className="text-d-muted text-[11px] tracking-[2px] uppercase">Projetos</span>
        <div className="flex-1 h-px bg-[rgba(237,238,244,0.07)]" />
      </motion.div>

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Montserrat',sans-serif] font-black
            text-[clamp(2rem,4vw,3rem)] tracking-[-1.5px] text-d-text"
        >
          Trabalhos recentes.
        </motion.h2>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrar projetos"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeFilter === cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-btn h-8 px-4 rounded-full text-[11px] font-bold
                tracking-wide transition-all duration-200 border
                ${activeFilter === cat.id
                  ? 'filter-btn-active bg-lime border-lime text-[#07080f]'
                  : 'border-[rgba(237,238,244,0.1)] text-d-muted hover:border-[rgba(237,238,244,0.2)] hover:text-d-text'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const catColor = catColors[project.categoryId] || catColors.all
            const catText  = catTextColors[project.categoryId] || catTextColors.all
            const cat = categories.find(c => c.id === project.categoryId)
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="card-project group flex flex-col rounded-2xl overflow-hidden
                  border border-[rgba(237,238,244,0.07)] bg-[#0c0d16]
                  hover:border-lime/25 hover:-translate-y-1
                  transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-[16/9] bg-[#10121e]">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover
                        group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  )}
                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full
                      text-[10px] font-bold tracking-wide"
                    style={{ background: catColor, color: catText }}
                  >
                    {cat?.name}
                  </span>
                  {/* Link overlay */}
                  <div className="absolute inset-0 bg-[#07080f]/0 group-hover:bg-[#07080f]/40
                    transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub: ${project.title}`}
                          className="w-10 h-10 rounded-full bg-[#07080f]/90 border border-[rgba(237,238,244,0.2)]
                            flex items-center justify-center text-d-text hover:text-lime
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
                          aria-label={`Demo: ${project.title}`}
                          className="w-10 h-10 rounded-full bg-[#07080f]/90 border border-[rgba(237,238,244,0.2)]
                            flex items-center justify-center text-d-text hover:text-lime
                            transition-colors duration-150"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-[0.9rem] font-bold text-d-text leading-snug">
                      {project.title}
                    </h3>
                    <a
                      href={project.demoUrl || project.githubUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${project.title}`}
                      className="shrink-0 text-d-faint hover:text-lime transition-colors duration-150 mt-0.5"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <p className="text-[0.78rem] text-d-muted leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tecnologias">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        role="listitem"
                        className="tag-tech px-2 py-0.5 rounded text-[10px] font-medium
                          bg-[#161928] text-d-muted border border-[rgba(237,238,244,0.06)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
