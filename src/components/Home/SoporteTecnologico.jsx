import React from 'react'
import { Link } from 'react-router-dom'
import ButtonVerMas from '../Generals/Buttons/ButtonVerMas'

const HomeSeptOctComp = ({textos}) => {
    return (<div>

        <div className='HomeTerComp flex-justify-space-evenly' >

            <div className='homeSoporteCointainer '>

                <div to={"/seoPage"} className='homeSoporteCointainerText '>
                    <div className='content'>

                        <h3 className='soporteTitulosComponentes'>{textos.home.primercontainer.soporteTecnologico.titulo}</h3>

                        <div className='price'></div>
                        <ul>
                            <li><p className='homeSoporteContainerTexto'>{textos.home.primercontainer.soporteTecnologico.texto} </p></li>

                        </ul>
                        <div className='homeSoporteContainerVerMas'><ButtonVerMas/></div>
                        
                    </div>
                </div>


            </div>

        </div>

    </div>


    )
}

export default HomeSeptOctComp

