import React from 'react'
import { Link } from 'react-router-dom'
import impulsaTuMarca from '../../assets/impulsatumarca.png'
import seo from '../../assets/seo.png'
import mantenimiento from '../../assets/mantenimiento.png'
import { HashLink, NavHashLink } from 'react-router-hash-link';
import whatsapp from "../../assets/whatsapp.png"
import CardsServiciosMenuMobile from '../Generals/cards/CardsServiciosMenu'

const ServicesPrimerComp = () => {
  return ( 
    <div className='background-principal '>
      
      <a className='whatsapp'  href="https://wa.me/"><img src={whatsapp} alt="" /></a>
      <div className='wd-100 flex-justify-space-around'> 
        <div className=' ServiciosContainerPrimerComponente'>
          
          <h1 className='homePrimerCompTitulo'>Servicios</h1>
         
          <p className='wd-80 serviciosTexto text-align-center '>
             Destacar y llegar a tu audiencia es esencial. En nuestra agencia, 
             ofrecemos soluciones digitales completas para potenciar tu presencia 
             en línea. Desde el desarrollo de aplicaciones hasta estrategias SEO y mantenimiento
              continuo, estamos aca para ayudarte a alcanzar tus objetivos digitales. Selecciona el servicio que se adapte a tus objetivos para descubrir la transformacion digital que necesita tu empresa.  </p>
           
          <div className='wd-100'>
            <div className='seviciosContainerButtonsNavbar  '>
               <HashLink to='/ServicesPage#impulsaTuMarca' smooth  className='serviciosContainerNavlinks serviciosButtonContainers'>Impulsa tu Marca</HashLink>
              <HashLink to='/ServicesPage#solucionesDigitales' smooth className="serviciosContainerNavlinks serviciosButtonContainers"> Soluciones digitales </HashLink>
             
              <HashLink to='/ServicesPage#seo' smooth  className="serviciosContainerNavlinks serviciosButtonContainers"> Seo </HashLink>
              <HashLink to='/ServicesPage#mantenimiento' smooth  className='serviciosContainerNavlinks serviciosButtonContainers'> Mantenimiento </HashLink>
              
            </div>

          </div>
         
          <CardsServiciosMenuMobile/>
        </div>
        
      </div>
   
      <div className='wd-100'>
      <div className='flex-align-center flex-justify-space-evenly containerHeightServicios  ' id="impulsaTuMarca">
         
          <div class="contenedor "  >
            
            <div class="imagen-container" >
              <h3 className="texto titulosComponentes">Impulsa tu marca</h3>
              <p className='titulosComponentesTexto'>Estas buscando llevar su marca al siguiente nivel?. Sabemos lo
                desafiante que puede ser comenzar desde cero o darle un nuevo impulso a tu
                 negocio, y estamos aquí para ayudarte a dar el primer paso.</p>
              <Link to={"/SolucionesDigitalesPage"} className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
            </div>
          </div>
          <div className='impulsaTuMarcaContainerImg'>
            <img className='wd-100' src={impulsaTuMarca} alt="imagen grafica pnp" />
          </div>
        </div>
        <div className='containerTextoImg  ' id="solucionesDigitales">
        <div className='impulsaTuMarcaContainerImg'>
            <img className='wd-100' src={seo} alt="imagen grafica pnp" /></div>
          <div class="contenedor ">
            <div class="imagen-container">
              <h3 className="texto titulosComponentes">Soluciones Digitales</h3>
              <p className='titulosComponentesTexto'>Desde el desarrollo de aplicaciones móviles
               hasta la creación de sitios web y tiendas en línea, pasando por un diseño web a medida y 
              la implementación de menús QR, tenemos las herramientas y la experiencia necesarias 
              para impulsar tu marca en el ámbito digital.</p>
              <Link to={"/SolucionesDigitalesPage"} className='buttonContainers'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
            </div>
          </div>
         
        </div>
       
        <div className='containerTextoImg  ' id="seo">
          <div class="contenedor ">
            <div class="imagen-container">
              <h3 className="texto titulosComponentes">Seo</h3>
              <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem animi facilis quidem incidunt deleniti expedita
                modi, vel natus nulla illo dolores unde nostrum
                doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
              <Link to={"/seoPage"} className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
            </div>
          </div>
          <div className='impulsaTuMarcaContainerImg'>
            <img className='wd-100' src={seo} alt="imagen grafica pnp" /></div>
        </div>

        <div className='flex-align-center flex-justify-space-evenly containerHeightServicios ' id='mantenimiento'>

          <div className='impulsaTuMarcaContainerImg'>
            <img className='wd-100' src={mantenimiento} alt="imagen grafica pnp" /></div>
          <div class="contenedor ">
            <div class="imagen-container">
              <h3 className="texto titulosComponentes">Mantenimiento</h3>
              <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem animi facilis quidem incidunt deleniti expedita
                modi, vel natus nulla illo dolores unde nostrum
                doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
              <Link to={"/MantenimientoPage"} className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ServicesPrimerComp