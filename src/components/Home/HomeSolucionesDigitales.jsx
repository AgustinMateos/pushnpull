import React from 'react'
import { Link } from 'react-router-dom'
import CardsServiciosMobile from '../Generals/cards/CardsServiciosMobile'


const HomeSolucionesDigitales = ({textos}) => {
   
    return (
    <div>

        <div className='HomeTerComp flex-justify-space-evenly' >
        <CardsServiciosMobile/>
            <div className='HomeTerCompContainer  '>
                <Link to={'/SolucionesDigitalesPage'} className='card ' >
                    <div className='content ' >
                        <h3 className='font-family-Robot cardsComponentesTitulos'>{textos.home.primercontainer.titulosCards.titulo1}</h3>
                        
                        <ul>
                            <li>
                                <p> 
                                {textos.home.primercontainer.titulosCards.texto1}</p>
                            </li>
                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent2'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/seoPage"} className='card'>
                    <div className='content'>
                        <h3 className='cardsComponentesTitulos'>{textos.home.primercontainer.titulosCards.titulo2}</h3>

                        
                        <ul>
                            <li>
                                <p>{textos.home.primercontainer.titulosCards.texto2}</p>
                                </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent2'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>
                <Link to={"/MantenimientoPage"} className='card'>
                    <div className='content'>
                        <h3 className='cardsComponentesTitulos'>{textos.home.primercontainer.titulosCards.titulo3}</h3>

              
                        <ul>
                            <li>
                                <p>{textos.home.primercontainer.titulosCards.texto3} </p>
                            </li>

                        </ul>
                        <button className='buttonVermas'><span className='buttonVermasContent2'>Ver mas <ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                    </div>
                </Link>

            </div>

        </div>
        
    </div>

    )
}

export default HomeSolucionesDigitales
