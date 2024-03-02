

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mantenimientoData } from '../../data/MantenimientoData';
import solucionesDigitalesImg from '../../assets/solucionesDigitalesBody.png';


const MantenimientoBody = () => {
  const servicios = mantenimientoData;
  const [servicioActivo, setServicioActivo] = useState(servicios[0]);

  const handleChangeServicio = (servicio) => {
    setServicioActivo(servicio);
    console.log(servicio);
  };

  return (
    <div className='wd-100'>
      <div className='HomePrimerComp  '>
      <div className='homePrimerCompContainer'>
        <div>
          <h2 className='homePrimerCompTitulo'>Mantenimiento</h2>
          <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
        </div>
        

       

      </div>
      <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center  '>
        <img className='wd-100 h-90  homePrimerCompImg imagen-latido' src={solucionesDigitalesImg} alt="" /> 
      </div>
    </div>
      
      <div className='wd-100 flex-justify-center'>
        <div className='wd-90 flex-justify-center flex-column  containerHeight'>
          <div className='wd-100 flex-justify-center flex-justify-center'>

            <div className='wd-100 flex-align-center flex-justify-center flex-column'>

              <div className='flex-column wd-100 flex-justify-space-around flex-row'>
                {servicios.map((servicio, index) => (
                  <div><Link className='buttonVermas2 flex-align-center' key={index} onClick={() => {
                    handleChangeServicio(servicio)
                    console.log(servicio.img)
                  }}>
                    {servicio.categoria}
                  </Link>
                  <img className='wd-40 h-100' src={servicioActivo.img} alt='' /></div>
                  
                ))}
              </div>
            </div>
          </div>
          <div className='wd-100 flex-justify-center '>
            <div className='wd-100 flex-justify-space-around  '>
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

export default MantenimientoBody;