import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import estrelas from '../../Assets/Images/estrelas.png';
import Nuvem from '../../Assets/Images/nuvens.svg';
import iconCasa from '../../Assets/Images/iconCasa.png'

import ButtonTop from "../../Components/ButtonTop/ButtonTop";
import Card from '../../Components/Card-Jogo/Card';
import "./Jogo.css";

// Imagens
import Rainha from '../../Assets/Images/rainha.png';
import Gato from '../../Assets/Images/gato.png';
import Coelho from '../../Assets/Images/coelho.png';
import Rosa from '../../Assets/Images/rosa.png';
import Alice from '../../Assets/Images/alice.png';
import Carta from '../../Assets/Images/carta.png';
import Chapeleiro from '../../Assets/Images/chapeleiro.png';
import Lagarta from '../../Assets/Images/lagarta.png';
import Lebre from '../../Assets/Images/lebre.png';
import Cogumelo from '../../Assets/Images/cogumelo.png';
import Rei from '../../Assets/Images/rei.png';
import Chave from '../../Assets/Images/chave.png';
import Relogio from '../../Assets/Images/relogio.png';
import Xicara from '../../Assets/Images/xicara.png';
import Chapeu from '../../Assets/Images/chapeu.png';

import CorretoImg from '../../Assets/Images/certo.png';
import ErradoImg from '../../Assets/Images/errado.png';

const palavras = [
  { palavra: "rainha", imagem: Rainha },
  { palavra: "gato", imagem: Gato },
  { palavra: "coelho", imagem: Coelho },
  { palavra: "rosa", imagem: Rosa },
  { palavra: "alice", imagem: Alice },
  { palavra: "carta", imagem: Carta },
  { palavra: "chapeleiro", imagem: Chapeleiro },
  { palavra: "lagarta", imagem: Lagarta },
  { palavra: "lebre", imagem: Lebre },
  { palavra: "cogumelo", imagem: Cogumelo },
  { palavra: "rei", imagem: Rei },
  { palavra: "chave", imagem: Chave },
  { palavra: "relogio", imagem: Relogio },
  { palavra: "xicara", imagem: Xicara },
  { palavra: "chapeu", imagem: Chapeu },
];

const Jogo = () => {
  const [indice, setIndice] = useState(0);
  const [resposta, setResposta] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [showFeedbackImage, setShowFeedbackImage] = useState(null);
  const [pontos, setPontos] = useState(0);
  const [bloquearInputs, setBloquearInputs] = useState(false);
  const [botaoTexto, setBotaoTexto] = useState("Enviar");

  const navigate = useNavigate();
  const palavraAtual = palavras[indice].palavra;

  useEffect(() => {
    const firstInput = document.getElementById("input-0");
    if (firstInput && !bloquearInputs) firstInput.focus();
  }, [indice, bloquearInputs]);

  // para não dar inputs errados
  const handleInputChange = (index, event) => {
    if (bloquearInputs) return;
    const value = event.target.value;
    if (value.length > 1) return;

    const newResposta = [...resposta];
    newResposta[index] = value;
    setResposta(newResposta);

    // Foco automático
    if (value && index < palavraAtual.length - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = () => {
    // Botão Próximo
    if (botaoTexto === "Próximo") {
      if (indice < palavras.length - 1) {
        setIndice(indice + 1);
        setResposta([]);
        setLetrasCorretas([]);
        setFeedback("");
        setShowFeedbackImage(null);
        setBloquearInputs(false);
        setBotaoTexto("Enviar");
      } else {
        navigate("/resultado", { state: { pontos } });
      }
      return;
    }

    // Verifica se todos os campos foram preenchidos
    if (resposta.length < palavraAtual.length || resposta.some(l => !l)) {
      setFeedback("Complete todos os campos!");
      setShowFeedbackImage("errado");
      return;
    }

    // Normaliza acentos e compara
    const respostaNormalizada = resposta.join('')
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const palavraCorretaNormalizada = palavraAtual
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // Feedback letra a letra
    const letrasFeedback = palavraAtual.split('').map((letra, i) => {
      const letraUser = (resposta[i] || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return letraUser === letra.toLowerCase();
    });
    setLetrasCorretas(letrasFeedback);

    if (respostaNormalizada === palavraCorretaNormalizada) {
      setShowFeedbackImage("correto");
      setBloquearInputs(true);
      setBotaoTexto("Próximo");
      setPontos(prev => prev + 1); // soma ponto só uma vez
    } else {
      setShowFeedbackImage("errado");
      setFeedback("Errado! A resposta correta era: " + palavraAtual);
      setBloquearInputs(true);
      setBotaoTexto("Próximo");
    }
  };

  return (
    <div className="jogoContainer">


      <Link to="/">
        <ButtonTop >
          <img src={iconCasa} alt="ícone home" />
        </ButtonTop>
      </Link>

      <img src={estrelas} alt="Estrelas" className="estrelasBg" />

      <div className="jogoCard">
        <div className="card" style={{ position: "relative" }}>
          <Card image={palavras[indice].imagem} />

          {showFeedbackImage === "correto" && (
            <img src={CorretoImg} alt="Correto" className="feedbackImgOverlay" />
          )}
          {showFeedbackImage === "errado" && (
            <img src={ErradoImg} alt="Errado" className="feedbackImgOverlay" />
          )}
        </div>

        {/* Feedback acima do input */}
        {feedback && (
          <div className="feedbackTop">
            <p>{feedback}</p>
          </div>
        )}

        <div className="letras">
          <p>Digite o nome do personagem:</p>
          <div className="inputContainer">
            {Array.from(palavraAtual).map((_, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                value={resposta[index] || ""}
                onChange={(e) => handleInputChange(index, e)}
                maxLength={1}
                disabled={bloquearInputs}
                className={`inputField ${letrasCorretas.length > 0
                    ? letrasCorretas[index]
                      ? "letraCorreta"
                      : "letraIncorreta"
                    : ""
                  }`}
                placeholder=" "
                autoComplete="off"
              />
            ))}
          </div>
        </div>

        <button onClick={handleSubmit} className="submitButton">{botaoTexto}</button>
      </div>

      <img src={Nuvem} alt="Nuvens" className="nuvensBg" />
    </div>
  );
};

export default Jogo;