import React from 'react'
import fondo30 from '../../assets/fondo30.png'
// import { Link } from 'react-router-dom'
const HomeSegComp = () => {
    return (
        <div className='HomePageBody'>

            <div className='wd-100 '>

                <div className='flex-align-center spot-backgroundflex-justify-space-around flex-justify-center '>

                    <div className='wd-30 '>
                        <img className='wd-90 imagen-latido' src={fondo30} alt="imagen grafica pnp" />
                    </div>
                    <div className='wd-40  '>
                        <div>
                            <h3 className='titulosComponentes'>Push n Pull</h3>
                        </div>
                        <div >
                            <p className='titulosComponentesTexto'>Somos una agencia enfocada a brindar soluciones digitales en base a nuestro expertice, generando un primer
                                y agil contacto con el cliente para realizar sus proyectos.
                            </p>
                        </div>
                        {/* <div><Link className='titlosComponentesButton'>Contacto</Link></div> */}
                    </div>

                </div>
                {/* <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eae5df" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,240C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            </div>
        </div>

    )
}

export default HomeSegComp