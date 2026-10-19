"use strict";

const WHATSAPP_NUMERO = "5535988320463";

const PLANILHA_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWhv3boH7Ps-Sjil1GPXZQviqaMf-MYBgvEbq36MAu-lMtiSJtcZFhkda1UjV_DNpOAfB_SlC38BdL/pub?gid=0&single=true&output=csv";

// Mudei para v3 para o celular esquecer o cardápio antigo e carregar os fardos
const CACHE_CHAVE = "paiefilho_cardapio_v3";

// Categorias aceitas (cada uma precisa de uma lista no HTML com id "lista-NOME")
const CATEGORIAS_VALIDAS = [
  "lanches", "pasteis", "porcoes",
  "pizzas_pequenas", "pizzas_grandes", "pizzas_doces",
  "bebidas_alcoolicas", "cervejas_fardo",
  "refrigerantes_lata", "refrigerantes_garrafa",
  "energeticos", "aguas", "cerveja_sem_alcool", "sucos"
];

const produtosReserva = [
  // LANCHES
  { id: 1, categoria: "lanches", nome: "X-Burguer", descricao: "Hambúrguer, presunto e mussarela", preco: 8.50, destaque: false },
  { id: 2, categoria: "lanches", nome: "X-Salada", descricao: "Alface, tomate, hambúrguer, presunto e mussarela", preco: 9.50, destaque: false },
  { id: 3, categoria: "lanches", nome: "X-Frango", descricao: "Frango, mussarela, alface e tomate", preco: 12.50, destaque: false },
  { id: 4, categoria: "lanches", nome: "X-Burguer G", descricao: "2 hambúrgueres, presunto e mussarela", preco: 12.50, destaque: false },
  { id: 5, categoria: "lanches", nome: "X-Salada G", descricao: "Alface, tomate, 2 hambúrgueres, presunto e mussarela", preco: 13.50, destaque: false },
  { id: 6, categoria: "lanches", nome: "X-Burguer Bacon", descricao: "Hambúrguer, presunto, mussarela e bacon", preco: 11.50, destaque: false },
  { id: 7, categoria: "lanches", nome: "X-Salada Bacon", descricao: "Tomate, alface, hambúrguer, presunto, mussarela e bacon", preco: 12.50, destaque: false },
  { id: 8, categoria: "lanches", nome: "X-Burguer G Bacon", descricao: "2 hambúrgueres, presunto, mussarela e bacon", preco: 15.50, destaque: false },
  { id: 9, categoria: "lanches", nome: "X-Salada G Bacon", descricao: "Tomate, alface, 2 hambúrgueres, presunto, mussarela e bacon", preco: 16.50, destaque: false },
  { id: 10, categoria: "lanches", nome: "X-Frango Bacon", descricao: "Frango, mussarela, tomate, alface e bacon", preco: 15.50, destaque: false },
  { id: 11, categoria: "lanches", nome: "Cachorro Quente na Chapa", descricao: "2 salsichas, mussarela, tomate, alface, milho, bacon e batata palha", preco: 17.50, destaque: false },
  { id: 12, categoria: "lanches", nome: "Cachorro Quente", descricao: "2 salsichas, vinagrete, milho, purê de batata e batata palha", preco: 13.00, destaque: false },

  // PASTÉIS
  { id: 13, categoria: "pasteis", nome: "Pastel de Carne", descricao: "Pastel tradicional de carne", preco: 8.00, destaque: false },
  { id: 14, categoria: "pasteis", nome: "Pastel de Frango", descricao: "Pastel tradicional de frango", preco: 8.00, destaque: false },
  { id: 15, categoria: "pasteis", nome: "Pastel Frango c/ Queijo", descricao: "Frango com queijo", preco: 8.00, destaque: false },
  { id: 16, categoria: "pasteis", nome: "Pastel Frango c/ Catupiry", descricao: "Frango com catupiry", preco: 8.00, destaque: false },
  { id: 17, categoria: "pasteis", nome: "Pastel Presunto e Mussarela", descricao: "Presunto e mussarela", preco: 8.00, destaque: false },
  { id: 18, categoria: "pasteis", nome: "Pastel de Pizza", descricao: "Queijo, presunto, tomate e orégano", preco: 8.00, destaque: false },
  { id: 19, categoria: "pasteis", nome: "Pastel de Queijo", descricao: "Mussarela", preco: 8.00, destaque: false },

  // PORÇÕES
  { id: 20, categoria: "porcoes", nome: "Porção Batata Grande", descricao: "Batata frita com cheddar e bacon", preco: 30.00, destaque: true },
  { id: 21, categoria: "porcoes", nome: "Porção Batata Média", descricao: "Batata frita com cheddar e bacon", preco: 20.00, destaque: false },
  { id: 22, categoria: "porcoes", nome: "Porção Batata Pequena", descricao: "Batata frita com cheddar e bacon", preco: 10.00, destaque: false },

  // PIZZAS DOCES
  { id: 23, categoria: "pizzas_doces", nome: "Pizza Brigadeiro", descricao: "Chocolate e granulado", preco: 25.00, destaque: false },
  { id: 24, categoria: "pizzas_doces", nome: "Pizza Prestígio", descricao: "Chocolate, coco ralado e leite condensado", preco: 25.00, destaque: false },
  { id: 25, categoria: "pizzas_doces", nome: "Pizza M&M", descricao: "Chocolate e M&M", preco: 25.00, destaque: false },
  { id: 26, categoria: "pizzas_doces", nome: "Pizza Tubin", descricao: "Chocolate e tubin", preco: 25.00, destaque: false },
  { id: 27, categoria: "pizzas_doces", nome: "Pizza Ouro Branco", descricao: "Chocolate e ouro branco", preco: 25.00, destaque: false },
  { id: 28, categoria: "pizzas_doces", nome: "Pizza Bis", descricao: "Chocolate e bis", preco: 25.00, destaque: false },
  { id: 29, categoria: "pizzas_doces", nome: "Pizza Choc Leite & Branco", descricao: "Chocolate ao leite e chocolate branco", preco: 25.00, destaque: false },

  // PIZZAS SALGADAS PEQUENAS
  { id: 30, categoria: "pizzas_pequenas", nome: "Pizza Presunto e Mussarela (Pequena)", descricao: "Presunto, mussarela, tomate e azeitona", preco: 20.00, destaque: false },
  { id: 31, categoria: "pizzas_pequenas", nome: "Pizza Calabresa (Pequena)", descricao: "Calabresa, bacon, cebola, mussarela e azeitona", preco: 20.00, destaque: false },
  { id: 32, categoria: "pizzas_pequenas", nome: "Pizza Portuguesa (Pequena)", descricao: "Presunto, mussarela, ovos cozidos, batata palha e azeitona", preco: 20.00, destaque: false },
  { id: 33, categoria: "pizzas_pequenas", nome: "Pizza Frango com Catupiry (Pequena)", descricao: "Frango, catupiry e azeitona", preco: 18.00, destaque: false },
  { id: 34, categoria: "pizzas_pequenas", nome: "Pizza Mussarela (Pequena)", descricao: "Mussarela e azeitona", preco: 20.00, destaque: false },
  { id: 35, categoria: "pizzas_pequenas", nome: "Pizza 3 Queijos (Pequena)", descricao: "Mussarela, provolone, parmesão e azeitona", preco: 20.00, destaque: false },
  { id: 36, categoria: "pizzas_pequenas", nome: "Pizza Brócolis (Pequena)", descricao: "Brócolis, mussarela e azeitona", preco: 20.00, destaque: false },
  { id: 37, categoria: "pizzas_pequenas", nome: "Pizza Batata Frita (Pequena)", descricao: "Batata frita, bacon, mussarela e azeitona", preco: 20.00, destaque: false },

  // PIZZAS SALGADAS GRANDES
  { id: 38, categoria: "pizzas_grandes", nome: "Pizza Presunto e Mussarela (Grande)", descricao: "Presunto, mussarela e tomate", preco: 40.00, destaque: false },
  { id: 39, categoria: "pizzas_grandes", nome: "Pizza Mussarela (Grande)", descricao: "Mussarela", preco: 40.00, destaque: false },
  { id: 40, categoria: "pizzas_grandes", nome: "Pizza Calabresa (Grande)", descricao: "Mussarela, calabresa, bacon, cebola e azeitona", preco: 40.00, destaque: false },
  { id: 41, categoria: "pizzas_grandes", nome: "Pizza Portuguesa (Grande)", descricao: "Mussarela, presunto, ovo, batata palha e azeitona", preco: 40.00, destaque: false },
  { id: 42, categoria: "pizzas_grandes", nome: "Pizza Frango com Catupiry (Grande)", descricao: "Frango, catupiry e azeitona", preco: 35.00, destaque: false },
  { id: 43, categoria: "pizzas_grandes", nome: "Pizza Batata Frita (Grande)", descricao: "Batata frita, queijo, mussarela, bacon e azeitona", preco: 40.00, destaque: false },
  { id: 44, categoria: "pizzas_grandes", nome: "Pizza 3 Queijos (Grande)", descricao: "Mussarela, provolone, parmesão e azeitona", preco: 40.00, destaque: false },
  { id: 45, categoria: "pizzas_grandes", nome: "Pizza Brócolis (Grande)", descricao: "Mussarela, brócolis e azeitona", preco: 40.00, destaque: false },

  // BEBIDAS ALCOÓLICAS
  { id: 46, categoria: "bebidas_alcoolicas", nome: "Skol Lata 350ml", descricao: "", preco: 4.50, destaque: false },
  { id: 47, categoria: "bebidas_alcoolicas", nome: "Itaipava Lata 350ml", descricao: "", preco: 4.00, destaque: false },
  { id: 48, categoria: "bebidas_alcoolicas", nome: "Original Lata 350ml", descricao: "", preco: 6.00, destaque: false },
  { id: 49, categoria: "bebidas_alcoolicas", nome: "Heineken Lata 350ml", descricao: "", preco: 7.00, destaque: false },
  { id: 50, categoria: "bebidas_alcoolicas", nome: "Amstel Lata 350ml", descricao: "", preco: 4.50, destaque: false },
  { id: 51, categoria: "bebidas_alcoolicas", nome: "Império Lata 350ml", descricao: "", preco: 4.00, destaque: false },
  { id: 52, categoria: "bebidas_alcoolicas", nome: "51 Ice", descricao: "", preco: 7.80, destaque: false },
  { id: 53, categoria: "bebidas_alcoolicas", nome: "Heineken Garrafa 330ml", descricao: "", preco: 8.20, destaque: false },
  { id: 54, categoria: "bebidas_alcoolicas", nome: "Cantinho do Vale", descricao: "", preco: 7.00, destaque: false },
  { id: 55, categoria: "bebidas_alcoolicas", nome: "Vinho Country Wine", descricao: "", preco: 18.20, destaque: false },

  // REFRIGERANTE LATA
  { id: 56, categoria: "refrigerantes_lata", nome: "Coca-Cola Lata", descricao: "", preco: 5.50, destaque: false },
  { id: 57, categoria: "refrigerantes_lata", nome: "Fanta Uva Lata", descricao: "", preco: 5.00, destaque: false },
  { id: 58, categoria: "refrigerantes_lata", nome: "Sprite Lata", descricao: "", preco: 5.00, destaque: false },

  // REFRIGERANTES GARRAFA
  { id: 59, categoria: "refrigerantes_garrafa", nome: "It Laranja 2L", descricao: "", preco: 7.00, destaque: false },
  { id: 60, categoria: "refrigerantes_garrafa", nome: "It Limão 2L", descricao: "", preco: 7.00, destaque: false },
  { id: 61, categoria: "refrigerantes_garrafa", nome: "It Guaraná 2L", descricao: "", preco: 7.00, destaque: false },
  { id: 62, categoria: "refrigerantes_garrafa", nome: "It Cola 2L", descricao: "", preco: 7.00, destaque: false },
  { id: 63, categoria: "refrigerantes_garrafa", nome: "Guara Limão 2L", descricao: "", preco: 6.50, destaque: false },
  { id: 64, categoria: "refrigerantes_garrafa", nome: "Guara Abacaxi 2L", descricao: "", preco: 6.50, destaque: false },
  { id: 65, categoria: "refrigerantes_garrafa", nome: "Guara Guaraná 2L", descricao: "", preco: 6.50, destaque: false },
  { id: 66, categoria: "refrigerantes_garrafa", nome: "Tubaína Guara 2L", descricao: "", preco: 6.50, destaque: false },
  { id: 67, categoria: "refrigerantes_garrafa", nome: "Coca-Cola 2,5L", descricao: "", preco: 15.00, destaque: false },
  { id: 68, categoria: "refrigerantes_garrafa", nome: "Coca-Cola Zero 1L", descricao: "", preco: 8.00, destaque: false },
  { id: 69, categoria: "refrigerantes_garrafa", nome: "Coca-Cola 1L", descricao: "", preco: 8.00, destaque: false },
  { id: 70, categoria: "refrigerantes_garrafa", nome: "Coca-Cola 200ml", descricao: "", preco: 2.70, destaque: false },

  // ENERGÉTICOS
  { id: 71, categoria: "energeticos", nome: "Bally 2L", descricao: "", preco: 14.50, destaque: false },
  { id: 72, categoria: "energeticos", nome: "Monster Lata", descricao: "", preco: 11.60, destaque: false },

  // ÁGUAS
  { id: 73, categoria: "aguas", nome: "Água de Coco 1L", descricao: "", preco: 12.00, destaque: false },
  { id: 74, categoria: "aguas", nome: "Água 500ml", descricao: "", preco: 2.00, destaque: false },
  { id: 75, categoria: "aguas", nome: "Água com Gás 500ml", descricao: "", preco: 2.50, destaque: false },
  { id: 76, categoria: "aguas", nome: "Água 1,5L", descricao: "", preco: 5.00, destaque: false },

  // CERVEJA SEM ÁLCOOL
  { id: 77, categoria: "cerveja_sem_alcool", nome: "Heineken Zero Lata 350ml", descricao: "", preco: 7.50, destaque: false },
  { id: 78, categoria: "cerveja_sem_alcool", nome: "Heineken Zero Garrafa 330ml", descricao: "", preco: 8.20, destaque: false },

  // SUCOS E OUTRAS
  { id: 79, categoria: "sucos", nome: "Suco 1L", descricao: "", preco: 7.90, destaque: false },
  { id: 80, categoria: "sucos", nome: "Tampico 450ml", descricao: "", preco: 5.00, destaque: false },
  { id: 81, categoria: "sucos", nome: "Power Ade", descricao: "", preco: 6.40, destaque: false },
  { id: 82, categoria: "sucos", nome: "Gatorade", descricao: "", preco: 7.00, destaque: false },
  { id: 83, categoria: "sucos", nome: "Todinho", descricao: "", preco: 2.00, destaque: false },

  // CERVEJAS FARDO
  { id: 84, categoria: "cervejas_fardo", nome: "Skol Fardo 350ml", descricao: "", preco: 50.00, destaque: false },
  { id: 85, categoria: "cervejas_fardo", nome: "Itaipava Fardo 350ml", descricao: "", preco: 40.00, destaque: false },
  { id: 86, categoria: "cervejas_fardo", nome: "Amstel Fardo 350ml", descricao: "", preco: 50.00, destaque: false },
  { id: 87, categoria: "cervejas_fardo", nome: "Império Fardo 350ml", descricao: "", preco: 45.00, destaque: false },
  { id: 88, categoria: "cervejas_fardo", nome: "Original Fardo 350ml", descricao: "", preco: 66.00, destaque: false },
  { id: 89, categoria: "cervejas_fardo", nome: "Heineken Fardo 350ml", descricao: "", preco: 75.00, destaque: false },

  // LIMONETO
  { id: 90, categoria: "sucos", nome: "Limoneto", descricao: "", preco: 6.00, destaque: false }
];

