import React, { useState, useEffect } from 'react';
import ServicesPrimerComp from '../components/Services/ServicesPrimerComp'
import Navbar from '../components/Generals/Navbar/Navbar'
import Footer from '../components/Generals/Footer/Footer'
import Loader from '../components/Generals/Loader';



const ServicesPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando una operación asíncrona (por ejemplo, una solicitud HTTP)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='HomeContainer background-principal  spinnerContianer  '>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Navbar />
        <ServicesPrimerComp/>
        <Footer />
      </>
    )}
  </div>
  )
}

export default ServicesPage
