import React from 'react';

export default function Modal({ 
  reserva, 
  change, 
  guardar, 
  clearForm, 
  editing,
  ciudades, 
  tipoVehiculos 
}) {
  const handleChange = (e) => {
    change(e);
  };

  const guardarReserva = (e) => {
    e.preventDefault();
    guardar();
  };

  const clear = () => {
    clearForm();
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-5" id="exampleModalLabel">{editing ? 'Editar Reserva' : 'Nueva Reserva'}</h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              onClick={clear}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={guardarReserva}>
              <div className="mb-3">
                <label htmlFor="nombre" className="col-form-label">Nombre:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  name='nombre'
                  onChange={handleChange}
                  value={reserva.nombre || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">Email:</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email"
                  name='email'
                  onChange={handleChange}
                  value={reserva.email || ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaReserva" className="col-form-label">Fecha Reserva:</label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaReserva"
                  name='fechaReserva'
                  onChange={handleChange}
                  value={reserva.fechaReserva ? new Date(reserva.fechaReserva).toISOString().split('T')[0] : ''}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ciudad" className="col-form-label">Ciudad:</label>
                <select
                  className="form-control"
                  id="ciudad"
                  name="ciudad"
                  onChange={handleChange}
                  value={reserva.ciudad}
                  required
                >
                  <option value="" disabled>Selecciona una ciudad</option>
                  {ciudades.map(ciudad => (
                    <option key={ciudad._id} value={ciudad._id}>
                      {ciudad.ciudad} {}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="tipoVehiculo" className="col-form-label">Tipo Vehículo:</label>
                <select
                  className="form-control"
                  id="tipoVehiculo"
                  name="tipoVehiculo"
                  onChange={handleChange}
                  value={reserva.tipoVehiculo}
                  required
                >
                  <option value="" disabled>Selecciona un tipo de vehículo</option>
                  {tipoVehiculos.map(tipoVehiculo => (
                    <option key={tipoVehiculo._id} value={tipoVehiculo._id}>
                      {tipoVehiculo.vehiculo} {}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={clear}
                >
                  Cerrar
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                >
                  {editing ? 'Actualizar' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}