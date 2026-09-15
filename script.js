// =========================
// FILTRO DE CATEGORIAS
// =========================

const botoesCategoria = document.querySelectorAll(".categoria-btn");
const secoes = document.querySelectorAll(".secao");


botoesCategoria.forEach(botao => {

    botao.addEventListener("click", () => {

        const categoriaSelecionada =
            botao.dataset.categoria;


        // Remove o estado ativo dos botões

        botoesCategoria.forEach(btn => {
            btn.classList.remove("ativo");
        });

        botao.classList.add("ativo");


        // Mostra ou esconde as seções

        secoes.forEach(secao => {

            const categoriaSecao =
                secao.dataset.secao;


            if (
                categoriaSelecionada === "todos" ||
                categoriaSelecionada === categoriaSecao
            ) {

                secao.style.display = "block";

            } else {

                secao.style.display = "none";

            }

        });

    });

});