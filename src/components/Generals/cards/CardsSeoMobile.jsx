import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import ecommerceServicio from '../../../assets/ecommerceGrafica.png'
import desarrolloWebServicio from '../../../assets/desarrolloweb.png'
import aplicacionesWebServicio from '../../../assets/aplicacionweb.png'

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
      <Link to={'/SolucionesDigitalesPage'} className='card3'>
      <div className='wd-100 cardSolucionesDigImgContainer'><img src={aplicacionesWebServicio} /></div>
        
                    <div className='content contentFlex3'>
                        <h3 className='font-family-Robot cardsComponentesTitulos'>Auditoria Seo</h3>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/seoPage"} className='card3'>
                    <div className='wd-100 cardSolucionesDigImgContainer'><img src={ecommerceServicio} /></div>
                
                    <div className='content contentFlex3'>
                        <h3 className='cardsComponentesTitulos'>Camapaña Seo</h3>
                       
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p>
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

