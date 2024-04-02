import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import seoImg from '../../assets/ecommerceGrafica.png';
import whatsapp from "../../assets/whatsapp.png"
import mantenimientoSeo from '../../assets/desarrolloweb.png'
import solucionesDigitalesImg from '../../assets/solucionesDigitalesPushnPull.webp'
import desarrolloWeb from '../../assets/desarrolloweb.png'
import CardsMantenimiento from '../Generals/cards/CardsMantenimiento';
import Presupuesto from '../Generals/Presupuesto/Presupuesto';

const MantenimientoBody = () => {
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
            <h2 className='homePrimerCompTitulo'>Mantenimiento</h2>
            <p className='homePrimerCompTexto font-family-Robot'>Nos encargamos de mantener tu presencia digital en óptimas condiciones. Desde el mantenimiento web y de bases de datos hasta la optimización SEO, garantizamos que tu negocio se mantenga visible y eficiente en línea.</p>
          </div>
        </div>
        <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center'>
          <img className='wd-100 h-90 homePrimerCompImg imagen-latido' src={solucionesDigitalesImg} alt="" />
        </div>
      </div>
      <div className='wd-100 flex-justify-center'>
        <CardsMantenimiento/>
        <div className='wd-90 flex-justify-center flex-column mantenimientoContainerHeight'>
          <div className='wd-100 flex-justify-center flex-justify-center'>
            <div className='wd-100 flex-align-center flex-justify-center flex-column'>
              <ul className='flex-column wd-100 flex-justify-space-around mantenimientoContainerRow'>
                <li className={`buttonVermas2 flex-align-center ${selectedOption === 'Opción 1' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 1')}>Mantenimiento Seo</li>
                <li className={`buttonVermas2 flex-align-center ${selectedOption === 'Opción 2' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 2')}>Mantenimiento Desarrollo Web</li>
                <li className={`buttonVermas2 flex-align-center ${selectedOption === 'Opción 3' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 3')}>Mantenimeinto de Base de Datos</li>
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
                <h5 className='titulosComponentes'>Mantenimiento Seo</h5>
                <p className='homePrimerCompTexto text-align-center'>
                Consiste en una serie de acciones como la construcción de enlaces de calidad, 
                la corrección de errores técnicos que puedan afectar el rendimiento SEO  
                el seguimiento y análisis de las tendencias de búsqueda y de la competencia.</p>
                <Link to={"/MantenimientoSeoPage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 2' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={seoImg} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Mantenimiento Desarrollo Web</h5>
                <p className='homePrimerCompTexto text-align-center'>Un sitio desactualizado o con problemas técnicos puede afectar
                 negativamente la experiencia del usuario, disminuir el tráfico y afectar el 
                 posicionamiento en los motores de búsqueda. Mantener el sitio web actualizado
                  y funcionando sin problemas es clave 
                para el éxito a largo plazo de tu presencia en línea.</p>
                <Link to={"/MantenimientoWebPage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 3' && 
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={desarrolloWeb} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Mantenimiento de Base de Datos</h5>
                <p className='homePrimerCompTexto text-align-center'>Para garantizar la integridad, seguridad y eficiencia de los datos críticos de tu negocio. Implica una serie de 
                acciones periódicas destinadas a mantener la base de datos actualizada, optimizada y protegida contra posibles riesgos.</p>
                <Link to={"MantenimientoBaseDeDatosPage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
      </div>
       <Presupuesto/>
    </div>
  );
};

export default MantenimientoBody;
