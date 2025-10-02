import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./livro.css";

export default function Livro() {
  const [paginas, setPaginas] = useState([]);
  const tamanhoTitulo = 32; // altura considerada "título"
  const capaPath = "/assets/capa-alice.png";

  // Carregar o json com as páginas (assume { pages: [...] })
  useEffect(() => {
    fetch("/data/paginas.json")
      .then((res) => res.json())
      .then((data) => {
        // garantia: se o JSON vier como array direto, normalize
        const pages = Array.isArray(data) ? data : data.pages || [];
        setPaginas(pages);
      })
      .catch((err) => console.log("Erro ao carregar JSON: ", err));
  }, []);

  // --- Helpers de renderização ---

  // Renderizar palavras de uma linha (classes: titulo | capitular | palavraNormal)
  const renderWords = (linha, capitular, paginaIndex, blocoIndex, linhaIdx) => {
    return linha.map((palavra, idx) => {
      const isLarge = palavra.h >= tamanhoTitulo;
      let classe = "palavraNormal";

      if (isLarge) classe = "titulo";
      else if (capitular && idx === 0) classe = "capitular";

      return (
        <span
          className={classe}
          key={`w-${paginaIndex}-${blocoIndex}-${linhaIdx}-${idx}`}
        >
          {palavra.text}{" "}
        </span>
      );
    });
  };

  // Renderizar um bloco como um único <p> com várias linhas (<span class="linha">)
  const renderBloco = (bloco, capitularProximo, paginaIndex, blocoIndex) => {
    return (
      <p className="paragrafo" key={`p-${paginaIndex}-${blocoIndex}`}>
        {bloco.map((linha, linhaIdx) => (
          <span
            className="linha"
            key={`linha-${paginaIndex}-${blocoIndex}-${linhaIdx}`}
          >
            {renderWords(linha, capitularProximo, paginaIndex, blocoIndex, linhaIdx)}
          </span>
        ))}
      </p>
    );
  };

  // Renderizar todos os blocos da página, aplicando capitular quando necessário
  const renderParagrafos = (blocos, numeroPagina, paginaIndex) => {
    let capitularProximo = false;
    const aplicarCapitular = numeroPagina >= 9 && numeroPagina <= 127;

    return blocos.map((bloco, blocoIdx) => {
      // se o bloco contém palavra grande (título), sinaliza capitular no próximo bloco
      if (bloco.some((linha) => linha.some((p) => p.h >= tamanhoTitulo))) {
        capitularProximo = aplicarCapitular;
      }

      const paragrafo = renderBloco(bloco, capitularProximo, paginaIndex, blocoIdx);

      // resetamos — capitular vale só para o primeiro bloco depois do título
      capitularProximo = false;
      return paragrafo;
    });
  };

  // Renderizar imagens: se blocks vazio => centralizar, caso contrário colocar no topo
  const renderImagens = (pagina, paginaIndex) => {
  if (!pagina.images || pagina.images.length === 0) return null;

  const soImagem = !pagina.blocks || pagina.blocks.length === 0;

  return pagina.images.map((img, idx) => {
    // img já é string, substitui \ por /
    const imgSrc = img.replace(/\\/g, "/");

    return (
      <img
        key={`img-${paginaIndex}-${idx}`}
        src={`/assets/${imgSrc}`}   // assume public/assets/
        alt={`imagem-${idx}`}
        className={soImagem ? "imagemCentralizada" : "imagemTopo"}
      />
    );
  });
  };
  // --- Rendering: somente monta o FlipBook depois que paginas estiverem carregadas ---
  if (!paginas || paginas.length === 0) {
    return <div className="loading">Carregando livro...</div>;
  }

  // chave do flipbook para remount seguro caso a quantidade de páginas mude
  const flipKey = `flip-${paginas.length}`;

  return (
    <div className="bookContainer">
      <HTMLFlipBook
        key={flipKey}                 // força remount se a quantidade de páginas mudar
        width={500}
        height={650}
        showCover={true}
        drawShadow={true}
        usePortrait={false} 
        className="flipbook"
      >
        {/* Capa (sempre presente; key implícita fixa pela ordem) */}
        <article className="pagina capa" key="capa">
            <img src={capaPath} alt="Capa do livro" className="capa" />
        </article>

        {/* Páginas mapeadas (keys estáveis com paginaIndex) */}
        {paginas.slice(1).map((pagina, paginaIndex) => (
          <article key={`pagina-${paginaIndex}`} className="pagina">
            <section className="imagens">
              {renderImagens(pagina, paginaIndex)}
            </section>

            {/* Sempre renderizamos a section.texto — pode estar vazia */}
            <section className="texto">
              {pagina.blocks && pagina.blocks.length > 0
                ? renderParagrafos(pagina.blocks, pagina.number, paginaIndex)
                : null}
            </section>
          </article>
        ))}

        {/* Contracapa final (uma só) */}
        <article className="pagina contracapa" key="contracapa" />
      </HTMLFlipBook>
    </div>
  );
}




