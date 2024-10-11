import React from 'react';

export default function Table({ reservas = [], borrarReservaPorId, cargarReserva }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Tipo Vehículo</th>
            <th scope="col">Fecha Reserva</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(({ nombre, email, ciudad, tipoVehiculo, fechaReserva, _id }, index) => (
            <tr key={_id}>
              <th scope="row">{index + 1}</th>
              <td>{nombre}</td>
              <td>{email}</td>
              <td>{ciudad?.nombre || 'N/A'}</td>
              <td>{tipoVehiculo?.nombre || 'N/A'}</td>
              <td>{fechaReserva}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => cargarReserva({ nombre, email, ciudad, tipoVehiculo, fechaReserva, _id })}
                >
                  Editar
                </button>
                <button
                  data-id={_id}
                  type="button"
                  className="btn btn-danger"
                  onClick={borrarReservaPorId}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}