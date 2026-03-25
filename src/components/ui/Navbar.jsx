import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between
        h-16 px-5 md:px-8
        bg-base-900/80 backdrop-blur-xl border-b border-base-600/50
        light:bg-light-900/80 light:border-light-700/50"
      role="navigation"
      aria-label="Navegação principal"
    >
      <a
        href="#hero"
        className="text-lg font-bold tracking-tight text-base-50 light:text-light-50 no-underline hover:text-base-50 light:hover:text-light-50"
      >
        dev<span className="text-accent">.</span>portfolio
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-base-200 hover:text-base-50
              light:text-light-400 light:hover:text-light-50
              transition-colors duration-150 no-underline"
          >
            {l.label}
          </a>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile toggle */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          className="w-10 h-10 flex items-center justify-center text-base-200 light:text-light-300"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 z-50
              bg-base-800 border-b border-base-600
              light:bg-light-800 light:border-light-700
              flex flex-col py-4 px-5 gap-1 md:hidden"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-3 px-3 rounded-lg
                  text-base-200 hover:text-base-50 hover:bg-base-700
                  light:text-light-400 light:hover:text-light-50 light:hover:bg-light-700
                  transition-colors duration-150 no-underline"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
