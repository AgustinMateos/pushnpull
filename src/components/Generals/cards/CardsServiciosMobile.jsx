import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import solucionesDigitalesImg from '../../../assets/solucionesDigitalesPushnPull.webp'
import seoServicioImg from '../../../assets/solucionesDigitalesPushnPull.webp'
import mantenimientoWebSerivicioImg from '../../../assets/solucionesDigitalesPushnPull.webp'
const CardsServiciosMobile = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Mostrar solo una tarjeta a la vez
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="slider-containerCards">
            <Slider {...settings}>
                <Link to={'/SolucionesDigitalesPage'} className='card3 navbarBackgroundDropImg '>
                    <div className='wd-100 cardSolucionesDigImgContainer'><img src={solucionesDigitalesImg} /></div>

                    <div className='content contentFlex3 navbarBackgroundDrop '>
                        <h3 className='font-family-Robot cardsComponentesTitulos'>Soluciones Digitales</h3>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Desde aplicaciones móviles hasta análisis de datos, estas soluciones digitales permiten
                                    abordar desafíos en diferentes sectores y adaptarse
                                    en un entorno empresarial cada vez más digitalizado.</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/seoPage"} className='card3 navbarBackgroundDropImg '>
                    <div className='wd-100 cardSolucionesDigImgContainer '><img src={seoServicioImg} /></div>

                    <div className='content contentFlex3 navbarBackgroundDrop'>
                        <h3 className='cardsComponentesTitulos'>Seo</h3>
                        <div className='price'></div>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Las campañas y optimizaciones de motores de búsqueda (SEO) harán que tu tienda
                                    online o sitio web se posicionen en las primeras búsquedas de Google (u otros motores de búsqueda) de manera orgnánica.</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/MantenimientoPage"} className='card3 navbarBackgroundDropImg '>
                    <div className='wd-100 cardSolucionesDigImgContainer '><img src={mantenimientoWebSerivicioImg} /></div>

                    <div className='content contentFlex3 navbarBackgroundDrop'>
                        <h3 className='cardsComponentesTitulos'>Mantenimiento</h3>
                        <div className='price'></div>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Entendemos que el mantenimiento no se trata solo de corregir problemas cuando surgen, sino también de prevenirlos y optimizar tus sistemas para un funcionamiento óptimo a largo plazo. </p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>


            </Slider>
        </div>
    );
};

export default CardsServiciosMobile;



