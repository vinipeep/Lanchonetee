const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQWhv3boH7Ps-Sjil1GPXZQviqaMf-MYBgvEbq36MAu-lMtiSJtcZFhkda1UjV_DNpOAfB_SlC38BdL/pub?gid=0&single=true&output=csv';

let carrinho = [];

// Carrega os produtos da planilha via PapaParse
async function carregarProdutos() {
    try {
        const resposta = await fetch(CSV_URL);
        const textoCSV = await resposta.text();

        Papa.parse(textoCSV, {
            header: true,
            skipEmptyLines: true,
            complete: function(results) {
                const produtos = results.data.map(item => ({
                    id: item.id ? item.id.trim() : '',
                    categoria: item.categoria ? item.categoria.toLowerCase().trim() : '',
                    nome: item.nome ? item.nome.trim() : '',
                    descricao: item.descricao ? item.descricao.trim() : '',
                    preco: item.preco ? item.preco.trim() : '',
                    destaque: item.destaque ? item.destaque.toLowerCase().trim() : 'nao'
                }));

                renderizarProdutos(produtos);
            }
        });
    } catch (erro) {
        console.error("Erro ao carregar os produtos:", erro);
    }
}

// Renderiza os produtos nas seções correspondentes do HTML
function renderizarProdutos(produtos) {
    const MAPPING = {
        'lanches': 'lista-lanches',
        'pasteis': 'lista-pasteis',
        'porcoes': 'lista-porcoes',
        'pizzas_salgadas': 'lista-pizzas_salgadas',
        'pizzas_doces': 'lista-pizzas_doces',
        'pizzas': 'lista-pizzas_doces'
    };

    // Limpa todas as seções antes de preencher
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

// Funções do Carrinho
function adicionarAoCarrinho(nome, precoStr) {
    // Converte o preço de formato "R$ 8,50" para número (8.50)
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

// Inicialização e Eventos
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();

    // Filtros de Categoria
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

    // Abrir/Fechar Modal do Carrinho
    const modal = document.getElementById('carrinho-modal');
    const btnAbrir = document.getElementById('btn-abrir-carrinho');
    const btnFechar = document.getElementById('btn-fechar-modal');

    if (btnAbrir) btnAbrir.addEventListener('click', () => modal.classList.remove('escondido'));
    if (btnFechar) btnFechar.addEventListener('click', () => modal.classList.add('escondido'));

    // Enviar pedido para o WhatsApp
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