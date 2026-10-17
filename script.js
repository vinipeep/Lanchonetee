const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT5K_L35w711u_Y8u0N4-JkZ5pE3H25E3f7O0c5x-y2c5j9f0-p9C3d/pub?output=csv'; // Coloca aqui a tua URL do CSV

async function carregarProdutos() {
    try {
        const resposta = await fetch(CSV_URL);
        const texto = await resposta.text();
        
        const linhas = texto.split('\n').filter(l => l.trim().length > 0);
        if (linhas.length <= 1) return;

        const produtos = [];
        
        for (let i = 1; i < linhas.length; i++) {
            const colunas = linhas[i].split(',').map(c => c.replace(/^"|"$/g, '').trim());
            if (colunas.length >= 5) {
                produtos.push({
                    id: colunas[0],
                    categoria: colunas[1]?.toLowerCase().trim(),
                    nome: colunas[2],
                    descricao: colunas[3],
                    preco: colunas[4],
                    destaque: colunas[5]?.toLowerCase().trim()
                });
            }
        }

        renderizarProdutos(produtos);
    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
    }
}

function renderizarProdutos(produtos) {
    const MAPPING = {
        'lanches': 'lista-lanches',
        'pasteis': 'lista-pasteis',
        'porcoes': 'lista-porcoes',
        'pizzas_salgadas': 'lista-pizzas_salgadas',
        'pizzas_doces': 'lista-pizzas_doces',
        'pizzas': 'lista-pizzas_doces'
    };

    // Limpa todas as listas
    Object.values(MAPPING).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
    });

    produtos.forEach(item => {
        const targetId = MAPPING[item.categoria];
        const container = document.getElementById(targetId);

        if (container) {
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

document.addEventListener('DOMContentLoaded', carregarProdutos);