const adicionaisPorCategoria = {
  lanches: [
    { nome: "Catupiry", preco: 3 },
    { nome: "Milho", preco: 2 },
    { nome: "Batata palha", preco: 2 },
    { nome: "Cheddar", preco: 3 },
    { nome: "Ovo", preco: 2 }
  ],
  porcoes: [
    { nome: "Catupiry", preco: 5 },
    { nome: "Cheddar", preco: 5 },
    { nome: "Bacon", preco: 5 }
  ],
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

let produtos = [];
let carrinho = [];
let produtoPersonalizando = null;
let pizzaPersonalizandoMetade = null;
let categoriaAtual = "todos";
let avisoTimeout;

const $ = (seletor) => document.querySelector(seletor);
const $$ = (seletor) => document.querySelectorAll(seletor);

/* ============ DIAS SEM PIZZA ============ */

// 0 = domingo, 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sábado
const DIAS_SEM_PIZZA = [0];

const CATEGORIAS_PIZZA = ["pizzas_pequenas", "pizzas_grandes", "pizzas_doces"];

function diaDaSemanaBrasil() {
  const nome = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "America/Sao_Paulo"
  }).format(new Date());

  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(nome);
}

function semPizzaHoje() {
  return DIAS_SEM_PIZZA.includes(diaDaSemanaBrasil());
}

