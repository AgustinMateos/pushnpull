import React,{createContext,useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext=createContext()

const initialLanguage="ES";
const translations= {
    EN:{
        home:{
            primercontainer:{
                tituloEstatico:'Lets push together your',
                typeWriter:{
                    palabra1:'brand.',
                    palabra2:'web.',
                    palabra3:'ecommerce.',
                    palabra4:'idea.'
                },
                textoSecundario:'Push n Pull is a digital agency specializing in applications, web development, web design and SEO. Through consulting, our experienced team helps brands understand and optimize their digital performance.',
                buttonPrincipal1Texto:'Our services',
                buttonPrincipal2Texto:'Contact us',
                impulsaTuMarca:{titulo:'Boost your brand',texto:'Especially for those entrepreneurs and businesses that are looking to take their brand to the next level. We know how challenging it can be to start from scratch or give your business a new lease of life, and we are here to help you take the first step.'},
                titulosCards:{
                    titulo1:'Our services',
                    texto1:'From mobile applications to data analytics, these digital solutions enable you to address challenges in different industries and adapt in an increasingly digitized business environment.',
                    titulo2:'Seo',
                    texto2:'Search Engine Optimization (SEO) campaigns and optimizations will make your online store or website rank in the first searches of Google (or other search engines) in an organic way.',
                    titulo3:'Maintenance ',
                    texto3:'Maintenance is not only about correcting problems when they arise, but also about preventing them and optimizing your systems for optimal long-term performance. ',
                },
                soporteTecnologico:{titulo:'Technological support to companies and agencies',texto:'In our commitment to boost the success of agencies and companies, we offer comprehensive technological support that goes beyond solving technical problems. We are ready to provide you with the support and expertise you need to achieve your business goals in the digital world.'}
            }
        }
        
        
    },
    ES:{
        home:{
            primercontainer:{
                tituloEstatico:'Empujemos juntos tu ',
                typeWriter:{
                    palabra1:'marca.',
                    palabra2:'sitio web.',
                    palabra3:'tienda online.',
                    palabra4:'idea.'
                },
                textoSecundario:'Push n Pull es una agencia digital especializada en aplicaciones, desarrollo web, diseño web y  SEO. A través de una consultoría, nuestro equipo experimentado ayuda a las marcas a comprender y optimizar su desempeño digital.',
                buttonPrincipal1Texto:'Nuestros Servicios',
                buttonPrincipal2Texto:'Contactanos',
                impulsaTuMarca:{titulo:'impulsa tu marca',texto:'Especialmente para aquellos emprendedores y empresas que están buscando llevar su marca al siguiente nivel. Sabemos lo desafiante que puede ser comenzar desde cero o darle un nuevo impulso a tu negocio, y estamos aquí para ayudarte a dar el primer paso.'},
                titulosCards:{
                    titulo1:'Nuestros servicios',
                    texto1:'Desde aplicaciones móviles hasta análisis de datos, estas soluciones digitales permiten abordar desafíos en diferentes sectores y adaptarse en un entorno empresarial cada vez más digitalizado.',
                    titulo2:'Seo',
                    texto2:'Las campañas y optimizaciones de motores de búsqueda (SEO) harán que tu tienda online o sitio web se posicionen en las primeras búsquedas de Google (u otros motores de búsqueda) de manera orgánica.',
                    titulo3:'Mantenimiento',
                    texto3:'El mantenimiento no se trata solo de corregir problemas cuando surgen, sino también de prevenirlos y optimizar tus sistemas para un funcionamiento óptimo a largo plazo. ',
                },
                soporteTecnologico:{titulo:'Soporte tecnológico a empresas y agencias',texto:'En nuestro compromiso por impulsar el éxito de agencias y empresas, ofrecemos un soporte tecnológico integral que va más allá de resolver problemas técnicos. Estamos dispuestos a brindarte el apoyo y la experiencia necesaria para alcanzar tus metas empresariales en el mundo digital.'}
        }
    }
}
};



const LanguageProvider = ({children}) => {
  const [language, setLanguage]=useLocalStorage("idioma de web:",initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const handleLanguage = ( e ) => {
    if (e === "ES") {
        setTimeout(() => {
            setLanguage("ES");
            setTexts(translations.ES);
        }, 300 );
    } else {
        setTimeout(() => {
            setLanguage("EN");
            setTexts(translations.EN);
        }, 300 );
    }
};
const data={language,texts,handleLanguage}
    return (
   
    <LanguageContext.Provider value={data}>
       {children}

    </LanguageContext.Provider>

  )
}
export {LanguageProvider};
export default LanguageContext