import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/layouts/Navbar'
import Container from './components/layouts/Container'

import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import LocaisDeColeta from './pages/LocaisDeColeta'
import ColetaDomiciliar from './pages/ColetaDomiciliar'
import Denunciar from './pages/Denunciar'
import TiposDeResiduos from './pages/TiposDeResiduos'
import OutrasInformacoes from './pages/OutrasInformacoes'

function App() {
  return (
    <Router>

      <Navbar />

      <Container customClass="altura-minima">
        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />

          {/* SERVIÇOS */}
          <Route path="/locais-de-coleta" element={<LocaisDeColeta />} />
          <Route path="/coleta-domiciliar" element={<ColetaDomiciliar />} />
          <Route path="/denunciar" element={<Denunciar />} />
          <Route path="/tipos-de-residuos" element={<TiposDeResiduos />} />

          <Route path="/contato" element={<Contato />} />
          <Route path="/outras-informacoes" element={<OutrasInformacoes />} />

        </Routes>
      </Container>


    </Router>
  )
}

export default App