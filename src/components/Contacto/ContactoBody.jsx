import React, { useState } from 'react';
import FormularioPartners from './FormularioPartners';
import FormularioContacto from './FormularioContacto';

function ContactoBody() {
  const [selectedButton, setSelectedButton] = useState('contacto');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className='formPrimerComp'>
      <div className='wd-80'>
        <div>
          <h2 className='formPrimerCompTitulo'>Formulario</h2>
          <p className='formPrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
        </div>
        <div className="flex-justify-space-center">
          <div className='formContainerHeight'>
            <div className='formContainerWidth'>
              <div className="formButtons">
                <div className="formButtonsContainer" >
                  <button
                  className={selectedButton === 'contacto' ? 'selected selectedButtonPartners' : ''} 
                  onClick={() => handleButtonClick('contacto')}
                >
                  Contactanos
                </button>
                <button
                  className={selectedButton === 'partners' ? 'selected selectedButtonPartners' : ''} 
                  onClick={() => handleButtonClick('partners')}
                >
                  Partnership
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
