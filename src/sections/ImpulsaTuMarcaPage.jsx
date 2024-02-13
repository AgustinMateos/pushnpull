import React from 'react'
import ImpulsaTuMarcaBody from '../components/ImpulsaTuMarca/ImpulsaTuMarcaBody'
import Navbar from '../components/Generals/Navbar/Navbar'

import Footer from '../components/Generals/Footer/Footer'

const ImpulsaTuMarcaPage = () => {
  return (
    <div className='HomeContainer background-principal'>
        <Navbar/>
        <ImpulsaTuMarcaBody/>
        <Footer/>
    </div>
  )
}

export default ImpulsaTuMarcaPage