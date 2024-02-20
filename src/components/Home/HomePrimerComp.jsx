import React from 'react'
import grafica8 from "../../assets/logo2.png"

import { Link } from 'react-router-dom'


const HomePrimerComp = () => {
  return (
    <div className='HomePrimerComp  '>
      <div className='homePrimerCompContainer'>
        <div>
          <h2 className='homePrimerCompTitulo'>Developer Resources</h2>
          <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
        </div>
        <div className="flex-justify-start homePrimerbuttonContainerMobile " >
          <Link to={'/ServicesPage'} className='buttonVermas flex-align-center '><span className='buttonVermasContent font-family-Robot'>Nuestros servicios</span></Link>
          <Link to={'/ContactoPage'} className='buttonVermas2 flex-align-center '><span className='buttonVermasContent2 font-family-Robot'>Contactanos</span></Link>
        </div>

       

      </div>
      <div className='wd-40 h-100 imagenlatidoContainer flex-align-center flex-justify-center '>
        <img className='wd-100 h-90  homePrimerCompImg imagen-latido' src={grafica8} alt="" /> 
      </div>
    </div>
  )
}

export default HomePrimerComp
