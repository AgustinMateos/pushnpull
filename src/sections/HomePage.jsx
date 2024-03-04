import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import HomePrimerComp from '../components/Home/HomePrimerComp';
import HomeTerComp from '../components/Home/HomeTerComp';
import HomeCuartQuintComp from '../components/Home/HomeImpulsaTuMarca';
// import HomeSextComp from '../components/Home/HomeSextComp';
import HomeSeptOctComp from '../components/Home/SoporteTecnologico';
import Footer from '../components/Generals/Footer/Footer';

const HomePage = () => {
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
          <HomePrimerComp />
          <HomeCuartQuintComp />
          <HomeTerComp />
          <HomeSeptOctComp />
          {/* <HomeSextComp /> */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
