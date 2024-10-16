import React, { useState } from 'react';
import { login, setToken, setUser } from '../../services/authService';
import Swal from 'sweetalert2';
import CrearUsuarioModal from './CrearUsuarioModal'; // Importar el nuevo modal

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Para controlar la visibilidad del modal

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = await login(email, password);
      // Guardar el token y la información del usuario
      setToken(userData.access_token);
      setUser({
        _id: userData._id,
        nombre: userData.nombre,
        rol: userData.rol,
        email: userData.email
      });
      Swal.fire({
        icon: 'success',
        title: 'Login exitoso',
        showConfirmButton: false,
        timer: 1500
      });
      // Redirigir a la página principal o dashboard
      window.location.href = '/reservas';
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Ocurrió un error al iniciar sesión',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = () => {
    setShowModal(true); // Abre el modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Cierra el modal
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Iniciar Sesión</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={handleShowModal}>
                  Crear Cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Crear Usuario */}
      <CrearUsuarioModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}