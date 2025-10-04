import fitz # biblioteca PyMuPDF
import json # salvar os dados extraídos
import os # criar pasta de imagens

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
        # extrair palavras
        palavras_brutas = pagina.get_text("words")
        
        # cada palavra é: [x0, y0, x1, y1, texto, bloco, linha, palavra_index]
        # x e y = coordenadas dos 4 cantos da palavra
        # texto = texto em si
        # bloco = número do bloco de texto ao qual a palavra pertence (parágrafo)
        # linha = linha dentro do bloco
        # palavra_index = posição na linha
        
        blocos_dict = {}
        
        # extrair infos de cada palavra
        for palavra in palavras_brutas:
            x0, y0, x1, y1, texto, bloco, _, _ = palavra
            palavra_info = {
                "text": texto,
                "w": round(x1 - x0, 2),
                "h": round(y1 - y0, 2)
            }
            
            # guarda palavra dentro do bloco correto
            if bloco not in blocos_dict:
                blocos_dict[bloco] = []
            blocos_dict[bloco].append(palavra_info)
        
        # transforma em lista: blocos → palavras
        blocos = []
        for bloco_key in sorted(blocos_dict.keys()):
            blocos.append(blocos_dict[bloco_key])

        imagens = []
        
        # pega todas as imagens da página atual
        imagens_da_pagina = pagina.get_images(full=True)

        # percorre cada imagem
        num_imagem = 0 # começa na imagem 0
        for imagem in imagens_da_pagina:
            xref = imagem[0] # identificador interno da imagem no PDF
            # extrai os bytes da imagem
            img_extraida = doc.extract_image(xref)
            conteudo_img = img_extraida["image"]

            # nome do arquivo para salvar
            nome_arquivo = f"pagina{num_pagina}_img{num_imagem}.png"
            
            caminho_arquivo = os.path.join(pasta_imagens, nome_arquivo)

            # salva a imagem
            with open(caminho_arquivo, "wb") as file:
                file.write(conteudo_img)
            imagens.append(caminho_arquivo)

            num_imagem += 1

        # salvar dados da página
        dados["pages"].append({
            "number": num_pagina,
            "paragraphs": blocos,
            "images": imagens
        })

        num_pagina += 1

    # exportar para JSON
    with open(saida_json, "w", encoding="utf-8") as file:
        json.dump(dados, file, indent=4, ensure_ascii=False)

    print(f"✅ Extração concluída! JSON salvo em {saida_json}")

# rodar a função
pdf_para_json("./uploads/Alice-no-Pais-das-Maravilhas.pdf", "imagens_pdf")
