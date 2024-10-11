import { axiosConfiguration } from '../configuration/axiosConfiguration';

// Obtener todos los reservas
const obtenerCiudades = () => {
    return axiosConfiguration.get('/ciudad');
};

// Crear un nuevo reserva
const crearCiudad = (data) => {
    return axiosConfiguration.post('/ciudad', data);
};

// Editar un reserva
const editarCiudad = (ciudadId, data) => {
    return axiosConfiguration.put(`/ciudad/${ciudadId}`, data);
};

// Eliminar un reserva
const borrarCiudad = (ciudadId) => {
    return axiosConfiguration.delete(`/ciudad/${ciudadId}`);
};

export {
    obtenerCiudades,
    crearCiudad,
    editarCiudad,
    borrarCiudad
};