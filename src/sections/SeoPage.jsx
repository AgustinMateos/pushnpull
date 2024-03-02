import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import SeoBody from '../components/Seo/SeoBody'
import Navbar from '../components/Generals/Navbar/Navbar'
import Footer from '../components/Generals/Footer/Footer'

const SeoPage = () => {
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
        <SeoBody />
        <Footer />
      </>
    )}
  </div>
  )
}

export default SeoPage
