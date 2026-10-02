🐾 Clube do Focinho

Projeto web desenvolvido para o Clube do Focinho, uma organização voltada à proteção, ao cuidado e ao bem-estar animal.

A aplicação apresenta informações sobre os projetos da organização e disponibiliza um formulário para cadastro de pessoas interessadas em participar das ações.


🎯 Objetivo

Desenvolver uma aplicação web organizada, responsiva e acessível, utilizando tecnologias fundamentais de desenvolvimento front-end.

O projeto também tem como objetivo aplicar conceitos de:

- HTML semântico;
- CSS responsivo;
- JavaScript Vanilla;
- Manipulação do DOM;
- Aplicação de Página Única (SPA);
- Validação de formulários;
- Templates dinâmicos;
- Vite;
- Build de produção;
- Minificação de arquivos;
- Otimização de imagens;
- Controle de versão com Git e GitHub;
- Metodologia GitFlow;
- Conventional Commits;
- Versionamento Semântico (SemVer).


🛠️ Tecnologias Utilizadas

- HTML5 — estrutura semântica das páginas;
- CSS3 — estilização e responsividade;
- JavaScript (ES6+) — interatividade, manipulação do DOM e navegação SPA;
- Vite — servidor de desenvolvimento e ferramenta de build para produção;
- esbuild — minificação dos arquivos durante a build;
- WebP — formato otimizado utilizado nas imagens;
- Git — controle de versão;
- GitHub — hospedagem do repositório e gerenciamento das versões.

Não foram utilizados frameworks ou bibliotecas externas de JavaScript.


📁 Estrutura do Projeto

Clube_do_Focinho/
│
├── index.html
├── package.json
├── vite.config.js
│
├── html/
│   ├── home.html
│   ├── projetos.html
│   └── cadastro.html
│
├── public/
│   ├── html/
│   │   ├── home.html
│   │   ├── projetos.html
│   │   └── cadastro.html
│   │
│   └── imagens/
│       └── animal.webp
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── README.txt


Organização dos Diretórios

Diretório/Arquivo — Descrição

index.html — Estrutura principal da aplicação e base do SPA
html/ — Conteúdo específico das páginas
public/ — Arquivos estáticos disponibilizados diretamente pelo Vite
public/html/ — Templates carregados dinamicamente pelo SPA
public/imagens/ — Imagens utilizadas na versão de produção
css/ — Folha de estilos do projeto
js/ — Código JavaScript responsável pela interatividade e navegação
package.json — Configurações, scripts e dependências do projeto
vite.config.js — Configuração da ferramenta Vite
README.txt — Documentação do projeto


🚀 Funcionalidades

Navegação SPA

A aplicação utiliza uma estrutura de Single Page Application (SPA), carregando o conteúdo das páginas sem realizar o recarregamento completo do documento.

O JavaScript utiliza os recursos fetch(), DOMParser() e manipulação do DOM para carregar dinamicamente o conteúdo dentro do elemento <main>.

As páginas são carregadas de acordo com a navegação realizada pelo usuário:

- Início;
- Projetos;
- Cadastro.


Projetos Dinâmicos

Os projetos são armazenados em uma estrutura de dados JavaScript e renderizados dinamicamente utilizando:

- Arrays de objetos;
- Método map();
- Template literals;
- innerHTML;
- Elementos semânticos como <article>.

Essa abordagem reduz a repetição de código e facilita a manutenção dos conteúdos.


Formulário de Cadastro

O projeto possui um formulário para participação nas ações do Clube do Focinho, utilizando validações nativas do HTML5 e JavaScript.

Campos validados:

- Nome;
- E-mail;
- CPF;
- Telefone;
- CEP;
- Data de nascimento;
- Endereço;
- Estado;
- Cidade;
- Tipo de participação;
- Aceite dos termos.


Modo Claro e Escuro

A aplicação possui suporte aos modos claro e escuro.

A preferência selecionada pelo usuário é armazenada no localStorage, permitindo manter o tema escolhido durante novos acessos.

Quando não existe uma preferência salva, o sistema considera a preferência de aparência configurada no sistema operacional por meio de prefers-color-scheme.


Responsividade

O layout foi desenvolvido para diferentes tamanhos de tela, utilizando cinco breakpoints:

- 1100px;
- 900px;
- 650px;
- 480px;
- 400px.

A estratégia responsiva adapta a estrutura, espaçamentos, tipografia, navegação e componentes para diferentes dispositivos.


♿ Acessibilidade e Semântica

O projeto utiliza elementos semânticos do HTML5, como:

<header>
<nav>
<main>
<section>
<article>
<form>
<footer>

Também são utilizados atributos como aria-label e aria-labelledby para melhorar a acessibilidade e a navegação por tecnologias assistivas.

O projeto também possui um Skip Link, permitindo que usuários que navegam pelo teclado pulem diretamente para o conteúdo principal da página, evitando a necessidade de percorrer novamente os elementos de navegação.

