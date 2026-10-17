
"use strict";

const WHATSAPP_NUMERO = "5535988320463";

const produtos = [
  // LANCHES — confira os preços com o cardápio original
  { id: 1, nome: "X-Burguer", categoria: "lanches", preco: 8.50, descricao: "Hambúrguer, presunto e mussarela." },
  { id: 2, nome: "X-Salada", categoria: "lanches", preco: 9.50, descricao: "Hambúrguer, presunto, mussarela, alface e tomate." },
  { id: 3, nome: "X-Egg", categoria: "lanches", preco: 11.00, descricao: "Hambúrguer, ovo, presunto e mussarela." },
  { id: 4, nome: "X-Bacon", categoria: "lanches", preco: 13.00, descricao: "Hambúrguer, bacon, presunto e mussarela." },
  { id: 5, nome: "X-Calabresa", categoria: "lanches", preco: 12.00, descricao: "Hambúrguer, calabresa, presunto e mussarela." },
  { id: 6, nome: "X-Tudo", categoria: "lanches", preco: 16.00, descricao: "Um lanche caprichado para matar a fome." },
  { id: 7, nome: "Hambúrguer", categoria: "lanches", preco: 7.00, descricao: "Hambúrguer no pão." },
  { id: 8, nome: "Misto Quente", categoria: "lanches", preco: 7.00, descricao: "Presunto e mussarela." },
  { id: 9, nome: "Americano", categoria: "lanches", preco: 12.00, descricao: "Pão, presunto, mussarela, ovo, alface e tomate." },
  { id: 10, nome: "Hot Dog", categoria: "lanches", preco: 9.00, descricao: "Pão e salsicha com acompanhamentos." },

  // PASTÉIS — confira os preços e recheios
  { id: 11, nome: "Pastel de Queijo", categoria: "pasteis", preco: 8.00, descricao: "Pastel frito na hora, recheado com queijo." },
  { id: 12, nome: "Pastel de Carne", categoria: "pasteis", preco: 8.00, descricao: "Pastel frito na hora, recheado com carne." },
  { id: 13, nome: "Pastel de Pizza", categoria: "pasteis", preco: 9.00, descricao: "Recheio de presunto, queijo e tomate." },
  { id: 14, nome: "Pastel de Frango", categoria: "pasteis", preco: 9.00, descricao: "Pastel frito na hora, recheado com frango." },
  { id: 15, nome: "Pastel de Carne com Queijo", categoria: "pasteis", preco: 10.00, descricao: "Carne temperada com queijo." },
  { id: 16, nome: "Pastel Especial", categoria: "pasteis", preco: 12.00, descricao: "Consulte os sabores disponíveis." },

  // PORÇÕES — confira os preços e tamanhos
  { id: 17, nome: "Batata Frita", categoria: "porcoes", preco: 15.00, descricao: "Porção de batatas fritas." },
  { id: 18, nome: "Batata com Cheddar", categoria: "porcoes", preco: 22.00, descricao: "Batata frita com cheddar." },
  { id: 19, nome: "Calabresa Acebolada", categoria: "porcoes", preco: 25.00, descricao: "Calabresa acebolada para compartilhar." },
  { id: 20, nome: "Frango a Passarinho", categoria: "porcoes", preco: 28.00, descricao: "Porção de frango a passarinho." },
  { id: 21, nome: "Mandioca Frita", categoria: "porcoes", preco: 18.00, descricao: "Porção de mandioca frita." },

  // PIZZAS PEQUENAS — preço informado anteriormente: R$ 25,00
  { id: 22, nome: "Pizza Pequena de Mussarela", categoria: "pizzas_pequenas", preco: 25.00, descricao: "Molho de tomate e mussarela." },
  { id: 23, nome: "Pizza Pequena de Calabresa", categoria: "pizzas_pequenas", preco: 25.00, descricao: "Molho de tomate, calabresa e cebola." },
  { id: 24, nome: "Pizza Pequena de Presunto", categoria: "pizzas_pequenas", preco: 25.00, descricao: "Molho de tomate, presunto e mussarela." },
  { id: 25, nome: "Pizza Pequena de Frango", categoria: "pizzas_pequenas", preco: 25.00, descricao: "Frango com molho de tomate e mussarela." },
  { id: 26, nome: "Pizza Pequena de Portuguesa", categoria: "pizzas_pequenas", preco: 25.00, descricao: "Consulte os ingredientes disponíveis." },
  { id: 27, nome: "Pizza Pequena de Bacon", categoria: "pizzas_pequenas", preco: 25.00, descricao: "Molho de tomate, bacon e mussarela." },

  // PIZZAS GRANDES — R$ 35,00 era um preço provisório
  { id: 28, nome: "Pizza Grande de Mussarela", categoria: "pizzas_grandes", preco: 35.00, descricao: "Molho de tomate e mussarela." },
  { id: 29, nome: "Pizza Grande de Calabresa", categoria: "pizzas_grandes", preco: 35.00, descricao: "Molho de tomate, calabresa e cebola." },
  { id: 30, nome: "Pizza Grande de Presunto", categoria: "pizzas_grandes", preco: 35.00, descricao: "Molho de tomate, presunto e mussarela." },
  { id: 31, nome: "Pizza Grande de Frango", categoria: "pizzas_grandes", preco: 35.00, descricao: "Frango com molho de tomate e mussarela." },
  { id: 32, nome: "Pizza Grande de Portuguesa", categoria: "pizzas_grandes", preco: 35.00, descricao: "Consulte os ingredientes disponíveis." },
  { id: 33, nome: "Pizza Grande de Bacon", categoria: "pizzas_grandes", preco: 35.00, descricao: "Molho de tomate, bacon e mussarela." },
  { id: 34, nome: "Pizza Grande de Frango com Catupiry", categoria: "pizzas_grandes", preco: 35.00, descricao: "Frango com catupiry." },
  { id: 35, nome: "Pizza Grande de Quatro Queijos", categoria: "pizzas_grandes", preco: 35.00, descricao: "Seleção de queijos." },
  { id: 36, nome: "Pizza Grande de Milho", categoria: "pizzas_grandes", preco: 35.00, descricao: "Molho de tomate, milho e mussarela." },
  { id: 37, nome: "Pizza Grande de Napolitana", categoria: "pizzas_grandes", preco: 35.00, descricao: "Molho de tomate, queijo e tomate." },

  // PIZZAS DOCES — confira os sabores e preços
  { id: 38, nome: "Pizza Doce de Chocolate", categoria: "pizzas_doces", preco: 25.00, descricao: "Pizza doce de chocolate." },
  { id: 39, nome: "Pizza Doce de Chocolate Branco", categoria: "pizzas_doces", preco: 25.00, descricao: "Pizza doce de chocolate branco." },
  { id: 40, nome: "Pizza Doce de Chocolate com Morango", categoria: "pizzas_doces", preco: 28.00, descricao: "Chocolate com morango." },
  { id: 41, nome: "Pizza Doce de Brigadeiro", categoria: "pizzas_doces", preco: 28.00, descricao: "Pizza doce com brigadeiro." },
  { id: 42, nome: "Pizza Doce de Banana com Canela", categoria: "pizzas_doces", preco: 25.00, descricao: "Banana com canela." },
  { id: 43, nome: "Pizza Doce de Prestígio", categoria: "pizzas_doces", preco: 28.00, descricao: "Chocolate e coco." },
  { id: 44, nome: "Pizza Doce de Confete", categoria: "pizzas_doces", preco: 28.00, descricao: "Pizza doce com confetes de chocolate." },
  { id: 45, nome: "Pizza Doce de Beijinho", categoria: "pizzas_doces", preco: 28.00, descricao: "Pizza doce com coco." },
  { id: 46, nome: "Pizza Doce Especial", categoria: "pizzas_doces", preco: 30.00, descricao: "Consulte o sabor especial disponível." }
];

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
let produtoPersonalizando = null;
let categoriaAtual = "todos";
let avisoTimeout;

