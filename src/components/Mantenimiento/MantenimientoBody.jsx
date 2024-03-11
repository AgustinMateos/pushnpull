import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import seoImg from '../../assets/ecommerceGrafica.png';
import whatsapp from "../../assets/whatsapp.png"
import mantenimientoSeo from '../../assets/desarrolloweb.png'
import solucionesDigitalesImg from '../../assets/solucionesDigitalesPushnPull.webp'
import desarrolloWeb from '../../assets/desarrolloweb.png'
import CardsMantenimiento from '../Generals/cards/CardsMantenimiento';

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
            <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
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
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
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
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
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
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={"MantenimientoBaseDeDatosPage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
      </div>
      <div className='wd-100 flex-justify-center containerHeight flex-align-center'>
        <div className='HomeCuartQuintCompBuscando flex-align-center flex-justify-space-around'>
          <div className='HomeCuartQuintCompBuscandoTitulo'>
            <h3 className='titulosComponentes font-family-Robot'>Necesitas presupuesto?</h3>
            <p className='titulosComponentesTexto font-family-Robot'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
          </div>
          <div className='wd-10 buttonContainers'>
            <Link to={"/ContactoPage"}>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MantenimientoBody;
