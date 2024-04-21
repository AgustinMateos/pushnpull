import React, { useState, useEffect } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';
import MantenimientoWeb from '../components/Mantenimiento/MantenimientoWeb';
const MantenimientoWebPage = () => {
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
                    <MantenimientoWeb />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default MantenimientoWebPage;