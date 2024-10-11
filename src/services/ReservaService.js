import { axiosConfiguration } from '../configuration/axiosConfiguration';

// Obtener todos los reservas
const obtenerReservas = () => {
    return axiosConfiguration.get('/reserva');
};

// Crear un nuevo reserva
const crearReserva = (data) => {
    return axiosConfiguration.post('/reserva', data);
};

// Editar un reserva
const editarReserva = (reservaId, data) => {
    return axiosConfiguration.put(`/reserva/${reservaId}`, data);
};

// Eliminar un reserva
const borrarReserva = (reservaId) => {
    return axiosConfiguration.delete(`/reserva/${reservaId}`);
};

export {
    obtenerReservas,
    crearReserva,
    editarReserva,
    borrarReserva
};