function ehPizza(produto) {
  return CATEGORIAS_PIZZA.includes(produto.categoria);
}

function atualizarAvisoPizza() {
  $$(".secao-produtos").forEach(secao => {
    if (!CATEGORIAS_PIZZA.includes(secao.dataset.secao)) return;

    const antigo = secao.querySelector(".aviso-pizza");
    if (antigo) antigo.remove();

    if (!semPizzaHoje()) return;

    const aviso = document.createElement("div");
    aviso.className = "aviso-pizza";
    aviso.innerHTML = "🚫 <strong>Aos domingos não fazemos pizzas.</strong> Os outros itens do cardápio estão disponíveis!";

    secao.querySelector(".secao-cabecalho").after(aviso);
  });
}

/* ============ PLANILHA ============ */

function lerCSV(texto) {
  const linhas = [];
  let linha = [];
  let campo = "";
  let aspas = false;

  texto = texto.replace(/^\uFEFF/, "");

  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];

    if (aspas) {
      if (c === '"' && texto[i + 1] === '"') {
        campo += '"';
        i++;
      } else if (c === '"') {
        aspas = false;
      } else {
        campo += c;
      }
    } else if (c === '"') {
      aspas = true;
    } else if (c === ",") {
      linha.push(campo);
      campo = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && texto[i + 1] === "\n") i++;
      linha.push(campo);
      linhas.push(linha);
      linha = [];
      campo = "";
    } else {
      campo += c;
    }
  }

  if (campo !== "" || linha.length > 0) {
    linha.push(campo);
    linhas.push(linha);
  }

  return linhas;
}

