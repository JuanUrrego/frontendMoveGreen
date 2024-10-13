// Archivo: src/components/auth/CrearUsuarioModal.js
import React, { useState } from 'react';
import { crearUsuario } from '../../services/UsuarioService'; // Importar la función de crearUsuario
import Swal from 'sweetalert2';

export default function CrearUsuarioModal({ show, handleClose }) {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    estado: 'Activo',
    rol: 'Usuario'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamar a la función crearUsuario para guardar el nuevo usuario
      await crearUsuario(usuario);
      Swal.fire({
        icon: 'success',
        title: 'Usuario creado con éxito',
        showConfirmButton: false,
        timer: 1500
      });
      handleClose(); // Cerrar el modal tras guardar
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al crear el usuario',
      });
    }
  };

  if (!show) {
    return null; // No mostrar el modal si show es falso
  }

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="crearUsuarioModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="crearUsuarioModalLabel">Crear Usuario</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  name="nombre" 
                  value={usuario.nombre} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  value={usuario.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  name="password" 
                  value={usuario.password} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}