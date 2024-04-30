import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
  <div className="buttons">
        
  <div className="container ">
      <Link to={`/ServicesPage`} className="" target="_blank"><span>Servicios</span></Link>
      <Link className="btn effect02 buttonPrimer" target="_blank"><span>Contacto</span></Link>
  </div>
  
  
</div>
   
  )
}

export default Buttons

/* class="btn effect01 buttonPrimer" */