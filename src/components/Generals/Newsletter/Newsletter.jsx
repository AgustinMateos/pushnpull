import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log("Correo válido:", email);
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true); // Resetea el estado de la validación al cambiar el correo electrónico
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
      <form className='footerForm titulosComponentesTexto ' onSubmit={handleSubmit} >
        <input
        className='footerFormInputs'
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={handleChange}
          style={{ borderColor: isValid ? '' : 'red' }} // Cambia el borde a rojo si el correo no es válido
        />
        {!isValid && <p style={{ color: 'red' }}>Por favor, ingresa un correo electrónico válido.</p>}
        <div className='titulosComponentesTexto footerButtonContainers '><button type="submit">Suscribirse</button></div>
        
      </form>
    </div>
  );
};

export default Newsletter;