function normalizar(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function normalizarCategoria(valor) {
  return normalizar(valor).replace(/[\s-]+/g, "_");
}

function lerPreco(valor) {
  let texto = String(valor ?? "").replace(/[^\d,.-]/g, "");
  if (!texto) return NaN;

  if (texto.includes(",")) {
    texto = texto.replace(/\./g, "").replace(",", ".");
  }

  return parseFloat(texto);
}

function ehSim(valor) {
  return ["sim", "s", "true", "1", "x", "yes"].includes(normalizar(valor));
}

function ehNao(valor) {
  return ["nao", "n", "false", "0", "no", "inativo", "off"].includes(normalizar(valor));
}

function converterPlanilha(texto) {
  const linhas = lerCSV(texto).filter(l => l.some(c => c.trim() !== ""));
  if (linhas.length < 2) return [];

  const cabecalho = linhas[0].map(normalizar);
  const coluna = (...nomes) => cabecalho.findIndex(h => nomes.includes(h));

  const iId = coluna("id");
  const iCategoria = coluna("categoria");
  const iNome = coluna("nome", "produto");
  const iDescricao = coluna("descricao", "descri");
  const iPreco = coluna("preco", "valor");
  const iDestaque = coluna("destaque");
  const iAtivo = coluna("ativo", "disponivel");

  if (iCategoria < 0 || iNome < 0 || iPreco < 0) return [];

  const lista = [];
  const idsUsados = new Set();

  linhas.slice(1).forEach((linha, indice) => {
    const nome = (linha[iNome] || "").trim();
    const categoria = normalizarCategoria(linha[iCategoria]);
    const preco = lerPreco(linha[iPreco]);

    if (!nome || !CATEGORIAS_VALIDAS.includes(categoria) || isNaN(preco)) return;
    if (iAtivo >= 0 && ehNao(linha[iAtivo])) return;

    let id = iId >= 0 ? parseInt(linha[iId], 10) : NaN;
    if (isNaN(id) || idsUsados.has(id)) id = 1000 + indice;
    idsUsados.add(id);

    lista.push({
      id,
      categoria,
      nome,
      descricao: iDescricao >= 0 ? (linha[iDescricao] || "").trim() : "",
      preco,
      destaque: iDestaque >= 0 ? ehSim(linha[iDestaque]) : false
    });
  });

  return lista;
}

function lerCache() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CACHE_CHAVE));
    return Array.isArray(salvo) && salvo.length > 0 ? salvo : null;
  } catch {
    return null;
  }
}

