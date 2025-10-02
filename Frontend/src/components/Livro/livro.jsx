import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./livro.css";

export default function Livro() {
  const [paginas, setPaginas] = useState([]);
  const tamanhoTitulo = 32; // altura considerada "título"
  const capaPath = "/assets/capa-alice.png";

  // Carregar o json com as páginas
  useEffect(() => {
    fetch("/data/paginas.json")
      .then((res) => res.json())
      .then((data) => setPaginas(data.pages))
      .catch((err) => HTMLFormControlsCollection.log("Erro ao carregar JSON: ", err));
    }, []);

  // Renderizar palavras de uma linha
  const renderWords = (linha, capitular) => {
    return linha.map((palavra, idx) => {
      const isLarge = palavra.h >= tamanhoTitulo;
      let classe = "palavraNormal";

      if (isLarge) classe = "titulo";
      else if (capitular && idx === 0) classe = "capitular"; // primeira palavra após título

      return (
        <span key={idx} className={classe}>
          {palavra.text}{" "}
        </span>
      );
    });
  };

  // Renderizar um bloco como <p> com várias linhas
  const renderBloco = (bloco, capitularProximo) => {
    return (
      <p className="paragrafo" key={Math.random()}>
        {bloco.map((linha, idx) => (
          <span className="linha" key={idx}>
            {renderWords(linha, capitularProximo)}
          </span>
        ))}
      </p>
    );
  };

  // Renderizar todos os blocos de uma página
  const renderParagrafos = (blocos, numeroPagina) => {
    let capitularProximo = false;
    const aplicarCapitular = numeroPagina >= 9 && numeroPagina <= 127;

    return blocos.map((bloco) => {
      // Detecta títulos no bloco
      if (bloco.some((linha) => linha.some((p) => p.h >= tamanhoTitulo))) {
        capitularProximo = aplicarCapitular;
      }

      const paragrafo = renderBloco(bloco, capitularProximo);

      capitularProximo = false;
      return paragrafo;
    });
  };

   // Renderizar imagens da página
  const renderImagens = (pagina) => {
    if (!pagina.images || pagina.images.length === 0) return null;

    const soImagem = (!pagina.blocks || pagina.blocks.length === 0); // página não possui texto

    return pagina.images.map((img, idx) => (
      <img
        key={idx}
        src={`/assets/imagens_pdf/${img.src}`}
        alt={`imagem-${idx}`}
        className={soImagem ? "imagemCentralizada" : "imagemTopo"}
      />
    ));
  };

    return (
      // Conteúdo principal (livro)
      <main className="bookContainer">
        <HTMLFlipBook 
          width={550} 
          height={700} 
          showCover={true} 
          className="flipbook"
        >
          {/* Capa */}
          <article className="pagina capa"> 
            <figure>
              <img src={capaPath} alt="Capa do livro" className="capa"/>
            </figure>
          </article>

          {/* Páginas */}
          {paginas.map((pagina) => (
            <article
              key={pagina.number}
              className= {`pagina ${pagina.number === paginas.length ? "contracapa" : ""}`}
            >
              {/* Imagens da página */}
              <section className="imagens">
                {renderImagens(pagina)}
              </section>

              {/* Texto da página */}
              {pagina.blocks && pagina.blocks.length > 0 && (
                <section className="texto">
                  {renderParagrafos(pagina.blocks, pagina.number)}
                </section>
              )}
            </article>
          ))}

          {/* Contracapa */}
          <article className="pagina contracapa"></article>
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
