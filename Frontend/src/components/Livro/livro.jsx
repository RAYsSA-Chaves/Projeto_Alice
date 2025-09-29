import { React, useState } from "react";
import "./livro.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

function Livro() {
    // Estado da folha virada
    const [ativo, setAtivo] = useState("");

    // Variáveis de controle
    let paginaAtual = 1;
    let paginasQtd = 2;
    let maxPage = paginasQtd + 1;

    // Lógica das animações
    function openBook() {
        book.style.transform = "translateX(50%)";
        btnVoltar.style.transform = "translateX(-180px)";
        btnProxima.style.transform = "translateX(180px)";
    };
    function closeBook(isAtBeginning) {
        if (isAtBeginning) {
            book.style.transform = "translateX(0%)";
        } else {
            book.style.transform = "translateX(100%)";
        }
        
        btnVoltar.style.transform = "translateX(0px)";
        btnProxima.style.transform = "translateX(0px)";
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
        };
    };
    function backPage() {
        if (paginaAtual > 1) {
            switch (paginaAtual) {
                case 2:
                    closeBook();
                    setAtivo(""); 
                    break;
                default:
                    throw new Error("Estado desconhecido");
            }
            paginaAtual--;
        }
    };
    return (
        <>
            {/* Botão voltar página */}
            <button className="bookBtn" id="btnVoltar" onClick={backPage}><ChevronLeft size="50"/></button>

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
            <button className="bookBtn" id="btnProxima" onClick={nextPage}><ChevronRight size="50"/></button>
        </>
    )
}

export default Livro;