import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import seoImg from '../../assets/ecommerceGrafica.png';
import whatsapp from "../../assets/whatsapp.png"
import mantenimientoSeo from '../../assets/desarrolloweb.png'
import solucionesDigitalesImg from '../../assets/solucionesDigitalesPushnPull.webp'
import CardsSeoMobile from '../Generals/cards/CardsSeoMobile';

const MantenimientoSeo = () => {
  const [selectedOption, setSelectedOption] = useState('Opción 1'); // Inicializando con 'Opción 1'
  const [selectedService, setSelectedService] = useState(''); // Nuevo estado para almacenar el servicio seleccionado

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedService(option); // Actualiza el servicio seleccionado
  };

  return (
    <div className='wd-100'>
      <a className='whatsapp' href="https://wa.me/"><img src={whatsapp} alt="" /></a>
      <div className='HomePrimerComp'>
        <div className='homePrimerCompContainer'>
          <div>
            <h2 className='homePrimerCompTitulo'>Seo</h2>
            <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
          </div>
        </div>
        <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center'>
          <img className='wd-100 h-90 homePrimerCompImg imagen-latido' src={solucionesDigitalesImg} alt="" />
        </div>
      </div>
      <div className='wd-100 flex-justify-center'>
        <CardsSeoMobile/>
        <div className='wd-90 flex-justify-center flex-column mantenimientoContainerHeight'>
          <div className='wd-100 flex-justify-center flex-justify-center'>
            <div className='wd-100 flex-align-center flex-justify-center flex-column'>
              <ul className='flex-column wd-100 flex-justify-space-around mantenimientoContainerRow'>
                <li className={`buttonVermas2 flex-align-center ${selectedService === 'Opción 1' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 1')}>Auditoria Seo</li>
                <li className={`buttonVermas2 flex-align-center ${selectedService === 'Opción 2' ? 'selectedOption' : ''}`} onClick={() => handleOptionClick('Opción 2')}>Camapaña Seo</li>
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
                <h5 className='titulosComponentes'>Auditoria Seo</h5>
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={"/AuditoriaSeoPage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
        {selectedOption === 'Opción 2' &&
          <div className='wd-100 flex-justify-center'>
            <div className='wd-100 mantenimientoContainerInfo'>
              <img className='mantenimientoContainerInfoImg h-100' src={seoImg} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>Camapaña Seo</h5>
                <p className='homePrimerCompTexto text-align-center'>adadaadad Lorem ipsum, dolor sit amet consectetur adipisicing elit Deserunt sunt nihil quod accusamus, vel quis, consequatur amet</p>
                <Link to={"/CampanaSeoPage"} className='buttonContainers'>Ver mas</Link>
              </div>
            </div>
          </div>
        }
      </div>
      <div className='wd-100 flex-justify-center containerHeight flex-align-center'>
        <div className='HomeCuartQuintCompBuscando flex-align-center flex-justify-space-around'>
          <div className='HomeCuartQuintCompBuscandoTitulo'>
            <h3 className='titulosComponentes'>Necesitas presupuesto?</h3>
            <p className='titulosComponentesTexto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
          </div>
          <div className='wd-10 buttonContainers'>
            <Link to={"/ContactoPage"}>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MantenimientoSeo;
