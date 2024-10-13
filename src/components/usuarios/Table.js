import React from 'react'

export default function Table({
  usuarios = [],
  borrarUsuarioPorId,
  seleccionarUsuario
}) {
  const borrarPorId = (id) => borrarUsuarioPorId(id)

  const editarPorId = (usuario) => seleccionarUsuario(usuario)

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Estado</th>
          <th scope="col">Rol</th>
          <th scope="col">Fecha creación</th>
          <th scope="col">Fecha actualizacion</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(({ nombre, email, estado, rol, fechaCreacion, fechaActualizacion, _id }, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{_id}</td>
            <td>{nombre}</td>
            <td>{email}</td>
            <td>{estado ? 'Activo' : 'Inactivo'}</td>
            <td>{rol}</td>
            <td>{fechaCreacion}</td>
            <td>{fechaActualizacion}</td>
            <td>
              <button 
                type="button" 
                className="btn btn-success" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={() => editarPorId({ nombre, email, estado, rol, _id })}>
                Editar
              </button>
              
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => borrarPorId(_id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}