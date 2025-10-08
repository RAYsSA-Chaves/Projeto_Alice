import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import estrelas from '../../Assets/Images/estrelas.png';
import Nuvem from '../../Assets/Images/nuvens.svg';

import ButtonTop from "../../Components/ButtonTop/ButtonTop";
import Card from '../../Components/Card-Jogo/Card';
import "./Jogo.css";
import ModalSair from "../../Components/ModalSair/ModalSair";

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
// Ícones
import iconCasa from '../../Assets/Images/iconCasa.png';
import CorretoImg from '../../Assets/Images/certo.png';
import ErradoImg from '../../Assets/Images/errado.png';

// Lista de palavras com a imagem associada para os cards
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
  const [indice, setIndice] = useState(0); // índice atual na lista de palavras
  const [resposta, setResposta] = useState([]); // resposta (ex: ['g', 'a', 't', 'o'])
  const [feedback, setFeedback] = useState(""); // mensagem de feedback
  const [letrasCorretas, setLetrasCorretas] = useState([]); // acertos por letra
  const [showFeedbackImage, setShowFeedbackImage] = useState(null); // controla qual imagem de feedback mostrar (correto ou errado)
  const [pontos, setPontos] = useState(0);
  const [bloquearInputs, setBloquearInputs] = useState(false); // bloqueia inputs após envio
  const [botaoTexto, setBotaoTexto] = useState("Enviar"); // texto do botão
  const [isModalOpen, setIsModalOpen] = useState(false); // controla o modal
  const navigate = useNavigate(); // navegação

  const palavraAtual = palavras[indice].palavra;

  // Sempre foca no primeiro input
  useEffect(() => {
    const firstInput = document.getElementById("input-0");
    if (firstInput && !bloquearInputs) firstInput.focus();
  }, [indice, bloquearInputs]);

  // Função chamada quando o usuário digita nos inputs para guardar o valor
  const handleInputChange = (index, event) => {
    if (bloquearInputs) return;
    const value = event.target.value;
    if (value.length > 1) return;

    // Clona array de resposta e guarda cada letra digitada
    const newResposta = [...resposta];
    newResposta[index] = value;
    setResposta(newResposta);

    // Foco automático no próximo input
    if (value && index < palavraAtual.length - 1) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Função do botão principal (envia ou avança para o próximo card)
  const handleSubmit = () => {
    if (botaoTexto === "Próximo") {
      if (indice < palavras.length - 1) {
        setIndice(indice + 1);
        setResposta([]);
        setLetrasCorretas([]);
        setFeedback("");
        setShowFeedbackImage(null);
        setBloquearInputs(false);
        setBotaoTexto("Enviar");
      } 
      // Se for a última palavra, vai para a tela de resultado
      else {
        navigate("/resultado", { state: { pontos } });
      }
      return;
    }

    // Verifica
    if (resposta.length < palavraAtual.length || resposta.some(l => !l)) {
      setFeedback("Complete todos os campos!");
      setShowFeedbackImage("errado");
      return;
    }

    const respostaNormalizada = resposta.join('')
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const palavraCorretaNormalizada = palavraAtual
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const letrasFeedback = palavraAtual.split('').map((letra, i) => {
      const letraUser = (resposta[i] || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return letraUser === letra.toLowerCase();
    });
    setLetrasCorretas(letrasFeedback);

    if (respostaNormalizada === palavraCorretaNormalizada) {
      setShowFeedbackImage("correto");
      setBloquearInputs(true);
      setBotaoTexto("Próximo");
      setPontos(prev => prev + 1);
    } else {
      setShowFeedbackImage("errado");
      setFeedback("Errado! A resposta correta era: " + palavraAtual);
      setBloquearInputs(true);
      setBotaoTexto("Próximo");
    }
  };

  // --- Funções do Modal ---
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const confirmExit = () => {
    setIsModalOpen(false);
    navigate("/"); // redireciona pra home
  };

  return (
    <div className="jogo-container">
      {/* Botão Home com modal */}
      <ButtonTop onClick={openModal}>
        <img src={iconCasa} alt="icone home" />
      </ButtonTop>

      {/* Modal de confirmação */}
      <ModalSair
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmExit}
      />

      <img src={Nuvem} alt="Nuvens" className="nuvens-bg" />
      <img src={estrelas} alt="Estrelas" className="estrelas-bg" />

      <div className="jogo-card">
        <div className="Card" style={{ position: "relative" }}>
          <Card image={palavras[indice].imagem} />

          {showFeedbackImage === "correto" && (
            <img src={CorretoImg} alt="Correto" className="feedback-img-overlay" />
          )}
          {showFeedbackImage === "errado" && (
            <img src={ErradoImg} alt="Errado" className="feedback-img-overlay" />
          )}
        </div>

        {feedback && (
          <div className="feedback-top">
            <p>{feedback}</p>
          </div>
        )}

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
                disabled={bloquearInputs}
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

        <button onClick={handleSubmit} className="submit-button">
          {botaoTexto}
        </button>
      </div>
    </div>
  );
};

export default Jogo;
