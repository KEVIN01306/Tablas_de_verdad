

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Teclado from "./pages/Teclado"

function App() {


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Teclado/>} />
          <Route path="/configuracion/:id" element={<Teclado/>} />
        </Routes>
    </Router>
    
  )
}

export default App
