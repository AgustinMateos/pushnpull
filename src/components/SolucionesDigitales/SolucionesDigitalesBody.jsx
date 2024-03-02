import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviciosData } from '../../data/ServiciosData';
import solucionesDigitalesBody from '../../assets/solucionesDigitalesBody.png';
import whatsapp from "../../assets/whatsapp.png"


const SolucionesDigitalesBody = () => {
  const servicios = serviciosData;
  const [servicioActivo, setServicioActivo] = useState(servicios[0]);

  const handleChangeServicio = (servicio) => {
    setServicioActivo(servicio);
  };

  return (
    <div className='wd-100'>
      <a className='whatsapp'  href="https://wa.me/"><img src={whatsapp} alt="" /></a>
      <div className='HomePrimerComp'>
        <div className='homePrimerCompContainer'>
          <div>
            <h2 className='homePrimerCompTitulo'>Soluciones Digitales</h2>
            <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
          </div>
        </div>
        <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center'>
          <img className='wd-100 h-90 homePrimerCompImg imagen-latido' src={solucionesDigitalesBody} alt="" /> 
        </div>
      </div>
      
      <div className='wd-100 flex-justify-center'>
        <div className='wd-90 flex-justify-center flex-column mantenimientoContainerHeight'>
          <div className='wd-100 flex-justify-center flex-justify-center'>
            <div className='wd-100 flex-align-center flex-justify-center flex-column'>
              <div className='flex-column wd-100 flex-justify-space-around mantenimientoContainerRow'>
                {servicios.map((servicio, index) => (
                  <button className='buttonVermas2 flex-align-center' key={index} onClick={() => handleChangeServicio(servicio)}>
                    {servicio.categoria}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className='wd-100 flex-justify-center '>
            <div className='wd-100 mantenimientoContainerInfo '>
              <img className=' mantenimientoContainerInfoImg h-100' src={servicioActivo.img} alt='' />
              <div className='mantenimientoContainerInfoTexto'>
                <h5 className='titulosComponentes'>{servicioActivo.titulo}</h5>
                <p className='homePrimerCompTexto text-align-center'>{servicioActivo.texto}</p>
                <Link className='buttonContainers'>{servicioActivo.textoButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wd-100 flex-justify-center containerHeight flex-align-center'>
        <div className='HomeCuartQuintCompBuscando flex-align-center flex-justify-space-around'>
          <div className='HomeCuartQuintCompBuscandoTitulo'>
            <h3 className='titulosComponentes'>Necesitas presupuesto?</h3>
            <p className='titulosComponentesTexto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
          </div>
          <div className='wd-10 buttonContainers'><Link to={"/ContactoPage"}>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link></div>
        </div>
      </div>
    </div>
  );
};

export default SolucionesDigitalesBody;
