import React from 'react'
import { Link } from 'react-router-dom'
import impulsaTuMarca from '../../assets/impulsatumarca.png'


const HomeCuartQuintComp = () => {
    return (
        <div className='wd-100 '>

            <div className=' containerHeight '>

                <div className='wd-30'>
                    <img className='wd-100' src={impulsaTuMarca} alt="imagen grafica pnp" /></div>
                <div class="contenedor wd-50">
                    <div class="imagen-container">
                        <h3 className="texto titulosComponentes">Impulsa tu marca</h3>
                        <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem animi facilis quidem incidunt deleniti expedita
                            modi, vel natus nulla illo dolores unde nostrum
                            doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
                        <Link to={'/ImpulsaTuMarcaPage'} className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default HomeCuartQuintComp