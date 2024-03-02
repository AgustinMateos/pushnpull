import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import ImpulsaTuMarcaBody from '../components/ImpulsaTuMarca/ImpulsaTuMarcaBody';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';

const ImpulsaTuMarcaPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando una operación asíncrona (por ejemplo, una solicitud HTTP)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='HomeContainer background-principal'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ImpulsaTuMarcaBody />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ImpulsaTuMarcaPage;
