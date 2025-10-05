import './Home.css'
import FadaPrincipal from '../../assets/Images/FadaPrincipal.svg'
import PerfilFada from '../../assets/Images/PerfilFada.svg'
import PerfilFada2 from '../../assets/Images/PerfilFada2.svg'
import PerfilFada3 from '../../assets/Images/PerfilFada3.svg'
import EstrelaRosa from '../../assets/Images/EstrelaRosa.svg'
import EstrelaBranca from '../../assets/Images/EstrelaBranca.svg'
import NuvemAnimacao from '../../assets/Images/NuvemAnimacao.svg'
import BolinhaBranca from '../../assets/Images/BolinhaBranca.svg'
import DecoracaoTexto from '../../assets/Images/DecoracaoTexto.svg'
import DecoracaoTexto2 from '../../assets/Images/DecoracaoTexto2.svg'
import DecoracaoTexto3 from '../../assets/Images/DecoracaoTexto3.svg'
import Nuvem from '../../assets/Images/Nuvem.svg'
import { ArrowDown } from 'phosphor-react'
import Cards from '../../Components/CardsHome/Cards'


function Home() {
    return (
        <>
            {/* Finalizar e arrumar a pagina Home | adicionar componentes */}
            <main>
                <section className='paginaPrincipal'>
                    <div className='titulos'>
                        <h1>Bem-vindo,
                            Pequeno leitor
                        </h1>
                    </div>

                    <figure className='fada'>
                        <img src={FadaPrincipal} alt='imagem da mascote da fada' />
                    </figure>

                    {/* imagens de decoração */}
                    <img src={EstrelaRosa} alt='estrela rosa' className='estrela1' />
                    <img src={EstrelaBranca} alt='estrela branca' className='estrela2' />
                    <img src={EstrelaBranca} alt='estrela branca' className='estrela3' />
                    <img src={EstrelaRosa} alt='estrela rosa' className='estrela4' />
                    <img src={EstrelaBranca} alt='estrela branca' className='estrela5' />
                    <img src={EstrelaRosa} alt='estrela rosa' className='estrela6' />
                    <img src={BolinhaBranca} alt='bolinha branca de decoração' className='bolinha1' />
                    <img src={BolinhaBranca} alt='bolinha branca de decoração' className='bolinha2' />
                    <img src={NuvemAnimacao} alt='nuvem branca animada' className='nuvem1' />
                    <img src={NuvemAnimacao} alt='nuvem branca animada' className='nuvem2' />

                    
                    <button 
                    className='scroll'
                    onClick={() => document.getElementById('cards').scrollIntoView({ behavior: 'smooth'})}
                    >
                        <ArrowDown size={30} />
                    </button>

                </section>

                <section className='secaoCards' id='cards'>
                      <div className='nuvens'>
                        <img src={Nuvem} alt='nuvem branca' id='nuvemSecao1' />
                        <img src={Nuvem} alt='nuvem branca' id='nuvemSecao2' />
                    </div> 

                    <Cards />

                     <div className='nuvens'>
                        <img src={Nuvem} alt='nuvem branca' id='nuvemSecao3' />
                        <img src={Nuvem} alt='nuvem branca' id='nuvemSecao4' />
                        <img src={Nuvem} alt='nuvem branca' id='nuvemSecao5' />
                        <img src={Nuvem} alt='nuvem branca' id='nuvemSecao6' />
                    </div> 
                </section>

                <section className='paginaFada'>
                    <img src={PerfilFada} alt='perfil da fada' id='fadaPerfil' />
                    <img src={DecoracaoTexto} alt='decoração da caixa de texto' id='decoracaoTexto' />

                    <div class='caixaTexto'>
                        <h2>Olá,</h2>
                        <h2>eu sou a Bina!</h2>
                        <p>Eu sou uma fada e sua melhor amiga!</p>
                            Vou te acompanhar e auxiliar nessa
                            jornada de leitura e muito
                            aprendizado!
                    </div>

                <img src={PerfilFada2} alt='perfil da fada' id='fadaPerfil2' />
                <img src={DecoracaoTexto2} alt='decoração da segunda caixa de texto' id='decoracaoTexto2' />
                    <div class='caixaTexto'>
                        <h2>O que você pode fazer?</h2>
                        <p>Nesse site, você pode tanto jogar
                            quanto aproveitar um tempinho
                            jogando com os cards acima
                        </p>
                    </div>

                <img src={PerfilFada3} alt='perfil da fada' id='fadaPerfil3' />
                <img src={DecoracaoTexto3} alt='decoração da terceira caixa de texto' id='decoracaoTexto'/>
                    <div class='caixaTexto'>
                        <h2>Aproveite essa experiência</h2>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home