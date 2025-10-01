import React, { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { extrairPDF } from "../../data/extrairPdf"; // importa a função
import "./livro.css";

// Caminho do PDF e capa personalizada
const PDF_FILE = "/arquivo/Alice-no-Pais-das-Maravilhas.pdf";
const CAPA_IMG = "/assets/capa-alice2.png";

function Livro() {
  const [paginas, setPaginas] = useState([]);
  const flipBookRef = useRef();

  // Carrega PDF ao montar o componente
  useEffect(function () {
    async function carregar() {
      const paginasExtraidas = await extrairPDF(PDF_FILE);

      // Remove a primeira página (capa do PDF)
      paginasExtraidas.shift();

      setPaginas(paginasExtraidas);
    }

    carregar();
  }, []);

  // Clique em palavra
  function handleWordClick(word) {
    alert("Você clicou na palavra: " + word);
  }

  return (
    <div className="container-livro">
      {/* Botões */}
      <div className="botoes">
        <button onClick={() => flipBookRef.current.pageFlip().flipPrev()}>
          ◀ Anterior
        </button>
        <button onClick={() => flipBookRef.current.pageFlip().flipNext()}>
          Próxima ▶
        </button>
      </div>

      {/* Livro */}
      <HTMLFlipBook width={345} height={500} ref={flipBookRef} className="livro">
        {/* Capa personalizada */}
        <div className="pagina">
          <img src={CAPA_IMG} alt="Capa" className="pagina-fundo" />
        </div>

        {/* Demais páginas */}
        {paginas.map(function (pagina, index) {
          // escala proporcional para caber no flipbook
          const escalaX = 400 / pagina.width;
          const escalaY = 580 / pagina.height;

          return (
            <div
              key={index}
              className="pagina"
            >
              {/* Fundo */}
              <img
                src={pagina.backgroundImage}
                alt={"Página " + (index + 2)}
                className="pagina-fundo"
              />

              {/* Palavras clicáveis */}
              {pagina.palavras.map(function (palavra, i) {
                return (
                  <span
                    key={i}
                    className={`palavra`}
                    style={{
                      top: palavra.y * escalaY + "px",
                      left: palavra.x * escalaX + "px",
                      fontSize: palavra.fontSize * escalaX + "px",
                    }}
                    onClick={() => handleWordClick(palavra.texto)}
                  >
                    {palavra.texto}
                  </span>
                );
              })}
            </div>
          );
        })}
      </HTMLFlipBook>
    </div>
  );
}

export default Livro;
