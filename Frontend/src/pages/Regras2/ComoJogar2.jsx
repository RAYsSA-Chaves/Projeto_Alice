import { Play } from "lucide-react";
import { Link } from "react-router-dom";

import ButtonTop from "../../Components/ButtonTop/ButtonTop.jsx";
import ActionButton from "../../Components/ActionButtons/ActionButton.jsx";
import Container from "../../Components/ContainerBranco/Container.jsx";

import Nuvens from "../../Assets/Images/Nuvens.svg";
import Estrelas_fundo from "../../Assets/Images/Estrelas_fundo.png";
import SetaVoltar from "../../Assets/Images/SetaVoltar.png";
import FadaApontando from "../../Assets/Images/FadaApontando.png";

import "./ComoJogar2.css";

/**
 * Página "Como Jogar? - Etapa 2"
 * Mostra a segunda parte das instruções antes de iniciar o jogo.
 *
 * @returns {JSX.Element} Página de instruções com botão "Jogar".
 */

function ComoJogar2() {
  return (
    <section className="container">
      {/* Fundo de estrelas */}
      <img src={Estrelas_fundo} alt="estrelas" className="estrelasBg" />

      {/* Botão de voltar (seta no canto superior esquerdo) */}
      <Link to="/comojogar1">
        <ButtonTop onClick={() => console.log("Voltar clicado")}>
          <img
            src={SetaVoltar}
            alt="ícone seta voltar"
            className="iconArrow"
          />
        </ButtonTop>
      </Link>

      {/* Conteúdo principal do container branco */}
      <Container>
        <div className="content">
          <h1 className="title2">Como Jogar?</h1>

          {/* Texto explicativo */}
          <p className="paragrafo">
            Escreva quem são os personagens nas cartas
            e veja quantos acertos você consegue fazer!
          </p>

          {/* Botão principal "Jogar" */}
          <div className="buttonsContainer">
            <Link to="/jogo">
              <ActionButton
                icon={<Play size={28} color="white" />}
                onClick={() => console.log("Jogar clicado")}
              >
                JOGAR
              </ActionButton>
            </Link>

          </div>
        </div>
      </Container>

      {/* Imagens decorativas */}
      <img
        src={FadaApontando}
        alt="fada apontando"
        className="fadaApontando"
      />

      {/* Imagem de nuvens como elemento de fundo */}
      <img
        src={Nuvens}
        alt="nuvens"
        className="nuvensBg"
      />
    </section>
  );
}

export default ComoJogar2;