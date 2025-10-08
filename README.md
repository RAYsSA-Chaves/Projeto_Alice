# Pequeno Leitor
<!-- Capa -->
<img src="./projeto_capa.png"/>

<!-- Resumo -->
**Pequeno Leitor** é um projeto desenvolvido para a disciplina de Frontend do curso de Desenvolvimento de Sistemas do SENAI Roberto Mange.

O projeto tem por principal finalidade ser um leitor de e-book para o livro "Alice no País das Maravilhas", voltado para crianças de 7 a 12 anos, com foco em ludicidade, fantasia e gamificação.

Como o público-alvo está em fase de aprendizado e/ou alfabetização, o projeto também visa estimular o desenvolvimento dos pequenos, permitindo buscar palavras, grifar e explorar o texto de forma interativa, leve e divertida.

Como premissa, o projeto deve expandir o seu cátalogo, indo além de "Alice no País das Maravilhas", para incluir outras histórias no fututo. Como consequência dessa ideia, o site Pequeno Leitor tem como tema "historinhas de ninar" e como mascote, uma fada, além de uma paleta em tons de azul escuro, estrelas e nuvens, trazendo uma atmosfera mágica e ao mesmo tempo tranquila para a leitura.

Ademais, o site também conta com um pequeno jogo chamado "O que você vê?", em que a criança precisa acertar o que representam as imagens mostradas em cards, podendo ser personagens, animais e outros elementos da história.
<br/></br>

<!-- Objetivos -->
## Objetivos do projeto
- Converter o PDF original da história "Alice no País das Maravilhas" em uma interface que transmita a sensação de estar lendo um livro;
- Desenvolver um site atrativo e acessível ao público infantil;
- Garantir uma experiência intuitiva e funcional;
- Permitir interações com o livro, como busca e grifo de palavras;
- Destacar palavras buscadas e contar e exibir quantas vezes aparecem no livro;
- Auxiliar no processo de alfabetização de forma divertida.
<br/></br>

<!-- Pastas -->
## Organização de pastas e arquivos
O projeto é dividido em duas partes principais:

### 🐍 Back
Contém um script em Python que realiza a extração de imagens, palavras e parágrafos por página do PDF. Essas informações são salvas em JSON estruturado, e as imagens, em uma pasta de imagens do PDF. Ambos são utilizados pelo Frontend.
<br/>

### 💻 Frontend
No diretório "public" estão armazenadas as imagens extraídas e o arquivo JSON tratado.

Dentro de "src" encontram-se todos os componentes React que compõem as páginas do site, as páginas em si e as rotas configuradas no App.
<br/></br>

<!-- Instalações -->
## Dependências
Para rodar tanto o Back quanto o Front, são necessárias as instalações de algumas dependências:

### 🐍 Back
> [!NOTE]
> Não é necessário rodar o Back para rodar o projeto. Ele foi utilizado apenas para extrair os dados do PDF.

> [!IMPORTANT]
> Necessário entrar na pasta "Back".
<br/>

Biblioteca Python utilizada para ler e extrair dados do PDF, como imagens, textos e dimensões, essenciais para montar o JSON do livro:
```python
pip install pymupdf
```
Rodar a extração do PDF:
```python
py extrairPdf.py
```

<br/>

### 💻 Frontend
> [!IMPORTANT]
> Necessário entrar na pasta "Frontend".

Bibliotecas de ícones utilizadas em botões e elementos visuais:
```bash
npm install lucide-react
```
```bash
npm install phosphor-react
```

Biblioteca que cria o efeito de virar as páginas como em um livro real:
```bash
npm install react-pageflip
```

Biblioteca que cria o tutorial interativo dentro da página do livro, guiando a navegação inicial:
```bash
npm install react-joyride
```
Ou (em caso de conflitos):
```bash
npm install react-joyride --legacy-peer-deps
```
> [!NOTE]
> O `--lecacy-peer-deps` diz ao npm para ignorar conflitos de dependências (chamados _peer dependencies_). O que é útil quando uma biblioteca não está atualizada para a versão mais recente do React ou de alguma dependência dela.

Biblioteca utilizada para gerenciar as rotas e navegação entre as páginas do site:
```bash
npm install react-router-dom
```

Biblioteca que cria animações conforme a página é rolada (Animate On Scroll):
```bash
npm install aos
```

Rodar o projeto:
```bash
npm run dev
```
<br/>

<!-- Protótipo -->
## Protótipo do projeto
O protótipo com o fluxo inicial dos usuários foi desenvolvido no Figma, incluindo uma breve **documentação do projeto** com justificativas de decisões de estilo e uma explicação detalhada sobre o público-alvo e a proposta do projeto.

<!-- <a href="https://www.figma.com/design/QpHT09SWPf9Jk0nD22sqXA/Pequeno-Leitor-Project?node-id=1-26&t=dWwAbxKv6hE3AVgT-1" target="_blank"><img width="20" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg">  Acesse o protótipo no Figma</a> -->

<a href="https://www.figma.com/design/QpHT09SWPf9Jk0nD22sqXA/Pequeno-Leitor-Project?node-id=1-26&t=dWwAbxKv6hE3AVgT-1" target="_blank"><img width="180" loading="lazy" src="https://img.shields.io/badge/Acesse%20o%20protótipo-4B5B96?style=for-the-bagde&logo=figma&logoColor=white" target="_blank"></a> 
<br/><br/>

<!-- Tecnologias -->
## Tecnologias utilizadas
<img src="https://skillicons.dev/icons?i=react,vite,css,python,figma&perline=10" alt="Frontend" />
