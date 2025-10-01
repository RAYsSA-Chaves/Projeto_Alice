import fitz      # biblioteca PyMuPDF
import json      # salvar os dados extraídos
import os        # criar pasta de imagens


# função principal
def pdf_para_json(arquivo_pdf, pasta_imagens, saida_json="paginas.json"):
    # abre o PDF
    doc = fitz.open(arquivo_pdf)

    # garante que a pasta de imagens existe
    if not os.path.exists(pasta_imagens):
        os.makedirs(pasta_imagens)

    # estrutura para guardar os dados finais
    dados = {"pages": []}

    num_pagina = 1  # começa na página 1
    for pagina in doc:
        # tamanho da página
        largura = pagina.rect.width # rect = rectangle
        altura = pagina.rect.height

        # extrair palavras
        palavras_brutas = pagina.get_text("words")
        
        # cada item é: [x0, y0, x1, y1, texto, bloco, linha]
        # x e y = coordenadas dos 4 cantos da palavra
        # bloco = número do bloco de texto ao qual a palavra pertence (parágrafo)
        # linha = linha dentro do bloco
        
        palavras = []
        for item in palavras_brutas:
            x0, y0, x1, y1, texto = item
            palavras.append({
                "text": texto,
                "x": x0,
                "y": y0,
                "w": x1 - x0,
                "h": y1 - y0
            })

        imagens = []
        # pega todas as imagens da página atual
        imagens_da_pagina = pagina.get_images(full=True)

        # percorre cada imagem
        num_imagem = 0
        for imagem_info in imagens_da_pagina:
            # identificador interno da imagem no PDF
            xref = imagem_info[0]

            # extrai os bytes da imagem
            img_extraida = doc.extract_image(xref)
            conteudo_img = img_extraida["image"]

            # nome do arquivo para salvar
            nome_arquivo = f"pagina{num_pagina}_img{num_imagem}.png"
            caminho_arquivo = os.path.join(pasta_imagens, nome_arquivo)

            # salva a imagem
            with open(caminho_arquivo, "wb") as file:
                file.write(conteudo_img)

            # posição da imagem na página (bbox)
            for detalhe in pagina.get_image_info(xref):
                x0, y0, x1, y1 = detalhe["bbox"]
                imagens.append({
                    "x": x0,
                    "y": y0,
                    "w": x1 - x0,
                    "h": y1 - y0,
                    "src": caminho_arquivo
                })

            numero_imagem += 1

        # ----------------------------
        # Salvar dados da página
        # ----------------------------
        dados["pages"].append({
            "number": num_pagina,
            "width": largura,
            "height": altura,
            "words": palavras,
            "images": imagens
        })

    # ----------------------------
    # Exportar para JSON
    # ----------------------------
    with open(saida_json, "w", encoding="utf-8") as f:
        json.dump(dados, f, indent=2, ensure_ascii=False)

    print(f"✅ Extração concluída! JSON salvo em {saida_json}")


# ----------------------------
# Exemplo de uso
# ----------------------------
# Aqui você escolhe qual PDF abrir, onde salvar imagens e o nome do JSON
pdf_para_json("meu_arquivo.pdf", "imagens_extraidas", "saida.json")
