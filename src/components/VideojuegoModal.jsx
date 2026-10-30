import { useState } from 'react'

const VIDEOJUEGO_VACIO = {
  id: '',
  nombre: '',
  sinopsis: '',
  categoria: '',
  url_imagen: '',
}

function VideojuegoModal({ videojuego, onGuardar, onCerrar }) {
  const [form, setForm] = useState(videojuego ?? VIDEOJUEGO_VACIO)
  const esEdicion = videojuego !== null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onGuardar(form)
  }

  const inputClass =
    'w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100'

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl space-y-4"
      >
        <h2 className="text-lg font-bold text-slate-800">
          {esEdicion ? 'Modificar videojuego' : 'Nuevo videojuego'}
        </h2>

        <div className="space-y-1">
          <label htmlFor="id" className="block text-sm font-medium text-slate-700">Id</label>
          <input
            id="id"
            name="id"
            value={form.id}
            onChange={handleChange}
            disabled={esEdicion}
            required
            className={inputClass}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="nombre" className="block text-sm font-medium text-slate-700">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="sinopsis" className="block text-sm font-medium text-slate-700">Sinopsis</label>
          <textarea
            id="sinopsis"
            name="sinopsis"
            rows={3}
            value={form.sinopsis}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="categoria" className="block text-sm font-medium text-slate-700">Categoría</label>
          <input
            id="categoria"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="url_imagen" className="block text-sm font-medium text-slate-700">URL de imagen</label>
          <input
            id="url_imagen"
            name="url_imagen"
            type="url"
            value={form.url_imagen}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onCerrar}
            className="rounded-lg border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}

export default VideojuegoModal
