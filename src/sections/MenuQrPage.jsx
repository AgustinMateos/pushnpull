import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';
import MenuQr from '../components/SolucionesDigitales/MenuQr'
const MenuQrPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulando una operación asíncrona (por ejemplo, una solicitud HTTP)
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className='HomeContainer background-principal spinnerContianer'>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <MenuQr />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default MenuQrPage;