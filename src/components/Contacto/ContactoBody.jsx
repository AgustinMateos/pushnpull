import React, { useState } from 'react';
import FormularioPartners from './FormularioPartners';
import FormularioContacto from './FormularioContacto';



function ContactoBody() {
  const [showContactForm, setShowContactForm] = useState(true);
  const [showPartnersForm, setShowPartnersForm] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleContactButtonClick = () => {
    setShowContactForm(true);
    setShowPartnersForm(false);
    setSelectedButton('contacto');
  };

  const handlePartnersButtonClick = () => {
    setShowPartnersForm(true);
    setShowContactForm(false);
    setSelectedButton('partners');
  };

  return (
    <div className='HomePrimerComp  '>
    <div className='wd-40'>
      <div>
        <h2 className='homePrimerCompTitulo'>Formulario</h2>
        <p className='homePrimerCompTexto font-family-Robot'>Push n Pull es una agencia digital basada en datos especializada en brindar soluciones digitales.</p>
      </div>
      <div className="flex-justify-space-center  " >
      <div className='containerHeight'>
      <div>
        <div className="flex-justify-space-around"><button 
          className={selectedButton === 'contacto' ? 'selected' : ''}
          onClick={handleContactButtonClick}
        >
          Contacto
        </button>
        <button 
          className={selectedButton === 'partners' ? 'selected' : ''}
          onClick={handlePartnersButtonClick}
        >
          Contacto para Partners
        </button></div>
        
        {showContactForm && <FormularioContacto />}
        {showPartnersForm && <FormularioPartners />}
      </div>
    </div>
      </div>

    </div>
   
  </div>
    
    
  );
}

export default ContactoBody;


