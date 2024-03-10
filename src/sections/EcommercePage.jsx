import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';
import Ecommerce from '../components/SolucionesDigitales/Ecommerce'
const EcommercePage = () => {
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
                    <Ecommerce />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default EcommercePage;