import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VideojuegoTable from '../components/VideojuegoTable.jsx'
import VideojuegoModal from '../components/VideojuegoModal.jsx'

function MainPage() {
  const [videojuegos, setVideojuegos] = useState([])
  const [modalAbierto, setModalAbierto] = useState(false)
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // TODO: obtener la lista de videojuegos desde el servidor externo.
    // Ejemplo:
    // fetch('http://localhost:8000/videojuegos')
    //   .then((resp) => resp.json())
    //   .then((data) => setVideojuegos(data))
  }, [])

  const abrirModalNuevo = () => {
    setVideojuegoSeleccionado(null)
    setModalAbierto(true)
  }

  const abrirModalEditar = (videojuego) => {
    setVideojuegoSeleccionado(videojuego)
    setModalAbierto(true)
  }

  const cerrarModal = () => {
    setModalAbierto(false)
    setVideojuegoSeleccionado(null)
  }

  const guardarVideojuego = (videojuego) => {
    // TODO: enviar el videojuego al servidor externo (POST / PUT).
    if (videojuegoSeleccionado) {
      setVideojuegos(
        videojuegos.map((v) => (v.id === videojuegoSeleccionado.id ? videojuego : v))
      )
    } else {
      setVideojuegos([...videojuegos, videojuego])
    }
    cerrarModal()
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-slate-800">Videojuegos</h1>
          <button
            onClick={() => navigate('/')}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 space-y-4">
        <div className="flex justify-end">
          <button
            onClick={abrirModalNuevo}
            className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
          >
            + Nuevo videojuego
          </button>
        </div>

        <VideojuegoTable videojuegos={videojuegos} onEditar={abrirModalEditar} />
      </main>

      {modalAbierto && (
        <VideojuegoModal
          videojuego={videojuegoSeleccionado}
          onGuardar={guardarVideojuego}
          onCerrar={cerrarModal}
        />
      )}
    </div>
  )
}

export default MainPage
