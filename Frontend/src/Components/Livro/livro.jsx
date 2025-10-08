import { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./livro.css";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Nuvem from "../../Assets/Images/Nuvem_msg.png";

export default function Livro({ busca, setBusca, modoGrifar, setModoGrifar }) {
  const [paginas, setPaginas] = useState([]);
  const tamanhoTitulo = 32; // altura considerada "título"
  const capaPath = "/assets/capa_alice.png";
  const bookRef = useRef(null); // referencia o Flipbook
  const [totalEncontradas, setTotalEncontradas] = useState(0); // guarda contagem de palavras
  const [mostrarResultado, setMostrarResultado] = useState(true); // mostrar o resultado ou para de mostrar

  // Carregar o json com as páginas
  useEffect(() => {
    fetch("/data/paginas_corrigido.json")
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
      return palavraLimpa.trim().toLowerCase() === busca.valor.toLowerCase();
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

  // Contagem de palavras sempre que a busca mudar
  useEffect(() => {
    if (!paginas || paginas.length === 0 || !busca.tipo) {
      setTotalEncontradas(0);
      setMostrarResultado(false);
      return;
    }
    let contagem = 0;
    paginas.forEach((pagina) => {
      if (!pagina.paragraphs) return;
      pagina.paragraphs.forEach((bloco) => {
        bloco.forEach((palavra) => {
          if(destacarPalavra(palavra.text)) contagem++;
      });
    });
  });
  setTotalEncontradas(contagem);
  setMostrarResultado(true);
  console.log(contagem);
  }, [busca, paginas]);

  // Renderizar palavras de um parágrafo
  const renderWords = (palavras) => {
    return palavras.map((palavra, idx) => {
      const isLarge = palavra.h >= tamanhoTitulo;
      let classe = "palavraNormal";
      if (isLarge) classe = "titulo";

      return (
        <span className={destacarPalavra(palavra.text) ? "highlight" : classe} key={idx} onClick={() => handleClickPalavra(palavra.text)}>
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
      {/* Botão voltar página*/}
      <button onClick={prevPage} className="btnLivro"><ArrowLeft/></button>

      {/* Resultado de quantidade de palavras encontradas */}
      {busca.tipo && totalEncontradas > 0 && mostrarResultado && (
        <div className={`resultadoBusca ${busca.tipo}`}>
          <img src={Nuvem} className="imgResultado"/>
          <p>{totalEncontradas}<br/>palavras encontradas</p>
          <button className="btnFecharResultado" onClick={() => setMostrarResultado(false)}><X/></button>
        </div>
      )}

      {/* Só monta o FlipBook depois que as páginas estiverem carregadas */}
      {(!paginas || paginas.length === 0) ? (
        <h2>Carregando livro...</h2>
      ) : (
          <HTMLFlipBook
          width={430}
          height={650}
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

      {/* Botão próxima página */}
      <button onClick={nextPage} className="btnLivro"><ArrowRight/></button>
    </main>
  );
}
