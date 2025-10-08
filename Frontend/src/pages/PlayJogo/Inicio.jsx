import { Link } from "react-router-dom";
import { Play } from "lucide-react";

import ButtonTop from "../../Components/ButtonTop/ButtonTop.jsx";
import ActionButton from "../../Components/ActionButtons/ActionButton.jsx";
import Container from "../../Components/ContainerBranco/Container.jsx";

import Nuvens from "../../Assets/Images/Nuvens.svg";
import Estrelas_fundo from "../../Assets/Images/Estrelas_fundo.png";
import iconCasa from "../../Assets/Images/iconCasa.png";
import Fada_rindo from "../../Assets/Images/Fada_rindo.png";

import "./Inicio.css";

/** Página inicial do jogo
 *
 * @returns {JSX.Element} Página
 */

function Inicio() {
  return (
    <section className="container">
      {/* Fundo de estrelas */}
      <img src={Estrelas_fundo} alt="estrelas" className="estrelasBg" />

      {/* Botão superior (home) */}
      <Link to="/">
        <ButtonTop >
          <img src={iconCasa} alt="ícone home" />
        </ButtonTop>
      </Link>


      {/* Conteúdo principal do container */}
      <Container>
        <section className="content">
          <h1 className="title">Jogo</h1>
          <h1 className="subtitle">O Que Você Vê?</h1>

          {/* Botões principais */}
          <section className="buttonsContainer">
            <Link to="/jogo">
              <ActionButton
                icon={<Play size={28} color="white" />}
                onClick={() => console.log("Jogar clicado")}
              >
                JOGAR
              </ActionButton>
            </Link>


            <Link to="/comojogar1">
              <ActionButton onClick={() => console.log("Como jogar clicado")}>
                COMO JOGAR ?
              </ActionButton>
            </Link>
          </section>
        </section>
      </Container>

      {/* Imagens decorativas */}
      <img src={Fada_rindo} alt="fada sorrindo" className="fadaSorrindo" />
      <img src={Nuvens} alt="nuvens" className="nuvensBg" />
    </section>
  );
}

export default Inicio;