const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);

function formatarPreco(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function escapar(texto) {
  return String(texto ?? "").replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
}

function categoriaDoProduto(produto) {
  if (produto.categoria === "pizzas_pequenas" ||
      produto.categoria === "pizzas_grandes") {
    return "Pizzas salgadas";
  }

  const nomes = {
    lanches: "Lanches",
    pasteis: "Pastéis",
    porcoes: "Porções",
    pizzas_pequenas: "Pizzas pequenas",
    pizzas_grandes: "Pizzas grandes",
    pizzas_doces: "Pizzas doces"
  };

  return nomes[produto.categoria] || "Cardápio";
}

function adicionaisDoProduto(produto) {
  if (produto.categoria === "pizzas_pequenas") {
    return adicionaisPorCategoria.pizzas_salgadas;
  }

  return adicionaisPorCategoria[produto.categoria] || [];
}

function mostrarAviso(mensagem) {
  const elemento = $("#aviso");
  elemento.textContent = mensagem;
  elemento.classList.add("visivel");

  clearTimeout(avisoTimeout);
  avisoTimeout = setTimeout(() => elemento.classList.remove("visivel"), 2600);
}

function renderizarProdutos() {
  const listas = {
    lanches: $("#lista-lanches"),
    pasteis: $("#lista-pasteis"),
    porcoes: $("#lista-porcoes"),
    pizzas_pequenas: $("#lista-pizzas_pequenas"),
    pizzas_grandes: $("#lista-pizzas_grandes"),
    pizzas_doces: $("#lista-pizzas_doces")
  };

  Object.values(listas).forEach(lista => lista.innerHTML = "");

  produtos.forEach(produto => {
    const destino = listas[produto.categoria];
    if (!destino) return;

    const card = document.createElement("article");
    card.className = "produto-card";

    card.innerHTML = `
      <span class="produto-categoria">${escapar(categoriaDoProduto(produto))}</span>
      <h3>${escapar(produto.nome)}</h3>
      <p class="produto-descricao">${escapar(produto.descricao)}</p>
      <div class="produto-rodape">
        <span class="produto-preco">${formatarPreco(produto.preco)}</span>
        <button type="button" class="btn-add" data-adicionar="${produto.id}">
          + Adicionar
        </button>
      </div>
    `;

    destino.appendChild(card);
  });

  aplicarFiltro(categoriaAtual);
}

function aplicarFiltro(categoria) {
  categoriaAtual = categoria;

  $$(".categoria-btn").forEach(botao => {
    botao.classList.toggle("ativa", botao.dataset.categoria === categoria);
  });

  let encontrados = 0;

  $$(".secao-produtos").forEach(secao => {
    const corresponde = categoria === "todos" ||
      secao.dataset.secao === categoria;

    secao.classList.toggle("escondido", !corresponde);

    if (corresponde) {
      encontrados += secao.querySelectorAll(".produto-card").length;
    }
  });

  $("#sem-produtos").classList.toggle("escondido", encontrados > 0);
}

function abrirModalAdicionais(produto) {
  produtoPersonalizando = produto;

  $("#adicionais-produto-nome").textContent = produto.nome;
  $("#adicionais-produto-descricao").textContent = produto.descricao;
  $("#adicionais-modal-preco-base").textContent = formatarPreco(produto.preco);

  const lista = $("#adicionais-modal-lista");
  const adicionais = adicionaisDoProduto(produto);

  lista.innerHTML = adicionais.map((adicional, indice) => `
    <label class="adicional-opcao" for="extra-${indice}">
      <span class="adicional-nome">${escapar(adicional.nome)}</span>
      <span class="adicional-direita">
        <span class="adicional-preco">+ ${formatarPreco(adicional.preco)}</span>
        <input
          class="checkbox-adicional"
          type="checkbox"
          id="extra-${indice}"
          data-nome="${escapar(adicional.nome)}"
          data-preco="${adicional.preco}"
        >
      </span>
    </label>
  `).join("");

  lista.querySelectorAll(".checkbox-adicional").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      checkbox.closest(".adicional-opcao")
        .classList.toggle("selecionado", checkbox.checked);
      atualizarTotalAdicionais();
    });
  });

  atualizarTotalAdicionais();
  abrirModal($("#adicionais-modal"));
}