function salvarCache(lista) {
  try {
    localStorage.setItem(CACHE_CHAVE, JSON.stringify(lista));
  } catch {}
}

async function carregarPlanilha() {
  const controle = new AbortController();
  const limite = setTimeout(() => controle.abort(), 8000);

  try {
    const resposta = await fetch(`${PLANILHA_URL}&_=${Date.now()}`, {
      signal: controle.signal,
      cache: "no-store"
    });

    if (!resposta.ok) throw new Error("Falha ao carregar a planilha");

    const lista = converterPlanilha(await resposta.text());
    if (lista.length === 0) throw new Error("Planilha vazia ou fora do formato");

    produtos = lista;
    salvarCache(lista);
    renderizarProdutos();
  } catch (erro) {
    console.warn("Usando cardápio salvo:", erro.message);
  } finally {
    clearTimeout(limite);
  }
}

/* ============ FUNÇÕES GERAIS ============ */

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
    pizzas_doces: "Pizzas doces",
    bebidas_alcoolicas: "Bebida alcoólica",
    cervejas_fardo: "Fardo de cerveja",
    refrigerantes_lata: "Refrigerante lata",
    refrigerantes_garrafa: "Refrigerante",
    energeticos: "Energético",
    aguas: "Água",
    cerveja_sem_alcool: "Sem álcool",
    sucos: "Sucos e outros"
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
  // Cada categoria tem uma lista no HTML com id "lista-NOME"
  const listas = {};

  CATEGORIAS_VALIDAS.forEach(categoria => {
    const elemento = $(`#lista-${categoria}`);
    if (elemento) {
      elemento.innerHTML = "";
      listas[categoria] = elemento;
    }
  });

  produtos.forEach(produto => {
    const destino = listas[produto.categoria];
    if (!destino) return;

    const bloqueado = semPizzaHoje() && ehPizza(produto);
    const ehPizzaGrande = produto.categoria === "pizzas_grandes";

    const card = document.createElement("article");
    card.className = "produto-card" + (bloqueado ? " indisponivel" : "");

    const botoes = bloqueado
      ? `<button type="button" class="btn-add" disabled>Indisponível hoje</button>`
      : `
          ${ehPizzaGrande ? `<button type="button" class="btn-metade-card" data-metade="${produto.id}">🍕 2 Sabores</button>` : ""}
          <button type="button" class="btn-add" data-adicionar="${produto.id}">+ Adicionar</button>
        `;

    card.innerHTML = `
      <span class="produto-categoria">${escapar(categoriaDoProduto(produto))}</span>
      <h3>${escapar(produto.nome)}</h3>
      <p class="produto-descricao">${escapar(produto.descricao)}</p>
      <div class="produto-rodape">
        <span class="produto-preco">${formatarPreco(produto.preco)}</span>
        <div class="produto-acoes">${botoes}</div>
      </div>
    `;

    destino.appendChild(card);
  });

  atualizarAvisoPizza();
  aplicarFiltro(categoriaAtual);
}

