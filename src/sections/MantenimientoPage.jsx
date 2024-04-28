import React, { useState, useEffect,useContext } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import MantenimientoBody from '../components/Mantenimiento/MantenimientoBody';
import Footer from '../components/Generals/Footer/Footer';
import LanguageContext from '../contexts/LanguageContext';

const MantenimientoPage = () => {
  const [loading, setLoading] = useState(true);
  const {texts}=useContext(LanguageContext);
  useEffect(() => {
    // Simulando una operación asíncrona (por ejemplo, una solicitud HTTP)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='HomeContainer background-principal '>
      {loading ? (
        <Loader className="spinnerContianer" />
      ) : (
        <>
          <Navbar textos={texts}/>
          <MantenimientoBody textos={texts} />
          <Footer textos={texts}/>
        </>
      )}
    </div>
  );
};

export default MantenimientoPage;
