================================================================================
PAW CLUBE DO FOCINHO
Proteção • Cuidado • Bem-estar Animal

Projeto web desenvolvido para o Clube do Focinho, uma organização voltada à
proteção, ao cuidado e ao bem-estar animal. A aplicação apresenta informações
sobre os projetos da organização e disponibiliza um formulário para cadastro
de pessoas interessadas em participar das ações.

OBJETIVO

Desenvolver uma aplicação web organizada, responsiva e acessível, utilizando
tecnologias fundamentais de desenvolvimento front-end.

O projeto aplica os seguintes conceitos:

HTML5 semântico

CSS3 responsivo e variáveis de design

JavaScript Vanilla (ES6+) e manipulação do DOM

Arquitetura Single Page Application (SPA)

Validação de formulários e máscaras de entrada

Templates dinâmicos

Bundler Vite e minificação via esbuild

Otimização de assets (imagens WebP)

Git, GitHub e fluxo de trabalho GitFlow

Mensagens de commit no padrão Conventional Commits

Versionamento Semântico (SemVer)

TECNOLOGIAS UTILIZADAS

HTML5: Estrutura semântica e acessibilidade.

CSS3: Estilização, variáveis CSS, Flexbox, CSS Grid e media queries.

JavaScript (ES6+): Lógica dinâmica, navegação SPA e interatividade.

Vite: Servidor de desenvolvimento e ferramenta de build de produção.

esbuild: Minificação de arquivos JS e CSS durante o build.

WebP: Formato otimizado para renderização de imagens.

Git & GitHub: Controle de versão e hospedagem do repositório.

Nota: Não foram utilizados frameworks ou bibliotecas externas de JavaScript.

ESTRUTURA DO PROJETO

Clube_do_Focinho/
├── index.html
├── package.json
├── vite.config.js
├── README.txt
├── html/
│   ├── home.html
│   ├── projetos.html
│   └── cadastro.html
├── public/
│   ├── html/
│   │   ├── home.html
│   │   ├── projetos.html
│   │   └── cadastro.html
│   └── imagens/
│       └── animal.webp
├── css/
│   └── style.css
└── js/
└── app.js

ORGANIZAÇÃO DOS DIRETÓRIOS:

Arquivo / Diretório   | Descrição

index.html            | Estrutura principal da aplicação e base do SPA.
html/                 | Conteúdo específico e estrutural das páginas.
public/               | Arquivos estáticos disponibilizados pelo Vite.
public/html/          | Templates carregados dinamicamente no SPA via fetch().
public/imagens/       | Recursos visuais otimizados para produção.
css/                  | Estilos globais, tema claro/escuro e layout.
js/                   | Lógica da aplicação, SPA, formulários e tema.
package.json          | Dependências, scripts e configurações do Node.
vite.config.js        | Configurações do processo de build do Vite.
README.txt            | Documentação completa do projeto.

FUNCIONALIDADES DETALHADAS

[Navegação SPA]
A aplicação opera como Single Page Application. O arquivo app.js intercepta a
navegação através do atributo 'data-page' e carrega dinamicamente o HTML
correspondente via fetch() no elemento .

[Projetos Dinâmicos]
Os projetos são mantidos em estruturas de dados JS (arrays de objetos) e
renderizados dinamicamente via map() e template literals, inseridos no DOM com
tags semânticas .

[Formulário de Cadastro]
Inclui validações nativas do HTML5 e complementares via JS, com máscaras de
preenchimento automático para:

CPF, Telefone e CEP

Validações de Nome, E-mail, Data de Nascimento, Endereço, Cidade, Estado,
Tipo de participação e Aceite dos termos.

[Modo Claro e Escuro (Dark/Light Theme)]
Alternância de temas dinâmicos via variáveis CSS. A preferência é salva no
localStorage. Caso não exista preferência salva, a aplicação consulta a
configuração do sistema via media query (prefers-color-scheme).

[Responsividade]
Layout adaptável a múltiplos dispositivos com 5 breakpoints definidos:

1100px | 900px | 650px | 480px | 400px
Inclui menu hambúrguer para dispositivos móveis.

[Acessibilidade (a11y)]

Uso de tags semânticas: , , , , , .

Atributos ARIA (aria-label, aria-labelledby).

Navegação por teclado com estados de foco visíveis.

Skip Link direto para .

PROCESSOS DE BUILD E OTIMIZAÇÃO

[Vite & esbuild]
O arquivo vite.config.js instrui o empacotador a minificar os ativos de saída:

import { defineConfig } from "vite";
export default defineConfig({
build: {
minify: "esbuild"
}
});

A minificação remove espaços em branco, quebras de linha e comentários, reduzindo
o tempo de carregamento e o consumo de banda.

[Otimização de Imagens]
Imagens foram convertidas para a extensão .webp, reduzindo o tamanho em disco
sem perdas visuais perceptíveis.

CONTROLE DE VERSÃO E PADRÕES

[GitFlow]
O repositório segue a estrutura de ramificação GitFlow:

main (versão estável)
└── develop (integração)
└── feature/projetos-dinamicos (desenvolvimento de recurso)

[Conventional Commits]
Padrão de commits adotado no projeto:

feat: Nova funcionalidade.

fix: Correção de erro/bug.

refactor: Reorganização sem alterar comportamento.

style: Ajustes visuais ou de formatação.

docs: Alterações na documentação.

Exemplo:
feat: cria estrutura inicial do projeto
docs: atualiza README com instrução de build

[Semantic Versioning (SemVer)]
Formato: MAJOR.MINOR.PATCH

Versão Atual: v1.0.0 (Primeira versão estável contendo SPA, temas, formulário
e suporte a build via Vite).

COMO EXECUTAR O PROJETO

Pré-requisitos: Node.js e npm instalados.

Instalação de dependências:
npm install

Executar em modo de desenvolvimento:
npm run dev
(Acesse o endereço indicado no terminal, ex: http://localhost:5173/)

Gerar a versão de produção (Build):
npm run build
(Os arquivos otimizados e minificados serão gerados na pasta /dist)

Visualizar o build de produção localmente:
npm run preview

IMPORTANTE: Para execução sem o Vite, utilize um servidor HTTP local (como
Live Server, XAMPP ou WampServer). O carregamento dinâmico via fetch() não
funciona ao abrir o arquivo index.html diretamente via protocolo file://.

================================================================================
CLUBE DO FOCINHO
Desenvolvimento Web Responsivo