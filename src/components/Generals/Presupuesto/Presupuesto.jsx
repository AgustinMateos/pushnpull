import React from 'react'
import { Link } from 'react-router-dom'

const Presupuesto = () => {
  return (
    <div><div className='wd-100 flex-justify-center containerHeight flex-align-center'>
    <div className='HomeCuartQuintCompBuscando flex-align-center flex-justify-space-around'>
      <div className='HomeCuartQuintCompBuscandoTitulo'>
        <h3 className='titulosComponentes font-family-Robot'>Necesitas presupuesto?</h3>
        <p className='presupuestoTitulosComponentesTexto font-family-Robot'>¿Estás listo para dar el 
        siguiente paso en tu proyecto? ¡Entonces es hora de obtener un
         presupuesto personalizado que se adapte a tus necesidades!Cada proyecto es único,
          por lo que nos aseguramos de entender tus requerimientos específicos antes de preparar 
          tu presupuesto. Nos enfocamos en tus objetivos
          y preferencias para ofrecerte una solución a medida.</p>
      </div>
      <div className='buttonContainersPresupuesto'>
        <Link to={"/ContactoPage"} className='buttonPresupuesto'>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link>
      </div>
    </div>
  </div></div>
  )
}

export default Presupuesto