import { axiosConfiguration } from '../configuration/axiosConfiguration';

// Obtener todos los reservas
const obtenerTipos = () => {
    return axiosConfiguration.get('/tipo');
};

// Crear un nuevo reserva
const crearTipo = (data) => {
    return axiosConfiguration.post('/tipo', data);
};

// Editar un reserva
const editarTipo = (tipoId, data) => {
    return axiosConfiguration.put(`/tipo/${tipoId}`, data);
};

// Eliminar un reserva
const borrarTipo = (tipoId) => {
    return axiosConfiguration.delete(`/tipo/${tipoId}`);
};

export {
    obtenerTipos,
    crearTipo,
    editarTipo,
    borrarTipo
};