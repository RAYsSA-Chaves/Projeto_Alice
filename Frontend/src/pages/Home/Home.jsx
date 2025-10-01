import './Home.css'
import Fada from "../../assets/imagens/Fada.svg";
import EstrelaRosa from "../../assets/imagens/EstrelaRosa.svg"
function Home() {
    return (
        <>
            <main>
                <section className='paginaPrincipal'>
                    <hgroup className='titulos'>
                        <h1>Bem-vindo,</h1>
                        <h1>Pequeno leitor</h1>
                    </hgroup>
                    <button className='scroll'>
                        ↓
                    </button>
                    <figure className='fada'>
                        <img src={Fada} alt='imagem da mascote da fada' />
                    </figure>

                    <img src={EstrelaRosa} alt='estrela rosa' className='estrela estrela1' />
                </section>
            </main>
        </>
    )
}

export default Home;