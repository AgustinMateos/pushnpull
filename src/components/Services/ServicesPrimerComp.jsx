import React from 'react'
import { Link } from 'react-router-dom'
import impulsaTuMarca from '../../assets/impulsatumarca.png'
import seo from '../../assets/seo.png'
import mantenimiento from '../../assets/mantenimiento.png'
import { HashLink, NavHashLink } from 'react-router-hash-link';
import whatsapp from "../../assets/whatsapp.png"
import CardsServiciosMenuMobile from '../Generals/cards/CardsServiciosMenu'

const ServicesPrimerComp = ({textos}) => {
  return ( 
    <div className='background-principal '>
      
      <a className='whatsapp'  href="https://wa.me/"><img src={whatsapp} alt="" /></a>
      <div className='wd-100 flex-justify-space-around'> 
        <div className=' ServiciosContainerPrimerComponente'>
          
          <h1 className='homePrimerCompTitulo'>{textos.servicios.titulo}</h1>
         
          <p className='wd-80 serviciosTexto text-align-center '>
          {textos.servicios.descripcion}  </p>
           
          <div className='wd-100'>
            <div className='seviciosContainerButtonsNavbar  '>
               <HashLink to='/ServicesPage#impulsaTuMarca' smooth  className='serviciosContainerNavlinks serviciosButtonContainers'>{textos.servicios.menu.titulo1}</HashLink>
              <HashLink to='/ServicesPage#solucionesDigitales' smooth className="serviciosContainerNavlinks serviciosButtonContainers"> {textos.servicios.menu.titulo2} </HashLink>
             
              <HashLink to='/ServicesPage#seo' smooth  className="serviciosContainerNavlinks serviciosButtonContainers"> {textos.servicios.menu.titulo3}</HashLink>
              <HashLink to='/ServicesPage#mantenimiento' smooth  className='serviciosContainerNavlinks serviciosButtonContainers'> {textos.servicios.menu.titulo4} </HashLink>
              
            </div>

          </div>
         
          <CardsServiciosMenuMobile/>
        </div>
        
      </div>
   
      <div className='wd-100'>
      <div className='flex-align-center flex-justify-space-evenly containerHeightServicios  ' id="impulsaTuMarca">
         
          <div class="contenedor "  >
            
            <div class="imagen-container" >
              <h3 className="texto titulosComponentes">{textos.servicios.menu.titulo1}</h3>
              <p className='titulosComponentesTexto'>{textos.servicios.servicio1.descripcion1}</p>
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
              <h3 className="texto titulosComponentes">{textos.servicios.menu.titulo2}</h3>
              <p className='titulosComponentesTexto'>{textos.servicios.servicio2.descripcion2}</p>
              <Link to={"/SolucionesDigitalesPage"} className='buttonContainers'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
            </div>
          </div>
         
        </div>
       
        <div className='containerTextoImg  ' id="seo">
          <div class="contenedor ">
            <div class="imagen-container">
              <h3 className="texto titulosComponentes">{textos.servicios.menu.titulo3}</h3>
              <p className='titulosComponentesTexto'>{textos.servicios.servicio3.descripcion3}</p>
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
              <h3 className="texto titulosComponentes">{textos.servicios.menu.titulo4}</h3>
              <p className='titulosComponentesTexto'>{textos.servicios.servicio3.descripcion3}</p>
              <Link to={"/MantenimientoPage"} className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ServicesPrimerComp