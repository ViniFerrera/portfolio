import { motion } from 'framer-motion'
import { ArrowDown, Send } from 'lucide-react'
import { profile } from '../../data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh flex items-center justify-center text-center px-5 pt-20 pb-12 overflow-hidden">
      {/* Grid bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]
          light:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent)',
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[640px]"
      >
        {/* Avatar */}
        <motion.div variants={item} className="mb-6">
          {profile.heroImageUrl ? (
            <img
              src={profile.heroImageUrl}
              alt={`Foto de ${profile.name}`}
              width={140}
              height={140}
              className="w-[140px] h-[140px] rounded-full object-cover mx-auto
                border-2 border-accent/40 shadow-[0_0_40px_rgba(96,165,250,0.25)]
                hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div
              className="w-[140px] h-[140px] rounded-full mx-auto flex items-center justify-center
                border-2 border-accent/40 shadow-[0_0_40px_rgba(96,165,250,0.25)]
                bg-base-700 light:bg-light-700
                text-4xl font-bold text-accent"
            >
              {profile.name.charAt(0)}
            </div>
          )}
        </motion.div>

        {/* Badge */}
        <motion.div variants={item} className="mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium
              bg-base-700/60 border border-base-500/50 text-base-200
              light:bg-light-700/60 light:border-light-600/50 light:text-light-300"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
            Disponível para projetos
          </span>
        </motion.div>

        {/* Name & Role */}
        <motion.h1
          variants={item}
          className="text-[clamp(2.25rem,5.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-1.5px] mb-3"
        >
          Olá, eu sou<br />
          <span className="text-accent">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-[clamp(1rem,2vw,1.25rem)] text-base-300 light:text-light-400 mb-4"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="text-base-300 light:text-light-400 max-w-md mx-auto mb-8 leading-relaxed text-[0.95rem]"
        >
          Transformo ideias em produtos digitais robustos e escaláveis.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex gap-3 justify-center flex-wrap">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
              bg-accent text-base-900 font-semibold text-[0.9375rem]
              hover:bg-accent-hover hover:-translate-y-0.5
              shadow-[0_0_24px_rgba(96,165,250,0.25)]
              hover:shadow-[0_0_40px_rgba(96,165,250,0.35)]
              transition-all duration-200 no-underline min-h-[48px]"
          >
            <ArrowDown size={18} aria-hidden="true" />
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[0.9375rem]
              border border-base-500 text-base-50 hover:border-accent/50 hover:bg-accent-subtle
              light:border-light-600 light:text-light-50 light:hover:border-accent/50 light:hover:bg-accent-subtle
              transition-all duration-200 no-underline min-h-[48px]"
          >
            <Send size={18} aria-hidden="true" />
            Contato
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
