import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 500))
    if (login(password)) {
      navigate('/admin')
    } else {
      setError('Senha incorreta.')
    }
    setLoading(false)
  }

  const input = `w-full px-4 py-3 rounded-xl text-sm
    bg-[#0c0d16] border border-[rgba(237,238,244,0.08)] text-[#edeef4]
    focus:outline-none focus:border-[#c9ff00]/40 focus:ring-1 focus:ring-[#c9ff00]/20
    placeholder:text-[#363d58] transition-colors duration-150`

  return (
    <div className="min-h-dvh flex items-center justify-center px-5 bg-[#07080f]">
      <div className="w-full max-w-[360px]">
        <div className="mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#c9ff00]/10 border border-[#c9ff00]/20
            flex items-center justify-center mb-6">
            <Lock size={20} className="text-[#c9ff00]" />
          </div>
          <h1 className="font-['Montserrat',sans-serif] font-black text-[28px] tracking-[-1px] text-[#edeef4] mb-1">
            Admin
          </h1>
          <p className="text-sm text-[#6b7494]">
            Acesse o painel de administração
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-[2px] mb-2 text-[#6b7494]">
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className={`${input} pr-11`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                className="absolute right-3.5 top-1/2 -translate-y-1/2
                  text-[#363d58] hover:text-[#c9ff00] transition-colors duration-150"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-xs text-[#f87171] font-medium" role="alert">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-[13px] font-bold
              bg-[#c9ff00] text-[#07080f] hover:bg-[#dffe3a]
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-colors duration-200 min-h-[48px] tracking-wide"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] text-[#363d58]">
          Senha demo: <code className="text-[#c9ff00]">admin123</code>
        </p>
      </div>
    </div>
  )
}
