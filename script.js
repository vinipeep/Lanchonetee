// Link CSV da planilha do Google Sheets
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWhv3boH7Ps-Sjil1GPXZQviqaMf-MYBgvEbq36MAu-lMtiSJtcZFhkda1UjV_DNpOAfB_SlC38BdL/pub?gid=0&single=true&output=csv";

// Cardápio de reserva local (Garante funcionamento se a rede falhar)
const CARDAPIO_PADRAO = [
    { categoria: "lanches", nome: "X-Burguer", descricao: "Hambúrguer, presunto e mussarela.", preco: 8.50 },
    { categoria: "lanches", nome: "X-Salada", descricao: "Alface, tomate, hambúrguer, presunto e mussarela.", preco: 9.50 },
    { categoria: "lanches", nome: "X-Frango", descricao: "Frango, mussarela, alface e tomate.", preco: 12.50 },
    { categoria: "lanches", nome: "X-Burguer G", descricao: "2 hambúrgueres, presunto e mussarela.", preco: 12.50 },
    { categoria: "lanches", nome: "X-Salada G", descricao: "Alface, tomate, 2 hambúrgueres, presunto e mussarela.", preco: 13.50 },
    { categoria: "lanches", nome: "X-Burguer Bacon", descricao: "Hambúrguer, presunto, mussarela e bacon.", preco: 11.50 },
    { categoria: "lanches", nome: "X-Salada Bacon", descricao: "Tomate, alface, hambúrguer, presunto, mussarela e bacon.", preco: 12.50 },
    { categoria: "lanches", nome: "X-Burguer G Bacon", descricao: "2 hambúrgueres, presunto, mussarela e bacon.", preco: 15.50 },
    { categoria: "lanches", nome: "X-Salada G Bacon", descricao: "Tomate, alface, 2 hambúrgueres, presunto, mussarela e bacon.", preco: 16.50 },
    { categoria: "lanches", nome: "X-Frango Bacon", descricao: "Frango, mussarela, tomate, alface e bacon.", preco: 15.50 },
    { categoria: "lanches", nome: "Cachorro Quente na Chapa", descricao: "2 salsichas, mussarela, tomate, alface, milho, bacon e batata palha.", preco: 17.50 },
    { categoria: "lanches", nome: "Cachorro Quente", descricao: "2 salsichas, vinagrete, milho, purê de batata e batata palha.", preco: 13.00 },
    
    { categoria: "pasteis", nome: "Pastel de Carne", descricao: "Preparado na hora.", preco: 8.00 },
    { categoria: "pasteis", nome: "Pastel de Frango", descricao: "Preparado na hora.", preco: 8.00 },
    { categoria: "pasteis", nome: "Pastel de Frango com Queijo", descricao: "Preparado na hora.", preco: 8.00 },
    { categoria: "pasteis", nome: "Pastel Frango com Catupiry", descricao: "Preparado na hora.", preco: 8.00 },
    { categoria: "pasteis", nome: "Pastel Presunto e Mussarela", descricao: "Preparado na hora.", preco: 8.00 },
    { categoria: "pasteis", nome: "Pastel de Pizza", descricao: "Preparado na hora.", preco: 8.00 },
    { categoria: "pasteis", nome: "Pastel de Queijo", descricao: "Preparado na hora.", preco: 8.00 },

    { categoria: "porcoes", nome: "Porção Grande", descricao: "Batata frita com cheddar e bacon.", preco: 30.00, destaque: "sim" },
    { categoria: "porcoes", nome: "Porção Média", descricao: "Batata frita com cheddar e bacon.", preco: 20.00 },
    { categoria: "porcoes", nome: "Porção Pequena", descricao: "Batata frita com cheddar e bacon.", preco: 10.00 },

    { categoria: "pizzas", nome: "Brigadeiro", descricao: "Chocolate e granulado.", preco: 25.00 },
    { categoria: "pizzas", nome: "Prestígio", descricao: "Chocolate, coco ralado e leite condensado.", preco: 25.00 },
    { categoria: "pizzas", nome: "M&M", descricao: "Chocolate e M&M.", preco: 25.00 },
    { categoria: "pizzas", nome: "Tubin", descricao: "Chocolate e tubin.", preco: 25.00 },
    { categoria: "pizzas", nome: "Ouro Branco", descricao: "Chocolate e Ouro Branco.", preco: 25.00 },
    { categoria: "pizzas", nome: "Bis", descricao: "Chocolate e Bis.", preco: 25.00 },
    { categoria: "pizzas", nome: "Chocolate ao Leite e Branco", descricao: "Chocolate ao leite e chocolate branco.", preco: 25.00 }
];

