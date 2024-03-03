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

