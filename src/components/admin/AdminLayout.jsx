import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { User, FolderKanban, LogOut, Home, Sun, Moon } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'

const navItems = [
  { to: '/admin', icon: User, label: 'Perfil', end: true },
  { to: '/admin/projetos', icon: FolderKanban, label: 'Projetos' },
]

export default function AdminLayout() {
  const { logout } = useAuth()
  const { theme, toggle } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-dvh flex flex-col md:flex-row bg-[#07080f]">
      {/* Sidebar */}
      <aside className="w-full md:w-52 shrink-0
        bg-[#0c0d16] border-b md:border-b-0 md:border-r border-[rgba(237,238,244,0.07)]">
        <div className="flex md:flex-col w-full h-full">
          {/* Logo */}
          <div className="px-5 py-5 shrink-0 border-b border-[rgba(237,238,244,0.07)] hidden md:block">
            <span className="font-['Montserrat',sans-serif] font-black text-[15px] text-[#edeef4]">
              <span className="text-[#c9ff00]">_</span>admin
            </span>
          </div>

          {/* Mobile logo */}
          <div className="flex md:hidden px-5 h-14 items-center border-r border-[rgba(237,238,244,0.07)] shrink-0">
            <span className="font-['Montserrat',sans-serif] font-black text-[15px] text-[#edeef4]">
              <span className="text-[#c9ff00]">_</span>admin
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex md:flex-col flex-1 px-2 md:px-3 py-2 gap-0.5 items-center md:items-stretch overflow-x-auto">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium
                  transition-colors duration-150 no-underline whitespace-nowrap
                  ${isActive
                    ? 'bg-[#c9ff00]/10 text-[#c9ff00]'
                    : 'text-[#6b7494] hover:text-[#edeef4] hover:bg-[rgba(237,238,244,0.04)]'
                  }`
                }
              >
                <item.icon size={15} />
                <span className="hidden md:inline">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="flex md:flex-col items-center md:items-stretch gap-1 px-2 md:px-3 py-3
            md:border-t border-[rgba(237,238,244,0.07)]">
            <a
              href="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium
                text-[#6b7494] hover:text-[#edeef4] no-underline
                transition-colors duration-150"
            >
              <Home size={14} />
              <span className="hidden md:inline">Ver site</span>
            </a>
            <button
              onClick={toggle}
              aria-label="Alternar tema"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium
                text-[#6b7494] hover:text-[#edeef4]
                transition-colors duration-150"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              <span className="hidden md:inline">Tema</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium
                text-[#6b7494] hover:text-[#f87171]
                transition-colors duration-150"
            >
              <LogOut size={14} />
              <span className="hidden md:inline">Sair</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto min-h-dvh">
        <Outlet />
      </main>
    </div>
  )
}
