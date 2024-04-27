import React, { useState } from 'react';
import FormularioPartners from './FormularioPartners';
import FormularioContacto from './FormularioContacto';
import whatsapp from "../../assets/whatsapp.png"
function ContactoBody({textos}) {
  const [selectedButton, setSelectedButton] = useState('contacto');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className='formPrimerComp'>
      <a className='whatsapp'  href="https://wa.me/"><img src={whatsapp} alt="" /></a>
      <div className='wd-90'>
        <div>
          <h2 className='formPrimerCompTitulo'>{textos.contacto.titulo}</h2>
          <p className='formPrimerCompTexto font-family-Robot'> {textos.contacto.descripcion}</p>
        </div>
        <div className="flex-justify-space-center">
          <div className='formContainerHeight'>
            <div className='formContainerWidth'>
              <div className="formButtons">
                <div className="formButtonsContainer" >
                  <button
                  className={selectedButton === 'contacto' ? 'selected selectedButtonPartners font-family-Robot' : ''} 
                  onClick={() => handleButtonClick('contacto')}
                >
                  {textos.contacto.boton1}
                </button>
                <button
                  className={selectedButton === 'partners' ? 'selected selectedButtonPartners font-family-Robot' : ''} 
                  onClick={() => handleButtonClick('partners')}
                >
                 {textos.contacto.boton2}
                </button>
                </div>
                
              </div>

              {selectedButton === 'contacto' && <FormularioContacto />}
              {selectedButton === 'partners' && <FormularioPartners />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoBody;
