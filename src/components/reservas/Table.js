import React from 'react';

export default function Grid({ reservas = [], borrarReservaPorId, cargarReserva }) {
  return (
    <div className="grid-container" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
      {reservas.map(({ nombre, email, ciudad, tipoVehiculo, fechaReserva, _id }, index) => (
        <div
          key={_id}
          className="grid-item card"
          style={{
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            backgroundColor: '#66bb6a' // Cambiar color de fondo a verde medio
          }}
        >
          <div className="card-body" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title">Reserva #{index + 1}</h5>
            <p className="card-text"><strong>Nombre:</strong> {nombre}</p>
            <p className="card-text"><strong>Email:</strong> {email}</p>
            <p className="card-text"><strong>Ciudad:</strong> {ciudad?.ciudad || 'N/A'}</p>
            <p className="card-text"><strong>Tipo Vehículo:</strong> {tipoVehiculo?.vehiculo || 'N/A'}</p>
            <p className="card-text"><strong>Fecha Reserva:</strong> {fechaReserva}</p>
          </div>
          <div className="d-flex justify-content-between mt-auto">
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => cargarReserva({ nombre, email, ciudad, tipoVehiculo, fechaReserva, _id })}
            >
              Editar
            </button>
            <button
              data-id={_id}
              type="button"
              className="btn btn-warning"
              onClick={borrarReservaPorId}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
