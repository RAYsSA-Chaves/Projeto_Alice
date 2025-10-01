import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

// Função para carregar e converter PDF em array de páginas
export async function extrairPDF(caminhoPDF) {
  // Abre o PDF
  const pdf = await pdfjsLib.getDocument(caminhoPDF).promise;

  let paginasExtraidas = [];

  // Loop em todas as páginas
  for (let num = 1; num <= pdf.numPages; num++) {
    // Pega a página atual
    const page = await pdf.getPage(num);

    // Define escala
    const viewport = page.getViewport({ scale: 1.5 });

    // Cria canvas para renderizar a página (fundo/imagens)
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Renderiza página no canvas
    await page.render({ canvasContext: context, viewport: viewport }).promise;

    // Converte canvas em imagem
    const backgroundImage = canvas.toDataURL();

    // Extrai conteúdo de texto
    const textContent = await page.getTextContent();
    let palavras = [];

    textContent.items.forEach(function (item) {
      const transform = item.transform; // coloca na posição, tamanho, etc exatos do pdf

      // Pega posição e tamanho
      const x = transform[4];
      const y = viewport.height - transform[5];
      const fontSize = Math.abs(transform[0]) || 12;

      palavras.push({
        texto: item.str,
        x: x,
        y: y,
        fontSize: fontSize,
      });
    });

    // Guarda a página
    paginasExtraidas.push({
      backgroundImage: backgroundImage,
      width: viewport.width,
      height: viewport.height,
      palavras: palavras,
    });
  }

  return paginasExtraidas;
}
