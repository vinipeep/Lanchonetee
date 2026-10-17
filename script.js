const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT5K_L35w711u_Y8u0N4-JkZ5pE3H25E3f7O0c5x-y2c5j9f0-p9C3d/pub?output=csv'; // Coloque aqui o seu link CSV público caso seja diferente

let carrinho = [];

// Função para buscar e renderizar os produtos da planilha
async function carregarProdutos() {
    try {
        const resposta = await fetch(CSV_URL);
        const dadosCSV = await resposta.text();
        const linhas = dadosCSV.split('\n').map(linha => linha.trim()).filter(linha => linha.length > 0);
        
        // Pega os cabeçalhos
        const cabecalhos = linhas[0].split(',').map(c => c.trim().toLowerCase());
        
        const produtos = [];
        for (let i = 1; i < linhas.length; i++) {
            // Trata vírgulas dentro de aspas
            const valores = linhas[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || linhas[i].split(',');
            if (valores.length < cabecalhos.length) continue;
            
            const item = {};
            cabecalhos.forEach((cabecalho, index) => {
                let val = valores[index] ? valores[index].replace(/^"|"$/g, '').trim() : '';
                item[cabecalho] = val;
            });
            produtos.push(item);
        }

        renderizarProdutos(produtos);
    } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
    }
}

function renderizarProdutos(produtos) {
    // Mapeamento das categorias da planilha para os IDs dos elementos no HTML
    const containers = {
        'lanches': document.getElementById('lista-lanches'),
        'pasteis': document.getElementById('lista-pasteis'),
        'porcoes': document.getElementById('lista-porcoes'),
        'pizzas_salgadas': document.getElementById('lista-pizzas_salgadas'),
        'pizzas_doces': document.getElementById('lista-pizzas_doces'),
        'pizzas': document.getElementById('lista-pizzas_doces') // Fallback caso tenha 'pizzas' antigo
    };

    // Limpa todos os containers
    Object.values(containers).forEach(c => { if(c) c.innerHTML = ''; });

    produtos.forEach(produto => {
        const cat = produto.categoria ? produto.categoria.toLowerCase().trim() : '';
        const targetContainer = containers[cat];

        if (targetContainer) {
            const ehDestaque = produto.destaque && produto.destaque.toLowerCase().trim() === 'sim';
            
            const card = document.createElement('div');
            card.className = `produto-card ${ehDestaque ? 'destaque' : ''}`;
            
            card.innerHTML = `
                <div class="produto-info">
                    <span class="produto-categoria">${cat.replace('_', ' ').toUpperCase()}</span>
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao || ''}</p>
                    <div class="produto-footer">
                        <strong class="preco">${produto.preco}</strong>
                        <button class="btn-adicionar" onclick="adicionarAoCarrinho('${produto.nome}', '${produto.preco}')">+ Adicionar</button>
                    </div>
                </div>
            `;
            targetContainer.appendChild(card);
        }
    });
}

// Lógica dos Filtros de Categoria
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();

    const botoesFiltro = document.querySelectorAll('.categoria-btn');
    const secoes = document.querySelectorAll('.secao');

    botoesFiltro.forEach(btn => {
        btn.addEventListener('click', () => {
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');

            const categoriaSelecionada = btn.getAttribute('data-categoria');

            secoes.forEach(secao => {
                if (categoriaSelecionada === 'todos' || secao.getAttribute('data-secao') === categoriaSelecionada) {
                    secao.style.display = 'block';
                } else {
                    secao.style.display = 'none';
                }
            });
        });
    });
});