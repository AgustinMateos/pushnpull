import React from 'react'
import SeoBody from '../components/Seo/SeoBody'
import Navbar from '../components/Generals/Navbar/Navbar'
import Footer from '../components/Generals/Footer/Footer'
const SeoPage = () => {
  return (
    <div className='HomeContainer background-principal'>
        <Navbar/>
        <SeoBody/>
        <Footer/>
    </div>
  )
}

export default SeoPage