function aplicarFiltro(categoria) {
  categoriaAtual = categoria;

  $$(".categoria-btn").forEach(botao => {
    botao.classList.toggle("ativa", botao.dataset.categoria === categoria);
  });

  let encontrados = 0;

  $$(".secao-produtos").forEach(secao => {
    const quantidade = secao.querySelectorAll(".produto-card").length;

    // "bebidas" mostra todas as seções que têm data-grupo="bebidas"
    const corresponde = categoria === "todos" ||
      secao.dataset.secao === categoria ||
      secao.dataset.grupo === categoria;

    const visivel = corresponde && quantidade > 0;

    secao.classList.toggle("escondido", !visivel);

    if (visivel) encontrados += quantidade;
  });

  $("#sem-produtos").classList.toggle("escondido", encontrados > 0);
}

/* ============ ADICIONAIS ============ */

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
  $("#adicionais-modal-preco-final").textContent = formatarPreco(precoBase + totalExtras);
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

/* ============ METADE / METADE (PIZZAS GRANDES) ============ */

function abrirModalMetade(produto) {
  pizzaPersonalizandoMetade = produto;
  const saboresDisponiveis = produtos.filter(p => p.categoria === "pizzas_grandes");

  $("#metade-produto-titulo").textContent = "Montar Pizza Grande Meio a Meio";

  const optionsHTML = saboresDisponiveis.map(p =>
    `<option value="${p.id}" data-preco="${p.preco}">${escapar(p.nome)} (${formatarPreco(p.preco)})</option>`
  ).join("");

  const select1 = $("#primeiro-sabor");
  const select2 = $("#segundo-sabor");

  select1.innerHTML = optionsHTML;
  select2.innerHTML = optionsHTML;

  select1.value = produto.id;
  if (saboresDisponiveis.length > 1) {
    select2.value = saboresDisponiveis[1].id;
  } else {
    select2.value = produto.id;
  }

  atualizarPrecoMetade();

  select1.onchange = atualizarPrecoMetade;
  select2.onchange = atualizarPrecoMetade;

  abrirModal($("#metade-modal"));
}

