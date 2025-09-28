import { React, useState } from "react";
import "./livro.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Classes customizadas
const [ativo, setAtivo] = useState("");

// Lógica do efeito
let paginaAtual = 1;
let paginasQtd = 2;
let maxPage = paginasQtd + 1;

function openBook() {

};

function closeBook() {

};

function nextPage() {
    if(paginaAtual < maxPage) {
        switch(paginaAtual) {
            case 1:
                openBook();
                setAtivo("um");
                break;
            case 2:
                setAtivo("dois");
                closeBook();
                break;
            default:
                throw new Error("Estado desconhecido");
        }
        paginaAtual++;
    }
};

function backPage() {

};

function Livro() {
    return (
        <>
            {/* Botão voltar página */}
            <button className="bookBtn" id="btnVoltar" onClick={backPage()}><ChevronLeft size="50"/></button>

            {/* Livro */}
            <div id="book" className="book">
                {/* Folha 1 */}
                <div id="f1" className={ativo === "um" ? "folha virada" : "folha"}>
                    {/* Front */}
                    <div className="front">
                        <div id="f1" className="frontContent">
                            <h1>A</h1>
                        </div>
                    </div>
                    {/* Back */}
                    <div className="back">
                        <div id="b1" className="backContent">
                            <h1>B</h1>
                        </div>
                    </div>
                </div>

                {/* Folha 2 */}
                <div id="f2" className={ativo === "dois" ? "folha virada" : "folha"}>
                    {/* Front */}
                    <div className="front">
                        <div id="f2" className="frontContent">
                            <h1>C</h1>
                        </div>
                    </div>
                    {/* Back */}
                    <div className="back">
                        <div id="b2" className="backContent">
                            <h1>D</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botão próxima página */}
            <button className="bookBtn" id="btnProxima" oncLick={nextPage()}><ChevronRight size="50"/></button>
        </>
    )
}

export default Livro;