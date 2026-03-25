import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { IconGithub, IconLinkedin } from '../ui/BrandIcons'
import SectionWrapper from '../ui/SectionWrapper'
import { profile } from '../../data/portfolio'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: IconLinkedin,
    label: 'LinkedIn',
    value: profile.linkedin,
    href: `https://${profile.linkedin}`,
  },
  {
    icon: IconGithub,
    label: 'GitHub',
    value: profile.github,
    href: `https://${profile.github}`,
  },
]

export default function Contact() {
  return (
    <SectionWrapper
      id="contato"
      ariaLabel="Contato"
      className="bg-base-800/40 border-y border-base-600/30
        light:bg-light-800/40 light:border-light-700/30"
    >
      <div className="max-w-md mx-auto text-center">
        <p className="text-xs uppercase tracking-[2px] font-semibold text-accent mb-2">
          Vamos conversar
        </p>
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight mb-3">
          Entre em Contato
        </h2>
        <p className="text-base-300 light:text-light-400 mb-8 leading-relaxed text-sm">
          Estou aberto a oportunidades, freelances e projetos interessantes.
        </p>

        <div className="flex flex-col gap-3 text-left">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noreferrer' : undefined}
              aria-label={`${link.label}: ${link.value}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-xl
                bg-base-800/80 border border-base-600/40
                light:bg-light-800/80 light:border-light-700/40
                hover:border-accent/50 hover:translate-x-1
                transition-all duration-200 no-underline group"
            >
              <span
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                  bg-accent/10 text-accent group-hover:bg-accent/20
                  transition-colors duration-200"
              >
                <link.icon size={18} />
              </span>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-base-400 light:text-light-500 mb-0.5">
                  {link.label}
                </span>
                <span className="block text-sm font-medium text-base-50 light:text-light-50">
                  {link.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
