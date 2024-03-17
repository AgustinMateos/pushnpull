import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import AuditoriaSeoServicio from '../../../assets/ecommerceGrafica.png'

import CamapanSeoServicio from '../../../assets/aplicacionweb.png'

const CardsSeoMobile = () => {
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
      <Link to={'/AuditoriaSeoPage'} className='card3'>
      <div className='wd-100 cardSolucionesDigImgContainer'><img src={AuditoriaSeoServicio} /></div>
        
                    <div className='content contentFlex3'>
                        <h3 className='font-family-Robot cardsComponentesTitulos'>Auditoria Seo</h3>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>La Auditoría de SEO implica
                 analizar el nivel de optimización de tu sitio web para los motores de búsqueda. 
                 Te permite detectar errores que podrían obstaculizar el buen posicionamiento de tu web
                  y descubrir oportunidades que 
                favorezcan una mejor ubicación en los resultados de búsqueda.</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/CampanaSeoPage"} className='card3'>
                    <div className='wd-100 cardSolucionesDigImgContainer'><img src={CamapanSeoServicio} /></div>
                
                    <div className='content contentFlex3'>
                        <h3 className='cardsComponentesTitulos'>Camapaña Seo</h3>
                       
                        <ul>
                            <li>
                                <p className='cardContentContainer'> Una camapaña de seo debe ser un pilar fundamental para el posicionamiento de una marca.
                  Cuando las personas buscan información sobre productos y servicios, su primer opcion
                    es hacerlo en Google (u otro motor de búsqueda). Por
                  lo que estar
                  en las primeras posiciones garantiza más visitas a su sitio y una mayor exposición a los
                  productos y servicios que ofrece. Nuestras campañas de seo 
                  conectan la estrategia con sus propios objetivos y
                  oportunidades de crecimiento</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>       
      </Slider>
    </div>
  );
};

export default CardsSeoMobile;

