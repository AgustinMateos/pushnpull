import React from 'react'
import Navbar from '../components/Generals/Navbar/Navbar'
import MantenimientoBody from '../components/Mantenimiento/MantenimientoBody'
import Footer from '../components/Generals/Footer/Footer'

const MantenimientoPage = () => {
  return (
    <div className='HomeContainer background-principal'>
      <Navbar/>
      <MantenimientoBody/>
     <Footer/> 
      </div>
  )
}

export default MantenimientoPage