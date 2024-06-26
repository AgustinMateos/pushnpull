import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import seoServicioImg from '../../../assets/solucionesDigitalesPushnPull.webp'
import mantenimientoWebSerivicioImg from '../../../assets/solucionesDigitalesPushnPull.webp'
import HomeSeptOctComp from '../../Home/SoporteTecnologico';
import impulsaTuMarca from '../../../assets/impulsatumarca.png'
const CardsServiciosMenuMobile = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Mostrar solo una tarjeta a la vez
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Link to={'/SolucionesDigitalesPage'} className='card3 navbarBackgroundDropImg '>
                    <div className='wd-100 cardSolucionesDigImgContainer'><img src={mantenimientoWebSerivicioImg} /></div>

                    <div className='content contentFlex3 navbarBackgroundDrop '>
                        <h3 className='font-family-Robot cardsComponentesTitulos'>Soluciones Digitales</h3>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Desde el desarrollo de aplicaciones móviles hasta la creación de sitios web y tiendas en línea, pasando por un diseño web a medida y la implementación de menús QR, tenemos las herramientas y la experiencia necesarias para impulsar tu marca en el ámbito digital.</p>
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
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/ImpulsaTuMarcaPage"} className='card3 navbarBackgroundDropImg '>
                    <div className='wd-100 cardSolucionesDigImgContainer '><img src={impulsaTuMarca} /></div>

                    <div className='content contentFlex3 navbarBackgroundDrop'>
                        <h3 className='cardsComponentesTitulos'>Impulsa Tu Marca</h3>
                        <div className='price'></div>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Estas buscando llevar su marca al siguiente nivel?. Sabemos lo desafiante que puede ser comenzar desde cero o darle un nuevo impulso a tu negocio, y estamos aquí para ayudarte a dar el primer paso.</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>


            </Slider>
            {/* <HomeSeptOctComp /> */}
        </div>
    );
};

export default CardsServiciosMenuMobile;
