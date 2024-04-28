import React, { useState, useEffect,useContext } from 'react';
import Loader from '../components/Generals/Loader';
import ImpulsaTuMarcaBody from '../components/ImpulsaTuMarca/ImpulsaTuMarcaBody';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';
import LanguageContext from '../contexts/LanguageContext';

const ImpulsaTuMarcaPage = () => {
  const [loading, setLoading] = useState(true);
  const {texts}=useContext(LanguageContext);
  useEffect(() => {
    // Simulando una operación asíncrona (por ejemplo, una solicitud HTTP)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='HomeContainer background-principal className="spinnerContianer"'>
      {loading ? (
        <Loader className="spinnerContianer" />
      ) : (
        <>
          <Navbar textos={texts} />
          <ImpulsaTuMarcaBody textos={texts} />
          <Footer textos={texts} />
        </>
      )}
    </div>
  );
};

export default ImpulsaTuMarcaPage;
