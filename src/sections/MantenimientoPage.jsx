import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
// import Navbar from '../components/Generals/Navbar/Navbar';
import MantenimientoBody from '../components/Mantenimiento/MantenimientoBody';
import Footer from '../components/Generals/Footer/Footer';

const MantenimientoPage = () => {
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
          <MantenimientoBody />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MantenimientoPage;
