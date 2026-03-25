import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { techStack } from '../../data/portfolio'

export default function TechStack() {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section
      id="stack"
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
        <span className="section-num text-lime font-mono text-[11px] tracking-[3px]">03/</span>
        <span className="text-d-muted text-[11px] tracking-[2px] uppercase">Stack</span>
        <div className="flex-1 h-px bg-[rgba(237,238,244,0.07)]" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            className="font-['Montserrat',sans-serif] font-black
              text-[clamp(2rem,4vw,3rem)] tracking-[-1.5px] text-d-text leading-[1.05]"
          >
            Ferramentas de<br />
            <span className="text-lime">alta precisão.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {techStack.map((cat, ci) => (
            <div key={cat.category}>
              <p className="text-[10px] font-mono tracking-[2.5px] text-d-faint uppercase mb-3">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`Tecnologias de ${cat.category}`}>
                {cat.items.map((item, ti) => (
                  <motion.span
                    key={item}
                    role="listitem"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.25 + ci * 0.08 + ti * 0.03, duration: 0.3 }}
                    className="tag-tech inline-flex items-center px-3 py-1.5 rounded-md
                      text-[11px] font-medium tracking-wide
                      bg-[#0c0d16] text-d-muted border border-[rgba(237,238,244,0.07)]
                      hover:border-lime/25 hover:text-d-text
                      transition-colors duration-150 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
