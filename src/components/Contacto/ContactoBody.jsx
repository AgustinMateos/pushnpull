import React, { useState } from 'react';
import FormularioPartners from './FormularioPartners';
import FormularioContacto from './FormularioContacto';
import grafica8 from "../../assets/logo2.png"


function ContactoBody() {
  const [showContactForm, setShowContactForm] = useState(false);
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
      <div className="flex-justify-space-between  wd-70" >
      <div className='containerHeight'>
      <div>
        <button 
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
        </button>
        {showContactForm && <FormularioContacto />}
        {showPartnersForm && <FormularioPartners />}
      </div>
    </div>
      </div>

      {/* <div className='flex-justify-start buttonVermas'><Buttons/></div> */}

    </div>
    <div className='wd-40 h-100 flex-align-center flex-justify-center '>
      <img className='wd-100 h-90  homePrimerCompImg imagen-latido' src={grafica8} alt="" /> </div>
  </div>
    
    
  );
}

export default ContactoBody;


