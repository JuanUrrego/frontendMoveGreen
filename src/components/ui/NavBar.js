// Archivo: NavBar.js
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService'; // Asegúrate de tener un servicio de logout


export default function NavBar() {
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    logout(); // Elimina el token o la sesión del usuario
    navigate('/'); // Redirige a la página de inicio de sesión
  };

  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link
          to='/reservas'
          tabIndex={0}
          className="nav-brand"
          aria-label='Ir a inicio'
        >
          MOVEGREEN
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              to='/reservas'
              tabIndex={1}
              className='nav-link'
            >
              Reservas
            </NavLink>
            <NavLink
              to='/usuarios'
              tabIndex={2}
              className='nav-link'
            >
              Usuarios
            </NavLink>
          </div>
          {/* Botón de Cerrar Sesión */}
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}