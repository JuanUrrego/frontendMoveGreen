import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Usuario from '../components/usuarios/Usuario';
import Reserva from '../components/reservas/Reserva';
import Auth from '../components/auth/auth';
import NotFound from '../components/ui/NotFound';
import PrivateRoute from '../PrivateRoute'; // Importa la ruta privada
import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';

export default function AppRouter() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          {/* Ruta pública: página de login */}
          <Route path="/" element={<Auth />} />

          {/* Rutas protegidas: solo accesibles con autenticación */}
          <Route 
            path="/reservas" 
            element={
              <PrivateRoute>
                <Reserva />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/usuarios" 
            element={
              <PrivateRoute>
                <Usuario />
              </PrivateRoute>
            } 
          />

          {/* Ruta para manejar páginas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}