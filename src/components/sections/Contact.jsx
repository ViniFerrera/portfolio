import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { IconGithub, IconLinkedin } from '../ui/BrandIcons'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { profile } from '../../data/portfolio'

const contactLinks = [
  {
    Icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    desc: 'Respondo em até 24h',
  },
  {
    Icon: IconLinkedin,
    label: 'LinkedIn',
    value: profile.linkedin,
    href: `https://${profile.linkedin}`,
    desc: 'Conecte-se comigo',
  },
  {
    Icon: IconGithub,
    label: 'GitHub',
    value: profile.github,
    href: `https://${profile.github}`,
    desc: 'Veja meu código',
  },
]

export default function Contact() {
  const { ref, isInView } = useScrollReveal(0.1)

  return (
    <section
      id="contato"
      ref={ref}
      className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-12"
      >
        <span className="section-num text-lime font-mono text-[11px] tracking-[3px]">05/</span>
        <span className="text-d-muted text-[11px] tracking-[2px] uppercase">Contato</span>
        <div className="flex-1 h-px bg-[rgba(237,238,244,0.07)]" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            className="font-['Montserrat',sans-serif] font-black
              text-[clamp(2.5rem,5vw,4rem)] tracking-[-2px] text-d-text leading-[1.0] mb-6"
          >
            Vamos<br />
            <span className="text-lime">trabalhar juntos.</span>
          </h2>
          <p className="text-d-muted leading-relaxed text-[0.95rem] max-w-sm">
            Estou aberto a oportunidades, freelances e projetos desafiadores.
            Pode me chamar por qualquer canal abaixo.
          </p>

          {/* Big email CTA */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 mt-8
              font-['Montserrat',sans-serif] font-black
              text-[clamp(1rem,2.2vw,1.4rem)] tracking-tight text-d-text
              hover:text-lime transition-colors duration-200 no-underline group"
          >
            {profile.email}
            <ArrowUpRight
              size={20}
              className="text-lime group-hover:translate-x-1 group-hover:-translate-y-1
                transition-transform duration-200"
            />
          </a>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noreferrer' : undefined}
              aria-label={`${link.label}: ${link.value}`}
              initial={{ opacity: 0, x: 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
              className="contact-link group flex items-center gap-4 p-5 rounded-2xl
                border border-[rgba(237,238,244,0.07)] bg-[#0c0d16]
                hover:border-lime/25 hover:-translate-y-0.5
                transition-all duration-200 no-underline"
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                  bg-[rgba(201,255,0,0.06)] text-lime
                  group-hover:bg-lime/10 transition-colors duration-200"
              >
                <link.Icon size={18} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[2px] text-d-faint mb-0.5">
                  {link.label}
                </p>
                <p className="text-[0.85rem] font-semibold text-d-text truncate">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-d-faint group-hover:text-lime
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                  transition-all duration-200 shrink-0"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
