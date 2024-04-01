import React from 'react'
import { Link } from 'react-router-dom'

import pushnpullLogo from "../../../assets/pushnpullIndex.webp"
import Newsletter from '../Newsletter/Newsletter'

const Footer = () => {
    return (
        <div className='wd-100 footerContainer '>
            <div className='footerContainerFlex'>
                <div className='footerPrimerComponente'>
<div><Link to={"/"} className="z-50 flex-justify-start   footerContainerLogo ">

                        <img src={pushnpullLogo} alt="logo" className="md:cursor-pointer h-9" />
                        <h1 className="tituloFont">Push n Pull</h1>

                    </Link></div>
                    <div className='footerPrimerComponenteTexto'>
                    <p className='titulosComponentesTexto font-family-Robot wd-70'>Somos una agencia 
                    especializada en aplicaciones, desarrollo web, diseño web y SEO. Ayudamos a las marcas a 
                     comprender y optimizar su desempeño digital.
                    </p></div>
                    
                    
                </div>
                <div className='wd-60 footerSegundoComponente flex-justify-space-around '>

                    <div className='wd-50'>
                        <ul className='font-family-Robot'>
                             <li><Link  to={"/"}>Inicio</Link></li>
                            <li className='margin-top-10 '><Link to={"/impulsaTuMarcaPage"} className='titulosComponentesTexto'>Impulsa tu marca</Link></li>
                            <li className="margin-top-10"><Link to={"/SolucionesDigitalesPage"} className="titulosComponentesTexto">Soluciones Digitales</Link></li>
                            <li className="margin-top-10"><Link to={"/SeoPage"} className="titulosComponentesTexto">Seo</Link></li>
                            <li className="margin-top-10"><Link to={"/MantenimientoPage"} >Mantenimiento</Link></li>
                        </ul>
                    </div>

                    <div className='footerTercerComponente'>
                        <ul className='font-family-Robot'>
                            {/* <li className="margin-top-10"><Link className='titulosComponentesTexto'>Blog</Link></li> */}
                            <li className="margin-top-10"><Link to={'/ContactoPage'} className='titulosComponentesTexto'>Contacto</Link></li>
                            <li className="margin-top-10"><Link to={'/ContactoPage'} className='titulosComponentesTexto'>Convertite en partner</Link></li>
                            <Newsletter/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex-justify-space-around wd-100' >
                <h6>Copyright</h6>
                <div className='flex-justify-space-around wd-40'>
                    <p className='wd-30'>terms</p>
                    <p className='wd-30'>Privacy</p></div>

            </div>


        </div>
    )
}

export default Footer