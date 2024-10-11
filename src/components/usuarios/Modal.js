import React from 'react'

export default function Modal({
  usuario,
  usuarioEdit,
  change,
  guardar,
  actualizarUsuario,
  clearForm,
  editing
}) {
  const handleChange = e => {
    change(e)
  }

  const guardarUsuario = (e) => {
    e.preventDefault()
    if (editing) {
      actualizarUsuario()
    } else {
      guardar()
    }
  }

  const clear = () => {
    clearForm()
  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{editing ? 'Editar usuario' : 'Nuevo usuario'}</h1>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close" 
              onClick={clear}>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={guardarUsuario}>
              <div className="mb-3">
                <label htmlFor="nombre" className="col-form-label">Nombre:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  name="nombre"
                  onChange={handleChange}
                  value={editing ? usuarioEdit.nombre : usuario.nombre}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">Email:</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  onChange={handleChange}
                  value={editing ? usuarioEdit.email : usuario.email}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="col-form-label">Password:</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  name="password"
                  onChange={handleChange}
                  value={editing ? usuarioEdit.password : usuario.password}
                  required
                />
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  data-bs-dismiss="modal" 
                  onClick={clear}>
                  Cerrar
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={editing ? !usuarioEdit.nombre : !usuario.nombre}>
                  {editing ? 'Actualizar' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}