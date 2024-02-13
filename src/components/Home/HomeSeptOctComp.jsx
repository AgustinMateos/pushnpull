import React from 'react'
import { Link } from 'react-router-dom'

const HomeSeptOctComp = () => {
  return (
    <div className='wd-100 '>
       

        <div className=' containerHeight wd-100 flex-justify-space-around flex-align-center containerComponentsInfo'>
            <div className='wd-50'>
                <h3 className=" titulosComponentes">Brindamos soporte tecnologico a empresas y agencias</h3>
                <p className='titulosComponentesTexto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sequi distinctio excepturi voluptatum quas cumque, ratione rem, quidem ab vero facilis 
                    maiores delectus quo? Aut sequi nulla facilis, suscipit perferendis quod?</p>
            </div>
            <div className='wd-20 buttonContainers'><Link to={'/ContactoPage'}>Contacto <ion-icon name="arrow-forward-outline"></ion-icon></Link></div>
        </div>
    </div>
  )
}

export default HomeSeptOctComp