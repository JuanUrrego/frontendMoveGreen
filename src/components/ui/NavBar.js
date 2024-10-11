import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link
      to='/ '
      tabIndex={0}
      className= "nav-brand"
      aria-label='Ir a inicio'     
    >
    MOVEGREEN
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink
          to='/'
          tabIndex={1}
          className='nav-link'
        >
          Usuarios
        </NavLink>
        <NavLink
          to='/auth'
          tabIndex={2}
          className='nav-link'
        >
          Auth
        </NavLink>
        <NavLink
          to='/reservas'
          tabIndex={3}
          className='nav-link'
        >
          Reservas
        </NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}