let carrinho = [];

// Elementos DOM
const botoesCategoria = document.querySelectorAll(".categoria-btn");
const secoes = document.querySelectorAll(".secao");
const carrinhoBar = document.getElementById("carrinho-bar");
const carrinhoQtd = document.getElementById("carrinho-qtd");
const carrinhoTotal = document.getElementById("carrinho-total");
const btnAbrirCarrinho = document.getElementById("btn-abrir-carrinho");
const carrinhoModal = document.getElementById("carrinho-modal");
const btnFecharModal = document.getElementById("btn-fechar-modal");
const carrinhoItensContainer = document.getElementById("carrinho-itens");
const modalTotal = document.getElementById("modal-total");
const btnEnviarWhats = document.getElementById("btn-enviar-whats");
const obsPedidoInput = document.getElementById("obs-pedido");

// Função para converter e tratar qualquer formato de preço
function TratarPreco(valor) {
    if (typeof valor === 'number') return isNaN(valor) ? 0 : valor;
    if (!valor) return 0;

    let limpo = String(valor)
        .replace("R$", "")
        .replace(/\s/g, "")
        .trim();

    if (limpo.includes(',') && limpo.includes('.')) {
        limpo = limpo.replace(/\./g, '').replace(',', '.');
    } else if (limpo.includes(',')) {
        limpo = limpo.replace(',', '.');
    }

    const res = parseFloat(limpo);
    return isNaN(res) ? 0 : res;
}

// Leitor de CSV resiliente
function parseCSV(text) {
    const lines = text.trim().split(/\r?\n/);
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, '').toLowerCase());

    return lines.slice(1).map(line => {
        const regex = /(?:^|,)(?:"([^"]*)"|([^,]*))/g;
        let matches = [];
        let match;
        while ((match = regex.exec(line)) !== null) {
            let val = match[1] !== undefined ? match[1] : match[2];
            matches.push(val ? val.trim() : '');
        }

        let obj = {};
        headers.forEach((header, index) => {
            obj[header] = matches[index] || '';
        });
        return obj;
    });
}

// =========================
// CARREGAR DADOS DA PLANILHA
// =========================

async function carregarCardapio() {
    try {
        const resposta = await fetch(SHEET_CSV_URL);
        if (!resposta.ok) throw new Error("Falha na requisição");

        const csvTexto = await resposta.text();
        const dados = parseCSV(csvTexto);

        const produtos = dados.map(item => ({
            categoria: (item.categoria || '').toLowerCase().trim(),
            nome: item.nome || '',
            descricao: item.descricao || '',
            preco: TratarPreco(item.preco),
            destaque: (item.destaque || '').toLowerCase().trim()
        })).filter(p => p.nome && p.categoria);

        if (produtos.length > 0) {
            exibirProdutos(produtos);
            return;
        }
        throw new Error("Planilha vazia");
    } catch (erro) {
        console.warn("Usando cardápio de reserva:", erro);
        exibirProdutos(CARDAPIO_PADRAO);
    }
}

