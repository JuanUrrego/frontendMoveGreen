import React from 'react'
import NavBar from "../components/ui/NavBar"
import { Route, Routes } from 'react-router-dom'
import Usuario from '../components/usuarios/Usuario.js'
import NotFound from '../components/ui/NotFound'
import Footer from '../components/ui/Footer'

export default function AppRouter() {
  return (
    <div>
         <NavBar />
         <div className='container'>
            <Routes>
                <Route path='/' element={<Usuario />}/>
                <Route path='*' element={<NotFound />}/>    
            </Routes> 
         </div>
         <Footer />
    </div>
  )
}