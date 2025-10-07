import { useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

import ButtonTop from "../../Components/ButtonTop/ButtonTop.jsx";
import ActionButton from "../../Components/ActionButtons/ActionButton.jsx";
import Container from "../../Components/ContainerBranco/Container.jsx";
import ModalSair from "../../Components/ModalSair/ModalSair.jsx";

import Nuvens from "../../Assets/Images/Nuvens.svg";
import Estrelas_fundo from "../../Assets/Images/Estrelas_fundo.png";
import iconCasa from "../../Assets/Images/iconCasa.png";
import Fada_rindo from "../../Assets/Images/Fada_rindo.png";

import "./Inicio.css";

/**
 * Página inicial do jogo "O Que Você Vê?"
 * Exibe o título do jogo, botões de navegação e modal de confirmação de saída.
 *
 * @returns {JSX.Element} Página inicial do jogo.
 */

function Inicio() {
  // Estado de controle do modal de saída
  const [mostrarModal, setMostrarModal] = useState(false);

  // Função que abre o modal
  // const handleOpenModal = () => setMostrarModal(true);

  // Função que fecha o modal
  const handleCloseModal = () => setMostrarModal(false);

  // Função que confirma a saída do usuário
  const handleConfirmExit = () => {
    setMostrarModal(false);
  };

  return (
    <section className="container">
      {/* Fundo de estrelas */}
      <img src={Estrelas_fundo} alt="estrelas" className="estrelas-bg" />

      {/* Botão superior (home) */}
      <ButtonTop >
        <img src={iconCasa} alt="ícone home" />
      </ButtonTop>

      {/* Conteúdo principal do container */}
      <Container>
        <section className="content">
          <h1 className="title">Jogo</h1>
          <h1 className="subtitle">O Que Você Vê?</h1>

          {/* Botões principais */}
          <section className="buttons-container">
            <ActionButton
              icon={<Play size={28} color="white" />}
              onClick={() => console.log("Jogar clicado")}
            >
              JOGAR
            </ActionButton>

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
      <img src={Nuvens} alt="nuvens" className="nuvens-bg" />

      {/* Modal de confirmação de saída */}
      <ModalSair
        isOpen={mostrarModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmExit}
      />
    </section>
  );
}

export default Inicio;
