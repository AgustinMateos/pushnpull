import React from 'react'
import { Link } from 'react-router-dom'

const HomeTerComp = () => {
    return (
    <div>

        <div className='HomeTerComp flex-justify-space-evenly' >
          
            <div className='HomeTerCompContainer '>
                <Link to={'/SolucionesDigitalesPage'} className='card'>
                    <div className='content '>
                        <h3 className='font-family-Robot cardsComponentesTitulos'>Soluciones digitales</h3>

                        <div className='price'></div>
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/seoPage"} className='card'>
                    <div className='content'>
                        <h3 className='cardsComponentesTitulos'>Seo</h3>

                        <div className='price'></div>
                        <ul>
                            <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p></li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/MantenimientoPage"} className='card'>
                    <div className='content'>
                        <h3 className='cardsComponentesTitulos'>Mantenimiento</h3>

                        <div className='price'></div>
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Qui voluptatem cum animi minus. Dignissimos
                                    vel nihil, laudantium vitae expedita et culpa illo similique
                                    totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>

            </div>

        </div>
        {/* <svg className='HomeTercerCompSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,256C672,256,768,224,864,197.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    </div>

    )
}

export default HomeTerComp

/*<div className='w-100 HomeTerCompContainer'>
        <div className='w-100'>
            <div>
                <div>
                    <h4>Services</h4>
                </div>
                <div className='flex-align-center flex-wrap  flex-justify-space-around text-align-center'>
                    <Link><img src="" alt="imagen servicio 1" /> <p>ver mas</p></Link>
                    <Link><img  className="w-20 h-20" src={seo} alt="imagen servicio 2" /> <p>Seo</p></Link>
                    <Link><img src="" alt="imagen servicio 3" /> <p>ver mas</p></Link>
                </div>
            </div>
        
        </div>
    </div>*/