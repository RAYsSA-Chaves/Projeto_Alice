import { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./livro.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Livro({ busca, setBusca, modoGrifar, setModoGrifar }) {
  const [paginas, setPaginas] = useState([]);
  const tamanhoTitulo = 32; // altura considerada "título"
  const capaPath = "/assets/capa_alice.png";
  const bookRef = useRef(null); // referencia o Flipbook

  // Carregar o json com as páginas
  useEffect(() => {
    fetch("/data/paginas.json")
      .then((res) => res.json())
      .then((data) => setPaginas(data.pages))
      .catch((err) => console.log("Erro ao carregar JSON: ", err));
  }, []);

  // Consider palavaras acompanhadas por pontuação (ex: "Alice" = "Alice,")
  const limparPontuacao = (palavra) => {
    return palavra.replace(/[.,!?:;()]/g, "");
  };

  // Definir se a palavra deve ser destacada
  function destacarPalavra(palavra) {
    const palavraLimpa = limparPontuacao(palavra);
    if (busca.tipo === "texto") {
      return palavraLimpa.trim().toLowerCase() === busca.valor.toLowerCase();
    }
    else if (busca.tipo === "tamanho") {
      return palavraLimpa.trim().length === parseInt(busca.valor);
    }
    else if (busca.tipo === "grifo") {
      return palavraLimpar.trim().toLowerCase() === busca.valor.toLowerCase();
    }
    return false;
  }

  // Função do modo grifar
  function handleClickPalavra(palavra) {
    if (!modoGrifar) return;
    const palavraLimpa = limparPontuacao(palavra);
    setBusca({ tipo: "grifo", valor: palavraLimpa });
    setModoGrifar(false);
  }

  // Renderizar palavras de um parágrafo
  const renderWords = (palavras) => {
    return palavras.map((palavra, idx) => {
      const isLarge = palavra.h >= tamanhoTitulo;
      let classe = "palavraNormal";
      if (isLarge) classe = "titulo";

      return (
        <span className={destacarPalavra(palavra) ? "highlight" : classe} key={idx} onClick={() => handleClickPalavra(palavra)}>
          {palavra.text}{" "}
        </span>
      );
    });
  };

  // Renderizar um parágrafo como <p> com várias palavras
  const renderBloco = (bloco, paginaIndex, blocoIndex) => {
    return (
      <p className="paragrafo" key={`p-${paginaIndex}-${blocoIndex}`}>
        {renderWords(bloco)}
      </p>
    );
  };

  // Renderizar todos os parágrafos da página
  const renderParagrafos = (blocos, numeroPagina) => {
    return blocos.map((bloco, blocoIndex) => {
      const paragrafo = renderBloco(bloco, numeroPagina, blocoIndex);

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

  // Navegação dos botões do Flipbook
  const nextPage = () => {
    const book = bookRef.current;
    if (!book) return;
    const currentPage = book.pageFlip().getCurrentPageIndex();
    const pageCount = book.pageFlip().getPageCount();
    if (currentPage < pageCount - 1) {
      book.pageFlip().flipNext();
    }
  };

    const prevPage = () => {
      const book = bookRef.current;
      if (!book) return;
      const currentPage = book.pageFlip().getCurrentPageIndex();
      if (currentPage > 0) {
        book.pageFlip().flipPrev();
      }
    }

  // Conteúdo principal (livro)
  return (
    <main id="mainLivro" className={modoGrifar ? "modoGrifar" : ""}>
      <button onClick={prevPage} className="btnLivro"><ArrowLeft/></button>

      {/* Só monta o FlipBook depois que as páginas estiverem carregadas */}
      {(!paginas || paginas.length === 0) ? (
        <h2>Carregando livro...</h2>
      ) : (
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
          ref={bookRef}
        >
          {/* Capa */}
          <article className="pagina capa">
            <img
              src={capaPath}
              alt="Capa infantil do livro Alice no País das Maravilhas"
              className="capa"
            />
          </article>

          {/* Página branca */}
          <article className="pagina contracapa" />

          {/* Páginas */}
          {paginas.slice(1).map((pagina, paginaIndex) => (
            <article key={paginaIndex} className={`pagina ${paginaIndex % 2 === 0 ? "pagDireita" : "pagEsquerda"}`}>
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
      )}

      <button onClick={nextPage} className="btnLivro"><ArrowRight/></button>
    </main>
  );
}
