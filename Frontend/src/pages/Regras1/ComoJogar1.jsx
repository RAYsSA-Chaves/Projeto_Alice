// Importações principais de bibliotecas e componentes
import { Link } from "react-router-dom";

import ButtonTop from '../../Components/ButtonTop/ButtonTop.jsx';
import ActionButton from '../../Components/ActionButtons/ActionButton.jsx';
import Container from '../../Components/ContainerBranco/Container.jsx';

// Importação de imagens utilizadas na interface
import Nuvens from "../../Assets/Images/Nuvens.svg";
import Estrelas_fundo from "../../Assets/Images/Estrelas_fundo.png";
import SetaVoltar from '../../Assets/Images/SetaVoltar.png';
import FadaApontando from '../../Assets/Images/FadaApontando.png';

// Importação de estilos específicos do componente
import '../Regras1/ComoJogar1.css';

function ComoJogar1() {
    return (
        // Seção principal da tela "Como Jogar 1"
        <section className="container">

            {/* Fundo com estrelas */}
            <img 
                src={Estrelas_fundo} 
                alt="estrelas" 
                className="estrelasBg" 
            />

            {/* Botão para voltar à tela inicial */}
            <Link to="/iniciojogo">
                <ButtonTop
                    // Ícone de seta para o botão de voltar
                    children={
                        <img 
                            src={SetaVoltar} 
                            alt="icone seta voltar" 
                            className="iconArrow" 
                        />
                    }
                    onClick={() => console.log('Botão voltar clicado')}
                />
            </Link>

            {/* Container branco central com conteúdo principal */}
            <Container>
                <section className="content">
                    {/* Título da seção */}
                    <h1 className="title2">Como Jogar?</h1>

                    {/* Texto introdutório explicando o jogo */}
                    <p className="paragrafo">
                        Olá, Pequeno Leitor!<br/>
                        Vamos aprender a escrever as palavras que estão na 
                        história da Alice no País das Maravilhas?
                    </p>
                
                    {/* Botões de navegação (próxima etapa) */}
                    <section className="buttonsContainer">
                        <Link to="/comojogar2">
                            <ActionButton
                                onClick={() => console.log('Botão próximo clicado')}
                            >
                                PRÓXIMO
                            </ActionButton>
                        </Link>
                    </section>
                </section>
            </Container>

            {/* Imagem da fada decorativa apontando para o conteúdo */}
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

// Exporta o componente para ser usado em outras partes da aplicação
export default ComoJogar1;
