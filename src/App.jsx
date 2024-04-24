import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './sections/HomePage'
import ServicesPage from './sections/ServicesPage'
import SolucionesDigitalesPage from './sections/SolucionesDigitalesPage'
import SeoPage from './sections/SeoPage'
import MantenimientoPage from './sections/MantenimientoPage'
import ImpulsaTuMarcaPage from './sections/ImpulsaTuMarcaPage'
import ContactoPage from './sections/ContactoPage'
import EcommercePage from './sections/EcommercePage'
import DisenoWebPage from './sections/DisenoWebPage'
import AplicacionesWebPage from './sections/AplicacionesWebPage'
import MenuQrPage from './sections/MenuQrPage'
import MigracionalaNubePage from './sections/MigracionalaNube'
import DesarrolloWebPage from './sections/DesarrolloWebPage'
import AuditoriaSeoPage from './sections/AuditoriaSeoPage'
import CampanaSeoPage from './sections/CampanaSeoPage'
import MantenimientoBaseDeDatosPage from './sections/MantenimientoBaseDeDatosPage'
import MantenimientoSeoPage from './sections/MantenimientoSeoPage'
import MantenimientoWebPage from './sections/MantenimientoWebPage'
import { LanguageProvider } from './contexts/LanguageContext'


function App() {


  return (
    <LanguageProvider> 
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route path="/ServicesPage" element={<ServicesPage/>}/>
      <Route path="/SolucionesDigitalesPage" element={<SolucionesDigitalesPage/>}/>
      <Route path="/SeoPage" element={<SeoPage/>}/>
      <Route path="/MantenimientoPage" element={<MantenimientoPage/>}/>
      <Route path='/ImpulsaTuMarcaPage' element={<ImpulsaTuMarcaPage/>}/>
      <Route path="/ContactoPage" element={<ContactoPage/>}/>
      <Route path="/EcommercePage" element={<EcommercePage/>}/>
      <Route path="/AplicacionesWebPage" element={<AplicacionesWebPage/>}/>
      <Route path="/DisenoWebPage" element={<DisenoWebPage/>}/>
      <Route path="/MenuQrPage" element={<MenuQrPage/>}/>
      <Route path="/DesarrolloWebPage" element={<DesarrolloWebPage/>}/>
      <Route path="/MigracionalaNubePage" element={<MigracionalaNubePage/>}/>
      <Route path="/AuditoriaSeopage" element={<AuditoriaSeoPage/>}/>
      <Route path="/CampanaSeoPage" element={<CampanaSeoPage/>}/>
      <Route path="/MantenimientoSeoPage" element={<MantenimientoSeoPage/>}/>
      <Route path="/MantenimientoBaseDeDatosPage" element={<MantenimientoBaseDeDatosPage/>}/>
      <Route path="/MantenimientoWebPage" element={<MantenimientoWebPage/>}/>
      <Route path="/MantenimientoPage" element={<MantenimientoPage/>}/>
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
   
  )
}

export default App