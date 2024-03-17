
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import seoImg from '../../assets/ecommerceGrafica.png';
import whatsapp from "../../assets/whatsapp.png"
import mantenimientoSeo from '../../assets/desarrolloweb.png'
import solucionesDigitalesImg from '../../assets/solucionesDigitalesPushnPull.webp'
import CardsSeoMobile from '../Generals/cards/CardsSeoMobile';

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
            <h2 className='homePrimerCompTitulo'>Seo</h2>
            <p className='homePrimerCompTexto font-family-Robot'> La optimización de motores de búsqueda (SEO) mejorará la clasificación orgánica
              (no pagada) de tu sitio web o página web dentro de los motores
              de búsqueda. Como agencia de SEO, nuestro
              equipo tiene el conocimiento y las habilidades para llevar su negocio a las primeras busquedas.           Estamos listos para ayudarlo a lograr los objetivos de clasificación orgánica de tu empresa internacionalmen</p>
          </div>
        </div>
        <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center'>
          <img className='wd-100 h-90 homePrimerCompImg imagen-latido' src={solucionesDigitalesImg} alt="" />
        </div>
      </div>
      <div className='wd-100 flex-justify-center'>
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
                <h5 className='titulosComponentes'>Camapaña de Seo</h5>
                <p className='homePrimerCompTexto text-align-center'> 
                Una camapaña de seo debe ser un pilar fundamental para el posicionamiento de una marca.
                  Cuando las personas buscan información sobre productos y servicios, su primer opcion
                    es hacerlo en Google (u otro motor de búsqueda). Por
                  lo que estar
                  en las primeras posiciones garantiza más visitas a su sitio y una mayor exposición a los
                  productos y servicios que ofrece. Nuestras campañas de seo 
                  conectan la estrategia con sus propios objetivos y
                  oportunidades de crecimiento.</p>
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
                <h5 className='titulosComponentes'>Auditoria Seo</h5>
                <p className='homePrimerCompTexto text-align-center'>La Auditoría de SEO implica
                 analizar el nivel de optimización de tu sitio web para los motores de búsqueda. 
                 Te permite detectar errores que podrían obstaculizar el buen posicionamiento de tu web
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

      </div>
      {/* <div className='wd-100 flex-justify-center containerHeight flex-align-center'>
        <div className='HomeCuartQuintCompBuscando flex-align-center flex-justify-space-around'>
          <div className='HomeCuartQuintCompBuscandoTitulo'>
            <h3 className='titulosComponentes font-family-Robot'>Necesitas presupuesto?</h3>
            <p className='titulosComponentesTexto font-family-Robot'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
          </div>
          <div className='wd-10 buttonContainers'>
            <Link to={"/ContactoPage"}>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link>
          </div>
          
        </div>
      </div> */}
    </div>
  );
};

export default MantenimientoSeo;






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import seoImg from '../../assets/ecommerceGrafica.png';
// import whatsapp from "../../assets/whatsapp.png"
// import mantenimientoSeo from '../../assets/desarrolloweb.png'
// import solucionesDigitalesImg from '../../assets/solucionesDigitalesPushnPull.webp'
// import CardsSeoMobile from '../Generals/cards/CardsSeoMobile';

// const MantenimientoSeo = () => {
//   const [selectedOption, setSelectedOption] = useState('Opción 1'); // Inicializando con 'Opción 1'
//   const [selectedService, setSelectedService] = useState(''); // Nuevo estado para almacenar el servicio seleccionado

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setSelectedService(option); // Actualiza el servicio seleccionado
//   };

//   return (
//     <div className='wd-100'>
//       <a className='whatsapp' href="https://wa.me/"><img src={whatsapp} alt="" /></a>
//       <div className='HomePrimerComp'>
//         <div className='homePrimerCompContainer'>
//           <div>
//             <h2 className='homePrimerCompTitulo'>Seo</h2>
//             <p className='homePrimerCompTexto font-family-Robot'>
//               La optimización de motores de búsqueda (SEO) mejorará la clasificación orgánica
//               (no pagada) de tu sitio web o página web dentro de los motores
//               de búsqueda. Como agencia de SEO, nuestro
//               equipo tiene el conocimiento y las habilidades para llevar su negocio a las primeras busquedas.
//               Estamos listos para ayudarlo a lograr los objetivos de clasificación orgánica de tu empresa internacionalmente.</p>
//           </div>
//         </div>
//         <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center'>
//           <img className='wd-100 h-90 homePrimerCompImg imagen-latido' src={solucionesDigitalesImg} alt="" />
//         </div>
//       </div>
//       <div className='wd-100 flex-justify-center'>
//         <CardsSeoMobile />
//         <div className='wd-90 flex-justify-center flex-column mantenimientoContainerHeight'>
//           <div className='wd-100 flex-justify-center flex-justify-center'>
//             <div className='wd-100 flex-align-center flex-justify-center flex-column'>
//               <ul className='flex-column wd-100 flex-justify-space-around mantenimientoContainerRow'>
//                 <li className={`buttonVermas2 flex-align-center ${selectedService === 'Opción 1' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 1')}>Auditoria Seo</li>
//                 <li className={`buttonVermas2 flex-align-center ${selectedService === 'Opción 2' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 2')}>Camapaña Seo</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         {selectedOption === 'Opción 1' &&
//           <div className='wd-100 flex-justify-center'>
//             <div className='wd-100 mantenimientoContainerInfo'>
//               <img className='mantenimientoContainerInfoImg h-100' src={mantenimientoSeo} alt='' />
//               <div className='mantenimientoContainerInfoTexto'>
//                 <h5 className='titulosComponentes'>Auditoria Seo</h5>
//                 <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
//                 <Link to={"/AuditoriaSeoPage"} className='buttonContainers'>Ver mas</Link>
//               </div>
//             </div>
//           </div>
//         }
//         {selectedOption === 'Opción 2' &&
//           <div className='wd-100 flex-justify-center'>
//             <div className='wd-100 mantenimientoContainerInfo'>
//               <img className='mantenimientoContainerInfoImg h-100' src={seoImg} alt='' />
//               <div className='mantenimientoContainerInfoTexto'>
//                 <h5 className='titulosComponentes'>Camapaña de Seo</h5>
//                 <p className='homePrimerCompTexto text-align-center'>

//                   El SEO debe estar en el centro de su estrategia de marketing digital más amplia.
//                   Cuando las personas buscan información sobre productos y servicios, su primer puerto
//                   de escala es Google (u otro motor de búsqueda). Por
//                   lo que estar
//                   en las primeras posiciones garantiza más visitas a su sitio y una mayor exposición a los
//                   productos y servicios que ofrece. Nuestros servicios de agencia de SEO de alto rendimiento
//                   conectan la estrategia de SEO con sus propios objetivos y
//                   oportunidades disponibles dentro de su panorama de clasificación específico.
//                 </p>
//                 <Link to={"/CampanaSeoPage"} className='buttonContainers'>Ver mas</Link>
//               </div>
//             </div>
//           </div>
//         }
//       </div>

//     </div>
//   );
// };

// export default MantenimientoSeo;
