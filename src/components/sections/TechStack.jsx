import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { techStack } from '../../data/portfolio'

export default function TechStack() {
  return (
    <SectionWrapper
      id="stack"
      ariaLabel="Stack tecnológico"
      className="bg-base-800/40 border-y border-base-600/30
        light:bg-light-800/40 light:border-light-700/30"
    >
      <p className="text-xs uppercase tracking-[2px] font-semibold text-accent mb-2">
        Tecnologias
      </p>
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight mb-3">
        Stack Tecnológico
      </h2>
      <p className="text-base-300 light:text-light-400 mb-8 max-w-lg leading-relaxed text-sm">
        Ferramentas e tecnologias que uso no dia a dia.
      </p>

      <div className="space-y-6">
        {techStack.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.4 }}
          >
            <h3 className="text-xs uppercase tracking-widest font-bold text-base-300 light:text-light-400 mb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2" role="list" aria-label={`Tecnologias de ${cat.category}`}>
              {cat.items.map((item, ti) => (
                <motion.span
                  key={item}
                  role="listitem"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + ti * 0.04, duration: 0.3 }}
                  className="px-3 py-1.5 rounded-md text-xs font-medium
                    bg-accent/8 text-accent border border-accent/15
                    light:bg-accent/6 light:border-accent/12
                    hover:bg-accent/15 hover:border-accent/30
                    transition-colors duration-150"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
