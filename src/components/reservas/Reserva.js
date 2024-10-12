import React, { useEffect, useState } from 'react';
import { borrarReserva, crearReserva, obtenerReservas, editarReserva } from '../../services/ReservaService';
import Title from '../ui/Title.js';
import Modal from './Modal';
import Table from './Table';
import ButtonModal from '../ui/ButtonModal';
import Spinner from '../ui/Spinner';
import Swal from 'sweetalert2';
import { obtenerCiudades } from '../../services/CiudadService.js';
import { obtenerTipovehiculos } from '../../services/TipoVehiculoService.js';

export default function Reserva() {
    const [reservas, setReservas] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [tipoVehiculos, setTipoVehiculos] = useState([]);
    const [loader, setLoader] = useState(false);
    const [editing, setEditing] = useState(false);
    const [reservaEdit, setReservaEdit] = useState(null);

    const [reserva, setReserva] = useState({
        nombre: '',
        email: '',
        ciudad: '',
        tipoVehiculo: '',
        fechaReserva: '',
    });

    useEffect(() => {
        listarReservas();
        listarCiudades();
        listarTipoVehiculos();
    }, []);

    const listarCiudades = async () => {
        try {
            const { data } = await obtenerCiudades();
            setCiudades(data);
        } catch (e) {
            console.error(e);
        }
    };

    const listarTipoVehiculos = async () => {
        try {
            const { data } = await obtenerTipovehiculos();
            setTipoVehiculos(data);
        } catch (e) {
            console.error(e);
        }
    };

    const listarReservas = async () => {
        setLoader(true);
        try {
            const { data } = await obtenerReservas();
            setReservas(data);
        } catch (e) {
            console.error(e);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede mostrar la información!',
                footer: e.message
            });
        } finally {
            setLoader(false);
        }
    };

    const cargarReserva = (reservaData) => {
        setReserva({
            nombre: reservaData.nombre || '',
            email: reservaData.email || '',
            ciudad: reservaData.ciudad?._id || '',
            tipoVehiculo: reservaData.tipoVehiculo?._id || '',
            fechaReserva: reservaData.fechaReserva || '',
        });
        setEditing(true);
        setReservaEdit(reservaData);
    };

    const guardar = async () => {
        if (Object.values(reserva).some(value => !value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios!',
            });
            return;
        }

        setLoader(true);
        try {
            if (editing) {
                const response = await editarReserva(reservaEdit._id, reserva);
                console.log(response);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se actualizó la información correctamente',
                    showConfirmButton: false,
                    timer: 2000
                });
            } else {
                const response = await crearReserva(reserva);
                console.log(response);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se guardó la información correctamente',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            listarReservas();
            clearForm();
        } catch (e) {
            console.error(e);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo guardar la información!',
                footer: e.message
            });
        } finally {
            setLoader(false);
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setReserva({
            ...reserva,
            [name]: value
        });
    };

    const clearForm = () => {
        setReserva({
            nombre: '',
            email: '',
            ciudad: '',
            tipoVehiculo: '',
            fechaReserva: '',
        });
        setEditing(false);
        setReservaEdit(null);
    };

    const borrarReservaPorId = async (e) => {
        const id = e.target.getAttribute('data-id');
        setLoader(true);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: '¿Estás seguro de borrar?',
            text: "No se podrá revertir la acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, estoy seguro!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await borrarReserva(id);
                    listarReservas();
                } catch (e) {
                    console.error(e);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo eliminar la información!',
                        footer: e.message
                    });
                } finally {
                    setLoader(false);
                }
                swalWithBootstrapButtons.fire(
                    'Eliminado!',
                    'La reserva ha sido eliminada.',
                    'success'
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'La reserva está a salvo :)',
                    'error'
                );
                setLoader(false);
            }
        });
    };

    return (
        <>
            <Title title={'Reservas'} />
            {loader && <Spinner />}
            <Table
                reservas={reservas}
                borrarReservaPorId={borrarReservaPorId}
                cargarReserva={cargarReserva}
            />
            <ButtonModal title='Nueva reserva' />
            <Modal
                reserva={reserva}
                change={handleChange}
                guardar={guardar}
                clearForm={clearForm}
                editing={editing}
                ciudades={ciudades}
                tipoVehiculos={tipoVehiculos}
            />
        </>
    );
}