function atualizarTotalAdicionais() {
  if (!produtoPersonalizando) return;

  const precoBase = Number(produtoPersonalizando.preco);
  const selecionados = $$("#adicionais-modal-lista .checkbox-adicional:checked");

  const totalExtras = [...selecionados].reduce(
    (soma, checkbox) => soma + Number(checkbox.dataset.preco || 0),
    0
  );

  $("#adicionais-modal-total").textContent = formatarPreco(totalExtras);
  $("#adicionais-modal-preco-base").textContent = formatarPreco(precoBase);
  $("#adicionais-modal-preco-final").textContent =
    formatarPreco(precoBase + totalExtras);
}

function confirmarAdicionais() {
  if (!produtoPersonalizando) return;

  const selecionados = [
    ...$$("#adicionais-modal-lista .checkbox-adicional:checked")
  ].map(checkbox => ({
    nome: checkbox.dataset.nome,
    preco: Number(checkbox.dataset.preco)
  }));

  adicionarAoCarrinho(produtoPersonalizando, selecionados);
  fecharModal($("#adicionais-modal"));
  produtoPersonalizando = null;
}

function adicionarAoCarrinho(produto, adicionais = []) {
  const assinatura = adicionais
    .map(adicional => adicional.nome)
    .sort()
    .join("|");

  const existente = carrinho.find(item =>
    item.id === produto.id &&
    item.assinatura === assinatura
  );

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: Number(produto.preco),
      adicionais: adicionais.map(item => ({ ...item })),
      assinatura,
      quantidade: 1
    });
  }

  atualizarCarrinho();
  mostrarAviso(`${produto.nome} adicionado ao pedido.`);
}

