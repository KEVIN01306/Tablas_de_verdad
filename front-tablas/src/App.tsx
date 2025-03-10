

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Teclado from "./pages/Teclado"
import AcercaDe from "./pages/documentacion"

function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Teclado/>} />
          <Route path="/configuracion/:id" element={<Teclado/>} />
          <Route path="/Acerca de" element={<AcercaDe/>}/>
        </Routes>
    </Router>
    
  )
}

export default App
