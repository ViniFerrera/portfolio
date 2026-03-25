import { motion } from 'framer-motion'
import { BarChart3, Blocks, Code2, Database, Palette } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { expertises } from '../../data/portfolio'

const iconMap = { BarChart3, Blocks, Code2, Database, Palette }

export default function Expertise() {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section
      id="expertise"
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
        <span className="section-num text-lime font-mono text-[11px] tracking-[3px]">02/</span>
        <span className="text-d-muted text-[11px] tracking-[2px] uppercase">Expertise</span>
        <div className="flex-1 h-px bg-[rgba(237,238,244,0.07)]" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-['Montserrat',sans-serif] font-black
          text-[clamp(2rem,4vw,3rem)] tracking-[-1.5px] text-d-text mb-12"
      >
        O que eu faço.
      </motion.h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(237,238,244,0.07)] rounded-2xl overflow-hidden border border-[rgba(237,238,244,0.07)]">
        {expertises.map((exp, i) => {
          const Icon = iconMap[exp.icon] || Code2
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className="expertise-card group relative p-8 bg-[#07080f]
                hover:bg-[#0c0d16] transition-all duration-250 cursor-default"
            >
              {/* Number */}
              <span className="font-mono text-[11px] tracking-[2px] text-d-faint mb-6 block">
                {exp.num}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5
                bg-[rgba(201,255,0,0.06)] text-lime group-hover:bg-lime/10
                transition-colors duration-200">
                <Icon size={20} />
              </div>

              <h3 className="text-[0.95rem] font-bold text-d-text mb-3 leading-snug">
                {exp.title}
              </h3>
              <p className="text-[0.8rem] text-d-muted leading-relaxed">
                {exp.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px]
                bg-lime scale-x-0 group-hover:scale-x-100 origin-left
                transition-transform duration-300" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