function precoUnitario(item) {
  const extras = item.adicionais.reduce((soma, adicional) =>
    soma + Number(adicional.preco), 0);
  return Number(item.preco) + extras;
}

function totalCarrinho() {
  return carrinho.reduce((soma, item) =>
    soma + precoUnitario(item) * item.quantidade, 0);
}

function quantidadeCarrinho() {
  return carrinho.reduce((soma, item) => soma + item.quantidade, 0);
}

function atualizarCarrinho() {
  const quantidade = quantidadeCarrinho();
  const total = totalCarrinho();

  $("#barra-carrinho").classList.toggle("escondido", quantidade === 0);
  $("#carrinho-contagem").textContent =
    quantidade === 1 ? "1 item no pedido" : `${quantidade} itens no pedido`;
  $("#carrinho-subtotal").textContent = formatarPreco(total);
  $("#total-final").textContent = formatarPreco(total);

  $("#carrinho-vazio").classList.toggle("escondido", carrinho.length > 0);
  $("#itens-carrinho").classList.toggle("escondido", carrinho.length === 0);

  $("#itens-carrinho").innerHTML = carrinho.map((item, indice) => {
    const extras = item.adicionais.length
      ? item.adicionais.map(extra => extra.nome).join(", ")
      : "Sem adicionais";

    return `
      <article class="item-carrinho">
        <div class="item-carrinho-topo">
          <div>
            <h4>${escapar(item.nome)}</h4>
            <p class="item-carrinho-adicionais">${escapar(extras)}</p>
          </div>
          <strong class="item-carrinho-preco">
            ${formatarPreco(precoUnitario(item) * item.quantidade)}
          </strong>
        </div>
        <div class="item-carrinho-acoes">
          <button class="quantidade-btn" type="button" data-diminuir="${indice}" aria-label="Diminuir quantidade">−</button>
          <span class="quantidade">${item.quantidade}</span>
          <button class="quantidade-btn" type="button" data-aumentar="${indice}" aria-label="Aumentar quantidade">+</button>
          <button class="btn-remover" type="button" data-remover="${indice}">Remover</button>
        </div>
      </article>
    `;
  }).join("");

  $("#btn-finalizar").disabled = carrinho.length === 0;
}

function abrirModal(modal) {
  modal.classList.remove("escondido");
  document.body.classList.add("modal-aberto");
}

function fecharModal(modal) {
  modal.classList.add("escondido");

  if ($$(".modal:not(.escondido)").length === 0) {
    document.body.classList.remove("modal-aberto");
  }
}

