
'use strict';

/* =========================================
   CONFIGURAÇÕES
========================================= */

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQWhv3boH7Ps-Sjil1GPXZQviqaMf-MYBgvEbq36MAu-lMtiSJtcZFhkda1UjV_DNpOAfB_SlC38BdL/pub?gid=0&single=true&output=csv';

const WHATSAPP_NUMERO = '5535988320463';

/*
  Os valores abaixo seguem as fotos enviadas.
  Confirme os preços e os tamanhos com a lanchonete.
*/

const adicionaisPorCategoria = {
    pizzas_salgadas: [
        { nome: 'Catupiry', preco: 3 },
        { nome: 'Cheddar', preco: 3 },
        { nome: 'Mussarela extra', preco: 3 },
        { nome: 'Batata palha', preco: 2 },
        { nome: 'Milho', preco: 1 }
    ],

    pizzas_grandes: [
        { nome: 'Catupiry', preco: 5 },
        { nome: 'Cheddar', preco: 5 },
        { nome: 'Mussarela extra', preco: 5.5 },
        { nome: 'Milho', preco: 2 },
        { nome: 'Batata palha', preco: 3 }
    ],

    pizzas_doces: [
        { nome: 'Chocolate branco', preco: 5 }
    ]
};

/* =========================================
   PRODUTOS DE RESERVA
   Usados somente se a planilha falhar.
========================================= */

const produtosReserva = [
    { categoria: 'lanches', nome: 'X-Burguer', descricao: 'Hambúrguer, presunto e mussarela.', preco: '8,50' },
    { categoria: 'lanches', nome: 'X-Salada', descricao: 'Alface, tomate, hambúrguer, presunto e mussarela.', preco: '9,50' },
    { categoria: 'lanches', nome: 'X-Frango', descricao: 'Frango, mussarela, alface e tomate.', preco: '12,50' },
    { categoria: 'lanches', nome: 'X-Burguer Bacon', descricao: 'Hambúrguer, presunto, mussarela e bacon.', preco: '11,50' },
    { categoria: 'lanches', nome: 'Cachorro Quente', descricao: 'Salsicha, vinagrete, milho e batata palha.', preco: '13,00' },

    { categoria: 'pasteis', nome: 'Pastel de Carne', descricao: 'Pastel tradicional de carne.', preco: '8,00' },
    { categoria: 'pasteis', nome: 'Pastel de Frango', descricao: 'Pastel tradicional de frango.', preco: '8,00' },
    { categoria: 'pasteis', nome: 'Pastel de Queijo', descricao: 'Pastel de mussarela.', preco: '8,00' },
    { categoria: 'pasteis', nome: 'Pastel de Pizza', descricao: 'Queijo, presunto, tomate e orégano.', preco: '8,00' },

    { categoria: 'porcoes', nome: 'Batata frita pequena', descricao: 'Porção de batata frita.', preco: '10,00' },
    { categoria: 'porcoes', nome: 'Batata frita média', descricao: 'Porção de batata frita.', preco: '20,00' },
    { categoria: 'porcoes', nome: 'Batata frita grande', descricao: 'Porção de batata frita.', preco: '30,00' },

    { categoria: 'pizzas_salgadas', nome: 'Pizza de Mussarela', descricao: 'Mussarela e azeitona.', preco: '20,00' },
    { categoria: 'pizzas_salgadas', nome: 'Pizza de Calabresa', descricao: 'Calabresa, cebola, mussarela e azeitona.', preco: '20,00' },
    { categoria: 'pizzas_salgadas', nome: 'Pizza Portuguesa', descricao: 'Presunto, mussarela, ovos e azeitona.', preco: '20,00' },
    { categoria: 'pizzas_salgadas', nome: 'Pizza de Frango com Catupiry', descricao: 'Frango, catupiry e azeitona.', preco: '18,00' },
    { categoria: 'pizzas_salgadas', nome: 'Pizza de Três Queijos', descricao: 'Mussarela, provolone e parmesão.', preco: '20,00' },

    { categoria: 'pizzas_grandes', nome: 'Pizza de Mussarela Grande', descricao: 'Mussarela e azeitona.', preco: '40,00' },
    { categoria: 'pizzas_grandes', nome: 'Pizza de Calabresa Grande', descricao: 'Calabresa, cebola, mussarela e azeitona.', preco: '40,00' },
    { categoria: 'pizzas_grandes', nome: 'Pizza Portuguesa Grande', descricao: 'Presunto, mussarela, ovos e azeitona.', preco: '40,00' },
    { categoria: 'pizzas_grandes', nome: 'Pizza de Frango com Catupiry Grande', descricao: 'Frango, catupiry e azeitona.', preco: '35,00' },

    { categoria: 'pizzas_doces', nome: 'Pizza Brigadeiro', descricao: 'Chocolate e granulado.', preco: '25,00' },
    { categoria: 'pizzas_doces', nome: 'Pizza Prestígio', descricao: 'Chocolate, coco ralado e leite condensado.', preco: '25,00' },
    { categoria: 'pizzas_doces', nome: 'Pizza de M&M', descricao: 'Chocolate e M&M.', preco: '25,00' },
    { categoria: 'pizzas_doces', nome: 'Pizza de Chocolate Branco', descricao: 'Chocolate branco.', preco: '25,00' }
];

