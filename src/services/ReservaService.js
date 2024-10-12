import { axiosConfiguration } from '../configuration/axiosConfiguration';

// Obtener todos las reservas
const obtenerReservas = () => {
    return axiosConfiguration.get('/reserva');
};

// Crear un nuevo usuario
const crearReserva = (data) => {
    return axiosConfiguration.post('/reserva', data);
};

// Editar un usuario
const editarReserva = (reservaId, data) => {
    return axiosConfiguration.put(`/reserva/${reservaId}`, data);
};

// Eliminar un usuario
const borrarReserva = (reservaId) => {
    return axiosConfiguration.delete(`/reserva/${reservaId}`);
};

export {
    obtenerReservas,
    crearReserva,
    editarReserva,
    borrarReserva
};