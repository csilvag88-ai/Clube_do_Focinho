🐾 Clube do Focinho

Projeto web desenvolvido para o Clube do Focinho, uma organização voltada à proteção, ao cuidado e ao bem-estar animal.

A aplicação apresenta informações sobre os projetos da organização e disponibiliza um formulário para cadastro de pessoas interessadas em participar das ações.

🎯 Objetivo

Desenvolver uma aplicação web organizada, responsiva e acessível, utilizando tecnologias fundamentais de desenvolvimento front-end.

O projeto também tem como objetivo aplicar conceitos de:

HTML semântico;
CSS responsivo;
JavaScript Vanilla;
Manipulação do DOM;
Aplicação de Página Única (SPA);
Validação de formulários;
Templates dinâmicos;
Controle de versão com Git e GitHub;
Metodologia GitFlow;
Conventional Commits;
Versionamento Semântico (SemVer).
🛠️ Tecnologias Utilizadas
HTML5 — estrutura semântica das páginas;
CSS3 — estilização e responsividade;
JavaScript (ES6+) — interatividade, manipulação do DOM e navegação SPA;
Git — controle de versão;
GitHub — hospedagem do repositório e gerenciamento das versões.

Não foram utilizados frameworks ou bibliotecas externas de JavaScript.

📁 Estrutura do Projeto
Clube_do_Focinho/
│
├── index.html
│
├── html/
│   ├── home.html
│   ├── projetos.html
│   └── cadastro.html
│
├── css/
│   └── style.css
│
├── img/
│   └── animal.jpg
│
├── js/
│   └── app.js
│
└── README.md
Organização dos Diretórios
Diretório/Arquivo   Descrição
index.html  Estrutura principal da aplicação e base do SPA
html/   Conteúdo específico das páginas
css/    Folha de estilos do projeto
img/    Imagens utilizadas na aplicação
js/ Código JavaScript responsável pela interatividade e navegação
README.md   Documentação do projeto
🚀 Funcionalidades
Navegação SPA

A aplicação utiliza uma estrutura de Single Page Application (SPA), carregando o conteúdo das páginas sem realizar o recarregamento completo do documento.

O JavaScript utiliza os recursos fetch(), DOMParser() e manipulação do DOM para carregar dinamicamente o conteúdo dentro do elemento <main>.

Projetos Dinâmicos

Os projetos são armazenados em uma estrutura de dados JavaScript e renderizados dinamicamente utilizando:

Arrays de objetos;
Método map();
Template literals;
innerHTML;
Elementos semânticos como <article>.

Essa abordagem reduz a repetição de código e facilita a manutenção dos conteúdos.

Formulário de Cadastro

O projeto possui um formulário para participação nas ações do Clube do Focinho, utilizando validações nativas do HTML5 e JavaScript.

Campos validados:

Nome;
E-mail;
CPF;
Telefone;
CEP;
Data de nascimento;
Endereço;
Estado;
Cidade;
Tipo de participação;
Aceite dos termos.
Responsividade

O layout foi desenvolvido para diferentes tamanhos de tela, utilizando cinco breakpoints:

1100px;
900px;
650px;
480px;
400px.
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

Exemplos
feat: cria estrutura inicial do projeto
refactor: remove conteúdo estático da página de projetos
fix: corrige validação do formulário
docs: atualiza README
Tipos Utilizados
Tipo    Utilização
feat    Nova funcionalidade
fix Correção de erro
refactor    Reorganização ou melhoria do código
style   Alterações visuais ou de formatação
docs    Alterações na documentação
🔖 Versionamento

O projeto utiliza Versionamento Semântico (SemVer) no formato:

MAJOR.MINOR.PATCH

A primeira versão estável registrada foi:

v1.0.0
Significado
MAJOR (1) — mudanças incompatíveis;
MINOR (0) — novas funcionalidades compatíveis;
PATCH (0) — correções compatíveis.

A versão v1.0.0 representa a primeira versão estável do projeto.

📦 Lançamento da Versão 1.0.0

Primeira versão estável do Clube do Focinho, consolidando:

Estrutura inicial da aplicação;
Navegação SPA;
Renderização dinâmica dos projetos;
Formulário de cadastro;
Organização do código;
Responsividade e acessibilidade.
▶️ Como Executar o Projeto

O projeto pode ser executado utilizando um servidor local, como:

WampServer;
XAMPP;
Live Server (VS Code);
Outros servidores HTTP compatíveis.

Como a aplicação utiliza fetch() para carregar o conteúdo das páginas do SPA, recomenda-se executá-la através de um servidor local. A abertura direta do arquivo index.html pode impedir o funcionamento correto da navegação.

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