import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./livro.css";

export default function Livro() {
  const [paginas, setPaginas] = useState([]);

  // Carregar o json com as páginas
  useEffect(() => {
    fetch("/data/paginas.json").then((res) => 
      res.json()).then((data) => 
        setPaginas(data));
    }, []);

    return (
      // Conteúdo principal (livro)
      <main className="bookContainer">
        <HTMLFlipBook 
          width={550} 
          height={700} 
          showCover={true} 
          className="flipbookk"
        >
          {/* Capa */}
          <article className="pagina capa"> 
            <figure>
              <img src="/assets/capa-alice.png" alt="Capa do livro"/>
            </figure>
          </article>

          {/* Páginas */}
          {paginas.map((pagina) => (
            <article
              key={pagina.number}
              className= {`pagina $ {pagina.number === paginas.length ? "contracapa" : ""}`}
              style={{ width: pagina.width, height: pagina.height }}
            >
              {/* Imagens da página */}
              <section className="imagens">
                {pagina.images.map((img, index) => (
                  <img 
                    key={index} 
                    src={`/assets/imagens_pdf/${img.src}`} 
                    alt="Ilustração" 
                    className="paginaImagem"
                    style={{ left: img.x, top: img.y, width: img.w, height:img.h, }}/>
                ))}
              </section>

              {/* Palavra da página */}
              <section className="palavras">
                {pagina.words.map((p, idx) => (
                  <span
                    key={idx}
                    className="palavra"
                    style={{ left: p.x, top: p.y, fontSize: p.tamanho, }}
                  >
                    {p.texto}
                  </span>
                ))}
              </section>
            </article>
          ))}
        </HTMLFlipBook>
      </main>
    );
}
        // <button onClick={() => flipBookRef.current.pageFlip().flipPrev()}>
        //   ◀ Anterior
        // </button>
        // <button onClick={() => flipBookRef.current.pageFlip().flipNext()}>
        //   Próxima ▶
        // </button>
