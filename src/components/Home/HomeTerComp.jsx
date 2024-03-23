import React from 'react'
import { Link } from 'react-router-dom'
import CardsServiciosMobile from '../Generals/cards/CardsServiciosMobile'


const HomeTerComp = () => {
   
    return (
    <div>

        <div className='HomeTerComp flex-justify-space-evenly' >
        <CardsServiciosMobile/>
            <div className='HomeTerCompContainer  '>
                <Link to={'/SolucionesDigitalesPage'} className='card ' >
                    <div className='content ' >
                        <h3 className='font-family-Robot cardsComponentesTitulos'>Soluciones digitales</h3>
                        
                        <ul>
                            <li>
                                <p> 
                                     Desde aplicaciones móviles hasta análisis de datos, estas soluciones digitales permiten 
                                     abordar desafíos en diferentes sectores y adaptarse 
                                     en un entorno empresarial cada vez más digitalizado.</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/seoPage"} className='card'>
                    <div className='content'>
                        <h3 className='cardsComponentesTitulos'>Seo</h3>

                        
                        <ul>
                            <li>
                                <p>Las campañas y optimizaciones de motores de búsqueda (SEO) harán que tu tienda
                                     online o sitio web se posicionen en las primeras búsquedas de Google (u otros motores de búsqueda) de manera orgnánica.</p>
                                </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/MantenimientoPage"} className='card'>
                    <div className='content'>
                        <h3 className='cardsComponentesTitulos'>Mantenimiento</h3>

              
                        <ul>
                            <li>
                                <p>El mantenimiento no se trata solo de corregir problemas cuando surgen, sino también de prevenirlos y optimizar tus sistemas para un funcionamiento óptimo a largo plazo. </p>
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
