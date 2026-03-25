import { useState } from 'react'
import { Save, Check } from 'lucide-react'
import { profile as initialProfile, expertises as initialExpertises } from '../../data/portfolio'
import ImageUploader from './ImageUploader'

export default function ProfileEditor() {
  const [profileData, setProfileData] = useState({ ...initialProfile })
  const [expertises, setExpertises] = useState([...initialExpertises])
  const [saved, setSaved] = useState(false)

  const updateProfile = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
    setSaved(false)
  }

  const updateExpertise = (id, field, value) => {
    setExpertises(prev => prev.map(e => e.id === id ? { ...e, [field]: value } : e))
    setSaved(false)
  }

  const handleSave = () => {
    // In production: POST to API
    console.log('Saving profile:', profileData)
    console.log('Saving expertises:', expertises)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const inputClass = `w-full px-4 py-3 rounded-lg text-sm
    bg-base-800 border border-base-600/50 text-base-50
    light:bg-light-800 light:border-light-600 light:text-light-50
    focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
    placeholder:text-base-400 light:placeholder:text-light-500
    transition-colors duration-150`

  return (
    <div className="max-w-2xl space-y-10">
      <div>
        <h1 className="text-2xl font-extrabold text-base-50 light:text-light-50 mb-1">
          Perfil
        </h1>
        <p className="text-sm text-base-300 light:text-light-400">
          Edite as informações exibidas no portfólio.
        </p>
      </div>

      {/* Hero Image */}
      <ImageUploader
        label="Foto de Perfil (Hero)"
        currentImage={profileData.heroImageUrl}
        onImageChange={(_file, dataUrl) => updateProfile('heroImageUrl', dataUrl)}
      />

      {/* Basic Info */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-base-200 light:text-light-300">
          Informações Básicas
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
              Nome
            </label>
            <input
              id="name"
              type="text"
              value={profileData.name}
              onChange={e => updateProfile('name', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
              Cargo
            </label>
            <input
              id="role"
              type="text"
              value={profileData.role}
              onChange={e => updateProfile('role', e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="bio" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
            Bio / Sobre
          </label>
          <textarea
            id="bio"
            rows={4}
            value={profileData.bio}
            onChange={e => updateProfile('bio', e.target.value)}
            className={`${inputClass} resize-y`}
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={profileData.email}
              onChange={e => updateProfile('email', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
              LinkedIn
            </label>
            <input
              id="linkedin"
              type="text"
              value={profileData.linkedin}
              onChange={e => updateProfile('linkedin', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="github" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
              GitHub
            </label>
            <input
              id="github"
              type="text"
              value={profileData.github}
              onChange={e => updateProfile('github', e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Expertises */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-base-200 light:text-light-300">
          Áreas de Atuação
        </h2>

        {expertises.map(exp => (
          <div
            key={exp.id}
            className="p-4 rounded-xl bg-base-800/60 border border-base-600/30
              light:bg-light-800/60 light:border-light-700/30 space-y-3"
          >
            <input
              type="text"
              value={exp.title}
              onChange={e => updateExpertise(exp.id, 'title', e.target.value)}
              placeholder="Título"
              aria-label={`Título da expertise: ${exp.title}`}
              className={inputClass}
            />
            <textarea
              rows={2}
              value={exp.description}
              onChange={e => updateExpertise(exp.id, 'description', e.target.value)}
              placeholder="Descrição"
              aria-label={`Descrição da expertise: ${exp.title}`}
              className={`${inputClass} resize-y`}
            />
          </div>
        ))}
      </div>

      {/* Save */}
      <button
        onClick={handleSave}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold
          transition-all duration-200 min-h-[48px]
          ${saved
            ? 'bg-success/20 text-success border border-success/30'
            : 'bg-accent text-base-900 hover:bg-accent-hover'
          }`}
      >
        {saved ? <><Check size={16} /> Salvo!</> : <><Save size={16} /> Salvar alterações</>}
      </button>
    </div>
  )
}
