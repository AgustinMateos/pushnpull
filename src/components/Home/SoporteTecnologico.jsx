import React from 'react'
import { Link } from 'react-router-dom'

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
                        <div className='homeSoporteContainerVerMas'><Link to={"/contactoPage"} ><span className='buttonContainers' >Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></Link></div>
                        
                    </div>
                </div>


            </div>

        </div>

    </div>


    )
}

export default HomeSeptOctComp