/* =========================================
   ESTADO
========================================= */

const containers = {
    lanches: 'lista-lanches',
    pasteis: 'lista-pasteis',
    porcoes: 'lista-porcoes',
    pizzas_salgadas: 'lista-pizzas_salgadas',
    pizzas_grandes: 'lista-pizzas_grandes',
    pizzas_doces: 'lista-pizzas_doces'
};

let produtosCarregados = [];
let carrinho = [];

/* =========================================
   FUNÇÕES AUXILIARES
========================================= */

function normalizarTexto(valor) {
    return String(valor || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/[\s-]+/g, '_');
}

function escaparHTML(valor) {
    return String(valor ?? '').replace(/[&<>"']/g, caractere => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[caractere]);
}

function precoParaNumero(valor) {
    let texto = String(valor ?? '').trim()
        .replace(/R\$/gi, '')
        .replace(/\s/g, '');

    if (texto.includes(',')) {
        texto = texto.replace(/\./g, '').replace(',', '.');
    }

    const numero = Number(texto);
    return Number.isFinite(numero) ? numero : 0;
}

function formatarPreco(valor) {
    return Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function obterCategoria(valor) {
    const categoria = normalizarTexto(valor);

    const aliases = {
        lanche: 'lanches',
        pastel: 'pasteis',
        porcao: 'porcoes',
        pizza_pequena: 'pizzas_salgadas',
        pizzas_pequenas: 'pizzas_salgadas',
        pizza_salgada: 'pizzas_salgadas',
        pizza_grande: 'pizzas_grandes',
        pizza_doce: 'pizzas_doces'
    };

    return aliases[categoria] || categoria;
}

function obterId(produto, indice) {
    return String(produto.id || `${produto.categoria}-${produto.nome}-${indice}`);
}

/* =========================================
   IMPORTAÇÃO DA PLANILHA CSV
   Cabeçalho esperado:
   id,categoria,nome,descricao,preco,destaque
========================================= */

function analisarCSV(texto) {
    const linhas = [];
    let linha = [];
    let campo = '';
    let dentroDeAspas = false;

    for (let i = 0; i < texto.length; i++) {
        const caractere = texto[i];

        if (dentroDeAspas) {
            if (caractere === '"' && texto[i + 1] === '"') {
                campo += '"';
                i++;
            } else if (caractere === '"') {
                dentroDeAspas = false;
            } else {
                campo += caractere;
            }
        } else if (caractere === '"') {
            dentroDeAspas = true;
        } else if (caractere === ',') {
            linha.push(campo);
            campo = '';
        } else if (caractere === '\n' || caractere === '\r') {
            if (caractere === '\r' && texto[i + 1] === '\n') i++;

            linha.push(campo);
            campo = '';

            if (linha.some(c => c.trim())) linhas.push(linha);
            linha = [];
        } else {
            campo += caractere;
        }
    }

    linha.push(campo);
    if (linha.some(c => c.trim())) linhas.push(linha);

    if (linhas.length < 2) {
        throw new Error('A planilha está vazia ou sem produtos.');
    }

    const cabecalhos = linhas[0].map(c => normalizarTexto(c));
    const procurarColuna = nomes => cabecalhos.findIndex(c => nomes.includes(c));

    const colunas = {
        id: procurarColuna(['id', 'codigo', 'cod']),
        categoria: procurarColuna(['categoria', 'tipo']),
        nome: procurarColuna(['nome', 'produto', 'lanche']),
        descricao: procurarColuna(['descricao', 'descrição']),
        preco: procurarColuna(['preco', 'valor', 'preco_venda']),
        destaque: procurarColuna(['destaque'])
    };

    if (colunas.categoria < 0 || colunas.nome < 0 || colunas.preco < 0) {
        throw new Error('Confira as colunas categoria, nome e preco na planilha.');
    }

    return linhas.slice(1).map(celulas => {
        const ler = coluna => coluna < 0 ? '' : (celulas[coluna] || '').trim();

        return {
            id: ler(colunas.id),
            categoria: obterCategoria(ler(colunas.categoria)),
            nome: ler(colunas.nome),
            descricao: ler(colunas.descricao),
            preco: ler(colunas.preco),
            destaque: ler(colunas.destaque).toLowerCase()
        };
    }).filter(p => p.nome && p.categoria);
}

async function carregarProdutos() {
    const status = document.getElementById('status-cardapio');

    try {
        const resposta = await fetch(CSV_URL);

        if (!resposta.ok) {
            throw new Error(`Falha ao acessar a planilha: ${resposta.status}`);
        }

        const texto = await resposta.text();

        if (/<html|<!doctype/i.test(texto.slice(0, 500))) {
            throw new Error('O link não retornou um arquivo CSV.');
        }

        produtosCarregados = analisarCSV(texto);

        if (!produtosCarregados.length) {
            throw new Error('Não foram encontrados produtos válidos.');
        }

        status.textContent = '';
    } catch (erro) {
        console.error(erro);
        produtosCarregados = produtosReserva.map(p => ({
            ...p,
            categoria: obterCategoria(p.categoria)
        }));

        status.textContent =
            'Não foi possível carregar a planilha. Exibindo produtos de demonstração.';
    }

    renderizarProdutos();
}

/* =========================================
   ADICIONAIS
========================================= */

function obterAdicionais(produto) {
    return adicionaisPorCategoria[produto.categoria] || [];
}

function criarHTMLAdicionais(produto, idSeguro) {
    const adicionais = obterAdicionais(produto);

    if (!adicionais.length) return '';

    return `
        <div class="adicionais-produto">
            <h4>Quer adicionar algo?</h4>

            ${adicionais.map((adicional, indice) => `
                <div class="adicional-opcao">
                    <label for="extra-${idSeguro}-${indice}">
                        <input
                            type="checkbox"
                            id="extra-${idSeguro}-${indice}"
                            data-extra-indice="${indice}"
                        >
                        <span>${escaparHTML(adicional.nome)}</span>
                    </label>
                    <span class="adicional-preco">
                        + ${formatarPreco(adicional.preco)}
                    </span>
                </div>
            `).join('')}

            <p class="adicionais-aviso">
                Marque os adicionais antes de adicionar ao pedido.
            </p>
        </div>
    `;
}

/* =========================================
   RENDERIZAR CARDÁPIO
========================================= */

function renderizarProdutos() {
    Object.values(containers).forEach(id => {
        document.getElementById(id).innerHTML = '';
    });

    let quantidadeExibida = 0;

    produtosCarregados.forEach((produto, indice) => {
        produto.categoria = obterCategoria(produto.categoria);

        const idContainer = containers[produto.categoria];
        const container = idContainer
            ? document.getElementById(idContainer)
            : null;

        if (!container) {
            console.warn('Categoria não reconhecida:', produto.categoria);
            return;
        }

        quantidadeExibida++;

        const idSeguro = `produto-${indice}`;
        const card = document.createElement('article');
        card.className = 'produto';

        card.innerHTML = `
            <div class="produto-conteudo">
                <span class="produto-categoria">
                    ${escaparHTML(produto.categoria.replace(/_/g, ' '))}
                </span>

                <h3>${escaparHTML(produto.nome)}</h3>
                <p>${escaparHTML(produto.descricao)}</p>

                <div class="produto-rodape">
                    <strong class="preco">
                        ${formatarPreco(precoParaNumero(produto.preco))}
                    </strong>
                </div>

                ${criarHTMLAdicionais(produto, idSeguro)}

                <button type="button" class="btn-add">
                    + Adicionar ao pedido
                </button>
            </div>
        `;

        card.querySelector('.btn-add').addEventListener('click', () => {
            const adicionais = obterAdicionais(produto);
            const selecionados = [];

            card.querySelectorAll('[data-extra-indice]:checked')
                .forEach(input => {
                    const adicional = adicionais[
                        Number(input.dataset.extraIndice)
                    ];

                    if (adicional) selecionados.push({ ...adicional });
                });

            adicionarAoCarrinho(produto, selecionados, indice);

            card.querySelectorAll('[data-extra-indice]')
                .forEach(input => input.checked = false);
        });

        container.appendChild(card);
    });

    document.querySelectorAll('.grupo-produtos').forEach(secao => {
        const grade = secao.querySelector('.grade-produtos');
        secao.hidden = !grade || grade.children.length === 0;
    });

    if (!quantidadeExibida) {
        document.getElementById('status-cardapio').textContent =
            'Nenhum produto disponível no momento.';
    }

    aplicarFiltro(
        document.querySelector('.filtro.ativo')?.dataset.categoria || 'todos'
    );
}

/* =========================================
   CARRINHO
========================================= */

function adicionarAoCarrinho(produto, adicionais, indice) {
    const idProduto = obterId(produto, indice);

    const adicionaisOrdenados = [...adicionais]
        .sort((a, b) => a.nome.localeCompare(b.nome));

    const chaveAdicionais = adicionaisOrdenados
        .map(a => `${a.nome}:${a.preco}`)
        .join('|');

    const chave = `${idProduto}::${chaveAdicionais}`;

    const existente = carrinho.find(item => item.chave === chave);

    if (existente) {
        existente.quantidade++;
    } else {
        carrinho.push({
            chave,
            nome: produto.nome,
            precoBase: precoParaNumero(produto.preco),
            adicionais: adicionaisOrdenados,
            quantidade: 1
        });
    }

    atualizarCarrinho();

    const botao = document.getElementById('carrinho-bar');
    botao.classList.remove('escondido');
}

function calcularPrecoUnitario(item) {
    const totalAdicionais = item.adicionais.reduce(
        (total, adicional) => total + adicional.preco,
        0
    );

    return item.precoBase + totalAdicionais;
}

function alterarQuantidade(chave, alteracao) {
    const item = carrinho.find(produto => produto.chave === chave);
    if (!item) return;

    item.quantidade += alteracao;

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(produto => produto.chave !== chave);
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('carrinho-itens');
    const barra = document.getElementById('carrinho-bar');

    const quantidade = carrinho.reduce(
        (total, item) => total + item.quantidade,
        0
    );

    const total = carrinho.reduce(
        (soma, item) => soma + calcularPrecoUnitario(item) * item.quantidade,
        0
    );

    document.getElementById('carrinho-qtd').textContent =
        `${quantidade} ${quantidade === 1 ? 'item' : 'itens'}`;

    document.getElementById('carrinho-total').textContent =
        formatarPreco(total);

    document.getElementById('modal-total').textContent =
        formatarPreco(total);

    barra.classList.toggle('escondido', quantidade === 0);
    lista.innerHTML = '';

    carrinho.forEach(item => {
        const elemento = document.createElement('article');
        elemento.className = 'item-carrinho';

        const htmlAdicionais = item.adicionais.length
            ? `<span class="item-adicionais">
                Adicionais: ${item.adicionais.map(adicional =>
                    `${escaparHTML(adicional.nome)} (+${formatarPreco(adicional.preco)})`
                ).join(', ')}
               </span>`
            : '';

        elemento.innerHTML = `
            <div class="item-info">
                <strong>${escaparHTML(item.nome)}</strong>
                ${htmlAdicionais}
                <span>
                    ${formatarPreco(calcularPrecoUnitario(item) * item.quantidade)}
                </span>
            </div>

            <div class="item-qtd-controles">
                <button type="button" class="btn-qtd btn-menos"
                        aria-label="Diminuir quantidade">−</button>
                <strong>${item.quantidade}</strong>
                <button type="button" class="btn-qtd btn-mais"
                        aria-label="Aumentar quantidade">+</button>
            </div>
        `;

        elemento.querySelector('.btn-menos').addEventListener('click', () => {
            alterarQuantidade(item.chave, -1);
        });

        elemento.querySelector('.btn-mais').addEventListener('click', () => {
            alterarQuantidade(item.chave, 1);
        });

        lista.appendChild(elemento);
    });

    if (quantidade === 0) {
        document.getElementById('carrinho-modal')
            .classList.add('escondido');
    }
}

/* =========================================
   FILTRO
========================================= */

function aplicarFiltro(categoria) {
    document.querySelectorAll('.grupo-produtos').forEach(secao => {
        const corresponde =
            categoria === 'todos' || secao.dataset.secao === categoria;

        secao.hidden = !corresponde ||
            secao.querySelector('.grade-produtos').children.length === 0;
    });

    document.querySelectorAll('.filtro').forEach(botao => {
        const ativo = botao.dataset.categoria === categoria;
        botao.classList.toggle('ativo', ativo);
        botao.setAttribute('aria-pressed', String(ativo));
    });
}

function configurarFiltros() {
    document.querySelectorAll('.filtro').forEach(botao => {
        botao.addEventListener('click', () => {
            aplicarFiltro(botao.dataset.categoria);
        });
    });
}

/* =========================================
   ENVIO PELO WHATSAPP
========================================= */

function enviarPedidoWhatsApp() {
    if (!carrinho.length) {
        alert('Adicione pelo menos um produto ao pedido.');
        return;
    }

    const bairro = document.getElementById('end-bairro').value.trim();
    const campoBairro = document.getElementById('end-bairro');
    const erroBairro = document.getElementById('erro-bairro');

    if (!bairro) {
        campoBairro.classList.add('invalido');
        erroBairro.classList.remove('escondido');
        campoBairro.focus();
        return;
    }

    const rua = document.getElementById('end-rua').value.trim();
    const numero = document.getElementById('end-numero').value.trim();
    const referencia = document.getElementById('end-ref').value.trim();
    const observacoes = document.getElementById('obs-pedido').value.trim();

    const total = carrinho.reduce(
        (soma, item) => soma + calcularPrecoUnitario(item) * item.quantidade,
        0
    );

    let mensagem = 'Olá! Gostaria de fazer um pedido:\n\n';

    carrinho.forEach(item => {
        mensagem += `*${item.quantidade}x ${item.nome}*\n`;
        mensagem += `Valor: ${formatarPreco(calcularPrecoUnitario(item) * item.quantidade)}\n`;

        if (item.adicionais.length) {
            mensagem += '*Adicionais:*\n';

            item.adicionais.forEach(adicional => {
                mensagem += `- ${adicional.nome}: ${formatarPreco(adicional.preco)}\n`;
            });
        }

        mensagem += '\n';
    });

    mensagem += `*Total dos produtos: ${formatarPreco(total)}*\n`;
    mensagem += '(Taxa de entrega a confirmar)\n\n';
    mensagem += '*ENDEREÇO DE ENTREGA*\n';
    mensagem += `Bairro: ${bairro}\n`;

    if (rua) mensagem += `Rua: ${rua}\n`;
    if (numero) mensagem += `Número: ${numero}\n`;
    if (referencia) mensagem += `Referência: ${referencia}\n`;

    if (observacoes) {
        mensagem += `\n*Observações:* ${observacoes}\n`;
    }

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
}

/* =========================================
   INICIALIZAÇÃO
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ano').textContent = new Date().getFullYear();

    configurarFiltros();

    document.getElementById('btn-abrir-carrinho')
        .addEventListener('click', () => {
            document.getElementById('carrinho-modal')
                .classList.remove('escondido');
        });

    document.getElementById('btn-fechar-modal')
        .addEventListener('click', () => {
            document.getElementById('carrinho-modal')
                .classList.add('escondido');
        });

    document.getElementById('carrinho-modal')
        .addEventListener('click', evento => {
            if (evento.target.id === 'carrinho-modal') {
                evento.currentTarget.classList.add('escondido');
            }
        });

    document.getElementById('btn-enviar-whats')
        .addEventListener('click', enviarPedidoWhatsApp);

    document.getElementById('end-bairro')
        .addEventListener('input', evento => {
            if (evento.target.value.trim()) {
                evento.target.classList.remove('invalido');
                document.getElementById('erro-bairro')
                    .classList.add('escondido');
            }
        });

    carregarProdutos();
});
