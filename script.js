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

let carrinho = [];

function renderizarProdutos(produtos) {
    const MAPPING = {
        'lanches': 'lista-lanches',
        'pasteis': 'lista-pasteis',
        'porcoes': 'lista-porcoes',
        'pizzas_salgadas': 'lista-pizzas_salgadas',
        'pizzas_doces': 'lista-pizzas_doces',
        'pizzas': 'lista-pizzas_doces'
    };

    Object.values(MAPPING).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
    });

    produtos.forEach(item => {
        const targetId = MAPPING[item.categoria];
        const container = document.getElementById(targetId);

        if (container && item.nome) {
            const card = document.createElement('div');
            card.className = `produto-card ${item.destaque === 'sim' ? 'destaque' : ''}`;
            card.innerHTML = `
                <div class="produto-info">
                    <span class="produto-categoria">${item.categoria.replace('_', ' ').toUpperCase()}</span>
                    <h3>${item.nome}</h3>
                    <p>${item.descricao || ''}</p>
                    <div class="produto-footer">
                        <strong class="preco">${item.preco}</strong>
                        <button class="btn-adicionar" onclick="adicionarAoCarrinho('${item.nome}', '${item.preco}')">+ Adicionar</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        }
    });
}

function adicionarAoCarrinho(nome, precoStr) {
    let precoLimpo = precoStr.replace('R$', '').replace(',', '.').trim();
    let precoNum = parseFloat(precoLimpo) || 0;

    let itemExistente = carrinho.find(i => i.nome === nome);
    if (itemExistente) {
        itemExistente.qtd++;
    } else {
        carrinho.push({ nome, preco: precoNum, precoStr, qtd: 1 });
    }
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoBar = document.getElementById('carrinho-bar');
    const carrinhoQtd = document.getElementById('carrinho-qtd');
    const carrinhoTotal = document.getElementById('carrinho-total');
    const carrinhoItens = document.getElementById('carrinho-itens');
    const modalTotal = document.getElementById('modal-total');

    let totalQtd = carrinho.reduce((acc, item) => acc + item.qtd, 0);
    let totalValor = carrinho.reduce((acc, item) => acc + (item.preco * item.qtd), 0);

    if (totalQtd > 0) {
        carrinhoBar.classList.remove('escondido');
        carrinhoQtd.innerText = `${totalQtd} ${totalQtd === 1 ? 'item' : 'itens'}`;
        carrinhoTotal.innerText = `R$ ${totalValor.toFixed(2).replace('.', ',')}`;
        modalTotal.innerText = `R$ ${totalValor.toFixed(2).replace('.', ',')}`;
    } else {
        carrinhoBar.classList.add('escondido');
    }

    if (carrinhoItens) {
        carrinhoItens.innerHTML = '';
        carrinho.forEach((item, index) => {
            let div = document.createElement('div');
            div.className = 'carrinho-item';
            div.innerHTML = `
                <span>${item.qtd}x ${item.nome}</span>
                <span>R$ ${(item.preco * item.qtd).toFixed(2).replace('.', ',')}</span>
                <button onclick="removerDoCarrinho(${index})" class="btn-remover">🗑️</button>
            `;
            carrinhoItens.appendChild(div);
        });
    }
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtosFixos);

    const botoesFiltro = document.querySelectorAll('.categoria-btn');
    const secoes = document.querySelectorAll('.secao');

    botoesFiltro.forEach(btn => {
        btn.addEventListener('click', () => {
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');

            const cat = btn.getAttribute('data-categoria');

            secoes.forEach(secao => {
                if (cat === 'todos' || secao.getAttribute('data-secao') === cat) {
                    secao.style.display = 'block';
                } else {
                    secao.style.display = 'none';
                }
            });
        });
    });

    const modal = document.getElementById('carrinho-modal');
    const btnAbrir = document.getElementById('btn-abrir-carrinho');
    const btnFechar = document.getElementById('btn-fechar-modal');

    if (btnAbrir) btnAbrir.addEventListener('click', () => modal.classList.remove('escondido'));
    if (btnFechar) btnFechar.addEventListener('click', () => modal.classList.add('escondido'));

    const btnWhats = document.getElementById('btn-enviar-whats');
    if (btnWhats) {
        btnWhats.addEventListener('click', () => {
            if (carrinho.length === 0) return;
            let obs = document.getElementById('obs-pedido')?.value || '';
            let texto = "Olá, gostaria de fazer o seguinte pedido:\n\n";
            carrinho.forEach(i => {
                texto += `* ${i.qtd}x ${i.nome} - R$ ${(i.preco * i.qtd).toFixed(2).replace('.', ',')}\n`;
            });
            let totalValor = carrinho.reduce((acc, item) => acc + (item.preco * item.qtd), 0);
            texto += `\n*Total:* R$ ${totalValor.toFixed(2).replace('.', ',')}`;
            if (obs) texto += `\n*Observações:* ${obs}`;

            let url = `https://api.whatsapp.com/send?phone=5535988320463&text=${encodeURIComponent(texto)}`;
            window.open(url, '_blank');
        });
    }
});