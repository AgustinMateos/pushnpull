import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import ecommerceServicio from '../../../assets/ecommerceGrafica.png'
import desarrolloWebServicio from '../../../assets/desarrolloweb.png'
import aplicacionesWebServicio from '../../../assets/aplicacionweb.png'
import menuQrServicios from '../../../assets/qr.png'
import migracionalaNube from '../../../assets/migracionalanube.png'
import disenoWebServicio from '../../../assets/diseñoweb.png'
const CardsSolucionesDigitalesServicios = () => {
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
      <Link to={'/AplicacionesWebPage'} className='card3'>
      <div className='wd-100 cardSolucionesDigImgContainer'><img src={aplicacionesWebServicio} /></div>
        
                    <div className='content contentFlex3'>
                        <h3 className='font-family-Robot cardsComponentesTitulos'>Aplicaciones Web</h3>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/EcommercePage"} className='card3'>
                    <div className='wd-100 cardSolucionesDigImgContainer'><img src={ecommerceServicio} /></div>
                
                    <div className='content contentFlex3'>
                        <h3 className='cardsComponentesTitulos'>Ecommerce</h3>

                        <ul>
                            <li>
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
         <Link to={"/DesarrolloWebPage"} className='card3'>
            <div className='wd-100 cardSolucionesDigImgContainer'> <img src={desarrolloWebServicio } /></div>
               
                    <div className='content contentFlex3'>
                        <h3 className='cardsComponentesTitulos'>Desarrollo Web</h3>

                        <ul>
                            <li>
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, ame t consectetur adipisicing elit.
                                    Qui voluptatem cum animi minus. Dignissimos
                                    vel nihil, laudantium vitae expedita et culpa illo similique
                                    totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                    
                </Link>
                <Link to={"/DisenoWebPage"} className='card3'>
            <div className='wd-100 cardSolucionesDigImgContainer'> <img src={disenoWebServicio } /></div>
               
                    <div className='content contentFlex3'>
                        <h3 className='cardsComponentesTitulos'>Diseño Web</h3>

                        <ul>
                            <li>
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, ame t consectetur adipisicing elit.
                                    Qui voluptatem cum animi minus. Dignissimos
                                    vel nihil, laudantium vitae expedita et culpa illo similique
                                    totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                    
                </Link>
                <Link to={"/MigracionalaNubePage"} className='card3'>
            <div className='wd-100 cardSolucionesDigImgContainer'> <img src={migracionalaNube} /></div>
               
                    <div className='content contentFlex3'>
                        <h3 className='cardsComponentesTitulos'>Migracion a la Nube</h3>

                       
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, ame t consectetur adipisicing elit.
                                    Qui voluptatem cum animi minus. Dignissimos
                                    vel nihil, laudantium vitae expedita et culpa illo similique
                                    totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                    
                </Link>
                <Link to={"/MenuQrPage"} className='card3'>
            <div className='wd-100 cardSolucionesDigImgContainer'> <img src={menuQrServicios } /></div>
               
                    <div className='content contentFlex3'>
                        <h3 className='cardsComponentesTitulos'>Menu Qr</h3>

                        <div className='price'></div>
                        <ul>
                            <li>
                                <p className='cardContentContainer'>Lorem ipsum dolor sit, ame t consectetur adipisicing elit.
                                    Qui voluptatem cum animi minus. Dignissimos
                                    vel nihil, laudantium vitae expedita et culpa illo similique
                                    totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                    
                </Link>
      </Slider>
    </div>
  );
};

export default CardsSolucionesDigitalesServicios;



