import React from 'react'
import { Link } from 'react-router-dom'
import grafica8 from "../../assets/impulsatumarca3.png"
const ImpulsaTuMarcaBody = () => {
  return (
    <div className='wd-100'>
    <div className='flex-align-center flex-justify-space-around solucionesDigitalesPrimerComponenteContainer'>
      <div className='wd-40'>
        <h2 className='homePrimerCompTitulo'>Impulsa Tu Marca</h2>
        <p className='homePrimerCompTexto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim omnis aliquam exercitationem expedita
          perferendis laborum, cum repellat beatae quia esse delectus sequi vitae nihil cupiditate totam, porro
          necessitatibus rerum.
        </p>
      </div>
      <div className='wd-40 h-100'>
        <img className='wd-100 h-90  imagen-latido' src={grafica8} alt='' />
      </div>
    </div>
    
    
  



          <div className='w-100 HomeCuartQuint'>
                <div className='wd-100 flex-justify-center'> 
            </div>
            <div className='flex-align-center flex-justify-space-evenly containerHeight '>
            <div className='wd-30'>
                    <img className='wd-100' src={grafica8} alt="imagen grafica pnp" />
                </div>

                <div class="contenedor wd-50">
                    <div class="imagen-container">
                        <h3 className="texto titulosComponentes">Impulsa Tu Marca</h3>
                        <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Exercitationem animi facilis quidem incidunt deleniti expedita 
                             modi, vel natus nulla illo dolores unde nostrum
                             doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
                       
                    </div>
                </div>
            </div>
        </div>

        <div className='w-100 HomeCuartQuint'>
                
            <div className='flex-align-center flex-justify-space-evenly containerHeight '>
            

                <div class="contenedor wd-50">
                    <div class="imagen-container">
                        <h3 className="texto titulosComponentes">Impulsa Tu Marca</h3>
                        <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Exercitationem animi facilis quidem incidunt deleniti expedita 
                             modi, vel natus nulla illo dolores unde nostrum
                             doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
                       
                    </div>
                </div>
                <div className='wd-30'>
                    <img className='wd-100' src={grafica8} alt="imagen grafica pnp" />
                </div>
            </div>
        </div>

        <div className='wd-100 flex-justify-center containerHeight flex-align-center'>
                <div className='HomeCuartQuintCompBuscando wd-70 flex-align-center flex-justify-space-around'>

                    <div className='wd-50 '>
                        <h3 className='titulosComponentes '>Necesitas presupuesto?</h3>
                        <p className='titulosComponentesTexto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Deserunt sunt nihil quod accusamus, vel quis, consequatur amet itaque animi ipsum magni earum impedit nesciunt voluptatibus repellat fuga unde eos. Impedit.</p>
                    </div>
                    <div className='wd-10 buttonContainers'><Link>Contactanos<ion-icon name="arrow-forward-outline"></ion-icon></Link></div>
                </div>
            </div>
       
          
  </div>
  )
}

export default ImpulsaTuMarcaBody