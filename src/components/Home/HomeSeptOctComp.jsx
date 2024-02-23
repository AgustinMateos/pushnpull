import React from 'react'
import { Link } from 'react-router-dom'

const HomeSeptOctComp = () => {
  return (<div>

    <div className='HomeTerComp flex-justify-space-evenly' >
      
        <div className='homeSoporteCointainer '>
            
            <div to={"/seoPage"} className='homeSoporteCointainerText '>
                <div className='content'>
                  
                    <h3 className='titulosComponentes'>Soporte tecnologico a empresas y agencias</h3>

                    <div className='price'></div>
                    <ul>
                        <li><p className='homeSoporteContainerTexto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p></li>

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

// <div className='wd-100 '>
       

//         <div className=' containerHeight wd-100 flex-justify-space-around flex-align-center containerComponentsInfo'>
//             <div className='wd-50'>
//                 <h3 className=" titulosComponentes">Brindamos soporte tecnologico a empresas y agencias</h3>
//                 <p className='titulosComponentesTexto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                     Sequi distinctio excepturi voluptatum quas cumque, ratione rem, quidem ab vero facilis 
//                     maiores delectus quo? Aut sequi nulla facilis, suscipit perferendis quod?</p>
//             </div>
//             <div className='wd-20 buttonContainers'><Link to={'/ContactoPage'}>Contacto <ion-icon name="arrow-forward-outline"></ion-icon></Link></div>
//         </div>
//     </div>