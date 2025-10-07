import { useLocation, useNavigate } from "react-router-dom";
import { RotateCcw, House } from "lucide-react";

import estrelas from "../../Assets/Images/estrelas.png";
import Nuvem from "../../Assets/Images/nuvens.svg";
import fada from "../../Assets/Images/fadapontos.svg";

import "./Resultado.css";

export default function Resultado() {
  const location = useLocation();
  const navigate = useNavigate();
  const pontos = location.state?.pontos || 0;

  return (
    <div className="resultado-container">
      <img src={Nuvem} alt="Nuvens" className="nuvens-bg" />
      <img src={estrelas} alt="Estrelas" className="estrelas-bg" />

      <div className="resultado">
        <h1>Você concluiu o jogo!</h1>
        <p>
          Você acertou <strong>{pontos}</strong> de 15 palavras!
        </p>

        <div className="btns">
          <button onClick={() => navigate("/")}>
            <RotateCcw /> Jogar novamente
          </button>
          <button onClick={() => navigate("/home")}>
            <House /> Página Inicial
          </button>
        </div>

        <img src={fada} alt="Fada" className="fada" />
      </div>

      
    </div>
  );
}
