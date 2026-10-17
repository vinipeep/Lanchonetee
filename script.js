/* ========================================= */
/* CONFIGURAÇÕES                             */
/* ========================================= */
const WHATSAPP_NUMERO = '5535988320463'; // 55 + DDD + número

/* ========================================= */
/* CARDÁPIO (edite aqui para mudar produtos) */
/* ========================================= */
const produtosFixos = [
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

    { id: "13", categoria: "pasteis", nome: "Pastel de Carne", descricao: "Pastel tradicional de carne", preco: "R$ 8,00", destaque: "nao" },
    { id: "14", categoria: "pasteis", nome: "Pastel de Frango", descricao: "Pastel tradicional de frango", preco: "R$ 8,00", destaque: "nao" },
    { id: "15", categoria: "pasteis", nome: "Pastel Frango c/ Queijo", descricao: "Frango com queijo", preco: "R$ 8,00", destaque: "nao" },
    { id: "16", categoria: "pasteis", nome: "Pastel Frango c/ Catupiry", descricao: "Frango com catupiry", preco: "R$ 8,00", destaque: "nao" },
    { id: "17", categoria: "pasteis", nome: "Pastel Presunto e Mussarela", descricao: "Presunto e mussarela", preco: "R$ 8,00", destaque: "nao" },
    { id: "18", categoria: "pasteis", nome: "Pastel de Pizza", descricao: "Queijo, presunto, tomate e orégano", preco: "R$ 8,00", destaque: "nao" },
    { id: "19", categoria: "pasteis", nome: "Pastel de Queijo", descricao: "Mussarela", preco: "R$ 8,00", destaque: "nao" },

    { id: "20", categoria: "porcoes", nome: "Porção Batata Grande", descricao: "Batata frita com cheddar e bacon", preco: "R$ 30,00", destaque: "sim" },
    { id: "21", categoria: "porcoes", nome: "Porção Batata Média", descricao: "Batata frita com cheddar e bacon", preco: "R$ 20,00", destaque: "nao" },
    { id: "22", categoria: "porcoes", nome: "Porção Batata Pequena", descricao: "Batata frita com cheddar e bacon", preco: "R$ 10,00", destaque: "nao" },

    { id: "23", categoria: "pizzas_doces", nome: "Pizza Brigadeiro", descricao: "Chocolate e granulado", preco: "R$ 25,00", destaque: "nao" },
    { id: "24", categoria: "pizzas_doces", nome: "Pizza Prestígio", descricao: "Chocolate, coco ralado e leite condensado", preco: "R$ 25,00", destaque: "nao" },
    { id: "25", categoria: "pizzas_doces", nome: "Pizza M&M", descricao: "Chocolate e M&M", preco: "R$ 25,00", destaque: "nao" },
    { id: "26", categoria: "pizzas_doces", nome: "Pizza Tubin", descricao: "Chocolate e tubin", preco: "R$ 25,00", destaque: "nao" },
    { id: "27", categoria: "pizzas_doces", nome: "Pizza Ouro Branco", descricao: "Chocolate e Ouro Branco", preco: "R$ 25,00", destaque: "nao" },
    { id: "28", categoria: "pizzas_doces", nome: "Pizza Bis", descricao: "Chocolate e Bis", preco: "R$ 25,00", destaque: "nao" },
    { id: "29", categoria: "pizzas_doces", nome: "Pizza Choc Leite & Branco", descricao: "Chocolate ao leite e chocolate branco", preco: "R$ 25,00", destaque: "nao" },

    { id: "30", categoria: "pizzas_salgadas", nome: "Pizza Mussarela", descricao: "Molho de tomate, mussarela e orégano", preco: "R$ 25,00", destaque: "nao" },
    { id: "31", categoria: "pizzas_salgadas", nome: "Pizza Calabresa", descricao: "Molho de tomate, mussarela, calabresa e cebola", preco: "R$ 25,00", destaque: "nao" },
    { id: "32", categoria: "pizzas_salgadas", nome: "Pizza Frango c/ Catupiry", descricao: "Molho de tomate, mussarela, frango desfiado e catupiry", preco: "R$ 25,00", destaque: "nao" },
    { id: "33", categoria: "pizzas_salgadas", nome: "Pizza Portuguesa", descricao: "Molho de tomate, mussarela, presunto, ovo, cebola e ervilha", preco: "R$ 25,00", destaque: "nao" },
    { id: "34", categoria: "pizzas_salgadas", nome: "Pizza Bacon", descricao: "Molho de tomate, mussarela e bacon crocante", preco: "R$ 25,00", destaque: "nao" }
];

const MAPPING = {
    'lanches': 'lista-lanches',
    'pasteis': 'lista-pasteis',
    'porcoes': 'lista-porcoes',
    'pizzas_salgadas': 'lista-pizzas_salgadas',
    'pizzas_doces': 'lista-pizzas_doces',
    'pizzas': 'lista-pizzas_doces'
};

let carrinho = [];

