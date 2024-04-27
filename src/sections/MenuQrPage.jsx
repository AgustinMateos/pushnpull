import React, { useState, useEffect,useContext } from 'react';
import Loader from '../components/Generals/Loader';
import Navbar from '../components/Generals/Navbar/Navbar';
import Footer from '../components/Generals/Footer/Footer';
import MenuQr from '../components/SolucionesDigitales/MenuQr'
import LanguageContext from '../contexts/LanguageContext';
const MenuQrPage = () => {
    const [loading, setLoading] = useState(true);
    const {texts}=useContext(LanguageContext);
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
                    <Navbar textos={texts} />
                    <MenuQr textos={texts} />
                    <Footer textos={texts} />
                </>
            )}
        </div>
    );
};

export default MenuQrPage;