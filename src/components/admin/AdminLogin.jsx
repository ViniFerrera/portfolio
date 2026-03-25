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

    // Simulates async auth
    await new Promise(r => setTimeout(r, 500))

    if (login(password)) {
      navigate('/admin')
    } else {
      setError('Senha incorreta.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-dvh flex items-center justify-center px-5
      bg-base-900 light:bg-light-900">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Lock size={24} className="text-accent" />
          </div>
          <h1 className="text-2xl font-extrabold text-base-50 light:text-light-50">
            Admin
          </h1>
          <p className="text-sm text-base-300 light:text-light-400 mt-1">
            Acesse o painel de administração
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider mb-2
              text-base-300 light:text-light-400">
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Digite a senha"
                className="w-full px-4 py-3 pr-11 rounded-lg text-sm
                  bg-base-800 border border-base-600/50 text-base-50
                  light:bg-light-800 light:border-light-600 light:text-light-50
                  focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                  placeholder:text-base-400 light:placeholder:text-light-500
                  transition-colors duration-150"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                className="absolute right-3 top-1/2 -translate-y-1/2
                  text-base-400 hover:text-accent light:text-light-500
                  transition-colors duration-150"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-xs text-danger font-medium" role="alert">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-sm font-semibold
              bg-accent text-base-900 hover:bg-accent-hover
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors duration-200 min-h-[48px]"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
