import React from 'react'
import ContactoBody from '../components/Contacto/ContactoBody'
import Navbar from '../components/Generals/Navbar/Navbar'
import Footer from '../components/Generals/Footer/Footer'
const ContactoPage = () => {
  return (
    <div className='background-principal'>
        <Navbar/>
        <ContactoBody/>
        <Footer/>
    </div>
  )
}

export default ContactoPage