A funcionalidade utiliza um link com foco visível e direcionamento para o elemento:

<main id="conteudo-principal">


⚡ Vite e Build de Produção

O projeto utiliza o Vite como ferramenta de desenvolvimento e build de produção.

Durante o desenvolvimento, o Vite fornece um servidor local com atualização rápida dos arquivos.

O projeto possui os seguintes scripts no package.json:


npm run dev

Inicia o servidor de desenvolvimento.


npm run build

Gera a versão otimizada para produção dentro da pasta dist/.


npm run preview

Executa uma prévia local da versão de produção gerada pelo Vite.


Configuração do Vite

A configuração principal está localizada em:

vite.config.js

O arquivo define a utilização da minificação durante a build:

import { defineConfig } from "vite";

export default defineConfig({
    build: {
        minify: "esbuild"
    }
});


Minificação

Durante a preparação da versão de produção, o Vite utiliza o esbuild para realizar a minificação dos arquivos processados.

A minificação remove elementos desnecessários para a execução do código, como:

- Espaços em branco;
- Quebras de linha desnecessárias;
- Comentários não necessários;
- Outros caracteres que podem ser reduzidos sem alterar o funcionamento.

O objetivo é reduzir o tamanho dos arquivos enviados ao navegador e, consequentemente, diminuir a quantidade de dados transferidos durante o carregamento da aplicação.


Otimização de Imagens

As imagens utilizadas pelo projeto também passaram por otimização.

A imagem principal da aplicação foi convertida para o formato WebP.

O WebP permite disponibilizar imagens com tamanho reduzido mantendo uma qualidade adequada para utilização na interface.


🌿 GitFlow

O desenvolvimento do projeto foi organizado utilizando o modelo GitFlow.


Branches Utilizadas

main
│
└── develop
    │
    └── feature/projetos-dinamicos


main

Contém a versão estável do projeto, destinada às versões de lançamento.


develop

Utilizada para concentrar o desenvolvimento antes da integração com a versão estável.


feature/projetos-dinamicos

Utilizada para desenvolver a funcionalidade de renderização dinâmica dos projetos.

Após a conclusão, a funcionalidade foi integrada à branch develop e posteriormente à main.


📝 Conventional Commits

O histórico de commits utiliza o padrão Conventional Commits, facilitando a identificação das alterações realizadas.


Exemplos:

feat: cria estrutura inicial do projeto
refactor: remove conteúdo estático da página de projetos
fix: corrige validação do formulário
docs: atualiza README


Tipos Utilizados:

feat — Nova funcionalidade
fix — Correção de erro
refactor — Reorganização ou melhoria do código
style — Alterações visuais ou de formatação
docs — Alterações na documentação


🔖 Versionamento

O projeto utiliza Versionamento Semântico (SemVer) no formato:

MAJOR.MINOR.PATCH

A primeira versão estável registrada foi:

v1.0.0


Significado:

MAJOR (1) — mudanças incompatíveis;
MINOR (0) — novas funcionalidades compatíveis;
PATCH (0) — correções compatíveis.

A versão v1.0.0 representa a primeira versão estável do projeto.


📦 Lançamento da Versão 1.0.0

Primeira versão estável do Clube do Focinho, consolidando:

- Estrutura inicial da aplicação;
- Navegação SPA;
- Renderização dinâmica dos projetos;
- Formulário de cadastro;
- Organização do código;
- Responsividade;
- Acessibilidade;
- Modo claro e escuro;
- Integração com Vite;
- Build de produção;
- Minificação dos arquivos;
- Otimização de imagens.


▶️ Como Executar o Projeto

Pré-requisitos

É necessário ter o Node.js e o npm instalados no computador.


Instalação das dependências

Após clonar o repositório, execute:

npm install


Executar em desenvolvimento

npm run dev

O Vite iniciará um servidor local para execução da aplicação.

O endereço será apresentado no terminal, normalmente:

http://localhost:5173/


Gerar versão de produção

npm run build

O comando gera os arquivos otimizados dentro da pasta:

dist/


Visualizar a versão de produção

Após executar o build:

npm run preview

O Vite disponibilizará a versão de produção para testes locais.


Execução alternativa

Como a aplicação utiliza fetch() para carregar o conteúdo das páginas do SPA, também é possível utilizar outros servidores HTTP locais, como:

- WampServer;
- XAMPP;
- Live Server (VS Code);
- Outros servidores HTTP compatíveis.

A abertura direta do arquivo index.html pode impedir o funcionamento correto da navegação dinâmica devido às restrições do navegador para requisições fetch() utilizando file://.


👨‍💻 Controle de Versão

O projeto utiliza Git para controle de versão e GitHub para armazenamento remoto do repositório.


Fluxo de desenvolvimento:

main
↓
develop
↓
feature/projetos-dinamicos
↓
integração na develop
↓
integração na main
↓
v1.0.0


🐾 Clube do Focinho

Proteção, cuidado e bem-estar animal.