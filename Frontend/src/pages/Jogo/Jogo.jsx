import React, { useState, useEffect } from "react";
import estrelas from '../../Assets/Images/estrelas.png';
import Nuvem from '../../Assets/Images/nuvens.png';
import Card from '../../Components/Card-Jogo/Card';
import "./Jogo.css";
 
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
  { palavra: "coelho", imagem: Coelho},
  { palavra: "rosa", imagem: Rosa },
  { palavra: "alice", imagem: Alice },
  { palavra: "carta", imagem: Carta },
  { palavra: "chapeleiro", imagem: Chapeleiro },
  { palavra: "lagarta", imagem: Lagarta },
  { palavra: "lebre", imagem: Lebre },
  { palavra: "cogumelo", imagem: Cogumelo },
  { palavra: "rei", imagem: Rei  },
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
 
  const palavraAtual = palavras[indice].palavra;
 
  useEffect(() => {
    const firstInput = document.getElementById("input-0");
    if (firstInput) firstInput.focus();
  }, [indice]);
 
  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (value.length > 1) return;
 
    const newResposta = [...resposta];
    newResposta[index] = value;
    setResposta(newResposta);
 
    if (value && index < palavraAtual.length - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
 
  const handleSubmit = () => {
    if (resposta.length < palavraAtual.length || resposta.some(l => !l)) {
      setFeedback("Complete todos os campos!");
      setShowFeedbackImage("errado");
      return;
    }
 
    const respostaNormalizada = resposta.join('').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const palavraCorretaNormalizada = palavraAtual.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
 
    const letrasFeedback = palavraAtual.split('').map((letra, i) => {
      return resposta[i]?.toLowerCase() === letra.toLowerCase();
    });
    setLetrasCorretas(letrasFeedback);
 
    if (respostaNormalizada === palavraCorretaNormalizada) {
      setShowFeedbackImage("correto");
      setPontos(prev => prev + 1); // soma ponto
 
      setTimeout(() => {
        if (indice < palavras.length - 1) {
          setIndice(indice + 1);
          setResposta([]);
          setLetrasCorretas([]);
          setFeedback("");
          setShowFeedbackImage(null);
        } else {
          setFeedback(`Total de pontos: ${pontos + 1}`); // vai irecionar pra outra página
          setShowFeedbackImage("correto");
        }
      }, 1000);
    } else {
      setShowFeedbackImage("errado");
    }
  };
 
 
  return (
    <div className="jogo-container">
 
      <img src={estrelas} alt="Estrelas" className="estrelas-bg" />
 
      <div className="jogo-card">
 
      <div className="Card" style={{ position: "relative" }}>
        <Card image={palavras[indice].imagem} />
 
        {showFeedbackImage === "correto" && (
          <img
            src={CorretoImg}
            alt="Correto"
            className="feedback-img-overlay"
          />
        )}
        {showFeedbackImage === "errado" && (
          <img
            src={ErradoImg}
            alt="Errado"
            className="feedback-img-overlay"
          />
        )}
      </div>
 
        <div className="Letras">
          <p>Digite o nome do personagem:</p>
          <div className="input-container">
            {Array.from(palavraAtual).map((_, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                value={resposta[index] || ""}
                onChange={(e) => handleInputChange(index, e)}
                maxLength={1}
                className={`input-field ${
                  letrasCorretas.length > 0
                    ? letrasCorretas[index]
                      ? "letra-correta"
                      : "letra-incorreta"
                    : ""
                }`}
                placeholder=" "
                autoComplete="off"
              />
            ))}
          </div>
        </div>
 
        <button onClick={handleSubmit} className="submit-button">Enviar</button>
 
        <div className="feedback">
          {feedback && <p>{feedback}</p>}
        </div>
      </div>
 
      <img src={Nuvem} alt="Nuvens" className="nuvens-bg" />
    </div>
  );
};
 
export default Jogo;