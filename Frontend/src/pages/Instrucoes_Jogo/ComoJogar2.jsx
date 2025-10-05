import { Play } from 'lucide-react';
import { Link } from "react-router-dom";

import ButtonTop from '../../Components/InicioJogo/ButtonTop.jsx';
import ActionButton from '../../Components/InicioJogo/ActionButton.jsx';
import Container from '../../Components/InicioJogo/Container.jsx';

import Nuvens from '../../Assets/Images/Nuvens.png'
import Estrelas_fundo from '../../Assets/Images/Estrelas_fundo.png'
import SetaVoltar from '../../Assets/Images/SetaVoltar.png'
import FadaApontando from '../../Assets/Images/FadaApontando.png'

import './Inicio.css';

function ComoJogar1() {
    return (
        <section className="container">
            <img src={Estrelas_fundo} alt='estrelas' className='estrelas-bg' />

            <Link to="/comojogar1">
                <ButtonTop
                    children={<img src={SetaVoltar} alt='icone seta voltar' className='iconArrow' />}
                    onClick={() => console.log('Home clicked')}
                />
            </Link>


            <Container>
                <div className="content">
                    <h1 className="title">Como Jogar?</h1>
                    <p className="paragrafo2">Escreva quem são os personagens nas cartas
                        e veja quantos acertos você consegue fazer!
                    </p>


                    <div className="buttons-container">

                        <ActionButton
                            icon={<Play size={28} fill="white" />}
                            onClick={() => console.log('Jogar clicked')}
                        >
                            JOGAR
                        </ActionButton>
                    </div>
                </div>
            </Container>

            <img src={FadaApontando} alt='fada sorrindo' className='fadaSorrindo' />


            <img src={Nuvens} alt='nuvens' className='nuvens-bg' />

        </section>
    );
}

export default ComoJogar1;
