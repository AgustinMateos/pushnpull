import React from 'react'
import { Link } from 'react-router-dom'
import CardsServiciosMobile from '../Generals/cards/CardsServiciosMobile'
const HomeTerComp = () => {
    return (
    <div>

        <div className='HomeTerComp flex-justify-space-evenly' >
        <CardsServiciosMobile/>
            <div className='HomeTerCompContainer  '>
                <Link to={'/SolucionesDigitalesPage'} className='card'>
                    <div className='content '>
                        <h3 className='font-family-Robot cardsComponentesTitulos'>Soluciones digitales</h3>
                        
                        <ul>
                            <li>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/seoPage"} className='card'>
                    <div className='content'>
                        <h3 className='cardsComponentesTitulos'>Seo</h3>

                        
                        <ul>
                            <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatem cum animi minus. Dignissimos vel nihil, laudantium vitae expedita et culpa illo similique totam, aperiam molestias suscipit quos non repellat!</p></li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/MantenimientoPage"} className='card'>
                    <div className='content'>
                        <h3 className='cardsComponentesTitulos'>Mantenimiento</h3>

              
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
        
    </div>

    )
}

export default HomeTerComp
