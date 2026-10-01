🐾 Clube do Focinho

Projeto web desenvolvido para o Clube do Focinho, uma organização voltada à proteção, ao cuidado e ao bem-estar animal.

A aplicação apresenta informações sobre os projetos da organização e disponibiliza um formulário para cadastro de pessoas interessadas em participar das ações.

🎯 Objetivo

Desenvolver uma aplicação web organizada, responsiva e acessível, utilizando tecnologias fundamentais do desenvolvimento front-end.

O projeto também tem como objetivo aplicar conceitos de:

HTML semântico;
CSS responsivo;
JavaScript Vanilla;
Manipulação do DOM;
Single Page Application (SPA);
Validação de formulários;
Templates dinâmicos;
Controle de versão com Git e GitHub;
Metodologia GitFlow;
Conventional Commits;
Versionamento semântico.
🛠️ Tecnologias utilizadas
HTML5 — estrutura semântica das páginas;
CSS3 — estilização e responsividade;
JavaScript (ES6+) — interatividade, manipulação do DOM e navegação SPA;
Git — controle de versão;
GitHub — hospedagem do repositório e gerenciamento das versões.

Não foram utilizados frameworks ou bibliotecas externas de JavaScript.

📁 Estrutura do projeto
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
Organização dos diretórios
index.html — estrutura principal da aplicação e base da SPA.
html/ — conteúdos específicos das páginas.
css/ — folha de estilos do projeto.
img/ — imagens utilizadas na aplicação.
js/ — código JavaScript responsável pela interatividade e navegação.
README.md — documentação do projeto.
🚀 Funcionalidades
Navegação SPA

A aplicação utiliza uma estrutura de Single Page Application, carregando o conteúdo das páginas sem realizar o recarregamento completo do documento.

O JavaScript utiliza fetch(), DOMParser() e manipulação do DOM para carregar o conteúdo correspondente dentro do elemento <main>.

Projetos dinâmicos

Os projetos são armazenados em uma estrutura de dados JavaScript e renderizados dinamicamente utilizando:

Arrays de objetos;
map();
Template Literals;
innerHTML;
Elementos semânticos como <article>.

Isso reduz a repetição de código e facilita a manutenção dos conteúdos.

Formulário de cadastro

O projeto possui um formulário para participação nas ações do Clube do Focinho, utilizando recursos de validação nativa do HTML5 e JavaScript.

São utilizados campos obrigatórios e validações de formato para informações como:

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

1100px
900px
650px
480px
400px
♿ Acessibilidade e semântica

O projeto utiliza elementos semânticos do HTML5, como:

<header>;
<nav>;
<main>;
<section>;
<article>;
<aside>;
<footer>;
<form>.

Também são utilizados atributos como aria-label e aria-labelledby para melhorar a compreensão da estrutura da página por tecnologias assistivas.

🌿 GitFlow

O desenvolvimento do projeto foi organizado utilizando o modelo GitFlow.

Branches utilizadas
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

Utilizada para desenvolver uma alteração específica relacionada à organização e renderização dos projetos.

Após a conclusão, a funcionalidade foi integrada à branch develop e posteriormente à main.

📝 Conventional Commits

O histórico utiliza o padrão Conventional Commits, facilitando a identificação das alterações realizadas.

Exemplos utilizados no projeto:

feat: cria estrutura inicial do projeto
refactor: remove toast estático da página de projetos
Principais tipos utilizados
Tipo  Utilização
feat  Nova funcionalidade
fix Correção de erro
refactor  Reorganização ou melhoria do código
style Alterações de estilo
docs  Alterações na documentação
🔖 Versionamento

O projeto utiliza Versionamento Semântico (SemVer) no formato:

MAJOR.MINOR.PATCH

A primeira versão estável registrada foi:

v1.0.0
Significado
MAJOR (1) — versão principal;
MINOR (0) — novas funcionalidades compatíveis;
PATCH (0) — correções compatíveis.

A versão v1.0.0 representa a primeira release estável registrada do projeto.

📦 Release
v1.0.0

Primeira versão estável do Clube do Focinho, consolidando a estrutura inicial da aplicação, suas páginas, navegação SPA, renderização dinâmica dos projetos, formulário de cadastro e organização do código.

▶️ Como executar o projeto

O projeto pode ser executado utilizando um servidor local, como o WampServer ou outra ferramenta de servidor local compatível.

Como a aplicação utiliza fetch() para carregar os conteúdos das páginas da SPA, recomenda-se executá-la através de um servidor local em vez de abrir o index.html diretamente pelo sistema de arquivos.

👨‍💻 Controle de versão

O projeto utiliza Git para controle de versão e GitHub para armazenamento remoto do repositório.

Estrutura de desenvolvimento:

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

Clube do Focinho — Proteção, cuidado e bem-estar animal. 🐾