// import React, { useEffect, useState } from "react";
// import HTMLFlipBook from "react-pageflip";
// import "./livro.css";

// export default function Livro() {
//   const [paginas, setPaginas] = useState([]);
//   const tamanhoTitulo = 32; // altura considerada "título"
//   const capaPath = "/assets/capa-alice.png";

//   // Carregar o json com as páginas
//   useEffect(() => {
//     fetch("/data/paginas.json")
//       .then((res) => res.json())
//       .then((data) => setPaginas(data.pages))
//       .catch((err) => console.log("Erro ao carregar JSON: ", err));
//   }, []);

//   // Renderizar palavras de uma linha
//   const renderWords = (linha, capitular, paginaIndex, blocoIndex, linhaIdx) => {
//     return linha.map((palavra, idx) => {
//       const isLarge = palavra.h >= tamanhoTitulo;
//       let classe = "palavraNormal";

//       if (isLarge) classe = "titulo";
//       else if (capitular && idx === 0) classe = "capitular"; // primeira palavra após título

//       return (
//         <span
//           className={classe}
//           key={`w-${paginaIndex}-${blocoIndex}-${linhaIdx}-${idx}`}
//         >
//           {palavra.text}{" "}
//         </span>
//       );
//     });
//   };

//   // Renderizar um bloco como <p> com várias linhas
//   const renderBloco = (bloco, capitularProximo, paginaIndex, blocoIndex) => {
//     return (
//       <p className="paragrafo" key={`p-${paginaIndex}-${blocoIndex}`}>
//         {bloco.map((linha, linhaIdx) => (
//           <span
//             className="linha"
//             key={`linha-${paginaIndex}-${blocoIndex}-${linhaIdx}`}
//           >
//             {renderWords(linha, capitularProximo, paginaIndex, blocoIndex, linhaIdx)}
//           </span>
//         ))}
//       </p>
//     );
//   };

//   // Renderizar todos os blocos de uma página
//   const renderParagrafos = (blocos, numeroPagina, paginaIndex) => {
//     let capitularProximo = false;
//     const aplicarCapitular = numeroPagina >= 9 && numeroPagina <= 127;

//     return blocos.map((bloco, blocoIdx) => {
//       // Detecta títulos no bloco
//       if (bloco.some((linha) => linha.some((p) => p.h >= tamanhoTitulo))) {
//         capitularProximo = aplicarCapitular;
//       }

//       const paragrafo = renderBloco(bloco, capitularProximo, paginaIndex, blocoIdx);

//       capitularProximo = false;
//       return paragrafo;
//     });
//   };

//   // Renderizar imagens da página
//   const renderImagens = (pagina) => {
//     if (!pagina.images || pagina.images.length === 0) return null;

//     const soImagem = !pagina.blocks || pagina.blocks.length === 0; // página não possui texto

//     return pagina.images.map((img, idx) => (
//       <img
//         key={`img-${pagina.number}-${idx}`}
//         src={`/assets/imagens_pdf/${img.src}`}
//         alt={`imagem-${idx}`}
//         className={soImagem ? "imagemCentralizada" : "imagemTopo"}
//       />
//     ));
//   };

//   return (
//     // Conteúdo principal (livro)
//     <div className="bookContainer">
//       <HTMLFlipBook
//         width={550}
//         height={700}
//         showCover={true}
//         className="flipbook"
//       >
//         {/* Capa */}
//         <article className="pagina capa">
//           <figure>
//             <img src={capaPath} alt="Capa do livro" className="capa" />
//           </figure>
//         </article>

//         {/* Páginas */}
//         {paginas.map((pagina, paginaIndex) => (
//           <article
//             key={`pagina-${paginaIndex}`}
//             className="pagina"
//           >
//             {/* Imagens da página */}
//             <section className="imagens">{renderImagens(pagina)}</section>

//             {/* Texto da página (sempre presente) */}
//             <section className="texto">
//               {pagina.blocks && pagina.blocks.length > 0
//                 ? renderParagrafos(pagina.blocks, pagina.number, paginaIndex)
//                 : null}
//             </section>
//           </article>
//         ))}

//         {/* Contracapa */}
//         <article className="pagina contracapa"></article>
//       </HTMLFlipBook>
//     </div>
//   );
// }

//         // <button onClick={() => flipBookRef.current.pageFlip().flipPrev()}>
//         //   ◀ Anterior
//         // </button>
//         // <button onClick={() => flipBookRef.current.pageFlip().flipNext()}>
//         //   Próxima ▶
//         // </button>
