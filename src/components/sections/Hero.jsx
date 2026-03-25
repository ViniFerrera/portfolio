import { motion } from 'framer-motion'
import { ArrowRight, ArrowDownRight } from 'lucide-react'
import { profile } from '../../data/portfolio'

const CHAR_DELAY = 0.03

function AnimatedWord({ word, startDelay = 0 }) {
  return (
    <>
      {word.split('').map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: startDelay + i * CHAR_DELAY,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </>
  )
}

export default function Hero() {
  const [first, ...rest] = profile.name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-between
        px-6 md:px-10 pt-32 pb-12 overflow-hidden max-w-[1200px] mx-auto"
    >
      {/* ── Top row ── */}
      <div className="flex items-start justify-between gap-8">
        {/* Name block */}
        <div className="flex-1">
          {/* Section tag */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="text-lime font-mono text-[11px] tracking-[3px] uppercase">00/</span>
            <span className="text-d-muted text-[11px] tracking-[2px] uppercase">Intro</span>
          </motion.div>

          {/* Big name */}
          <h1
            className="font-['Montserrat',sans-serif] font-black
              text-[clamp(3rem,8.5vw,7.5rem)]
              leading-[0.95] tracking-[-3px] md:tracking-[-5px]
              text-d-text overflow-hidden"
            aria-label={profile.name}
          >
            <span className="block overflow-hidden">
              <AnimatedWord word={first} startDelay={0.2} />
            </span>
            {lastName && (
              <span className="block overflow-hidden text-lime">
                <AnimatedWord word={lastName} startDelay={0.35} />
              </span>
            )}
          </h1>
        </div>

        {/* Profile image — top-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block shrink-0 w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] mt-14"
        >
          <div className="relative w-full h-full">
            {/* Accent frame */}
            <div className="absolute inset-0 rounded-2xl border border-lime/20 translate-x-2 translate-y-2" />
            <img
              src={profile.heroImageUrl}
              alt={`Foto de ${profile.name}`}
              className="relative z-10 w-full h-full object-cover rounded-2xl
                border border-[rgba(237,238,244,0.1)]
                grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Bottom block ── */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mt-12 md:mt-0">
        {/* Role + status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-d-muted text-[clamp(1rem,2vw,1.2rem)] font-light max-w-md leading-relaxed">
            {profile.role}
          </p>
          <span className="inline-flex items-center gap-2 text-[12px] text-d-muted border border-[rgba(237,238,244,0.1)] rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Disponível para projetos
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex gap-3 flex-wrap"
        >
          <a
            href="#projetos"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl
              bg-lime text-[#07080f] font-bold text-[13px] tracking-wide
              hover:bg-[#dffe3a] hover:-translate-y-0.5
              transition-all duration-200 no-underline min-h-[48px]"
          >
            Ver projetos <ArrowRight size={15} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-[13px] tracking-wide
              border border-[rgba(237,238,244,0.1)] text-d-text
              hover:border-lime/40 hover:text-lime hover:-translate-y-0.5
              transition-all duration-200 no-underline min-h-[48px]"
          >
            Contato <ArrowDownRight size={15} />
          </a>
        </motion.div>
      </div>

      {/* ── Decorative line ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-6 right-6 md:left-10 md:right-10 h-[1px]
          bg-[rgba(237,238,244,0.07)] origin-left"
      />

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-6 right-6 md:right-10
          flex items-center gap-2 text-d-faint text-[11px] font-mono tracking-[2px]"
      >
        SCROLL
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}
