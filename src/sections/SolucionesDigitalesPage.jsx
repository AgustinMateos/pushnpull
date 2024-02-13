import React from 'react'
import SolucionesDigitalesBody from '../components/SolucionesDigitales/SolucionesDigitalesBody'
import Navbar from '../components/Generals/Navbar/Navbar'
import Footer from '../components/Generals/Footer/Footer'
const SolucionesDigitalesPage = () => {
  return (
    <div className='background-principal'>
        <Navbar/>
        <SolucionesDigitalesBody/>
        <Footer/>
    </div>
  )
}

export default SolucionesDigitalesPage