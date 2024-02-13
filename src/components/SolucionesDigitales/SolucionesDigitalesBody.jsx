import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviciosData } from '../../data/ServiciosData';
import solucionesDigitalesBody from '../../assets/solucionesDigitalesBody.png';
import ecommerceGrafica from '../../assets/ecommerceGrafica.png';

const SolucionesDigitalesBody = () => {
  const servicios = serviciosData;
  const [servicioActivo, setServicioActivo] = useState(servicios[0]);

  const handleChangeServicio = (servicio) => {
    setServicioActivo(servicio);
    console.log(servicio);
  };

  return (
    <div className='wd-100'>
      <div className='flex-align-center flex-justify-space-around solucionesDigitalesPrimerComponenteContainer'>
        <div className='wd-40'>
          <h2 className='homePrimerCompTitulo'>Soluciones Digitales</h2>
          <p className='homePrimerCompTexto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim omnis aliquam exercitationem expedita
            perferendis laborum, cum repellat beatae quia esse delectus sequi vitae nihil cupiditate totam, porro
            necessitatibus rerum.
          </p>
        </div>
        <div className='wd-40 h-100'>
          <img className='wd-100 h-90  imagen-latido' src={solucionesDigitalesBody} alt='' />
        </div>
      </div>
      
      <div className='wd-100 flex-justify-center'>
        <div className='wd-90 flex-justify-center flex-column  containerHeight'>
          <div className='wd-100 flex-justify-center flex-justify-center'>

            <div className='wd-80 flex-align-center flex-justify-center flex-column'>

              <div className='flex-column wd-100 flex-justify-space-around flex-row'>
                {servicios.map((servicio, index) => (
                  <Link className='buttonVermas2 flex-align-center' key={index} onClick={() => {
                    handleChangeServicio(servicio)
                    console.log(servicio.imagen)
                  }}>
                    {servicio.categoria}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='wd-100 flex-justify-center '>
            <div className='wd-80 flex-justify-space-around  flex-justify-center '>
              <img className='wd-40 h-100' src={servicioActivo.img} alt='' />
              <div className='wd-50 flex-column flex-align-center flex-justify-center  '>
                <h5 className='titulosComponentes'>{servicioActivo.titulo}</h5>
                <p className='homePrimerCompTexto text-align-center '>{servicioActivo.texto}</p>
                <Link className='buttonContainers'>{servicioActivo.textoButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wd-100 flex-justify-center containerHeight flex-align-center'>
                <div className='HomeCuartQuintCompBuscando wd-70 flex-align-center flex-justify-space-around'>

                    <div className='wd-50 '>
                        <h3 className='titulosComponentes '>Necesitas presupuesto?</h3>
                        <p className='titulosComponentesTexto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
                    </div>
                    <div className='wd-10 buttonContainers'><Link>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link></div>
                </div>
            </div>
    </div>
  );
};

export default SolucionesDigitalesBody;