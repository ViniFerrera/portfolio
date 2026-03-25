import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`nav-wrap fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-[#07080f]/90 backdrop-blur-xl border-b border-[rgba(237,238,244,0.07)]'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Brand */}
        <a
          href="#hero"
          className="nav-logo font-['Montserrat',sans-serif] font-black text-[17px] tracking-[-0.5px]
            text-d-text no-underline hover:text-d-text group"
        >
          <span className="text-lime">_</span>seusite
          <span className="text-d-muted text-[13px] font-normal">.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[13px] font-medium text-d-muted hover:text-d-text
                transition-colors duration-150 no-underline tracking-wide"
            >
              {l.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
            className="w-8 h-8 flex items-center justify-center rounded-md
              text-d-muted hover:text-lime border border-[rgba(237,238,244,0.1)]
              hover:border-lime/30 transition-all duration-150"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* CTA */}
          <a
            href="#contato"
            className="inline-flex items-center h-8 px-4 rounded-md text-[12px] font-bold
              bg-lime text-[#07080f] hover:bg-[#dffe3a]
              transition-colors duration-150 tracking-wide no-underline"
          >
            Contratar
          </a>
        </nav>

        {/* Mobile: theme + burger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="w-8 h-8 flex items-center justify-center rounded-md
              text-d-muted hover:text-lime border border-[rgba(237,238,244,0.1)]"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="w-8 h-8 flex items-center justify-center rounded-md
              text-d-muted hover:text-d-text border border-[rgba(237,238,244,0.1)]"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-[rgba(237,238,244,0.07)]
              bg-[#0c0d16]"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-3 px-3 rounded-lg
                    text-d-muted hover:text-d-text hover:bg-[rgba(237,238,244,0.04)]
                    no-underline transition-colors duration-150"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[rgba(237,238,244,0.07)] mt-2">
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2.5 px-4 rounded-md text-sm font-bold
                    bg-lime text-[#07080f] hover:bg-[#dffe3a]
                    no-underline transition-colors duration-150"
                >
                  Contratar
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
