import { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'

export default function ImageUploader({ currentImage, onImageChange, label = 'Imagem' }) {
  const [preview, setPreview] = useState(currentImage || null)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target.result)
      onImageChange(file, e.target.result)
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    handleFile(file)
  }

  const handleRemove = () => {
    setPreview(null)
    onImageChange(null, null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider mb-2
        text-base-300 light:text-light-400">
        {label}
      </label>

      {preview ? (
        <div className="relative inline-block">
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-xl
              border border-base-600/50 light:border-light-600"
          />
          <button
            type="button"
            onClick={handleRemove}
            aria-label="Remover imagem"
            className="absolute -top-2 -right-2 w-7 h-7 rounded-full
              bg-danger text-white flex items-center justify-center
              hover:bg-danger/80 transition-colors duration-150"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-3
            w-full h-40 rounded-xl border-2 border-dashed cursor-pointer
            transition-all duration-200
            ${isDragging
              ? 'border-accent bg-accent/5'
              : `border-base-500/50 hover:border-accent/50
                 light:border-light-600/50 light:hover:border-accent/50`
            }`}
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
            {isDragging ? <ImageIcon size={20} /> : <Upload size={20} />}
          </div>
          <div className="text-center">
            <p className="text-xs font-medium text-base-200 light:text-light-300">
              {isDragging ? 'Solte aqui' : 'Arraste ou clique para enviar'}
            </p>
            <p className="text-[11px] text-base-400 light:text-light-500 mt-0.5">
              PNG, JPG ou WebP
            </p>
          </div>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        aria-label={`Upload de ${label}`}
      />
    </div>
  )
}
