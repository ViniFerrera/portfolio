import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { User, FolderKanban, LogOut, Home } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import ThemeToggle from '../ui/ThemeToggle'

const navItems = [
  { to: '/admin', icon: User, label: 'Perfil', end: true },
  { to: '/admin/projetos', icon: FolderKanban, label: 'Projetos' },
]

export default function AdminLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-dvh flex flex-col md:flex-row
      bg-base-900 light:bg-light-900">
      {/* Sidebar */}
      <aside className="w-full md:w-56 shrink-0 flex md:flex-col
        bg-base-800 border-b md:border-b-0 md:border-r border-base-600/30
        light:bg-light-800 light:border-light-700/30">
        <div className="flex md:flex-col w-full">
          {/* Logo */}
          <div className="px-5 py-4 md:py-5 flex items-center gap-3 shrink-0">
            <span className="text-base font-bold text-base-50 light:text-light-50">
              Admin<span className="text-accent">.</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex md:flex-col flex-1 px-2 md:px-3 gap-1 items-center md:items-stretch overflow-x-auto">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-colors duration-150 no-underline whitespace-nowrap
                  ${isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-base-300 hover:text-base-50 hover:bg-base-700/50 light:text-light-400 light:hover:text-light-50 light:hover:bg-light-700/50'
                  }`
                }
              >
                <item.icon size={16} />
                <span className="hidden md:inline">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="flex md:flex-col items-center gap-2 px-3 py-3 md:mt-auto md:border-t md:border-base-600/30
            light:md:border-light-700/30">
            <a
              href="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium
                text-base-300 hover:text-accent no-underline
                light:text-light-400 light:hover:text-accent
                transition-colors duration-150"
            >
              <Home size={14} />
              <span className="hidden md:inline">Ver site</span>
            </a>
            <ThemeToggle />
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium
                text-base-300 hover:text-danger
                light:text-light-400 light:hover:text-danger
                transition-colors duration-150"
            >
              <LogOut size={14} />
              <span className="hidden md:inline">Sair</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
