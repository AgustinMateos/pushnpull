import React from 'react'

import whatsapp from "../../assets/whatsapp.png"

import disenoWebServicio from '../../assets/diseñoweb.png'

const DisenoWeb = () => {
    return (
        <div>
            <div className='HomePrimerComp  '>

                <a className='whatsapp' href="https://wa.me/"><img src={whatsapp} alt="" /></a>
                <div className='homePrimerCompContainer'>
                    <div>
                        <h2 className='homePrimerCompTitulo'>Diseño Web</h2>
                        <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
                    </div>
                </div>
                <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center  '>
                    <img className='wd-100 h-90  homePrimerCompImg imagen-latido' src={disenoWebServicio} alt="" />
                </div>

            </div>

            <div className='wd-100 '>

                <div className=' containerHeight '>

                    <div className=' impulsaTuMarcaContainerImg'>
                        <img className='wd-100' src={disenoWebServicio} alt="imagen grafica pnp" /></div>
                    <div class="impulsaTuMarcaContainer ">
                        <div class="imagen-container">
                            <h3 className="texto titulosComponentes">Diseño Web</h3>
                            <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem animi facilis quidem incidunt deleniti expedita
                                modi, vel natus nulla illo dolores unde nostrum
                                doloremque dolorem obcaecati consequuntur molestias similique aut?</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='wd-100 '>

                <div className=' containerTextoImgImpulsaTuMarca '>
                    <div class="impulsaTuMarcaContainer ">
                        <div class="imagen-container">
                            <h3 className="texto titulosComponentes">Diseño Web</h3>
                            <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem animi facilis quidem incidunt deleniti expedita
                                modi, vel natus nulla illo dolores unde nostrum
                                doloremque dolorem obcaecati consequuntur molestias similique aut?</p>

                        </div>
                    </div>
                    <div className=' impulsaTuMarcaContainerImg'>
                        <img className='wd-100' src={disenoWebServicio} alt="imagen grafica pnp" />
                    </div>

                </div>
            </div>

        </div>

    )
}

export default DisenoWeb