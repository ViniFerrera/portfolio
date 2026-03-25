import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="relative w-10 h-10 flex items-center justify-center rounded-lg
        border transition-all duration-200
        border-base-500 hover:border-accent text-base-200 hover:text-accent
        light:border-light-600 light:hover:border-accent light:text-light-300 light:hover:text-accent"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
