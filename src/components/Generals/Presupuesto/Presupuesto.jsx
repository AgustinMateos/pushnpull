import React from 'react'
import { Link } from 'react-router-dom'

const Presupuesto = () => {
  return (
    <div><div className='wd-100 flex-justify-center containerHeight flex-align-center'>
    <div className='HomeCuartQuintCompBuscando flex-align-center flex-justify-space-around'>
      <div className='HomeCuartQuintCompBuscandoTitulo'>
        <h3 className='titulosComponentes font-family-Robot'>Necesitas presupuesto?</h3>
        <p className='titulosComponentesTexto font-family-Robot'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
      </div>
      <div className='buttonContainersPresupuesto'>
        <Link to={"/ContactoPage"} className='buttonPresupuesto'>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link>
      </div>
    </div>
  </div></div>
  )
}

export default Presupuesto