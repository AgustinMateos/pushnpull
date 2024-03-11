import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
import { Link } from 'react-router-dom'
import menuQrServicio from '../../assets/qr.png'

const MenuQr = () => {
    return (
        <div>
            <div className='HomePrimerComp  '>

                <a className='whatsapp' href="https://wa.me/"><img src={whatsapp} alt="" /></a>
                <div className='homePrimerCompContainer'>
                    <div>
                        <h2 className='homePrimerCompTitulo'>Menu Qr</h2>
                        <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
                    </div>
                </div>
                <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center  '>
                    <img className='wd-100 h-90  homePrimerCompImg imagen-latido' src={menuQrServicio} alt="" />
                </div>

            </div>

            <div className='wd-100 '>

                <div className=' containerHeight '>

                    <div className=' impulsaTuMarcaContainerImg'>
                        <img className='wd-100' src={menuQrServicio} alt="imagen grafica pnp" /></div>
                    <div class="impulsaTuMarcaContainer ">
                        <div class="imagen-container">
                            <h3 className="texto titulosComponentes">Menu Qr</h3>
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
                            <h3 className="texto titulosComponentes">MenuQr</h3>
                            <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Exercitationem animi facilis quidem incidunt deleniti expedita
                                modi, vel natus nulla illo dolores unde nostrum
                                doloremque dolorem obcaecati consequuntur molestias similique aut?</p>

                        </div>
                    </div>
                    <div className=' impulsaTuMarcaContainerImg'>
                        <img className='wd-100' src={menuQrServicio} alt="imagen grafica pnp" />
                    </div>

                </div>
            </div>
            <div className='wd-100 flex-justify-center containerHeight flex-align-center'>
        <div className='HomeCuartQuintCompBuscando flex-align-center flex-justify-space-around'>
          <div className='HomeCuartQuintCompBuscandoTitulo'>
            <h3 className='titulosComponentes font-family-Robot'>Necesitas presupuesto?</h3>
            <p className='titulosComponentesTexto font-family-Robot'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
          </div>
          <div className='wd-10 buttonContainers'>
            <Link to={"/ContactoPage"}>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link>
          </div>
        </div>
      </div>
        </div>

    )
}

export default MenuQr