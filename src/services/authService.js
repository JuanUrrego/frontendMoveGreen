import axios from 'axios';

const API_URL = 'http://localhost:4000/auth'; // Asegúrate de que la URL sea correcta

const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    return response.data; // Devuelve los datos del usuario si la autenticación es exitosa
  } catch (error) {
    if (error.response && error.response.data) {
      // Muestra el mensaje de error proporcionado por el backend
      throw new Error(error.response.data.mensaje || 'Error al iniciar sesión');
    }
    throw new Error('Error de red');
  }
};


// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Función para guardar el token de autenticación
const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Función para obtener el token de autenticación
const getToken = () => {
  return localStorage.getItem('token');
};

// Función para guardar los datos del usuario
const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

// Función para obtener los datos del usuario
const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export { login, logout, setToken, getToken, setUser, getUser };

