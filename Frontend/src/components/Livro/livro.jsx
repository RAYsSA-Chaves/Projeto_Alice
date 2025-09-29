import { React, useState } from "react";
import "./livro.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

function Livro() {
    // Estado da folha virada
    const [ativo, setAtivo] = useState("");

    // Variáveis de controle
    const [paginaAtual, setPaginaAtual] = useState(1);
    let paginasQtd = 2;
    let maxPage = paginasQtd + 1;

    // Lógica das animações
    function openBook() {
        document.getElementById("book").style.transform = "translateX(50%)";
        document.getElementById("btnVoltar").style.transform = "translateX(-180px)";
        document.getElementById("btnProxima").style.transform = "translateX(180px)";
    };
    function closeBook(isAtBeginning) {
        if (isAtBeginning) {
            document.getElementById("book").style.transform = "translateX(0%)";
        } else {
            document.getElementById("book").style.transform = "translateX(100%)";
        }
        
        document.getElementById("btnVoltar").style.transform = "translateX(0px)";
        document.getElementById("btnProxima").style.transform = "translateX(0px)";
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
            setPaginaAtual(paginaAtual + 1);
        }
    };
    function backPage() {
        if (paginaAtual > 1) {
            switch (paginaAtual) {
                case 2:
                    closeBook(true);
                    setAtivo(""); 
                    break;
                case 3:
                    openBook();
                    setAtivo("um"); 
                    break;
                default:
                    throw new Error("Estado desconhecido");
            }
            setPaginaAtual(paginaAtual - 1);
        }
    };
    return (
        <>
            {/* Botão voltar página */}
            <button className="bookBtn" id="btnVoltar" onClick={backPage}><ChevronLeft size="50"/></button>

            {/* Livro */}
            <div id="book" className="book">
                {/* Folha 1 */}
                <div id="f1" className={ativo === "um" ? "folha virada" : "folha"} style={{zIndex: ativo === "um" ?  1 : 2}}>
                    {/* Front */}
                    <div className="front">
                        <div className="frontContent">
                            <h1>A</h1>
                        </div>
                    </div>
                    {/* Back */}
                    <div className="back">
                        <div className="backContent">
                            <h1>B</h1>
                        </div>
                    </div>
                </div>

                {/* Folha 2 */}
                <div id="f2" className={ativo === "dois" ? "folha virada" : "folha"} style={{zIndex: ativo === "dois" ? 2 : 1}}>
                    {/* Front */}
                    <div className="front">
                        <div className="frontContent">
                            <h1>C</h1>
                        </div>
                    </div>
                    {/* Back */}
                    <div className="back">
                        <div className="backContent">
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