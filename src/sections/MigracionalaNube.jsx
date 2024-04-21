import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';
import MigracionalaNube from '../components/SolucionesDigitales/MigracionalaNube'
const MigracionalaNubePage = () => {
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
                    <MigracionalaNube/>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default MigracionalaNubePage;