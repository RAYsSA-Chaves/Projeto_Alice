import { Link } from "react-router-dom";

import ButtonTop from "../../Components/ButtonTop/ButtonTop.jsx";
import ActionButton from "../../Components/ActionButtons/ActionButton.jsx";
import Container from "../../Components/ContainerBranco/Container.jsx";

import Nuvens from "../../Assets/Images/Nuvens.svg";
import Estrelas_fundo from "../../Assets/Images/Estrelas_fundo.png";
import SetaVoltar from "../../Assets/Images/SetaVoltar.png";
import FadaApontando from "../../Assets/Images/FadaApontando.png";

import "../PlayJogo/Inicio.css";

/** Página "Como Jogar? - Etapa 1" - Instruções iniciais para o jogador aprender como funciona o jogo
*
* @returns {JSX.Element} Página de instruções do jogo
*/

function ComoJogar1() {
  return (
    <section className="container">
      
      {/* Fundo */}
      <img src={Nuvens} alt="nuvens" className="nuvensBg" />
      <img src={Estrelas_fundo} alt="estrelas" className="estrelasBg" />

      {/* Botão de voltar (seta no canto superior esquerdo) */}
      <Link to="/iniciojogo">
        <ButtonTop onClick={() => console.log("Voltar clicado")}>
          <img
            src={SetaVoltar}
            alt="ícone seta voltar"
            className="iconArrow"
          />
        </ButtonTop>
      </Link>

      {/* Conteúdo principal */}
      <Container>
        <section className="content">
          <h1 className="title2">Como Jogar?</h1>

          {/* Texto explicativo */}
          <p className="paragrafo">
            Olá, Pequeno Leitor!
            <br />
            Vamos aprender a escrever as palavras
            que estão na história da Alice no País das Maravilhas?
          </p>

          {/* Botão de navegação para próxima etapa */}
          <section className="buttonsContainer">
            <Link to="/comojogar2">
              <ActionButton
                onClick={() => console.log("Próximo clicado")}
              >
                PRÓXIMO
              </ActionButton>
            </Link>
          </section>
        </section>
      </Container>

      {/* Imagens decorativas */}
      <img
        src={FadaApontando}
        alt="fada apontando"
        className="fadaSorrindo"
      />
      
    </section>
  );
}

export default ComoJogar1;
