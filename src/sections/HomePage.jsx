import React from 'react'
import Navbar from '../components/Generals/Navbar/Navbar'
import HomePrimerComp from '../components/Home/HomePrimerComp'
// import HomeSegComp from '../components/Home/HomeSegComp'
import HomeTerComp from '../components/Home/HomeTerComp'
import HomeCuartQuintComp from '../components/Home/HomeCuartQuintComp'
import HomeSextComp from '../components/Home/HomeSextComp'
import HomeSeptOctComp from '../components/Home/HomeSeptOctComp'
import Footer from '../components/Generals/Footer/Footer'

const HomePage = () => {
  return (
    <div className='HomeContainer background-principal' >
        <Navbar/>
        <HomePrimerComp/>
        <HomeCuartQuintComp/>  
        {/* <HomeSegComp/>  */}
         <HomeTerComp />
        <HomeSeptOctComp/>
         <HomeSextComp/> 
      
         <Footer/>
    
    </div>
  )
}

export default HomePage