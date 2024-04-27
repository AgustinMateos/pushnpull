import React,{createContext,useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext=createContext()

const initialLanguage="ES";
const translations= {
    EN:{
         /*seccion home*/
        home:{
            primercontainer:{
                tituloEstatico:'Lets push together your',
                typeWriter:{
                    palabra1:'Brand.',
                    palabra2:'web.',
                    palabra3:'Ecommerce.',
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
            } ,
            
            footer:{
            titulo:'Push n Pull',
            descripcion:'We are an agency specialized in mobile applications, web development, web design and SEO. We help brands understand and optimize their digital performance.',
            menu:{
                titulo1:'Home',
                titulo2:'brand growth',
                titulo3:'Digital Solutions',
                titulo4:'Seo',
                titulo5:'Maintence',
                titulo6:'Contact',
                titulo7:'Become a partner',
                botonNewsletter:'Subscribe!',
        }
        }
        },
       /*seccion servicios*/
        servicios:{
            titulo:'Services',
            descripcion:'Standing out and reaching your audience is essential. At our agency, we offer complete digital solutions to boost your online presence. From application development to SEO strategies and ongoing maintenance, we are here to help you achieve your digital goals. Select the service that fits your goals to discover the digital transformation your company needs.',
            menu:{titulo1:'Boost your Brand', titulo2:'Digital Solutions', titulo3:'Seo',titulo4:'Maintence'},
            servicio1:{descripcion1:'Are you looking to take your brand to the next level? We know how challenging it can be to start from scratch or give your business a new lease on life, and we are here to help you take the first step.'},
            servicio2:{descripcion2:'From mobile app development to website and online store creation, to custom web design and QR menu implementation, we have the tools and expertise to drive your brand in the digital realm.'},
            servicio3:{descripcion3:''},
            servicio4:{descripcion4:''},
            botonVerMas:{titulo:'Ver mas'}
    
        },
        /*seccion contacto*/
        contacto:{
            titulo:'Form',
            descripcion:'If you need a quote or are looking for additional information about a digital service, please fill out the form on the screen. If you are interested in our technological support or in being part of our team, please select the partnership option.',
            boton1:'Budget',
            boton2:'Partnership',
            placeholder:{placeholder1:'Nombre:',placeholder2:'Apellido :',placeholder3:'Email :',placeholder4:'Numero de Teléfono: ',placeholder5:'Red Social/Sitio Web: '},
        },
        /*generales */
        presupuesto:{titulo:'Need a quote?',descripcion:'Are you ready to take the next step in your project, then it is time to get a customized quote that fits your needs! Each project is unique, so we make sure we understand your specific requirements before preparing your quote. We focus on your goals and preferences to offer you a tailor-made solution.'},

       
        
    },
    ES:{
        /*seccion home*/ 
        home:{
            primercontainer:{
                tituloEstatico:'Empujemos juntos tu ',
                typeWriter:{
                    palabra1:'Marca.',
                    palabra2:'Sitio web.',
                    palabra3:'Tienda online.',
                    palabra4:'Idea.'
                },
                textoSecundario:'Push n Pull es una agencia digital especializada en aplicaciones, desarrollo web, diseño web y  SEO. A través de una consultoría, nuestro equipo experimentado ayuda a las marcas a comprender y optimizar su desempeño digital.',
                buttonPrincipal1Texto:'Nuestros Servicios',
                buttonPrincipal2Texto:'Contactanos',
                impulsaTuMarca:{titulo:'Impulsa tu marca',texto:'Especialmente para aquellos emprendedores y empresas que están buscando llevar su marca al siguiente nivel. Sabemos lo desafiante que puede ser comenzar desde cero o darle un nuevo impulso a tu negocio, y estamos aquí para ayudarte a dar el primer paso.'},
                titulosCards:{
                    titulo1:'Nuestros servicios',
                    texto1:'Desde aplicaciones móviles hasta análisis de datos, estas soluciones digitales permiten abordar desafíos en diferentes sectores y adaptarse en un entorno empresarial cada vez más digitalizado.',
                    titulo2:'Seo',
                    texto2:'Las campañas y optimizaciones de motores de búsqueda (SEO) harán que tu tienda online o sitio web se posicionen en las primeras búsquedas de Google (u otros motores de búsqueda) de manera orgánica.',
                    titulo3:'Mantenimiento',
                    texto3:'El mantenimiento no se trata solo de corregir problemas cuando surgen, sino también de prevenirlos y optimizar tus sistemas para un funcionamiento óptimo a largo plazo. ',
                },
                soporteTecnologico:{titulo:'Soporte tecnológico a empresas y agencias',texto:'En nuestro compromiso por impulsar el éxito de agencias y empresas, ofrecemos un soporte tecnológico integral que va más allá de resolver problemas técnicos. Estamos dispuestos a brindarte el apoyo y la experiencia necesaria para alcanzar tus metas empresariales en el mundo digital.'}
        },
        footer:{
        titulo:'Push n Pull',
        descripcion:'Somos una agencia especializada en aplicaciones moviles, desarrollo web, diseño web y SEO. Ayudamos a las marcas a comprender y optimizar su desempeño digital.',
        menu:{
            titulo1:'Inicio',
            titulo2:'Impulsa tu Marca',
            titulo3:'Soluciones Digitales',
            titulo4:'Seo',
            titulo5:'Mantenimiento',
            titulo6:'Contacto',
            titulo7:'Convertite en partner',
            botonNewsletter:'Suscribirse',
    }
            
    }
    },
    /*seccion nuestros servicios*/ 
    servicios:{
        titulo:'Servicios',
        descripcion:'Destacar y llegar a tu audiencia es esencial. En nuestra agencia, ofrecemos soluciones digitales completas para potenciar tu presencia en línea. Desde el desarrollo de aplicaciones hasta estrategias SEO y mantenimiento continuo, estamos aca para ayudarte a alcanzar tus objetivos digitales. Selecciona el servicio que se adapte a tus objetivos para descubrir la transformacion digital que necesita tu empresa.',
        menu:{titulo1:'Impulsa tu Marca', titulo2:'Soluciones Digitales', titulo3:'Seo',titulo4:'Mantenimiento'},
        servicio1:{titulo1:'Impulsa tu Marca',descripcion1:'Estas buscando llevar su marca al siguiente nivel?. Sabemos lo desafiante que puede ser comenzar desde cero o darle un nuevo impulso a tu negocio, y estamos aquí para ayudarte a dar el primer paso.'},
        servicio2:{titulo2:'Soluciones Digitales',descripcion2:'From mobile application development to website and online store creation, custom web design and QR menu implementation, we have the tools and expertise to integrate your brand into the digital realm.'},
        servicio3:{titulo3:'Seo',descripcion3:''},
        servicio4:{titulo4:'Mantenimiento',descripcion4:''},
        botonVerMas:{titulo:'Ver mas'}

    },
    /*seccion contacto*/ 
    contacto:{
        titulo:'Formulario',
        descripcion:'Si necesitas presupuesto o estas buscando informacion adicional por algun servicio digital, completa los datos del formulario que aparece en pantalla. Si te interesa que les brindemos soporte tecnologico o formar parte de nuestro equipo, selecciona la opcion de parthnership.',
        boton1:'Presupuesto',
        boton2:'Partnership',
        placeholder:{placeholder1:'Nombrell:',placeholder2:'Apellido :',placeholder3:'Email :',placeholder4:'Numero de Teléfono: ',placeholder5:'Red Social/Sitio Web: '},
        },
        presupuesto:{titulo:'Necesitas presupuesto?',descripcion:'¿Estás listo para dar el siguiente paso en tu proyecto? ¡Entonces es hora de obtener un presupuesto personalizado que se adapte a tus necesidades!Cada proyecto es único, por lo que nos aseguramos de entender tus requerimientos específicos antes de preparar tu presupuesto. Nos enfocamos en tus objetivos y preferencias para ofrecerte una solución a medida.'},
    
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