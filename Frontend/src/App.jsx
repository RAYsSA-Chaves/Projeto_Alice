import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from './pages/PlayJogo/Inicio.jsx'
import ComoJogar1 from './pages/Regras1/ComoJogar1.jsx'
import ComoJogar2 from './pages/Regras2/ComoJogar2.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jogo from '../src/pages/Jogo/Jogo';
import Resultado from '../src/pages/Resultado/Resultado';
// import ModalSair from "./Components/InicioJogo/ModalSair.jsx";




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/iniciojogo" element={<Inicio />} />
        <Route path="/comojogar1" element={<ComoJogar1 />} />
        <Route path="/comojogar2" element={<ComoJogar2 />} />
        <Route path="/" element={<Jogo />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>


  );
}

