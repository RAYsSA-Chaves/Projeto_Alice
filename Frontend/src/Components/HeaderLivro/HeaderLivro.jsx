import './HeaderLivro.css'
import { PencilLine, Search, ArrowLeft } from 'lucide-react';
import { useState } from "react";

export default function HeaderLivro({ 
    busca, setBusca, modoGrifar, setModoGrifar, inputTexto, setInputTexto, inputNum, setInputNum, 
}) {
    // Função grifar
    function ativarModoGrifar() {
        setBusca({ tipo: "", valor: "" });
        setInputTexto("");
        setInputNum("")
        setModoGrifar(!modoGrifar);
    }

    // Função buscar palavra
    function buscarTexto() {
        if (inputTexto.trim() === "") return;

        setBusca({ tipo: "texto", valor: inputTexto.trim() });
        setModoGrifar(false);
    }

    // Busca por número de letras
    function buscarTamanho(e) {
        const valor = e.target.value;
        setInputTexto("");
        setInputNum(valor);
        setBusca({ tipo: "tamanho", valor })
        setModoGrifar(false);
    }

    // Permitir a busca com tecla Enter
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            buscarTexto();
        }
    }

    return (
        <header className="HeaderLivro">
            {/* Botão voltar */}
            <a href="" className="ArrowButton">
                <ArrowLeft/>
            </a>

            {/* Pesquisa palavra */}
            <div className='InputPalavra' id="pesquisaPalavra">
                <input type="text" placeholder='Procure uma palavra' value={inputTexto} onChange={(e) => setInputTexto(e.target.value)} onKeyDown={handleKeyDown}/>
                <button className="SearchButton" onClick={buscarTexto}>
                    <Search/>   
                </button>
            </div>

            {/* Pesquisa número de letras */}
            <div className='InputNum' id="pesquisaNum">
                <p>Procure uma palavra com</p><input type="number" placeholder='0' className='Numero' value={inputNum} onChange={buscarTamanho}/><p>letras</p>
            </div>
            
            {/* Marca texto */}
            <button className={`PencilButton ${modoGrifar ? "ativo" : ""}`} id="bntGrifar" title="Grifar palavra" onClick={ativarModoGrifar}>
                <PencilLine className="PencilIcon" title="Grifar palavra"/>
            </button>
        </header>
    );
};