/* ========================================= */
/* UTILITÁRIOS                               */
/* ========================================= */
function escapar(txt) {
    return String(txt ?? '').replace(/[&<>"']/g, m => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
}

function precoParaNumero(preco) {
    const limpo = String(preco).replace(/[^\d,.-]/g, '');
    const normal = limpo.includes(',') ? limpo.replace(/\./g, '').replace(',', '.') : limpo;
    return parseFloat(normal) || 0;
}

function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/* ========================================= */
/* RENDERIZAR PRODUTOS                       */
/* (classes do style.css + as antigas por    */
/*  compatibilidade)                         */
/* ========================================= */
function renderizarProdutos(produtos) {
    Object.values(MAPPING).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
    });

    produtos.forEach(item => {
        const container = document.getElementById(MAPPING[item.categoria]);
        if (!container || !item.nome) return;

        const card = document.createElement('div');
        card.className = 'produto produto-card' + (item.destaque === 'sim' ? ' destaque' : '');
        card.innerHTML = `
            <div class="produto-conteudo produto-info">
                <span class="produto-categoria">${escapar(item.categoria.replace(/_/g, ' '))}</span>
                <h3>${escapar(item.nome)}</h3>
                <p>${escapar(item.descricao)}</p>
                <div class="produto-rodape produto-footer">
                    <strong class="preco">${escapar(item.preco)}</strong>
                    <button class="btn-add btn-adicionar" type="button">+ Adicionar</button>
                </div>
            </div>
        `;
        card.querySelector('.btn-add').addEventListener('click', () => {
            adicionarAoCarrinho(item.nome, item.preco);
        });
        container.appendChild(card);
    });
}

/* ========================================= */
/* CARRINHO                                  */
/* ========================================= */
function adicionarAoCarrinho(nome, preco) {
    const existente = carrinho.find(i => i.nome === nome);
    if (existente) existente.qtd++;
    else carrinho.push({ nome, preco: precoParaNumero(preco), qtd: 1 });
    atualizarCarrinho();
}

function alterarQtd(nome, delta) {
    const item = carrinho.find(i => i.nome === nome);
    if (!item) return;
    item.qtd += delta;
    if (item.qtd <= 0) carrinho = carrinho.filter(i => i.nome !== nome);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const bar = document.getElementById('carrinho-bar');
    const lista = document.getElementById('carrinho-itens');
    const totalItens = carrinho.reduce((s, i) => s + i.qtd, 0);
    const total = carrinho.reduce((s, i) => s + i.qtd * i.preco, 0);

    document.getElementById('carrinho-qtd').textContent = `${totalItens} ${totalItens === 1 ? 'item' : 'itens'}`;
    document.getElementById('carrinho-total').textContent = formatarPreco(total);
    document.getElementById('modal-total').textContent = formatarPreco(total);

    bar.classList.toggle('escondido', totalItens === 0);

    lista.innerHTML = '';
    carrinho.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item-carrinho carrinho-item';
        div.innerHTML = `
            <div class="item-info">
                <strong>${escapar(item.nome)}</strong><br>
                <span>${formatarPreco(item.preco * item.qtd)}</span>
            </div>
            <div class="item-qtd-controles">
                <button class="btn-qtd" type="button">−</button>
                <strong>${item.qtd}</strong>
                <button class="btn-qtd" type="button">+</button>
            </div>
        `;
        const [menos, mais] = div.querySelectorAll('.btn-qtd');
        menos.addEventListener('click', () => alterarQtd(item.nome, -1));
        mais.addEventListener('click', () => alterarQtd(item.nome, 1));
        lista.appendChild(div);
    });

    if (totalItens === 0) {
        document.getElementById('carrinho-modal').classList.add('escondido');
    }
}

/* ========================================= */
/* WHATSAPP                                  */
/* ========================================= */
function enviarWhatsApp() {
    if (carrinho.length === 0) return;
    const obs = (document.getElementById('obs-pedido')?.value || '').trim();
    const total = carrinho.reduce((s, i) => s + i.qtd * i.preco, 0);

    let msg = 'Olá, gostaria de fazer o seguinte pedido:\n\n';
    carrinho.forEach(i => {
        msg += `* ${i.qtd}x ${i.nome} - ${formatarPreco(i.qtd * i.preco)}\n`;
    });
    msg += `\n*Total:* ${formatarPreco(total)}`;
    if (obs) msg += `\n*Observações:* ${obs}`;

    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(msg)}`, '_blank');
}

/* ========================================= */
/* FILTRO DE CATEGORIAS                      */
/* ========================================= */
function configurarFiltro() {
    const botoes = document.querySelectorAll('.categoria-btn');
    const secoes = document.querySelectorAll('.secao');

    botoes.forEach(btn => {
        btn.addEventListener('click', () => {
            botoes.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');
            const cat = btn.dataset.categoria;
            secoes.forEach(s => {
                s.style.display = (cat === 'todos' || s.dataset.secao === cat) ? 'block' : 'none';
            });
        });
    });
}

/* ========================================= */
/* INICIALIZAÇÃO                             */
/* ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtosFixos);
    configurarFiltro();

    const modal = document.getElementById('carrinho-modal');
    document.getElementById('btn-abrir-carrinho').addEventListener('click', () => modal.classList.remove('escondido'));
    document.getElementById('btn-fechar-modal').addEventListener('click', () => modal.classList.add('escondido'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('escondido'); });
    document.getElementById('btn-enviar-whats').addEventListener('click', enviarWhatsApp);
});