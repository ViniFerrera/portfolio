import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { profile } from '../../data/portfolio'

const stats = [
  { value: '3+', label: 'anos de exp.' },
  { value: '20+', label: 'projetos' },
  { value: '10+', label: 'tecnologias' },
  { value: '100%', label: 'compromisso' },
]

export default function About() {
  const { ref, isInView } = useScrollReveal(0.15)

  return (
    <section
      id="sobre"
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
        <span className="section-num text-lime font-mono text-[11px] tracking-[3px]">01/</span>
        <span className="text-d-muted text-[11px] tracking-[2px] uppercase">Sobre</span>
        <div className="flex-1 h-px bg-[rgba(237,238,244,0.07)]" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            className="font-['Montserrat',sans-serif] font-black
              text-[clamp(2rem,4vw,3rem)] tracking-[-1.5px] leading-[1.05]
              text-d-text mb-6"
          >
            Construindo soluções<br />
            <span className="text-lime">que importam.</span>
          </h2>
          <p className="text-d-muted leading-relaxed text-[0.95rem] mb-5">
            {profile.bio}
          </p>
          <p className="text-d-muted leading-relaxed text-[0.95rem]">
            Gosto de ambientes ágeis, code reviews e cultura de aprendizado contínuo.
            Fora do trabalho, contribuo para projetos open source e participo de hackathons.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
          role="list"
          aria-label="Estatísticas"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              role="listitem"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="stat-card group p-6 rounded-xl
                border border-[rgba(237,238,244,0.07)] bg-[#0c0d16]
                hover:border-lime/25 hover:-translate-y-0.5
                transition-all duration-200 cursor-default"
            >
              <span className="block font-['Montserrat',sans-serif] font-black
                text-[2.25rem] tracking-[-1.5px] text-lime leading-none mb-1">
                {s.value}
              </span>
              <span className="text-[11px] text-d-muted uppercase tracking-[1.5px] font-medium">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
