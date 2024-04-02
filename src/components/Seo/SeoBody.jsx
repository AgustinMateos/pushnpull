
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import seoImg from '../../assets/ecommerceGrafica.png';
import whatsapp from "../../assets/whatsapp.png"
import mantenimientoSeo from '../../assets/desarrolloweb.png'
import solucionesDigitalesImg from '../../assets/solucionesDigitalesPushnPull.webp'
import CardsSeoMobile from '../Generals/cards/CardsSeoMobile';
import Presupuesto from '../Generals/Presupuesto/Presupuesto';

const MantenimientoSeo = () => {
  const [selectedOption, setSelectedOption] = useState('Opción 1'); // Inicializando con 'Opción 1'

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='wd-100'>
      <a className='whatsapp' href="https://wa.me/"><img src={whatsapp} alt="" /></a>
      <div className='HomePrimerComp'>
        <div className='homePrimerCompContainer'>
          <div>
            <h2 className='homePrimerCompTitulo'>SEO</h2>
            <p className='homePrimerCompTexto font-family-Robot'>
              Tenemos el conocimiento y las habilidades 
              para que tu negocio se posicione en los primeros resultados de 
               búsquedas a traves de estrategias personalizadas y la optimización de 
              los motores de búsqueda (SEO),  logrando mejorar el posicionamiento orgánico
              (no pago) de tu tienda online o sitio web.
             
             </p>
          </div>
        </div>
        <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center'>
          <img className='wd-100 h-90 homePrimerCompImg imagen-latido' src={solucionesDigitalesImg} alt="" />
        </div>
      </div>
      <div >
        <div><div className='wd-100 flex-justify-center'>
      <CardsSeoMobile />
        <div className='wd-90 flex-justify-center flex-column mantenimientoContainerHeight'>
          <div className='wd-100 flex-justify-center flex-justify-center'>
            <div className='wd-100 flex-align-center flex-justify-center flex-column'>
              <ul className='flex-column wd-100 flex-justify-space-around mantenimientoContainerRow'>
                <li className={`buttonVermas2 flex-align-center ${selectedOption === 'Opción 1' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 1')}>Campaña de Seo</li>
                <li className={`buttonVermas2 flex-align-center ${selectedOption === 'Opción 2' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 2')}>Auditoria Seo</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        {selectedOption === 'Opción 1' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={mantenimientoSeo} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Campaña de SEO</h5>
                <p className='homePrimerCompTexto text-align-center'> 
                  Cuando buscamos información sobre productos y servicios, la primera opcion
                    es hacerlo en Google (u otro motor de búsqueda). Por
                  lo que estar
                  en las primeras posiciones garantiza más visitas a su sitio y una mayor exposición de los
                  productos y servicios que ofreces.  Conectamos tu estrategia con los objetivos y oportunidades de crecimiento.</p>
                  <div className='serviciosButtonPresupuestoCardContainer'>
               <Link to={"/CampanaSeoPage"} className='buttonContainers'>Ver mas</Link>
                <Link to={"/ContactoPage"} className='buttonContainers'>Presupuesto</Link>
               </div>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 2' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={seoImg} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Auditoria SEO</h5>
                <p className='homePrimerCompTexto text-align-center'>Analizamos el nivel de optimización de tu sitio web para los motores de búsqueda, permitiendo detectar errores que podrían obstaculizar el buen posicionamiento 
                  y descubrir oportunidades que 
                favorezcan una mejor ubicación en los resultados de búsqueda.</p>
               <div className='serviciosButtonPresupuestoCardContainer'>
               <Link to={"/AuditoriaSeopage"} className='buttonContainers'>Ver mas</Link>
                <Link to={"/ContactoPage"} className='buttonContainers'> Presupuesto</Link>
               </div>
               
              </div>
            </div>
          </div>
        }

      </div></div>
        
      </div>
      

      
      <Presupuesto/>
    </div>
  );
};

export default MantenimientoSeo;




