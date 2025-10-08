import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import LeituraPage from "./pages/Leitura/Leitura.jsx";
import Inicio from './pages/PlayJogo/Inicio.jsx'
import ComoJogar1 from './pages/Regras1/ComoJogar1.jsx'
import ComoJogar2 from './pages/Regras2/ComoJogar2.jsx'
import Jogo from '../src/pages/Jogo/Jogo';
import Resultado from '../src/pages/Resultado/Resultado';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leitura" element={<LeituraPage />} />

        <Route path="/iniciojogo" element={<Inicio />} />
        <Route path="/comojogar1" element={<ComoJogar1 />} />
        <Route path="/comojogar2" element={<ComoJogar2 />} />
        <Route path="/jogo" element={<Jogo />} />
        
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  );
}

