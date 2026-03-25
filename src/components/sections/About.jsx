import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { profile } from '../../data/portfolio'

const stats = [
  { value: '3+', label: 'Anos de experiência' },
  { value: '20+', label: 'Projetos entregues' },
  { value: '10+', label: 'Tecnologias' },
  { value: '100%', label: 'Comprometimento' },
]

export default function About() {
  return (
    <SectionWrapper id="sobre" ariaLabel="Sobre mim">
      <p className="text-xs uppercase tracking-[2px] font-semibold text-accent mb-2">
        Quem sou eu
      </p>
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight mb-6">
        Sobre Mim
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <p className="text-base-200 light:text-light-300 leading-relaxed">
            {profile.bio}
          </p>
          <p className="text-base-200 light:text-light-300 leading-relaxed">
            Fora do trabalho, contribuo para projetos open source, escrevo artigos
            técnicos e participo de hackathons.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3" role="list" aria-label="Estatísticas">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              role="listitem"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-5 rounded-xl
                bg-base-800 border border-base-600/50
                light:bg-light-800 light:border-light-700/50
                hover:border-accent/40 hover:-translate-y-0.5
                transition-all duration-200"
            >
              <span className="block text-2xl font-extrabold text-accent font-mono tracking-tight">
                {s.value}
              </span>
              <span className="block text-xs text-base-300 light:text-light-400 mt-1">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
