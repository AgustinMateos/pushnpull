import React from 'react'
import whatsapp from "../../assets/whatsapp.png"
import impulsaTuMarca from '../../assets/impulsatumarca.png'
import Presupuesto from '../Generals/Presupuesto/Presupuesto'
const ImpulsaTuMarcaBody = ({textos}) => {
  return (
    <div>
       <div className='HomePrimerComp  '>
       
<a className='whatsapp'  href="https://wa.me/"><img src={whatsapp} alt="" /></a>
      <div className='homePrimerCompContainer'>
        <div>
          <h2 className='homePrimerCompTitulo'>Impulsa tu Marca</h2>
          <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
        </div>
      </div>
      <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center  '>
        <img className='wd-100 h-90  homePrimerCompImg imagen-latido' src={impulsaTuMarca} alt="" />
      </div>

    </div>

      <div className='wd-100 '>

        <div className=' containerHeight '>

          <div className=' impulsaTuMarcaContainerImg'>
            <img className='wd-100' src={impulsaTuMarca} alt="imagen grafica pnp" /></div>
          <div className="impulsaTuMarcaContainer ">
            <div className="imagen-container">
              <h3 className="texto titulosComponentes">{textos.impulsaTuMarca.titulo}</h3>
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
           <div className="impulsaTuMarcaContainer ">
            <div className="imagen-container">
              <h3 className="texto titulosComponentes">Impulsa tu Marca</h3>
              <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem animi facilis quidem incidunt deleniti expedita
                modi, vel natus nulla illo dolores unde nostrum
                doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
             
            </div>
          </div>
          <div className=' impulsaTuMarcaContainerImg'>
            <img className='wd-100' src={impulsaTuMarca} alt="imagen grafica pnp" />
          </div>
         
        </div>
      </div>
     <Presupuesto texts={textos} />
    </div>

  )
}

export default ImpulsaTuMarcaBody