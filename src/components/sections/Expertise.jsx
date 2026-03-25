import { motion } from 'framer-motion'
import { BarChart3, Blocks, Code2, Database, Palette } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import { expertises } from '../../data/portfolio'

const iconMap = {
  BarChart3: BarChart3,
  Blocks: Blocks,
  Code2: Code2,
  Database: Database,
  Palette: Palette,
}

export default function Expertise() {
  return (
    <SectionWrapper id="expertise" ariaLabel="Áreas de atuação">
      <p className="text-xs uppercase tracking-[2px] font-semibold text-accent mb-2">
        O que eu faço
      </p>
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight mb-3">
        Áreas de Atuação
      </h2>
      <p className="text-base-300 light:text-light-400 mb-8 max-w-lg leading-relaxed text-sm">
        Minha expertise abrange desde análise de dados até desenvolvimento completo de sistemas.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {expertises.map((exp, i) => {
          const Icon = iconMap[exp.icon] || Code2
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 rounded-xl
                bg-base-800/60 border border-base-600/40
                light:bg-light-800/60 light:border-light-700/40
                hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(96,165,250,0.08)]
                transition-all duration-250 cursor-default"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4
                  bg-accent/10 text-accent
                  group-hover:bg-accent/20
                  transition-colors duration-200"
              >
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-bold mb-2 leading-snug">{exp.title}</h3>
              <p className="text-xs text-base-300 light:text-light-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