function exibirProdutos(produtos) {
    document.querySelectorAll(".produtos").forEach(container => container.innerHTML = "");

    produtos.forEach(p => {
        const container = document.getElementById(`lista-${p.categoria}`);
        if (!container) return;

        const card = document.createElement("article");
        card.className = `produto ${p.destaque === 'sim' ? 'destaque' : ''}`;

        const numPreco = TratarPreco(p.preco);
        const precoFormatado = numPreco.toFixed(2).replace('.', ',');

        card.innerHTML = `
            <div class="produto-conteudo">
                <span class="produto-categoria">${p.categoria}</span>
                <h3>${p.nome}</h3>
                <p>${p.descricao || ''}</p>
                <div class="produto-rodape">
                    <strong class="preco">R$ ${precoFormatado}</strong>
                    <button class="btn-add" data-nome="${p.nome}" data-preco="${numPreco}">+ Adicionar</button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    configurarBotoesAdicionar();
}

// =========================
// FILTRO DE CATEGORIAS
// =========================

botoesCategoria.forEach(botao => {
    botao.addEventListener("click", () => {
        const categoriaSelecionada = botao.dataset.categoria;

        botoesCategoria.forEach(btn => btn.classList.remove("ativo"));
        botao.classList.add("ativo");

        secoes.forEach(secao => {
            const categoriaSecao = secao.dataset.secao;
            if (categoriaSelecionada === "todos" || categoriaSelecionada === categoriaSecao) {
                secao.style.display = "block";
            } else {
                secao.style.display = "none";
            }
        });
    });
});

// =========================
// CARRINHO DE COMPRAS
// =========================

function configurarBotoesAdicionar() {
    document.querySelectorAll(".btn-add").forEach(botao => {
        botao.addEventListener("click", () => {
            const nome = botao.dataset.nome;
            const preco = TratarPreco(botao.dataset.preco);

            const itemExistente = carrinho.find(item => item.nome === nome);

            if (itemExistente) {
                itemExistente.quantidade++;
            } else {
                carrinho.push({ nome, preco, quantidade: 1 });
            }

            atualizarCarrinho();
        });
    });
}

function atualizarCarrinho() {
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    const valorTotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

    if (totalItens > 0) {
        carrinhoBar.classList.remove("escondido");
    } else {
        carrinhoBar.classList.add("escondido");
        carrinhoModal.classList.add("escondido");
    }

    carrinhoQtd.innerText = `${totalItens} ${totalItens === 1 ? 'item' : 'itens'}`;
    carrinhoTotal.innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    modalTotal.innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;

    renderizarItensModal();
}

function renderizarItensModal() {
    carrinhoItensContainer.innerHTML = "";

    if (carrinho.length === 0) {
        carrinhoItensContainer.innerHTML = "<p style='text-align: center; color: #888;'>Seu carrinho está vazio.</p>";
        return;
    }

    carrinho.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-carrinho");

        itemDiv.innerHTML = `
            <div class="item-info">
                <strong>${item.nome}</strong>
                <span>R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="item-qtd-controles">
                <button class="btn-qtd" onclick="alterarQuantidade(${index}, -1)">-</button>
                <span>${item.quantidade}</span>
                <button class="btn-qtd" onclick="alterarQuantidade(${index}, 1)">+</button>
            </div>
        `;

        carrinhoItensContainer.appendChild(itemDiv);
    });
}

window.alterarQuantidade = function(index, delta) {
    carrinho[index].quantidade += delta;

    if (carrinho[index].quantidade <= 0) {
        carrinho.splice(index, 1);
    }

    atualizarCarrinho();
};

btnAbrirCarrinho.addEventListener("click", () => carrinhoModal.classList.remove("escondido"));
btnFecharModal.addEventListener("click", () => carrinhoModal.classList.add("escondido"));

// =========================
// WHATSAPP
// =========================

btnEnviarWhats.addEventListener("click", () => {
    if (carrinho.length === 0) return;

    const telefone = "553599319466";
    let mensagem = "🍔 *NOVO PEDIDO - PAI & FILHO*\n\n";

    carrinho.forEach(item => {
        const subtotal = (item.preco * item.quantidade).toFixed(2).replace('.', ',');
        mensagem += `• ${item.quantidade}x ${item.nome} - R$ ${subtotal}\n`;
    });

    const valorTotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    mensagem += `\n*Total:* R$ ${valorTotal.toFixed(2).replace('.', ',')}\n`;

    const obs = obsPedidoInput.value.trim();
    if (obs !== "") {
        mensagem += `\n*Observações:* ${obs}\n`;
    }

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
});

carregarCardapio();