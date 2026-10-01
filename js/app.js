/* =========================================================
   CLUBE DO FOCINHO
   NAVEGAÇÃO SPA + SISTEMA DE TEMPLATES
   ========================================================= */

const main = document.querySelector("main");

/* =========================================================
   DADOS DOS PROJETOS
   ========================================================= */

const projetos = [
    {
        icone: "🐶",
        titulo: "Resgate e acolhimento",
        descricao:
            "Atuamos no resgate de cães e gatos que estejam em situação de abandono, risco ou vulnerabilidade, oferecendo acolhimento e os cuidados necessários.",
        status: "Ativo"
    },

    {
        icone: "❤️",
        titulo: "Cuidados veterinários",
        descricao:
            "Os animais acolhidos recebem atenção e cuidados veterinários necessários para sua recuperação e preparação para uma nova etapa de suas vidas.",
        status: "Ativo"
    },

    {
        icone: "🏠",
        titulo: "Adoção responsável",
        descricao:
            "Buscamos conectar animais acolhidos a famílias preparadas para oferecer um lar seguro, responsável e cheio de cuidado.",
        status: "Ativo"
    },

    {
        icone: "🤝",
        titulo: "Campanhas solidárias",
        descricao:
            "Promovemos campanhas e ações de conscientização para incentivar a participação da comunidade na proteção e no bem-estar animal.",
        status: "Ativo"
    },

    {
        icone: "🐾",
        titulo: "Apoio aos animais vulneráveis",
        descricao:
            "Nosso trabalho também busca oferecer suporte aos animais que precisam de atenção, proteção e oportunidades para uma vida melhor.",
        status: "Ativo"
    },

    {
        icone: "🌱",
        titulo: "Conscientização",
        descricao:
            "Incentivamos atitudes responsáveis e a conscientização sobre a importância do cuidado, respeito e proteção dos animais.",
        status: "Ativo"
    }
];

/* =========================================================
   SISTEMA DE TEMPLATE
   ========================================================= */

function renderizarProjetos() {

    const lista =
        document.querySelector("#lista-projetos");

    if (!lista) {
        return;
    }

    lista.innerHTML = projetos.map(projeto => `
        <article class="card-projeto">

            <span class="projeto-icone"
                aria-hidden="true">
                ${projeto.icone}
            </span>

            <span class="badge ativo">
                ${projeto.status}
            </span>

            <h3>
                ${projeto.titulo}
            </h3>

            <p>
                ${projeto.descricao}
            </p>

        </article>
    `).join("");
}

/* =========================================================
   PÁGINAS
   ========================================================= */

const paginas = {
    home: "html/home.html",
    projetos: "html/projetos.html",
    cadastro: "html/cadastro.html"
};

/* =========================================================
   TÍTULOS
   ========================================================= */

const titulos = {
    home: "Clube do Focinho | Proteção Animal",
    projetos: "Projetos | Clube do Focinho",
    cadastro: "Cadastro | Clube do Focinho"
};

/* =========================================================
   CARREGAR PÁGINA
   ========================================================= */

async function carregarPagina(
    pagina,
    atualizarHistorico = true
) {

    if (!paginas[pagina]) {
        pagina = "home";
    }

    try {

        const resposta =
            await fetch(paginas[pagina]);

        if (!resposta.ok) {
            throw new Error(
                `Não foi possível carregar ${paginas[pagina]}`
            );
        }

        const html =
            await resposta.text();

        const documento =
            new DOMParser()
                .parseFromString(html, "text/html");

        const novoMain =
            documento.querySelector("main");

        if (!novoMain) {
            throw new Error(
                "O arquivo carregado não possui um elemento <main>."
            );
        }

        /*
         * Injeta somente o conteúdo do main
         * da página carregada.
         */
        main.innerHTML =
            novoMain.innerHTML;

        /*
         * Depois que projetos.html foi inserido,
         * o template é processado.
         */
        renderizarProjetos();

        atualizarTitulo(pagina);

        atualizarMenu(pagina);

        fecharMenu();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (atualizarHistorico) {

            history.pushState(
                { pagina: pagina },
                "",
                `#${pagina}`
            );
        }

        ativarFormulario();

    } catch (erro) {

        console.error(
            "Erro ao carregar página:",
            erro
        );

        main.innerHTML = `
            <section class="pagina-intro">

                <span class="subtitulo">
                    ERRO
                </span>

                <h1>
                    Não foi possível carregar a página.
                </h1>

                <p>
                    Verifique se os arquivos estão nas
                    pastas corretas e se o projeto está
                    sendo executado por um servidor local.
                </p>

            </section>
        `;
    }
}

/* =========================================================
   ATUALIZAR TÍTULO
   ========================================================= */

function atualizarTitulo(pagina) {

    document.title =
        titulos[pagina] || titulos.home;
}

/* =========================================================
   ATUALIZAR MENU
   ========================================================= */

function atualizarMenu(pagina) {

    const links =
        document.querySelectorAll(
            ".navegacao a[data-page]"
        );

    links.forEach(link => {

        if (link.dataset.page === pagina) {

            link.setAttribute(
                "aria-current",
                "page"
            );

        } else {

            link.removeAttribute(
                "aria-current"
            );
        }
    });
}

/* =========================================================
   FECHAR MENU MOBILE
   ========================================================= */

function fecharMenu() {

    const menu =
        document.querySelector("#menu-toggle");

    if (menu) {
        menu.checked = false;
    }
}

/* =========================================================
   INTERCEPTAÇÃO DA NAVEGAÇÃO
   ========================================================= */

document.addEventListener(
    "click",
    evento => {

        const link =
            evento.target.closest(
                "[data-page]"
            );

        if (!link) {
            return;
        }

        evento.preventDefault();

        const pagina =
            link.dataset.page;

        carregarPagina(pagina);
    }
);

/* =========================================================
   VOLTAR / AVANÇAR DO NAVEGADOR
   ========================================================= */

window.addEventListener(
    "popstate",
    () => {

        const pagina =
            window.location.hash
                .replace("#", "") || "home";

        carregarPagina(
            pagina,
            false
        );
    }
);

/* =========================================================
   FORMULÁRIO
   ========================================================= */

function ativarFormulario() {

    const formulario =
        document.querySelector(
            "#form-cadastro"
        );

    if (!formulario) {
        return;
    }

    formulario.addEventListener(
        "submit",
        evento => {

            evento.preventDefault();

            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;
            }

            mostrarToast(
                "Cadastro enviado com sucesso!"
            );

            formulario.reset();
        }
    );
}

/* =========================================================
   TOAST
   ========================================================= */

function mostrarToast(mensagem) {

    const toastExistente =
        document.querySelector(".toast");

    if (toastExistente) {
        toastExistente.remove();
    }

    const toast =
        document.createElement("aside");

    toast.className = "toast";

    toast.setAttribute(
        "role",
        "status"
    );

    toast.textContent =
        mensagem;

    document.body.appendChild(
        toast
    );

    setTimeout(
        () => {
            toast.remove();
        },
        3500
    );
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

const paginaInicial =
    window.location.hash
        .replace("#", "") || "home";

carregarPagina(
    paginaInicial,
    false
);