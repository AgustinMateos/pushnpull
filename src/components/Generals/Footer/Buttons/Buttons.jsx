import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
  <div class="buttons">
        
  <div class="container ">
      <Link to={`/ServicesPage`} class="" target="_blank"><span>Servicios</span></Link>
      <Link class="btn effect02 buttonPrimer" target="_blank"><span>Contacto</span></Link>
  </div>
  
  
</div>
   
  )
}

export default Buttons

/* class="btn effect01 buttonPrimer" */