import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jogo from '../src/pages/Jogo/Jogo';
import Resultado from '../src/pages/Resultado/Resultado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Jogo />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  )
}

export default App;