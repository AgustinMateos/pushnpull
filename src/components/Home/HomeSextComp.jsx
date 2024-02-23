import React from 'react'
import { Link } from 'react-router-dom'
import blogGrafica from '../../assets/blog1.png'

const HomeSextComp = () => {
  return (


    <div className='wd-100 '>

    <div className=' containerHeight '>

        <div className=' impulsaTuMarcaContainerImg'><img className='wd-100' src={blogGrafica} alt="imagen grafica pnp" />
            </div>
            
        <div class="impulsaTuMarcaContainer ">
            <div class="imagen-container">
                <h3 className="texto titulosComponentes">Visita nuestro blog</h3>
                <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem animi facilis quidem incidunt deleniti expedita
                    modi, vel natus nulla illo dolores unde nostrum
                    doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
                <Link to={'/ImpulsaTuMarcaPage'} className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
            </div>

        </div>


    </div>

</div>
    // <div className='w-100 HomeCuartQuint'>
               
    //         <div className='flex-align-center flex-justify-space-evenly containerHeight '>
    //         <div className='wd-30 impulsaTuMarcaContainerImg'>
    //                 <img className='wd-100' src={blogGrafica} alt="imagen grafica pnp" />
    //             </div>
     
    //             <div class="contenedor wd-50">
    //                 <div class="imagen-container">
    //                     <h3 className="texto titulosComponentes">Visita nuestro blog</h3>
    //                     <p className='titulosComponentesTexto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    //                          Exercitationem animi facilis quidem incidunt deleniti expedita 
    //                          modi, vel natus nulla illo dolores unde nostrum
    //                          doloremque dolorem obcaecati consequuntur molestias similique aut?</p>
    //                     <Link className='buttonContainers'>ver mas <ion-icon name="arrow-forward-outline"></ion-icon></Link>
    //                 </div>
    //             </div>
                

    //         </div>
            
    //     </div>
  )
}

export default HomeSextComp