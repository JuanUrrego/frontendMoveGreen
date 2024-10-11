import { axiosConfiguration } from '../configuration/axiosConfiguration';

// Obtener todos los usuarios
const obtenerUsuarios = () => {
    return axiosConfiguration.get('/usuario');
};

// Crear un nuevo usuario
const crearUsuario = (data) => {
    return axiosConfiguration.post('/usuario', data);
};

// Editar un usuario
const editarUsuario = (usuarioId, data) => {
    return axiosConfiguration.put(`/usuario/${usuarioId}`, data);
};

// Eliminar un usuario
const borrarUsuario = (usuarioId) => {
    return axiosConfiguration.delete(`/usuario/${usuarioId}`);
};

export {
    obtenerUsuarios,
    crearUsuario,
    editarUsuario,
    borrarUsuario
};