import React, { useState, useEffect, useContext } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import HomePrimerComp from '../components/Home/HomePrimerComp';
import HomeSolucionesDigitales from '../components/Home/HomeSolucionesDigitales';
import HomeCuartQuintComp from '../components/Home/HomeImpulsaTuMarca';
import HomeSeptOctComp from '../components/Home/SoporteTecnologico';
import Footer from '../components/Generals/Footer/Footer';
import LanguageContext from '../contexts/LanguageContext';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  const {texts}=useContext(LanguageContext);

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
          <Navbar textos={texts}  />
          <HomePrimerComp textos={texts} />
          <HomeCuartQuintComp textos={texts} />
          <HomeSolucionesDigitales textos={texts}/>
          <HomeSeptOctComp textos={texts} />
          <Footer textos={texts}/>
        </>
      )}
    </div>
  );
};

export default HomePage;
