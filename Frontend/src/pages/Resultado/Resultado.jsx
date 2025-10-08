import { useLocation, useNavigate } from "react-router-dom";
import { RotateCcw, House } from "lucide-react";

import estrelas from "../../Assets/Images/estrelas.png";
import Nuvem from "../../Assets/Images/nuvens.svg";
import fada from "../../Assets/Images/fadapontos.svg";

import "./Resultado.css";

export default function Resultado() {
  const location = useLocation(); // pega state enviado via navigate
  const navigate = useNavigate(); // navegação
  const pontos = location.state?.pontos || 0; // pega pontos do state ou 0, caso não exista

  return (
    <div className="resultadoContainer">
      {/* Decorações */}
      <img src={Nuvem} alt="Nuvens" className="nuvensBg" />
      <img src={estrelas} alt="Estrelas" className="estrelasBg" />

      {/* Qtd de pontos */}
      <div className="resultado">
        <h1>Você concluiu o jogo!</h1>
        <p>
          Você acertou <strong>{pontos}</strong> de 15 palavras!
        </p>

        <div className="btns">
          {/* Botão para reiniciar o jogo (volta para a página inicial) */}
          <button onClick={() => navigate("/")}>
            <RotateCcw /> JOGAR NOVAMENTE
          </button>
          {/* Botão para voltar para a home) */}
          <button onClick={() => navigate("/")}>
            <House /> PÁGINA INICIAL
          </button>
        </div>

        <img src={fada} alt="Fada" className="fada" />
      </div>
    </div>
  );
}
