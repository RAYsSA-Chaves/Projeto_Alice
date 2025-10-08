import FadaSorrindo from '../../assets/Images/FadaSorrindo.svg'
import FadaLendo from '../../assets/Images/FadaLendo.svg'
import { BookOpen, Play} from 'phosphor-react';
import './Cards.css'

function Cards() {
    return (
        <section className="cards">
            {/* Card Jogar */}
            <article className="card">
                <img src={FadaSorrindo} alt="fadinha do card jogar" className="fadaJogar" />
                <div className="cardConteudo">
                    <button className="btnCard">
                        <Play size={20} weight='fill'/> JOGAR
                    </button>
                </div>
            </article>

            {/* Card Ler */}
            <article className="card">
                <img src={FadaLendo} alt="fadinha do card ler" className="fadaLer" />
                <div className="cardConteudo">
                    <button className="btnCard">
                        <BookOpen size={20} />
                        Ler
                    </button>
                </div>
            </article>
        </section>
    )
}

export default Cards
