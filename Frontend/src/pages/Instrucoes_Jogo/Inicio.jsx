import { useState } from "react"; // 🔹 ADICIONE ISSO
import { Link } from "react-router-dom";
import { Play } from 'lucide-react';
import ButtonTop from '../../Components/InicioJogo/ButtonTop.jsx';
import ActionButton from '../../Components/InicioJogo/ActionButton.jsx';
import Container from '../../Components/InicioJogo/Container.jsx';

import Nuvens from '../../Assets/Images/Nuvens.png';
import Estrelas_fundo from '../../Assets/Images/Estrelas_fundo.png';
import iconCasa from '../../Assets/Images/iconCasa.png';
import Fada_rindo from '../../Assets/Images/Fada_rindo.png';

import './Inicio.css';
import ModalSair from "../../Components/InicioJogo/ModalSair.jsx";

function Inicio() {
  const [mostrarModal, setMostrarModal] = useState(true); // 🔹 CRIA O ESTADO AQUI

  return (
    <section className="container">
      <img src={Estrelas_fundo} alt='estrelas' className='estrelas-bg' />

      <ButtonTop
        children={<img src={iconCasa} alt='icone home' />}
        onClick={() => setMostrarModal(true)} // 🔹 Abre o modal quando clicar
      />

      <Container>
        <section className="content">
          <h1 className="title">Jogo</h1>
          <h1 className="subtitle">O Que Você vê?</h1>

          <section className="buttons-container">
            <ActionButton
              icon={<Play size={28} fill="white" />}
              onClick={() => console.log('Jogar clicked')}>
              JOGAR
            </ActionButton>

            <Link to="/comojogar1">
              <ActionButton
                onClick={() => console.log('Como jogar clicked')}>
                COMO JOGAR ?
              </ActionButton>
            </Link>
          </section>
        </section>
      </Container>

      <img src={Fada_rindo} alt='fada sorrindo' className='fadaSorrindo' />
      <img src={Nuvens} alt='nuvens' className='nuvens-bg' />

      {/* 🔹 Aqui o modal é controlado pelo estado */}
      <ModalSair
        isOpen={mostrarModal}
        onClose={() => setMostrarModal(true)}
        onConfirm={() => alert("Usuário confirmou saída!")}
      />
    </section>
  );
}

export default Inicio;
