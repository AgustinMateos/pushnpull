import React from 'react'
import { Link } from 'react-router-dom'
import impulsaTuMarca from '../../assets/impulsatumarca.png'


const HomeCuartQuintComp = () => {
    return (
        <div className='wd-100 '>

            <div className=' containerHeight '>

                <div className=' impulsaTuMarcaContainerImg'>
                    <img className='wd-100' src={impulsaTuMarca} alt="imagen grafica pnp" /></div>
                <div class="impulsaTuMarcaContainer ">
                    <div class="imagen-container">
                        <h3 className="texto titulosComponentes">Impulsa tu marca</h3>
                        <p className='impulsaTuMarcaTexto'>Especialmente para aquellos emprendedores
                         y empresas que están buscando llevar su marca al siguiente nivel. Sabemos lo desafiante 
                         que puede ser comenzar desde cero o darle un nuevo impulso a
                         tu negocio, y estamos aquí para ayudarte a dar el primer paso.</p>
                        <Link to={'/ImpulsaTuMarcaPage'} className='buttonContainers'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default HomeCuartQuintComp