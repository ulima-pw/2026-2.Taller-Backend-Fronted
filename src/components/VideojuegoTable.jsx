function VideojuegoTable({ videojuegos, onEditar }) {
  if (videojuegos.length === 0) {
    return (
      <div className="rounded-xl bg-white p-8 text-center text-slate-500 shadow">
        No hay videojuegos registrados.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
          <tr>
            <th className="px-4 py-3">Id</th>
            <th className="px-4 py-3">Imagen</th>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Sinopsis</th>
            <th className="px-4 py-3">Categoría</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {videojuegos.map((videojuego) => (
            <tr key={videojuego.id} className="hover:bg-slate-50">
              <td className="px-4 py-3 text-slate-700">{videojuego.id}</td>
              <td className="px-4 py-3">
                <img
                  src={videojuego.url_imagen}
                  alt={videojuego.nombre}
                  className="h-16 w-12 rounded object-cover bg-slate-200"
                />
              </td>
              <td className="px-4 py-3 font-medium text-slate-800">{videojuego.nombre}</td>
              <td className="px-4 py-3 text-slate-600 max-w-md">{videojuego.sinopsis}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
                  {videojuego.categoria}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <button
                  onClick={() => onEditar(videojuego)}
                  className="rounded-lg border border-slate-300 px-3 py-1 text-slate-700 hover:bg-slate-100"
                >
                  Modificar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VideojuegoTable
