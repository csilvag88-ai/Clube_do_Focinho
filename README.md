============================================================
                    CLUBE DO FOCINHO
============================================================

Projeto acadêmico de desenvolvimento web voltado à criação de
uma plataforma digital para uma organização não governamental
(ONG) dedicada à proteção, cuidado e bem-estar animal.

O projeto foi desenvolvido com foco em HTML5 semântico, CSS3,
JavaScript, responsividade, acessibilidade, experiência do
usuário, organização de código e boas práticas de desenvolvimento
web.

------------------------------------------------------------
1. OBJETIVO DO PROJETO
------------------------------------------------------------

O Clube do Focinho tem como objetivo apresentar uma interface
digital para uma organização de proteção animal, permitindo:

- Apresentar a organização e sua proposta;
- Divulgar projetos e ações realizadas;
- Incentivar a participação dos visitantes;
- Disponibilizar formulário de cadastro;
- Oferecer navegação simples e acessível;
- Adaptar a interface para diferentes tamanhos de tela;
- Trabalhar conceitos de desenvolvimento web moderno;
- Utilizar uma arquitetura baseada em SPA (Single Page
  Application);
- Aplicar boas práticas de organização, desempenho e manutenção
  do código.


------------------------------------------------------------
2. TECNOLOGIAS UTILIZADAS
------------------------------------------------------------

HTML5
- Estrutura semântica das páginas;
- Elementos de acessibilidade;
- Formulários com validação nativa;
- Organização adequada do conteúdo.

CSS3
- Variáveis CSS;
- Design System;
- Flexbox;
- CSS Grid;
- Responsividade;
- Media Queries;
- Tema claro e tema escuro;
- Transições e efeitos visuais.

JavaScript
- Navegação dinâmica;
- Funcionamento da SPA;
- Carregamento dos conteúdos;
- Menu responsivo;
- Validação complementar do formulário;
- Máscaras de CPF, telefone e CEP;
- Alternância entre tema claro e escuro;
- Utilização de localStorage.

Vite
- Servidor de desenvolvimento;
- Build de produção;
- Otimização dos arquivos;
- Minificação do código;
- Geração da pasta dist;
- Preparação do projeto para publicação.

ESBuild
- Utilizado pelo Vite durante o processo de build;
- Minificação e otimização dos arquivos JavaScript e CSS.

WebP
- Utilização de imagem otimizada no formato WebP;
- Redução do tamanho dos arquivos;
- Melhoria do desempenho de carregamento.


------------------------------------------------------------
3. ESTRUTURA DO PROJETO
------------------------------------------------------------

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


------------------------------------------------------------
4. ARQUITETURA SPA
------------------------------------------------------------

O projeto utiliza o conceito de SPA (Single Page Application).

A estrutura principal do site está concentrada no arquivo
index.html, que contém os elementos compartilhados entre as
páginas, como:

- Cabeçalho;
- Menu de navegação;
- Controle de tema;
- Área principal de conteúdo;
- Rodapé.

O conteúdo específico de cada página é carregado dinamicamente
por meio do JavaScript.

As páginas utilizadas são:

- home.html
- projetos.html
- cadastro.html

O arquivo app.js realiza o carregamento dos conteúdos através
do método fetch(), inserindo o conteúdo correspondente dentro
do elemento:

#conteudo-principal

A navegação utiliza o atributo:

data-page

permitindo identificar qual conteúdo deve ser carregado.


------------------------------------------------------------
5. NAVEGAÇÃO
------------------------------------------------------------

O menu principal possui as seguintes opções:

- Início
- Projetos
- Cadastro

A navegação é realizada sem a necessidade de recarregar toda
a estrutura da página.

O JavaScript identifica o atributo data-page presente nos links
e carrega o conteúdo correspondente.


------------------------------------------------------------
6. DESIGN SYSTEM
------------------------------------------------------------

O projeto utiliza variáveis CSS para centralizar as principais
definições visuais da interface.

Principais cores utilizadas:

--verde-escuro
#214b38

--verde
#3d7655

--verde-claro
#dcebdd

--laranja
#e98745

--laranja-escuro
#cf6e31

--creme
#fffaf2

--creme-escuro
#f5ead9

--texto
#26352c

--texto-suave
#657168

--borda
#e5dfd4

Também foram definidas variáveis para:

- Largura máxima do conteúdo;
- Raio das bordas;
- Espaçamentos;
- Tipografia;
- Cores;
- Elementos da interface.


------------------------------------------------------------
7. RESPONSIVIDADE
------------------------------------------------------------

O projeto foi desenvolvido utilizando uma estratégia de
responsividade progressiva.

Foram definidos exatamente cinco breakpoints:

1100px
900px
650px
480px
400px

Cada breakpoint adapta a interface de acordo com o espaço
disponível.

Entre os ajustes realizados estão:

- Redimensionamento de elementos;
- Alteração de grids;
- Ajustes de espaçamento;
- Adaptação da navegação;
- Menu hamburguer;
- Redimensionamento de imagens;
- Ajustes de tipografia;
- Organização dos conteúdos em telas menores.


------------------------------------------------------------
8. ACESSIBILIDADE
------------------------------------------------------------

O projeto utiliza recursos de acessibilidade, incluindo:

- HTML semântico;
- Hierarquia adequada de títulos;
- Textos alternativos para imagens;
- Labels associados aos campos de formulário;
- Navegação por teclado;
- Skip link;
- Atributos ARIA quando necessários;
- Contraste adequado entre elementos;
- Estados visuais de interação;
- Estrutura lógica de navegação.


------------------------------------------------------------
9. FORMULÁRIO DE CADASTRO
------------------------------------------------------------

A página de cadastro possui campos para coleta de informações
do participante.

Entre os campos estão:

- Nome completo;
- E-mail;
- Data de nascimento;
- CPF;
- Telefone;
- CEP;
- Endereço;
- Cidade;
- Estado;
- Tipo de participação.

O formulário utiliza recursos nativos do HTML5 para validação.

Também são utilizadas máscaras e padrões para facilitar o
preenchimento de informações como:

- CPF;
- Telefone;
- CEP.

O objetivo é reduzir erros de preenchimento e melhorar a
experiência do usuário.


------------------------------------------------------------
10. TEMA CLARO E TEMA ESCURO
------------------------------------------------------------

O projeto possui dois temas visuais:

- Modo claro;
- Modo escuro.

A preferência do usuário é armazenada utilizando localStorage.

Quando não existe uma preferência previamente registrada, o
sistema verifica a preferência de tema definida no sistema
operacional através de:

prefers-color-scheme

O tema é aplicado utilizando atributos no elemento html e
variáveis CSS.


------------------------------------------------------------
11. MENU RESPONSIVO
------------------------------------------------------------

Em telas menores, a navegação principal é adaptada para um
menu hamburguer.

O menu utiliza:

- Checkbox;
- Label;
- CSS;
- JavaScript quando necessário.

A estrutura permite que o usuário acesse as páginas mesmo em
dispositivos com telas menores.


------------------------------------------------------------
12. VITE
------------------------------------------------------------

O projeto utiliza o Vite como ferramenta de desenvolvimento e
build.

O Vite foi integrado ao projeto para:

- Executar o servidor local;
- Facilitar o desenvolvimento;
- Realizar o build de produção;
- Otimizar os arquivos;
- Minificar os recursos;
- Gerar a versão final do projeto.

O projeto utiliza a versão do Vite definida no package.json.


------------------------------------------------------------
13. CONFIGURAÇÃO DO VITE
------------------------------------------------------------

O arquivo:

vite.config.js

é utilizado para configurar o processo de build.

A configuração atual utiliza o esbuild para minificação dos
arquivos durante a geração da versão de produção.


------------------------------------------------------------
14. INSTALAÇÃO
------------------------------------------------------------

Para instalar as dependências do projeto, execute:

npm install


------------------------------------------------------------
15. EXECUÇÃO EM DESENVOLVIMENTO
------------------------------------------------------------

Para iniciar o servidor de desenvolvimento do Vite:

npm run dev

Após iniciar o servidor, o Vite disponibiliza o projeto
localmente através de um endereço semelhante a:

http://localhost:5173/


------------------------------------------------------------
16. BUILD DE PRODUÇÃO
------------------------------------------------------------

Para gerar a versão otimizada do projeto:

npm run build

O Vite cria a pasta:

dist/

Essa pasta contém os arquivos preparados para publicação.

Durante o processo de build são realizadas otimizações como:

- Minificação;
- Organização dos arquivos;
- Geração dos assets;
- Otimização do código;
- Preparação para produção.


------------------------------------------------------------
17. VISUALIZAÇÃO DO BUILD
------------------------------------------------------------

Depois de executar:

npm run build

é possível visualizar a versão de produção utilizando:

npm run preview

O comando inicia um servidor local para testar os arquivos
gerados dentro da pasta dist.


------------------------------------------------------------
18. OTIMIZAÇÃO DE IMAGENS
------------------------------------------------------------

As imagens do projeto também foram otimizadas.

Foi realizada a conversão da imagem principal para o formato:

WebP

O formato WebP permite reduzir o tamanho do arquivo mantendo
boa qualidade visual.

A utilização de imagens otimizadas contribui para:

- Redução do tempo de carregamento;
- Menor transferência de dados;
- Melhor desempenho;
- Melhor experiência do usuário.


------------------------------------------------------------
19. ORGANIZAÇÃO DOS ARQUIVOS PÚBLICOS
------------------------------------------------------------

A pasta public foi adicionada para armazenar arquivos que
precisam ser disponibilizados diretamente pelo Vite.

Dentro dela estão:

public/html/

Contendo os arquivos de conteúdo utilizados pela SPA.

public/imagens/

Contendo os recursos de imagem utilizados pelo projeto.

Durante o build, esses arquivos são disponibilizados na versão
final do projeto.


------------------------------------------------------------
20. VALIDAÇÃO HTML
------------------------------------------------------------

O código HTML foi submetido ao W3C Validator para verificar
possíveis problemas estruturais.

Durante o desenvolvimento foram identificados e corrigidos
problemas relacionados a:

- Hierarquia de títulos;
- Elementos sem títulos;
- Estrutura semântica;
- Organização dos elementos;
- Estrutura de header e footer;
- Uso adequado de elementos HTML.

Após as correções, o código foi reorganizado seguindo as boas
práticas de HTML5 semântico.


------------------------------------------------------------
21. GRID E FLEXBOX
------------------------------------------------------------

O projeto utiliza CSS Grid e Flexbox de acordo com a necessidade
de cada componente.

CSS Grid é utilizado principalmente para:

- Organização de áreas;
- Cards;
- Estruturas de conteúdo;
- Layouts em colunas.

Flexbox é utilizado principalmente para:

- Alinhamento;
- Navegação;
- Botões;
- Cabeçalho;
- Rodapé;
- Organização de elementos em linha ou coluna.


------------------------------------------------------------
22. GIT E CONTROLE DE VERSÃO
------------------------------------------------------------

O projeto utiliza Git para controle de versão.

O repositório remoto é utilizado para armazenar o código-fonte
e acompanhar a evolução do projeto.


------------------------------------------------------------
23. GITFLOW
------------------------------------------------------------

Durante o desenvolvimento foram considerados conceitos do
GitFlow para organização das alterações.

Branches podem ser utilizadas para separar:

- Desenvolvimento;
- Novas funcionalidades;
- Correções;
- Versões de produção.

A branch principal representa a versão estável do projeto.


------------------------------------------------------------
24. CONVENTIONAL COMMITS
------------------------------------------------------------

Os commits seguem o padrão Conventional Commits.

Exemplos utilizados:

feat:
Nova funcionalidade.

fix:
Correção de problema.

build:
Alterações relacionadas ao processo de build ou dependências.

docs:
Alterações na documentação.

style:
Alterações de formatação ou estilo sem mudança de lógica.

refactor:
Alteração estrutural sem mudança de comportamento.

Exemplo:

build: configura Vite e atualiza documentação


------------------------------------------------------------
25. VERSIONAMENTO
------------------------------------------------------------

O projeto utiliza o conceito de Semantic Versioning (SemVer).

Formato:

MAJOR.MINOR.PATCH

Versão inicial:

1.0.0

MAJOR:
Alterações incompatíveis com versões anteriores.

MINOR:
Novas funcionalidades compatíveis.

PATCH:
Correções e pequenos ajustes.


------------------------------------------------------------
26. PROCESSO DE PRODUÇÃO
------------------------------------------------------------

O processo de produção do projeto segue aproximadamente as
seguintes etapas:

1. Desenvolvimento dos arquivos HTML, CSS e JavaScript;

2. Validação da estrutura HTML;

3. Implementação da responsividade;

4. Implementação da SPA;

5. Implementação do tema claro e escuro;

6. Implementação do formulário;

7. Otimização das imagens;

8. Configuração do Vite;

9. Execução do build;

10. Verificação dos arquivos gerados;

11. Testes da versão de produção;

12. Commit das alterações;

13. Envio das alterações para o repositório Git.


------------------------------------------------------------
27. COMANDOS PRINCIPAIS
------------------------------------------------------------

Instalar dependências:

npm install


Executar em desenvolvimento:

npm run dev


Gerar build de produção:

npm run build


Visualizar build:

npm run preview


Verificar estado do Git:

git status


Adicionar alterações:

git add .


Criar commit:

git commit -m "mensagem do commit"


Enviar alterações para o GitHub:

git push


------------------------------------------------------------
28. VERSÃO DE PRODUÇÃO
------------------------------------------------------------

A versão de produção é gerada pelo comando:

npm run build

Os arquivos finais são disponibilizados dentro da pasta:

dist/

Essa versão contém os arquivos otimizados para publicação.


------------------------------------------------------------
29. OBJETIVOS ACADÊMICOS
------------------------------------------------------------

O projeto tem como finalidade aplicar, de maneira prática,
conceitos estudados durante o desenvolvimento acadêmico,
incluindo:

- HTML5;
- CSS3;
- JavaScript;
- Design responsivo;
- Design System;
- Acessibilidade;
- UX;
- SPA;
- Validação de código;
- Otimização de imagens;
- Build de produção;
- Minificação;
- Vite;
- Git;
- GitFlow;
- Conventional Commits;
- Semantic Versioning.


------------------------------------------------------------
30. CONSIDERAÇÕES FINAIS
------------------------------------------------------------

O Clube do Focinho foi desenvolvido buscando integrar
estrutura semântica, organização visual, responsividade,
acessibilidade, interatividade e boas práticas de desenvolvimento.

A implementação do Vite permite que o projeto possua uma etapa
de desenvolvimento e uma etapa de produção, possibilitando a
geração de arquivos otimizados através do processo de build.

A utilização de SPA, carregamento dinâmico de conteúdo,
responsividade, tema claro e escuro, validação de formulários e
otimização de imagens contribui para uma aplicação mais
organizada, moderna e adequada aos requisitos do projeto.


------------------------------------------------------------
                    CLUBE DO FOCINHO
              Proteção • Cuidado • Bem-estar
------------------------------------------------------------