
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RotateCcw, House } from "lucide-react";

import ActionButton from "../../Components/ActionButtons/ActionButton.jsx";
import Container from "../../Components/ContainerBranco/Container.jsx";

import pontuacao from '../../Assets/Images/pontuacao.png'
import Nuvens from "../../Assets/Images/Nuvens.svg";
import Estrelas_fundo from "../../Assets/Images/Estrelas_fundo.png";
import Fada_rindo from "../../Assets/Images/Fada_rindo.png";

import "./Resultado.css";

/** Página inicial do jogo
 *
 * @returns {JSX.Element} Página
 */



function Resultado() {

  const location = useLocation();
  const pontos = location.state?.pontos || 0;

  return (
    <section className="container">

      {/* Fundo de estrelas */}
      <img src={Estrelas_fundo} alt="estrelas" className="estrelasBg" />


      {/* Conteúdo principal do container */}
      <Container>
        <section className="content">

          <img src={pontuacao} alt="estrelas" className="pontuacao" />


          <h1 className="title">Você concluiu o jogo! </h1>
          <h1 className="subtitle">Você acertou <strong>{pontos}</strong> de 15 palavras!</h1>

          {/* Botões principais */}
          <section className="buttonsContainer">
            <Link to="/iniciojogo">
              <ActionButton
                icon={<RotateCcw size={28} color="white" />}
                onClick={() => console.log("Jogar clicado")}
              >
                JOGAR NOVAMENTE
              </ActionButton>
            </Link>


            <Link to="/">
              <ActionButton
                icon={<House size={28} color="white" />}
                onClick={() => console.log("Como jogar clicado")}>
                PÁGINA INICIAL
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

export default Resultado;


