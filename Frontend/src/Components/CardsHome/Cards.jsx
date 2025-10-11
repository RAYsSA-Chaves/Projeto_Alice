import FadaSorrindo from '../../assets/Images/FadaSorrindo.svg'
import FadaLendo from '../../assets/Images/FadaLendo.svg'
import { BookOpen, Play } from 'phosphor-react';
import './Cards.css'
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <section className="cards">
            {/* Card Jogar */}
            <article className="card">
                <img src={FadaSorrindo} alt="fadinha do card jogar" className="fadaJogar" />
                <div className="cardConteudo">
                    <Link to='/iniciojogo'>
                        <button className="btnCard">
                            <Play size={20} weight='fill' /> JOGAR
                        </button>
                    </Link>
                </div>
            </article>

            {/* Card Ler */}
            <article className="card">
                <img src={FadaLendo} alt="fadinha do card ler" className="fadaLer" />
                <div className="cardConteudo">
                    <Link to="/leitura">
                        <button className="btnCard">
                            <BookOpen size={20} />
                            Ler
                        </button>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default Cards;
