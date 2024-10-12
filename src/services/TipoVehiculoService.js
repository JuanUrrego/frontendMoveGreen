import { axiosConfiguration } from '../configuration/axiosConfiguration';

// Obtener todos los reservas
const obtenerTipovehiculos = () => {
    return axiosConfiguration.get('/tipoVehiculo');
};

// Crear un nuevo reserva
const crearTipoVehiculo = (data) => {
    return axiosConfiguration.post('/tipoVehiculo', data);
};

// Editar un reserva
const editarTipoVehiculo = (tipoVehiculoId, data) => {
    return axiosConfiguration.put(`/tipoVehiculo/${tipoVehiculoId}`, data);
};

// Eliminar un reserva
const borrarTipoVehiculo = (tipoVehiculoId) => {
    return axiosConfiguration.delete(`/tipoVehiculo/${tipoVehiculoId}`);
};

export {
    obtenerTipovehiculos,
    crearTipoVehiculo,
    editarTipoVehiculo,
    borrarTipoVehiculo
};