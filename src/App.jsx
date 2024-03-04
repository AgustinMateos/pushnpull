import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './sections/HomePage'
import ServicesPage from './sections/ServicesPage'
import SolucionesDigitalesPage from './sections/SolucionesDigitalesPage'
import SeoPage from './sections/SeoPage'
import MantenimientoPage from './sections/MantenimientoPage'
import ImpulsaTuMarcaPage from './sections/ImpulsaTuMarcaPage'
import ContactoPage from './sections/ContactoPage'


function App() {


  return (
    <BrowserRouter>
    
      <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route path="/ServicesPage" element={<ServicesPage/>}/>
      <Route path="/SolucionesDigitalesPage" element={<SolucionesDigitalesPage/>}/>
      <Route path="/SeoPage" element={<SeoPage/>}/>
      <Route path="/MantenimientoPage" element={<MantenimientoPage/>}/>
      <Route path='/ImpulsaTuMarcaPage' element={<ImpulsaTuMarcaPage/>}/>
      <Route path="/ContactoPage" element={<ContactoPage/>}/>
     
      </Routes>
      
     

    </BrowserRouter>
  )
}

export default App