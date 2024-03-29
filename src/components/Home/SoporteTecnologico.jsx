import React from 'react'
import { Link } from 'react-router-dom'

const HomeSeptOctComp = () => {
    return (<div>

        <div className='HomeTerComp flex-justify-space-evenly' >

            <div className='homeSoporteCointainer '>

                <div to={"/seoPage"} className='homeSoporteCointainerText '>
                    <div className='content'>

                        <h3 className='titulosComponentes'>Soporte tecnológico a empresas y agencias</h3>

                        <div className='price'></div>
                        <ul>
                            <li><p className='homeSoporteContainerTexto'>En nuestro compromiso por impulsar el éxito de agencias y empresas, ofrecemos un soporte tecnológico integral
                                que va más allá de resolver problemas técnicos. Estamos dispuestos a brindarte el apoyo y la experiencia necesaria para alcanzar tus metas empresariales en el mundo digital.</p></li>

                        </ul>
                        <Link to={"/contactoPage"} className='buttonContainers' ><span >Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></Link>
                    </div>
                </div>


            </div>

        </div>

    </div>


    )
}

export default HomeSeptOctComp

