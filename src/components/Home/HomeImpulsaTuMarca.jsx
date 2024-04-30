import React from 'react'
import { Link } from 'react-router-dom'
import impulsaTuMarca from '../../assets/impulsatumarca.png'


const HomeCuartQuintComp = ({textos}) => {
    return (
        <div className='wd-100 '>

            <div className=' containerHeight '>

                <div className=' impulsaTuMarcaContainerImg'>
                    <img className='wd-100' src={impulsaTuMarca} alt="imagen grafica pnp" /></div>
                <div className="impulsaTuMarcaContainer ">
                    <div className="imagen-container">
                        <h3 className="texto titulosComponentes">{textos.home.primercontainer.impulsaTuMarca.titulo}</h3>
                        <p className='impulsaTuMarcaTexto'>{textos.home.primercontainer.impulsaTuMarca.texto}</p>
                        <Link to={'/ImpulsaTuMarcaPage'} className='buttonContainers'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default HomeCuartQuintComp