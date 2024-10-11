import { axiosConfiguration } from '../configuration/axiosConfiguration';

// Obtener todos los usuarios
const obtenerUsuarios = () => {
    return axiosConfiguration.get('usuarios', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

// Crear un usuario
const crearUsuario = (data) => {
    return axiosConfiguration.post('usuarios', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

// Editar un usuario
const editarUsuario = (usuarioId, data) => {
    return axiosConfiguration.put('usuarios/'+usuarioId, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

// Eliminar un usuario
const borrarUsuario = (usuarioId) => {
    return axiosConfiguration.delete('usuarios/'+usuarioId, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export {
    obtenerUsuarios,
    crearUsuario,
    editarUsuario,
    borrarUsuario
};