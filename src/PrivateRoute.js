import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../src/services/authService'; // Importa el servicio que verifica el token

// Componente de ruta privada
const PrivateRoute = ({ children }) => {
  // Verifica si el token está almacenado
  const token = getToken();

  // Si no hay token, redirige a la página de login
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;