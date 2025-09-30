import React, { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { extrairPDF } from "./extrairPdf"; // importa a função
import "./livro.css";

// Caminho do PDF e capa personalizada
const PDF_FILE = "/livro.pdf";
const CAPA_IMG = "/capa.jpg";

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
      <HTMLFlipBook width={500} height={700} ref={flipBookRef} className="livro">
        {/* Capa personalizada */}
        <div className="pagina">
          <img src={CAPA_IMG} alt="Capa" className="pagina-fundo" />
        </div>

        {/* Demais páginas */}
        {paginas.map(function (pagina, index) {
          return (
            <div
              key={index}
              className="pagina"
              style={{ width: pagina.width, height: pagina.height }}
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
                    className="palavra"
                    style={{
                      top: palavra.y + "px",
                      left: palavra.x + "px",
                      fontSize: palavra.fontSize + "px",
                    }}
                    onClick={function () {
                      handleWordClick(palavra.texto);
                    }}
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
