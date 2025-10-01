import './Home.css'
import Fada from '../../assets/imagens/Fada.svg'
import EstrelaRosa from '../../assets/imagens/EstrelaRosa.svg'
import EstrelaBranca from '../../assets/imagens/EstrelaBranca.svg'
import NuvemAnimacao from '../../assets/imagens/NuvemAnimacao.svg'
import Nuvem from '../../assets/imagens/Nuvem.svg'
import BolinhaBranca from '../../assets/imagens/BolinhaBranca.svg'

function Home() {
    return (
        <>
            <main>
                {/* Seção onde ficará a fada e as animações principais */}
                <section className='paginaPrincipal'>
                    <hgroup className='titulos'>
                        <h1>Bem-vindo,</h1>
                        <h1>Pequeno leitor</h1>
                    </hgroup>
                    {/* <button className='scroll'>
                        ↓
                    </button> */}
                    <figure className='fada'>
                        <img src={Fada} alt='imagem da mascote da fada' />
                    </figure>
                    
                    {/* imagens de decoração */}
                    <img src={EstrelaRosa} alt='estrela rosa' className='estrela1' />
                    <img src={EstrelaBranca} alt='estrela branca' className='estrela2' />
                    <img src={EstrelaBranca} alt='estrela branca' className='estrela3' />
                    <img src={EstrelaRosa} alt='estrela rosa' className='estrela4' />
                    <img src={EstrelaBranca} alt='estrela branca' className='estrela5' />
                    <img src={EstrelaRosa} alt='estrela rosa' className='estrela6' />
                    <img src={BolinhaBranca} alt='bolinha branca de decoração' className='bolinha1' />
                    <img src={NuvemAnimacao} alt='nuvem branca animada' className='nuvem1' />
                    <img src={NuvemAnimacao} alt='nuvem branca animada' className='nuvem2' />

                    {/* Seção dos cards */}
                        <section className='secaoCards'>
                        <img src={Nuvem} alt='nuvem branca' className='nuvem3' />
                        <img src={Nuvem} alt='nuvem branca' className='nuvem4' />
                        <img src={Nuvem} alt='nuvem branca' className='nuvem5' />
                        </section>
                </section>
            </main>
        </>
    )
}

export default Home;