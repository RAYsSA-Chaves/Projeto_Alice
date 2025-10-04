import { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./livro.css";
import { ChevronLeft, ChevroRight } from "lucide-react";

export default function Livro() {
  const [paginas, setPaginas] = useState([]);
  const tamanhoTitulo = 32; // altura considerada "título"
  const capaPath = "/assets/capa-alice.png";

  // Carregar o json com as páginas
  useEffect(() => {
    fetch("/data/paginas.json")
      .then((res) => res.json())
      .then((data) => setPaginas(data.pages))
      .catch((err) => console.log("Erro ao carregar JSON: ", err));
  }, []);

  // Renderizar palavras de um parágrafo
  const renderWords = (palavras, capitular) => {
    return palavras.map((palavra, idx) => {
      const isLarge = palavra.h >= tamanhoTitulo;
      let classe = "palavraNormal";

      if (isLarge) classe = "titulo";
      else if (capitular && idx === 0) classe = "capitular";

      return (
        <span className={classe} key={idx} onClick{(e) => {alert(palavra.text)}}>
          {palavra.text}{" "}
        </span>
      );
    });
  };

  // Renderizar um parágrafo como <p> com várias palavras
  const renderBloco = (bloco, capitularProximo, paginaIndex, blocoIndex) => {
    return (
      <p className="paragrafo" key={`p-${paginaIndex}-${blocoIndex}`}>
        {renderWords(bloco, capitularProximo)}
      </p>
    );
  };

  // Renderizar todos os parágrafos da página
  const renderParagrafos = (blocos, numeroPagina) => {
    let capitularProximo = false;
    const aplicarCapitular = numeroPagina >= 9 && numeroPagina <= 127;

    return blocos.map((bloco, blocoIndex) => {
      const paragrafo = renderBloco(bloco, capitularProximo, numeroPagina, blocoIndex);

      // reseta capitular (vale só para o primeiro bloco depois do título)
      capitularProximo = false;

      // se o bloco atual for título, marca o próximo como capitular
      if (aplicarCapitular && bloco.some((p) => p.h >= tamanhoTitulo)) {
        capitularProximo = true;
      }

      return paragrafo;
    });
  };

  // Renderizar imagens (se blocos vazio -> centralizar, senão -> colocar no topo)
  const renderImagens = (pagina) => {
    if (!pagina.images || pagina.images.length === 0) return null;

    const soImagem = !pagina.paragraphs || pagina.paragraphs.length === 0;

    return pagina.images.map((img, idx) => {
      const imgSrc = img.replace(/\\/g, "/");

      return (
        <img
          key={idx}
          src={`/assets/${imgSrc}`}
          alt={`imagem-${idx}`}
          className={soImagem ? "imagemCentralizada" : "imagemTopo"}
        />
      );
    });
  };

  // Só monta o FlipBook depois que as paginas estiverem carregadas
  if (!paginas || paginas.length === 0) {
    return <h2 className="loading">Carregando livro...</h2>;
  }

  // Conteúdo principal (livro)
  return (
    <HTMLFlipBook
      width={430}
      height={600}
      maxShadowOpacity={0.5}
      showCover={true}
      drawShadow={true}
      size="fixed"
      disableFlipByClick={true}
      flipOnClick={false}
      clickToFlip={false}
    >
      {/* Capa */}
      <article className="pagina capa">
        <img
          src={capaPath}
          alt="Capa infantil do livro Alice no País das Maravilhas"
          className="capa"
        />
      </article>

      {/* Página branca *\}
      <article className="pagina contracapa" />

      {/* Páginas */}
      {paginas.slice(1).map((pagina, paginaIndex) => (
        <article key={paginaIndex} className="pagina">
          <section className="imagens">{renderImagens(pagina)}</section>

          <section className="texto">
            {pagina.paragraphs && pagina.paragraphs.length > 0
              ? renderParagrafos(pagina.paragraphs, pagina.number)
              : null}
          </section>
        </article>
      ))}

      {/* Contracapa */}
      <article className="pagina contracapa" />
    </HTMLFlipBook>
  );
}

//         // <button onClick={() => flipBookRef.current.pageFlip().flipPrev()}>
//         //   ◀ Anterior
//         // </button>
//         // <button onClick={() => flipBookRef.current.pageFlip().flipNext()}>
//         //   Próxima ▶
//         // </button>