function atualizarPrecoMetade() {
  const select1 = $("#primeiro-sabor");
  const select2 = $("#segundo-sabor");

  const opt1 = select1.options[select1.selectedIndex];
  const opt2 = select2.options[select2.selectedIndex];

  const preco1 = opt1 ? Number(opt1.dataset.preco || 0) : 0;
  const preco2 = opt2 ? Number(opt2.dataset.preco || 0) : 0;

  const maiorPreco = Math.max(preco1, preco2);
  $("#metade-modal-preco").textContent = formatarPreco(maiorPreco);
}

function confirmarMetade() {
  if (!pizzaPersonalizandoMetade) return;

  const select1 = $("#primeiro-sabor");
  const select2 = $("#segundo-sabor");

  const opt1 = select1.options[select1.selectedIndex];
  const opt2 = select2.options[select2.selectedIndex];

  const sabor1Nome = opt1 ? opt1.text.split(" (")[0] : "";
  const sabor2Nome = opt2 ? opt2.text.split(" (")[0] : "";

  const preco1 = opt1 ? Number(opt1.dataset.preco || 0) : 0;
  const preco2 = opt2 ? Number(opt2.dataset.preco || 0) : 0;
  const maiorPreco = Math.max(preco1, preco2);

  const pizzaMeioAMeio = {
    ...pizzaPersonalizandoMetade,
    nome: `Pizza Grande (Metade ${sabor1Nome} / Metade ${sabor2Nome})`,
    preco: maiorPreco
  };

  fecharModalMetade();
  abrirModalAdicionais(pizzaMeioAMeio);
}

