import React from 'react'
import grafica8 from "../../assets/pushnpullIndex.webp"
import whatsapp from "../../assets/whatsapp.png"
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';


const HomePrimerComp = () => {
  return (
    <div className='HomePrimerComp  '>
      <a className='whatsapp'  href="https://wa.me/">
        <img src={whatsapp} alt="" />
      </a>
      <div className='homePrimerCompContainer'>
        <div>
          <h2 className='homePrimerCompTitulo'>Empujemos juntos tu < Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('marca.')
              .pauseFor(1000)
              .deleteAll()
              .typeString(' sitio web.')
              .pauseFor(1000)
              .deleteAll()
              .typeString(' tienda online.')
              .pauseFor(1000)
              .deleteAll()
              .typeString(' idea.')
              .pauseFor(1000)
              .start();
          }}
        /></h2>
        
          <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital
           especializada en aplicaciones web, desarrollo web, diseño web y 
          SEO. A través de una consultoría, nuestro equipo experimentado 
          ayuda a las marcas a comprender y optimizar su desempeño digital.</p>
        </div>
        <div className=" homePrimerCompButtons  " >
          <Link to={'/ServicesPage'} className='buttonVermas flex-align-center '><span className='buttonVermasContent font-family-Robot'>Nuestros servicios</span></Link>
          <Link to={'/ContactoPage'} className='buttonVermas2  '><span className='buttonVermasContent2 font-family-Robot'>Contactanos</span></Link>
        </div>
        

       

      </div>
      <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center  '>
        <img className='wd-100 h-90  homePrimerCompImg imagen-latido' src={grafica8} alt="" /> 
      </div>
    </div>
  )
}

export default HomePrimerComp