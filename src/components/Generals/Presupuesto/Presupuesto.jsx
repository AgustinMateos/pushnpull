import React from 'react'
import { Link } from 'react-router-dom'

const Presupuesto = ({texts}) => {
  return (
    <div><div className='wd-100 flex-justify-center containerHeight flex-align-center'>
    <div className='HomeCuartQuintCompBuscando flex-align-center flex-justify-space-around'>
      <div className='HomeCuartQuintCompBuscandoTitulo'>
        <h3 className='titulosComponentes font-family-Robot'>{texts.presupuesto.titulo}</h3>
        <p className='presupuestoTitulosComponentesTexto font-family-Robot'>{texts.presupuesto.descripcion}</p>
      </div>
      <div className='buttonContainersPresupuesto'>
        <Link to={"/ContactoPage"} className='buttonPresupuesto'>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link>
      </div>
    </div>
  </div></div>
  )
}

export default Presupuesto