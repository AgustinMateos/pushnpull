import React, { useContext } from 'react'
import grafica8 from "../../assets/pushnpullIndex.webp"
import whatsapp from "../../assets/whatsapp.png"
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
// import LanguageContext from '../../contexts/LanguageContext';


const HomePrimerComp = ({ textos }) => {
  // const {handleLanguage,language}=useContext(LanguageContext);
  return (
    <div className='HomePrimerComp  '>
      <a className='whatsapp' href="https://wa.me/">
        <img src={whatsapp} alt="" />
      </a>
      <div className='homePrimerCompContainer'>
        <div>
          {/* <button onClick={e =>{handleLanguage("ES")}}>espanol</button>
          <button onClick={e =>{handleLanguage("EN")}}>ingles</button> */}
          <h1 className='homePrimerCompTitulo'>{textos.home.primercontainer.tituloEstatico}< Typewriter
            onInit={typewriter => {
              typewriter
                .typeString(`${textos.home.primercontainer.typeWriter.palabra1}`)
                .pauseFor(1000)
                .deleteAll()
                .typeString(`${textos.home.primercontainer.typeWriter.palabra2}`)
                .pauseFor(1000)
                .deleteAll()
                .typeString(`${textos.home.primercontainer.typeWriter.palabra3}`)
                .pauseFor(1000)
                .deleteAll()
                .typeString(`${textos.home.primercontainer.typeWriter.palabra4}`)
                .start();
            }}
          /></h1>

          <p className='homePrimerCompTexto font-family-Robot'>{textos.home.primercontainer.textoSecundario}</p>
        </div>
        <div className=" homePrimerCompButtons  " >
          <Link to={'/ServicesPage'} className='buttonVermas flex-align-center '><span className='buttonVermasContent1 font-family-Robot'>{textos.home.primercontainer.buttonPrincipal1Texto}</span></Link>
          <Link to={'/ContactoPage'} className='buttonVermas2  '><span className='buttonVermasContent2 font-family-Robot'>{textos.home.primercontainer.buttonPrincipal2Texto}</span></Link>
        </div>




      </div>
      <div className='homePrimerCompContainerImg h-100 imagenlatidoContainer flex-align-center flex-justify-center  '>
        <img className='wd-100 h-90  homePrimerCompImg imagen-latido' src={grafica8} alt="" />
      </div>
    </div>
  )
}

export default HomePrimerComp