import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import HomePrimerComp from '../components/Home/HomePrimerComp';
import HomeTerComp from '../components/Home/HomeTerComp';
import HomeCuartQuintComp from '../components/Home/HomeImpulsaTuMarca';
import HomeSeptOctComp from '../components/Home/SoporteTecnologico';
import Footer from '../components/Generals/Footer/Footer';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
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
          <HomePrimerComp />
          <HomeCuartQuintComp />
          <HomeTerComp />
          <HomeSeptOctComp />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