function fecharModalAdicionais() {
  fecharModal($("#adicionais-modal"));
  produtoPersonalizando = null;
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    mostrarAviso("Adicione pelo menos um produto ao pedido.");
    return;
  }

  const nome = $("#cliente-nome").value.trim();
  const endereco = $("#cliente-endereco").value.trim();
  const referencia = $("#cliente-referencia").value.trim();
  const observacoes = $("#cliente-observacoes").value.trim();

  if (!nome) {
    $("#cliente-nome").focus();
    mostrarAviso("Informe seu nome para o pedido.");
    return;
  }

  if (!endereco) {
    $("#cliente-endereco").focus();
    mostrarAviso("Informe o endereço de entrega.");
    return;
  }

  const linhas = [
    "*🍔 PEDIDO — PAI & FILHO*",
    "",
    `*Nome:* ${nome}`,
    `*Endereço:* ${endereco}`
  ];

  if (referencia) linhas.push(`*Referência:* ${referencia}`);

  linhas.push("", "*ITENS DO PEDIDO*");

  carrinho.forEach(item => {
    linhas.push(
      "",
      `*${item.quantidade}x ${item.nome}*`,
      `Valor unitário com adicionais: ${formatarPreco(precoUnitario(item))}`
    );

    if (item.adicionais.length > 0) {
      linhas.push(
        "Adicionais: " + item.adicionais.map(extra =>
          `${extra.nome} (${formatarPreco(extra.preco)})`
        ).join(", ")
      );
    }
  });

  if (observacoes) {
    linhas.push("", `*Observações:* ${observacoes}`);
  }

  linhas.push(
    "",
    `*TOTAL: ${formatarPreco(totalCarrinho())}*`,
    "",
    "Olá! Gostaria de confirmar este pedido. 😊"
  );

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(linhas.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function configurarEventos() {
  $("#categorias").addEventListener("click", evento => {
    const botao = evento.target.closest(".categoria-btn");
    if (!botao) return;
    aplicarFiltro(botao.dataset.categoria);
  });

  $("#cardapio").addEventListener("click", evento => {
    const botao = evento.target.closest("[data-adicionar]");
    if (!botao) return;

    const produto = produtos.find(item =>
      item.id === Number(botao.dataset.adicionar)
    );

    if (!produto) return;

    const adicionais = adicionaisDoProduto(produto);

    if (adicionais.length > 0) {
      abrirModalAdicionais(produto);
    } else {
      adicionarAoCarrinho(produto);
    }
  });

  $("#btn-fechar-adicionais").addEventListener("click", fecharModalAdicionais);
  $("#btn-cancelar-adicionais").addEventListener("click", fecharModalAdicionais);
  $("#btn-confirmar-adicionais").addEventListener("click", confirmarAdicionais);

  $("#adicionais-modal").addEventListener("click", evento => {
    if (evento.target === $("#adicionais-modal")) {
      fecharModalAdicionais();
    }
  });

  $("#btn-abrir-carrinho").addEventListener("click", () => {
    atualizarCarrinho();
    abrirModal($("#carrinho-modal"));
  });

  $("#btn-fechar-carrinho").addEventListener("click", () => {
    fecharModal($("#carrinho-modal"));
  });

  $("#btn-continuar").addEventListener("click", () => {
    fecharModal($("#carrinho-modal"));
  });

  $("#carrinho-modal").addEventListener("click", evento => {
    if (evento.target === $("#carrinho-modal")) {
      fecharModal($("#carrinho-modal"));
    }
  });

  $("#itens-carrinho").addEventListener("click", evento => {
    const aumentar = evento.target.closest("[data-aumentar]");
    const diminuir = evento.target.closest("[data-diminuir]");
    const remover = evento.target.closest("[data-remover]");

    if (aumentar) {
      carrinho[Number(aumentar.dataset.aumentar)].quantidade += 1;
    } else if (diminuir) {
      const indice = Number(diminuir.dataset.diminuir);
      carrinho[indice].quantidade -= 1;
      if (carrinho[indice].quantidade <= 0) carrinho.splice(indice, 1);
    } else if (remover) {
      carrinho.splice(Number(remover.dataset.remover), 1);
    } else {
      return;
    }

    atualizarCarrinho();
  });

  $("#btn-finalizar").addEventListener("click", finalizarPedido);

  document.addEventListener("keydown", evento => {
    if (evento.key !== "Escape") return;

    if (!$("#adicionais-modal").classList.contains("escondido")) {
      fecharModalAdicionais();
    } else if (!$("#carrinho-modal").classList.contains("escondido")) {
      fecharModal($("#carrinho-modal"));
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();
  configurarEventos();
  atualizarCarrinho();
});
