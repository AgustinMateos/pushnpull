import React, { useState, useEffect, useContext } from 'react';
import Loader from '../components/Generals/Loader';
import ContactoBody from '../components/Contacto/ContactoBody';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';
import LanguageContext from '../contexts/LanguageContext';

const ContactoPage = () => {
  const [loading, setLoading] = useState(true);
  const {texts}=useContext(LanguageContext);
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
          <Navbar textos={texts} />
          <ContactoBody textos={texts}  />
          <Footer textos={texts}  />
        </>
      )}
    </div>
  );
};

export default ContactoPage;
