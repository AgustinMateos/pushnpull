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
         
          <p className='wd-80 homePrimerCompTexto text-align-center '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, saepe inventore doloremque illo rem fugit nostrum
            assumenda necessitatibus non odit ratione
            totam, quia deserunt explicabo? Error pariatur doloremque rerum accusantium?</p>
           
          <div className='wd-100'>
            <div className='seviciosContainerButtonsNavbar  '>
               <HashLink to='/ServicesPage#mantenimiento' smooth  className='serviciosContainerNavlinks buttonContainers'>Impulsa tu Marca</HashLink>
              <HashLink to='/ServicesPage#solucionesDigitales' smooth className="serviciosContainerNavlinks buttonContainers"> Soluciones digitales </HashLink>
             
              <HashLink to='/ServicesPage#seo' smooth  className="serviciosContainerNavlinks buttonContainers"> Seo </HashLink>
              <HashLink to='/ServicesPage#mantenimiento' smooth  className='serviciosContainerNavlinks buttonContainers'> Mantenimiento </HashLink>
            </div>

          </div>
         
          <CardsServiciosMenuMobile/>
        </div>
        
      </div>
   
      <div className='wd-100'>
      <div className='flex-align-center flex-justify-space-evenly containerHeightServicios  ' id="solucionesDigitales">
         
          <div class="contenedor "  >
            
            <div class="imagen-container" >
              <h3 className="texto titulosComponentes">Impulsa tu marca</h3>
              <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem animi facilis quidem incidunt deleniti expedita
                modi, vel natus nulla illo dolores unde nostrum
                doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
              <Link to={"/SolucionesDigitalesPage"} className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
            </div>
          </div>
          <div className='impulsaTuMarcaContainerImg'>
            <img className='wd-100' src={impulsaTuMarca} alt="imagen grafica pnp" />
          </div>
        </div>
        <div className='flex-align-center flex-justify-space-evenly containerHeightServicios  ' id="solucionesDigitales">
           <div className='impulsaTuMarcaContainerImg'>
            <img className='wd-100' src={impulsaTuMarca} alt="imagen grafica pnp" />
          </div>
          <div class="contenedor "  >
            
            <div class="imagen-container" >
              <h3 className="texto titulosComponentes">Soluciones digitales</h3>
              <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem animi facilis quidem incidunt deleniti expedita
                modi, vel natus nulla illo dolores unde nostrum
                doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
              <Link to={"/SolucionesDigitalesPage"} className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
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