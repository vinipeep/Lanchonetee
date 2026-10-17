
const WHATSAPP_NUMERO = '5535988320463';

// CARDÁPIO FIXO
// Os preços dos 34 produtos originais foram preservados.
// Pizzas grandes: R$ 35,00 provisórios — confirme antes de publicar.

const produtosFixos = [
    // LANCHES
    { id: "1", categoria: "lanches", nome: "X-Burguer", descricao: "Hambúrguer, presunto e mussarela", preco: "R$ 8,50", destaque: "nao" },
    { id: "2", categoria: "lanches", nome: "X-Salada", descricao: "Alface, tomate, hambúrguer, presunto e mussarela", preco: "R$ 9,50", destaque: "nao" },
    { id: "3", categoria: "lanches", nome: "X-Frango", descricao: "Frango, mussarela, alface e tomate", preco: "R$ 12,50", destaque: "nao" },
    { id: "4", categoria: "lanches", nome: "X-Burguer G", descricao: "2 hambúrgueres, presunto e mussarela", preco: "R$ 12,50", destaque: "nao" },
    { id: "5", categoria: "lanches", nome: "X-Salada G", descricao: "Alface, tomate, 2 hambúrgueres, presunto e mussarela", preco: "R$ 13,50", destaque: "nao" },
    { id: "6", categoria: "lanches", nome: "X-Burguer Bacon", descricao: "Hambúrguer, presunto, mussarela e bacon", preco: "R$ 11,50", destaque: "nao" },
    { id: "7", categoria: "lanches", nome: "X-Salada Bacon", descricao: "Tomate, alface, hambúrguer, presunto, mussarela e bacon", preco: "R$ 12,50", destaque: "nao" },
    { id: "8", categoria: "lanches", nome: "X-Burguer G Bacon", descricao: "2 hambúrgueres, presunto, mussarela e bacon", preco: "R$ 15,50", destaque: "nao" },
    { id: "9", categoria: "lanches", nome: "X-Salada G Bacon", descricao: "Tomate, alface, 2 hambúrgueres, presunto, mussarela e bacon", preco: "R$ 16,50", destaque: "nao" },
    { id: "10", categoria: "lanches", nome: "X-Frango Bacon", descricao: "Frango, mussarela, tomate, alface e bacon", preco: "R$ 15,50", destaque: "nao" },
    { id: "11", categoria: "lanches", nome: "Cachorro Quente na Chapa", descricao: "2 salsichas, mussarela, tomate, alface, milho, bacon e batata palha", preco: "R$ 17,50", destaque: "nao" },
    { id: "12", categoria: "lanches", nome: "Cachorro Quente", descricao: "2 salsichas, vinagrete, milho, purê de batata e batata palha", preco: "R$ 13,00", destaque: "nao" },

    // PASTÉIS
    { id: "13", categoria: "pasteis", nome: "Pastel de Carne", descricao: "Pastel tradicional de carne", preco: "R$ 8,00", destaque: "nao" },
    { id: "14", categoria: "pasteis", nome: "Pastel de Frango", descricao: "Pastel tradicional de frango", preco: "R$ 8,00", destaque: "nao" },
    { id: "15", categoria: "pasteis", nome: "Pastel Frango c/ Queijo", descricao: "Frango com queijo", preco: "R$ 8,00", destaque: "nao" },
    { id: "16", categoria: "pasteis", nome: "Pastel Frango c/ Catupiry", descricao: "Frango com catupiry", preco: "R$ 8,00", destaque: "nao" },
    { id: "17", categoria: "pasteis", nome: "Pastel Presunto e Mussarela", descricao: "Presunto e mussarela", preco: "R$ 8,00", destaque: "nao" },
    { id: "18", categoria: "pasteis", nome: "Pastel de Pizza", descricao: "Queijo, presunto, tomate e orégano", preco: "R$ 8,00", destaque: "nao" },
    { id: "19", categoria: "pasteis", nome: "Pastel de Queijo", descricao: "Mussarela", preco: "R$ 8,00", destaque: "nao" },

    // PORÇÕES
    { id: "20", categoria: "porcoes", nome: "Porção Batata Grande", descricao: "Batata frita com cheddar e bacon", preco: "R$ 30,00", destaque: "sim" },
    { id: "21", categoria: "porcoes", nome: "Porção Batata Média", descricao: "Batata frita com cheddar e bacon", preco: "R$ 20,00", destaque: "nao" },
    { id: "22", categoria: "porcoes", nome: "Porção Batata Pequena", descricao: "Batata frita com cheddar e bacon", preco: "R$ 10,00", destaque: "nao" },

    // PIZZAS DOCES PEQUENAS
    { id: "23", categoria: "pizzas_doces", nome: "Pizza Brigadeiro", descricao: "Chocolate e granulado", preco: "R$ 25,00", destaque: "nao" },
    { id: "24", categoria: "pizzas_doces", nome: "Pizza Prestígio", descricao: "Chocolate, coco ralado e leite condensado", preco: "R$ 25,00", destaque: "nao" },
    { id: "25", categoria: "pizzas_doces", nome: "Pizza M&M", descricao: "Chocolate e M&M", preco: "R$ 25,00", destaque: "nao" },
    { id: "26", categoria: "pizzas_doces", nome: "Pizza Tubin", descricao: "Chocolate e tubin", preco: "R$ 25,00", destaque: "nao" },
    { id: "27", categoria: "pizzas_doces", nome: "Pizza Ouro Branco", descricao: "Chocolate e Ouro Branco", preco: "R$ 25,00", destaque: "nao" },
    { id: "28", categoria: "pizzas_doces", nome: "Pizza Bis", descricao: "Chocolate e Bis", preco: "R$ 25,00", destaque: "nao" },
    { id: "29", categoria: "pizzas_doces", nome: "Pizza Choc Leite & Branco", descricao: "Chocolate ao leite e chocolate branco", preco: "R$ 25,00", destaque: "nao" },

    // PIZZAS SALGADAS PEQUENAS
    { id: "30", categoria: "pizzas_salgadas", nome: "Pizza Mussarela", descricao: "Molho de tomate, mussarela e orégano", preco: "R$ 25,00", destaque: "nao" },
    { id: "31", categoria: "pizzas_salgadas", nome: "Pizza Calabresa", descricao: "Molho de tomate, mussarela, calabresa e cebola", preco: "R$ 25,00", destaque: "nao" },
    { id: "32", categoria: "pizzas_salgadas", nome: "Pizza Frango c/ Catupiry", descricao: "Molho de tomate, mussarela, frango desfiado e catupiry", preco: "R$ 25,00", destaque: "nao" },
    { id: "33", categoria: "pizzas_salgadas", nome: "Pizza Portuguesa", descricao: "Molho de tomate, mussarela, presunto, ovo, cebola e ervilha", preco: "R$ 25,00", destaque: "nao" },
    { id: "34", categoria: "pizzas_salgadas", nome: "Pizza Bacon", descricao: "Molho de tomate, mussarela e bacon crocante", preco: "R$ 25,00", destaque: "nao" },

    // PIZZAS SALGADAS GRANDES — PREÇO PROVISÓRIO
    { id: "35", categoria: "pizzas_grandes", nome: "Pizza Grande Mussarela", descricao: "Molho de tomate, mussarela e orégano • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "36", categoria: "pizzas_grandes", nome: "Pizza Grande Calabresa", descricao: "Molho de tomate, mussarela, calabresa e cebola • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "37", categoria: "pizzas_grandes", nome: "Pizza Grande Frango c/ Catupiry", descricao: "Molho de tomate, mussarela, frango desfiado e catupiry • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "38", categoria: "pizzas_grandes", nome: "Pizza Grande Portuguesa", descricao: "Molho de tomate, mussarela, presunto, ovo, cebola e ervilha • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "39", categoria: "pizzas_grandes", nome: "Pizza Grande Bacon", descricao: "Molho de tomate, mussarela e bacon crocante • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },

    // PIZZAS DOCES GRANDES — PREÇO PROVISÓRIO
    { id: "40", categoria: "pizzas_grandes", nome: "Pizza Grande Brigadeiro", descricao: "Chocolate e granulado • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "41", categoria: "pizzas_grandes", nome: "Pizza Grande Prestígio", descricao: "Chocolate, coco ralado e leite condensado • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "42", categoria: "pizzas_grandes", nome: "Pizza Grande M&M", descricao: "Chocolate e M&M • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "43", categoria: "pizzas_grandes", nome: "Pizza Grande Tubin", descricao: "Chocolate e tubin • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "44", categoria: "pizzas_grandes", nome: "Pizza Grande Ouro Branco", descricao: "Chocolate e Ouro Branco • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "45", categoria: "pizzas_grandes", nome: "Pizza Grande Bis", descricao: "Chocolate e Bis • 8 pedaços", preco: "R$ 35,00", destaque: "nao" },
    { id: "46", categoria: "pizzas_grandes", nome: "Pizza Grande Choc Leite & Branco", descricao: "Chocolate ao leite e chocolate branco • 8 pedaços", preco: "R$ 35,00", destaque: "nao" }
];

// ADICIONAIS
const adicionaisPorCategoria = {
    pizzas_salgadas: [
        { nome: "Catupiry extra", preco: 3 },
        { nome: "Cheddar extra", preco: 3 },
        { nome: "Mussarela extra", preco: 3 },
        { nome: "Batata palha", preco: 2 },
        { nome: "Milho", preco: 1 }
    ],
    pizzas_grandes: [
        { nome: "Catupiry extra", preco: 5 },
        { nome: "Cheddar extra", preco: 5 },
        { nome: "Mussarela extra", preco: 5.5 },
        { nome: "Milho", preco: 2 },
        { nome: "Batata palha", preco: 3 }
    ],
    pizzas_doces: [
        { nome: "Chocolate branco", preco: 5 }
    ]
};

let carrinho = [];

function normalizarCategoria(texto) {
    return String(texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .replace(/[\s-]+/g, "_");
}

function escapar(texto) {
    return String(texto ?? "").replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[caractere]));
}

function precoParaNumero(preco) {
    const limpo = String(preco ?? "").replace(/[^\d,.-]/g, "");
    const normalizado = limpo.includes(",")
        ? limpo.replace(/\./g, "").replace(",", ".")
        : limpo;

    return Number.parseFloat(normalizado) || 0;
}

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function renderizarProdutos() {
    document.querySelectorAll(".produtos").forEach(container => {
        container.innerHTML = "";
    });

    produtosFixos.forEach(produto => {
        const idContainer = `lista-${produto.categoria}`;
        const container = document.getElementById(idContainer);

        if (!container) {
            console.warn(`Não encontrei o container: ${idContainer}`);
            return;
        }

        const adicionais = adicionaisPorCategoria[produto.categoria] || [];
        const chave = `extra-${produto.id}`;

        const card = document.createElement("article");
        card.className = "produto" +
            (produto.destaque === "sim" ? " destaque" : "");

        const htmlAdicionais = adicionais.length
            ? `
                <div class="adicionais-box">
                    <div class="adicionais-titulo">🧀 Quer adicionar algo?</div>
                    <p class="adicionais-instrucao">
                        Toque nas opções para incluir no seu pedido.
                    </p>

                    <div class="adicionais-lista">
                        ${adicionais.map((adicional, indice) => `
                            <label class="adicional-opcao" for="${chave}-${indice}">
                                <span class="adicional-nome">${escapar(adicional.nome)}</span>
                                <span class="adicional-direita">
                                    <span class="adicional-preco">
                                        + ${formatarPreco(adicional.preco)}
                                    </span>
                                    <input
                                        class="checkbox-adicional"
                                        type="checkbox"
                                        id="${chave}-${indice}"
                                        data-nome="${escapar(adicional.nome)}"
                                        data-preco="${adicional.preco}"
                                    >
                                </span>
                            </label>
                        `).join("")}
                    </div>

                    <div class="adicionais-total">
                        <span>Total dos adicionais</span>
                        <strong class="valor-adicionais">R$ 0,00</strong>
                    </div>
                </div>
            `
            : "";

        card.innerHTML = `
            <div class="produto-conteudo">
                <span class="produto-categoria">${escapar(produto.categoria.replace(/_/g, " "))}</span>
                <h3>${escapar(produto.nome)}</h3>
                <p>${escapar(produto.descricao)}</p>

                ${htmlAdicionais}

                <div class="produto-rodape">
                    <strong class="preco">${formatarPreco(precoParaNumero(produto.preco))}</strong>
                    <button class="btn-add" type="button">+ Adicionar ao pedido</button>
                </div>
            </div>
        `;

        const caixas = card.querySelectorAll(".checkbox-adicional");
        const totalExtras = card.querySelector(".valor-adicionais");

        caixas.forEach(caixa => {
            caixa.addEventListener("change", () => {
                let soma = 0;

                caixas.forEach(opcao => {
                    if (opcao.checked) {
                        soma += Number(opcao.dataset.preco);
                    }
                });

                totalExtras.textContent = formatarPreco(soma);
            });
        });

        card.querySelector(".btn-add").addEventListener("click", () => {
            const selecionados = [];

            caixas.forEach(caixa => {
                if (caixa.checked) {
                    selecionados.push({
                        nome: caixa.dataset.nome,
                        preco: Number(caixa.dataset.preco)
                    });
                }
            });

            adicionarAoCarrinho(produto, selecionados);
        });

        container.appendChild(card);
    });
}

function criarChaveCarrinho(produto, adicionais) {
    const nomes = adicionais
        .map(adicional => adicional.nome)
        .sort()
        .join("|");

    return `${produto.id}::${nomes}`;
}

function adicionarAoCarrinho(produto, adicionais = []) {
    const precoBase = precoParaNumero(produto.preco);
    const precoExtras = adicionais.reduce(
        (soma, adicional) => soma + adicional.preco, 0
    );

    const chave = criarChaveCarrinho(produto, adicionais);
    const existente = carrinho.find(item => item.chave === chave);

    if (existente) {
        existente.qtd++;
    } else {
        carrinho.push({
            chave,
            nome: produto.nome,
            precoBase,
            precoExtras,
            preco: precoBase + precoExtras,
            adicionais: adicionais.map(adicional => ({ ...adicional })),
            qtd: 1
        });
    }

    atualizarCarrinho();
}

function alterarQtd(chave, delta) {
    const item = carrinho.find(produto => produto.chave === chave);

    if (!item) return;

    item.qtd += delta;

    if (item.qtd <= 0) {
        carrinho = carrinho.filter(produto => produto.chave !== chave);
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const barra = document.getElementById("carrinho-bar");
    const lista = document.getElementById("carrinho-itens");

    const totalItens = carrinho.reduce((soma, item) => soma + item.qtd, 0);
    const total = carrinho.reduce(
        (soma, item) => soma + item.qtd * item.preco, 0
    );

    document.getElementById("carrinho-qtd").textContent =
        `${totalItens} ${totalItens === 1 ? "item" : "itens"}`;

    document.getElementById("carrinho-total").textContent = formatarPreco(total);
    document.getElementById("modal-total").textContent = formatarPreco(total);

    barra.classList.toggle("escondido", totalItens === 0);
    lista.innerHTML = "";

    carrinho.forEach(item => {
        const div = document.createElement("div");
        div.className = "item-carrinho";

        const detalhesExtras = item.adicionais.length
            ? `<br><small>Extras: ${item.adicionais.map(extra => escapar(extra.nome)).join(", ")}</small>`
            : "";

        div.innerHTML = `
            <div class="item-info">
                <strong>${escapar(item.nome)}</strong>
                ${detalhesExtras}
                <br><span>${formatarPreco(item.preco * item.qtd)}</span>
            </div>

            <div class="item-qtd-controles">
                <button class="btn-qtd btn-menos" type="button" aria-label="Diminuir">−</button>
                <strong>${item.qtd}</strong>
                <button class="btn-qtd btn-mais" type="button" aria-label="Aumentar">+</button>
            </div>
        `;

        div.querySelector(".btn-menos").addEventListener("click", () => {
            alterarQtd(item.chave, -1);
        });

        div.querySelector(".btn-mais").addEventListener("click", () => {
            alterarQtd(item.chave, 1);
        });

        lista.appendChild(div);
    });

    if (totalItens === 0) {
        document.getElementById("carrinho-modal").classList.add("escondido");
    }
}

function pegarEndereco() {
    const valor = id => document.getElementById(id).value.trim();

    return {
        bairro: valor("end-bairro"),
        rua: valor("end-rua"),
        numero: valor("end-numero"),
        referencia: valor("end-ref")
    };
}

function enviarWhatsApp() {
    if (!carrinho.length) return;

    const endereco = pegarEndereco();
    const campoBairro = document.getElementById("end-bairro");
    const erroBairro = document.getElementById("erro-bairro");

    if (!endereco.bairro) {
        campoBairro.classList.add("invalido");
        erroBairro.classList.remove("escondido");
        campoBairro.focus();
        campoBairro.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    const observacoes = document.getElementById("obs-pedido").value.trim();
    const total = carrinho.reduce(
        (soma, item) => soma + item.qtd * item.preco, 0
    );

    let mensagem = "Olá! Gostaria de fazer o seguinte pedido:\n\n";

    carrinho.forEach(item => {
        mensagem += `*${item.qtd}x ${item.nome}*\n`;
        mensagem += `Valor: ${formatarPreco(item.qtd * item.preco)}\n`;

        if (item.adicionais.length) {
            mensagem += "Adicionais:\n";

            item.adicionais.forEach(extra => {
                mensagem += `- ${extra.nome} (+${formatarPreco(extra.preco)})\n`;
            });
        }

        mensagem += "\n";
    });

    mensagem += `*Total: ${formatarPreco(total)}*`;

    if (observacoes) {
        mensagem += `\n\n*Observações:* ${observacoes}`;
    }

    mensagem += "\n\n*Endereço de entrega:*";
    mensagem += `\nBairro: ${endereco.bairro}`;

    if (endereco.rua) mensagem += `\nRua: ${endereco.rua}`;
    if (endereco.numero) mensagem += `\nNúmero: ${endereco.numero}`;
    if (endereco.referencia) mensagem += `\nReferência: ${endereco.referencia}`;

    mensagem += "\n\nGostaria de saber o valor da taxa de entrega.";

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

function configurarFiltro() {
    const botoes = document.querySelectorAll(".categoria-btn");
    const secoes = document.querySelectorAll(".secao");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            botoes.forEach(item => item.classList.remove("ativo"));
            botao.classList.add("ativo");

            const categoria = botao.dataset.categoria;

            secoes.forEach(secao => {
                secao.style.display =
                    categoria === "todos" || secao.dataset.secao === categoria
                        ? "block"
                        : "none";
            });

            document.querySelector(".container").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos();
    configurarFiltro();

    const modal = document.getElementById("carrinho-modal");

    document.getElementById("btn-abrir-carrinho").addEventListener("click", () => {
        modal.classList.remove("escondido");
    });

    document.getElementById("btn-fechar-modal").addEventListener("click", () => {
        modal.classList.add("escondido");
    });

    modal.addEventListener("click", evento => {
        if (evento.target === modal) {
            modal.classList.add("escondido");
        }
    });

    document.getElementById("btn-enviar-whats").addEventListener("click", enviarWhatsApp);

    document.getElementById("end-bairro").addEventListener("input", evento => {
        if (evento.target.value.trim()) {
            evento.target.classList.remove("invalido");
            document.getElementById("erro-bairro").classList.add("escondido");
        }
    });
});
