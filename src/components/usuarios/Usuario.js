import React, { useEffect, useState } from 'react'
import { borrarUsuario, crearUsuario, editarUsuario, obtenerUsuarios } from '../../services/UsuarioService'
import Title from '../ui/Title'
import Modal from './Modal'
import Table from './Table'
import ButtonModal from '../ui/ButtonModal'
import Spinner from '../ui/Spinner'
import Swal from 'sweetalert2'


export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([])
  const [loader, setLoader] = useState(false)

  // Valores predeterminados para el estado y el rol
  const estadoPredeterminado = 'Activo'
  const rolPredeterminado = 'Usuario'

  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    estado: estadoPredeterminado,
    password: '',
    rol: rolPredeterminado
  })

  const [editing, setEditing] = useState(false) // Para controlar si estamos editando
  const [usuarioEdit, setUsuarioEdit] = useState({
    nombre: '',
    email: '',
    estado: estadoPredeterminado,
    password: '',
    rol: rolPredeterminado,
    _id: ''
  }) // Usuario que se va a editar

  useEffect(() => {
    listarUsuarios()
  }, [])

  const listarUsuarios = async () => {
    setLoader(true)
    try {
      const { data } = await obtenerUsuarios()
      setUsuarios(data)
      setLoader(false)
    } catch (e) {
      console.log(e)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se puede mostrar la información!',
        footer: e.message
      })
      setLoader(false)
    }
  }

  const guardar = async () => {
    setLoader(true)
    try {
      const response = await crearUsuario(usuario)
      console.log(response)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se guardó la información correctamente',
        showConfirmButton: false,
        timer: 2000
      })
      listarUsuarios()
      clearForm()
      setLoader(false)
    } catch (e) {
      console.log(e)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo guardar la información!',
        footer: e.message
      })
      setLoader(false)
    }
  }

  const actualizarUsuario = async () => {
    setLoader(true)
    try {
      const response = await editarUsuario(usuarioEdit._id, {
        nombre: usuarioEdit.nombre,
        email: usuarioEdit.email,
        estado: usuarioEdit.estado,
        password: usuarioEdit.password,
        rol: usuarioEdit.rol
      })
      console.log(response)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario actualizado correctamente',
        showConfirmButton: false,
        timer: 2000
      })
      listarUsuarios()
      clearForm()
      setLoader(false)
      setEditing(false)
    } catch (e) {
      console.log(e)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo actualizar la información!',
        footer: e.message
      })
      setLoader(false)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    if (editing) {
      setUsuarioEdit({
        ...usuarioEdit,
        [name]: value
      })
    } else {
      setUsuario({
        ...usuario,
        [name]: value
      })
    }
  }

  const seleccionarUsuario = (usuario) => {
    setUsuarioEdit(usuario)
    setEditing(true) // Activamos el modo edición
  }

  const clearForm = () => {
    setUsuario({
      nombre: '',
      email: '',
      password: '',
      estado: estadoPredeterminado,
      rol: rolPredeterminado
    })
    setUsuarioEdit({
      nombre: '',
      email: '',
      password: '',
      estado: estadoPredeterminado,
      rol: rolPredeterminado,
      _id: ''
    })
    setEditing(false)
  }

  const borrarUsuarioPorId = async (id) => {
    setLoader(true)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro de borrar?',
      text: "¡No se podrá revertir la acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, estoy seguro!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await borrarUsuario(id)
          console.log(response)
          listarUsuarios()
          setLoader(false)
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'El usuario ha sido eliminado.',
            'success'
          )
        } catch (e) {
          console.log(e)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo eliminar la información!',
            footer: e.message
          })
          setLoader(false)
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El usuario está a salvo :)',
          'error'
        )
      }
    })
  }

  return (
    <>
      <Title title={'Usuarios'} />
      {loader && <Spinner />}
      <Table 
        usuarios={usuarios}
        borrarUsuarioPorId={borrarUsuarioPorId}
        seleccionarUsuario={seleccionarUsuario}
      />
      <ButtonModal title={editing ? 'Editar usuario' : 'Nuevo usuario'} />
      <Modal 
        usuario={usuario} 
        usuarioEdit={usuarioEdit}
        change={handleChange}
        guardar={guardar}
        actualizarUsuario={actualizarUsuario}
        clearForm={clearForm}
        editing={editing}
      />
    </>
  )
}