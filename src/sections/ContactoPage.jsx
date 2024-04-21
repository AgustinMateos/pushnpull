import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import ContactoBody from '../components/Contacto/ContactoBody';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';

const ContactoPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando una operación asíncrona (por ejemplo, una solicitud HTTP)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='HomeContainer background-principal  spinnerContianer'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ContactoBody />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ContactoPage;