function fecharModalMetade() {
  fecharModal($("#metade-modal"));
  pizzaPersonalizandoMetade = null;
}

/* ============ CARRINHO ============ */

function adicionarAoCarrinho(produto, adicionais = []) {
  if (semPizzaHoje() && ehPizza(produto)) {
    mostrarAviso("Aos domingos não fazemos pizzas.");
    return;
  }

  const assinatura = adicionais
    .map(adicional => adicional.nome)
    .sort()
    .join("|");

  const existente = carrinho.find(item =>
    item.id === produto.id &&
    item.nome === produto.nome &&
    item.assinatura === assinatura
  );

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({
      id: produto.id,
      categoria: produto.categoria,
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

/* ============ MODAIS ============ */

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

/* ============ FINALIZAR PEDIDO ============ */

function finalizarPedido() {
  if (carrinho.length === 0) {
    mostrarAviso("Adicione pelo menos um produto ao pedido.");
    return;
  }

  if (semPizzaHoje() && carrinho.some(item => CATEGORIAS_PIZZA.includes(item.categoria))) {
    mostrarAviso("Aos domingos não fazemos pizzas. Remova as pizzas do pedido.");
    return;
  }

  const nome = $("#cliente-nome").value.trim();
  const bairro = $("#cliente-bairro").value.trim();
  const rua = $("#cliente-rua").value.trim();
  const referencia = $("#cliente-referencia").value.trim();
  const observacoes = $("#cliente-observacoes").value.trim();

  if (!nome) {
    $("#cliente-nome").focus();
    mostrarAviso("Informe seu nome para o pedido.");
    return;
  }

  if (!bairro) {
    $("#cliente-bairro").focus();
    mostrarAviso("Informe o bairro para a entrega.");
    return;
  }

  const linhas = [
    "*🍔 PEDIDO — PAI & FILHO*",
    "",
    `*Nome:* ${nome}`,
    `*Bairro:* ${bairro}`
  ];

  if (rua) linhas.push(`*Rua:* ${rua}`);
  if (referencia) linhas.push(`*Referência:* ${referencia}`);

  linhas.push("", "*ITENS DO PEDIDO*");

  carrinho.forEach(item => {
    linhas.push(
      "",
      `*${item.quantidade}x ${item.nome}*`,
      `Valor unitário: ${formatarPreco(precoUnitario(item))}`
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

/* ============ EVENTOS ============ */

function configurarEventos() {
  $("#categorias").addEventListener("click", evento => {
    const botao = evento.target.closest(".categoria-btn");
    if (!botao) return;
    aplicarFiltro(botao.dataset.categoria);
  });

  $("#cardapio").addEventListener("click", evento => {
    const btnAdicionar = evento.target.closest("[data-adicionar]");
    const btnMetade = evento.target.closest("[data-metade]");

    if (btnMetade) {
      const produto = produtos.find(item => item.id === Number(btnMetade.dataset.metade));
      if (produto) abrirModalMetade(produto);
      return;
    }

    if (btnAdicionar) {
      const produto = produtos.find(item => item.id === Number(btnAdicionar.dataset.adicionar));
      if (!produto) return;

      const adicionais = adicionaisDoProduto(produto);
      if (adicionais.length > 0) {
        abrirModalAdicionais(produto);
      } else {
        adicionarAoCarrinho(produto);
      }
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

  $("#btn-fechar-metade").addEventListener("click", fecharModalMetade);
  $("#btn-cancelar-metade").addEventListener("click", fecharModalMetade);
  $("#btn-confirmar-metade").addEventListener("click", confirmarMetade);

  $("#metade-modal").addEventListener("click", evento => {
    if (evento.target === $("#metade-modal")) {
      fecharModalMetade();
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
    } else if (!$("#metade-modal").classList.contains("escondido")) {
      fecharModalMetade();
    } else if (!$("#carrinho-modal").classList.contains("escondido")) {
      fecharModal($("#carrinho-modal"));
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  produtos = lerCache() || produtosReserva;

  renderizarProdutos();
  configurarEventos();
  atualizarCarrinho();
  carregarPlanilha();
});