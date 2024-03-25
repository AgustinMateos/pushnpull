import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import aplicacionesWebServicio from '../../assets/aplicacionweb.png'
import whatsapp from "../../assets/whatsapp.png"
import solucionesDigitalesImg from '../../assets/solucionesDigitalesPushnPull.webp'
import ecommerceServicio from '../../assets/ecommerceGrafica.png'
import desarrolloWebServicio from '../../assets/desarrolloweb.png'
import menuQrServicio from '../../assets/qr.png'
import migracionalaNubeServicio from '../../assets/migracionalanube.png'
import disenoWebServicio from '../../assets/diseñoweb.png'
import CardsSolucionesDigitalesServicios from '../Generals/cards/CardsSolucionesDigitalesServicios';


const SolucionesDigitalesBody = () => {

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
            <h2 className='homePrimerCompTitulo'>Soluciones Digitales</h2>
            <p className='homePrimerCompTexto font-family-Robot'>Ofrecemos soluciones digitales integrales para potenciar tu presencia en línea. Desde diseño y desarrollo web hasta migración a la nube, nos adaptamos a tus necesidades para crear la solución perfecta para tu negocio. 
            Con un enfoque especializado en ecommerce, te ayudamos a destacar en el mundo digital.</p>
          </div>
        </div>
        <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center'>
          <img className='wd-100 h-90 homePrimerCompImg imagen-latido' src={solucionesDigitalesImg} alt="" />
        </div>
      </div>

      <div className='wd-100 flex-justify-center'>
        <CardsSolucionesDigitalesServicios />
        <div className='wd-90 flex-justify-center flex-column mantenimientoContainerHeight'>
          <div className='wd-100 flex-justify-center flex-justify-center'>
            <div className='wd-100 flex-align-center flex-justify-center flex-column'>
              <ul className='flex-column wd-100 flex-justify-space-around mantenimientoContainerRow'>
                <li className={`buttonVermas2 font-family-Robot flex-align-center ${selectedOption === 'Opción 1' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 1')}>Ecommerce</li>
                <li className={`buttonVermas2 font-family-Robot flex-align-center ${selectedOption === 'Opción 2' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 2')}>Desarrollo Web</li>
                <li className={`buttonVermas2 font-family-Robot flex-align-center ${selectedOption === 'Opción 3' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 3')}>Diseño Web</li>
                <li className={`buttonVermas2 font-family-Robot flex-align-center ${selectedOption === 'Opción 4' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 4')}>Aplicaciones Web</li>
                <li className={`buttonVermas2 font-family-Robot flex-align-center ${selectedOption === 'Opción 5' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 5')}>Migracion a la Nube</li>
                <li className={`buttonVermas2 font-family-Robot flex-align-center ${selectedOption === 'Opción 6' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 6')}>Menú Qr</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div>
        {selectedOption === 'Opción 1' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={ecommerceServicio} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes '>Ecommerce</h5>
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={"/EcommercePage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 2' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={desarrolloWebServicio} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Desarrollo Web</h5>
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={"/DesarrolloWebPage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 3' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={disenoWebServicio} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Diseño Web</h5>
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={'/DisenoWebPage'} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 4' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={aplicacionesWebServicio} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Aplicaciones Web</h5>
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={'/AplicacionesWebPage'} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 5' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={migracionalaNubeServicio} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Migración a la Nube</h5>
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={"/MigracionalaNubePage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 6' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={menuQrServicio} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Menú Qr</h5>
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={"/MenuQrPage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
      </div>
      <div className='wd-100 flex-justify-center containerHeight flex-align-center'>
        <div className='HomeCuartQuintCompBuscando  flex-align-center flex-justify-space-around'>
          <div className=' HomeCuartQuintCompBuscandoTitulo'>
            <h3 className='titulosComponentes '>Necesitas presupuesto?</h3>
            <p className='titulosComponentesTexto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
          </div>
          <div className='wd-10 buttonContainers'><Link to={"/ContactoPage"}>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link></div>
        </div>
      </div>
    </div>
  );
};

export default SolucionesDigitalesBody;
