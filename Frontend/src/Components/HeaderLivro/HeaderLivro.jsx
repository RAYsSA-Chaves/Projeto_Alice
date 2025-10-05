import './HeaderLivro.css'
import { PencilLine, Search, ArrowLeft } from 'lucide-react';

export default function HeaderLivro({ busca, setBusca }) {
    return (
        <header className="HeaderLivro">
            {/* Botão voltar */}
            <a href="" className="ArrowButton">
                <ArrowLeft/>
            </a>

            {/* Pesquisa palavra */}
            <div className='InputPalavra'>
                <input type="text" placeholder='Procure uma palavra' value={busca} onChange={(e) => setBusca(e.target.value)}/>
                <button className="SearchButton">
                    <Search/>   
                </button>
            </div>

            {/* Pesquisa número de letras */}
            <div className='InputNum'>
                <p>Procure uma palavra com</p><input type="text" placeholder='0' className='Numero'/><p>letras</p>
            </div>
            
            {/* Marca texto */}
            <button className="PencilButton" title="Grifar palavra">
                <PencilLine className="PencilIcon" title="Grifar palavra"/>
            </button>
        </header>
    );
};
