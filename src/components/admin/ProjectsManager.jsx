import { useState } from 'react'
import { Plus, Pencil, Trash2, Save, X, Check } from 'lucide-react'
import { projects as initialProjects, categories } from '../../data/portfolio'
import ImageUploader from './ImageUploader'

const emptyProject = {
  title: '',
  description: '',
  imageUrl: null,
  githubUrl: '',
  demoUrl: '',
  tech: [],
  categoryId: '',
  featured: false,
}

export default function ProjectsManager() {
  const [projects, setProjects] = useState([...initialProjects])
  const [editing, setEditing] = useState(null) // project id or 'new'
  const [form, setForm] = useState({ ...emptyProject })
  const [techInput, setTechInput] = useState('')
  const [saved, setSaved] = useState(false)

  const categoryOptions = categories.filter(c => c.id !== 'all')

  const startCreate = () => {
    setEditing('new')
    setForm({ ...emptyProject })
    setTechInput('')
  }

  const startEdit = (project) => {
    setEditing(project.id)
    setForm({ ...project })
    setTechInput('')
  }

  const cancel = () => {
    setEditing(null)
    setForm({ ...emptyProject })
  }

  const addTech = () => {
    const tag = techInput.trim()
    if (tag && !form.tech.includes(tag)) {
      setForm(prev => ({ ...prev, tech: [...prev.tech, tag] }))
    }
    setTechInput('')
  }

  const removeTech = (tag) => {
    setForm(prev => ({ ...prev, tech: prev.tech.filter(t => t !== tag) }))
  }

  const handleTechKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTech()
    }
  }

  const handleSave = () => {
    if (!form.title || !form.categoryId) return

    if (editing === 'new') {
      const newProject = { ...form, id: Date.now().toString() }
      setProjects(prev => [...prev, newProject])
    } else {
      setProjects(prev => prev.map(p => p.id === editing ? { ...p, ...form } : p))
    }

    setEditing(null)
    setForm({ ...emptyProject })
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const handleDelete = (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este projeto?')) return
    setProjects(prev => prev.filter(p => p.id !== id))
    if (editing === id) cancel()
  }

  const inputClass = `w-full px-4 py-3 rounded-lg text-sm
    bg-base-800 border border-base-600/50 text-base-50
    light:bg-light-800 light:border-light-600 light:text-light-50
    focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
    placeholder:text-base-400 light:placeholder:text-light-500
    transition-colors duration-150`

  return (
    <div className="max-w-3xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-base-50 light:text-light-50 mb-1">
            Projetos
          </h1>
          <p className="text-sm text-base-300 light:text-light-400">
            Gerencie os projetos exibidos no portfólio.
          </p>
        </div>
        {editing === null && (
          <button
            onClick={startCreate}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold
              bg-accent text-base-900 hover:bg-accent-hover
              transition-colors duration-200 min-h-[44px]"
          >
            <Plus size={16} />
            Novo Projeto
          </button>
        )}
      </div>

      {saved && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-success/10 border border-success/20 text-success text-sm font-medium" role="status">
          <Check size={16} />
          Projeto salvo com sucesso!
        </div>
      )}

      {/* Edit/Create Form */}
      {editing !== null && (
        <div className="p-6 rounded-xl bg-base-800/60 border border-base-600/30
          light:bg-light-800/60 light:border-light-700/30 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-base-200 light:text-light-300">
              {editing === 'new' ? 'Novo Projeto' : 'Editar Projeto'}
            </h2>
            <button onClick={cancel} aria-label="Cancelar" className="text-base-400 hover:text-danger transition-colors">
              <X size={18} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="proj-title" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
                Título *
              </label>
              <input
                id="proj-title"
                type="text"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                placeholder="Nome do projeto"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="proj-category" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
                Tema/Categoria *
              </label>
              <select
                id="proj-category"
                value={form.categoryId}
                onChange={e => setForm({ ...form, categoryId: e.target.value })}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Selecione...</option>
                {categoryOptions.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="proj-desc" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
              Descrição
            </label>
            <textarea
              id="proj-desc"
              rows={3}
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              placeholder="Descreva o projeto..."
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="proj-github" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
                GitHub URL
              </label>
              <input
                id="proj-github"
                type="url"
                value={form.githubUrl || ''}
                onChange={e => setForm({ ...form, githubUrl: e.target.value })}
                placeholder="https://github.com/..."
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="proj-demo" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
                Demo URL
              </label>
              <input
                id="proj-demo"
                type="url"
                value={form.demoUrl || ''}
                onChange={e => setForm({ ...form, demoUrl: e.target.value })}
                placeholder="https://..."
                className={inputClass}
              />
            </div>
          </div>

          {/* Tech tags */}
          <div>
            <label htmlFor="proj-tech" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-base-300 light:text-light-400">
              Tecnologias
            </label>
            <div className="flex gap-2">
              <input
                id="proj-tech"
                type="text"
                value={techInput}
                onChange={e => setTechInput(e.target.value)}
                onKeyDown={handleTechKeyDown}
                placeholder="Adicione e pressione Enter"
                className={`${inputClass} flex-1`}
              />
              <button
                type="button"
                onClick={addTech}
                className="px-4 py-2 rounded-lg text-sm font-semibold
                  bg-accent/10 text-accent border border-accent/20
                  hover:bg-accent/20 transition-colors duration-150 min-h-[44px]"
              >
                Adicionar
              </button>
            </div>
            {form.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {form.tech.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium
                      bg-purple/10 text-purple border border-purple/15"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTech(tag)}
                      aria-label={`Remover ${tag}`}
                      className="text-purple/60 hover:text-danger transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          <ImageUploader
            label="Imagem do Projeto"
            currentImage={form.imageUrl}
            onImageChange={(_file, dataUrl) => setForm({ ...form, imageUrl: dataUrl })}
          />

          {/* Featured toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={e => setForm({ ...form, featured: e.target.checked })}
              className="w-4 h-4 rounded border-base-500 text-accent focus:ring-accent/30
                bg-base-800 light:bg-light-800"
            />
            <span className="text-sm text-base-200 light:text-light-300">
              Projeto em destaque
            </span>
          </label>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSave}
              disabled={!form.title || !form.categoryId}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                bg-accent text-base-900 hover:bg-accent-hover
                disabled:opacity-40 disabled:cursor-not-allowed
                transition-colors duration-200 min-h-[44px]"
            >
              <Save size={16} />
              Salvar
            </button>
            <button
              onClick={cancel}
              className="px-5 py-2.5 rounded-lg text-sm font-medium
                text-base-300 border border-base-600/50
                hover:text-base-50 hover:border-base-500
                light:text-light-400 light:border-light-600 light:hover:text-light-50
                transition-colors duration-150 min-h-[44px]"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Project List */}
      <div className="space-y-3">
        {projects.map(project => {
          const cat = categories.find(c => c.id === project.categoryId)
          return (
            <div
              key={project.id}
              className="flex items-center gap-4 p-4 rounded-xl
                bg-base-800/40 border border-base-600/30
                light:bg-light-800/40 light:border-light-700/30
                hover:border-base-500/50 light:hover:border-light-600
                transition-colors duration-150"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-base-50 light:text-light-50 truncate">
                  {project.title}
                </h3>
                <p className="text-xs text-base-400 light:text-light-500 mt-0.5">
                  {cat?.name || 'Sem categoria'}
                  {project.featured && (
                    <span className="ml-2 text-accent">&#9733; Destaque</span>
                  )}
                </p>
              </div>
              <div className="flex gap-1.5 shrink-0">
                <button
                  onClick={() => startEdit(project)}
                  aria-label={`Editar ${project.title}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                    text-base-300 hover:text-accent hover:bg-accent/10
                    light:text-light-400 light:hover:text-accent
                    transition-colors duration-150"
                >
                  <Pencil size={15} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  aria-label={`Excluir ${project.title}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                    text-base-300 hover:text-danger hover:bg-danger/10
                    light:text-light-400 light:hover:text-danger
                    transition-colors duration-150"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
