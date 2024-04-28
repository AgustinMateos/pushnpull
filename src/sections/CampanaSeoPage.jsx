import React, { useState, useEffect,useContext } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';
import CampanaSeo from '../components/Seo/CampanaSeo';
import LanguageContext from '../contexts/LanguageContext';

const CampanaSeoPage = () => {
  const [loading, setLoading] = useState(true);
  const {texts}=useContext(LanguageContext);
  useEffect(() => {
    // Simulando una operación asíncrona (por ejemplo, una solicitud HTTP)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='HomeContainer background-principal  '>
      {loading ? (
        <Loader className="spinnerContianer"/>
      ) : (
        <>
          <Navbar textos={texts}/>
          <CampanaSeo textos={texts} />
          <Footer textos={texts} />
        </>
      )}
    </div>
  );
};

export default CampanaSeoPage;