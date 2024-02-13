import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './sections/HomePage'
import ServicesPage from './sections/ServicesPage'
import SolucionesDigitalesPage from './sections/SolucionesDigitalesPage'

function App() {


  return (
    <BrowserRouter>
    
      <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route path="/ServicesPage" element={<ServicesPage/>}/>
      <Route path="/SolucionesDigitalesPage" element={<SolucionesDigitalesPage/>}/>
      </Routes>
      
     

    </BrowserRouter>
  )
}

export default App