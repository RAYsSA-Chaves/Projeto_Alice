import './BarraPesquisa.css'
import { PencilLine, Search, ArrowLeft } from 'lucide-react';

export default function BarraPesquisa(){
    return(
        <div className="BarraPesquisa">

            <a href="" className="ArrowButton">
                <ArrowLeft className='ArrowIcon' />
            </a>

            <div className='InputPalavra'>
                <input type="text" placeholder='Procure uma palavra' />
                <button className="SearchButton">
                    <Search className='SearchIcon' />   
                </button>
            </div>

            <div className='InputLetra'>
                <input type="text" placeholder='Procure uma palavra com' /><div className='Numero'>0</div><p>letras</p>
            </div>
            
            <button className="PencilButton">
                <PencilLine className="PencilIcon" />
            </button>
        </div>
    );
};
