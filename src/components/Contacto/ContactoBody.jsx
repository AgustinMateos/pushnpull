import React, { useState } from 'react';
import FormularioPartners from './FormularioPartners';
import FormularioContacto from './FormularioContacto';
import whatsapp from "../../assets/whatsapp.png"
function ContactoBody() {
  const [selectedButton, setSelectedButton] = useState('contacto');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className='formPrimerComp'>
      <a className='whatsapp'  href="https://wa.me/"><img src={whatsapp} alt="" /></a>
      <div className='wd-90'>
        <div>
          <h2 className='formPrimerCompTitulo'>Formulario</h2>
          <p className='formPrimerCompTexto font-family-Robot'>Si necesitas presupuesto o estas buscando informacion adicional por 
          algun servicio digital, completa
           los datos del formulario que aparece en pantalla. Si te interesa que les brindemos soporte tecnologico o formar parte de nuestro equipo, selecciona la opcion de parthnership. </p>
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
                  Presupuesto
                </button>
                <button
                  className={selectedButton === 'partners' ? 'selected selectedButtonPartners font-family-Robot' : ''} 
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
