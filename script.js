/// 1 - MOSTRAR E OCULTAR MENU

const btnMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// MOSTRAR E OCULTAR ELEMENTO

const btnMostrar = document.querySelector("#btn-mostrar");
const mensagem = document.querySelector("#mensagem");

btnMostrar.addEventListener("click", function () {
  mensagem.classList.toggle("oculto");
});

// ALTERAR O TEXTO

const btnTexto = document.querySelector("#btn-texto");
const texto = document.querySelector("#texto");

btnTexto.addEventListener("click", function () {
  texto.textContent = "O texto foi alterado pelo JS";
});

// ALTERAR TEMA

const btnTema = document.querySelector("#btn-tema");
const btnClaro = document.querySelector("#btn-tema-claro");

btnTema.addEventListener("click", function () {
  document.body.classList.add("tema-escuro");
  btnTema.classList.remove("oculto");
  btnClaro.classList.add("oculto");
});

btnClaro.addEventListener("click", function () {
  document.body.classList.remove("tema-escuro");
  btnTema.classList.remove("oculto");
  btnClaro.classList.add("oculto");
});

// CONTADOR

let contador = 0;

const valorContador = document.querySelector("#contador");
const btnMais = document.querySelector("#btn-mais");
const btnMenos = document.querySelector("#btn-menos");
const btnZerar = document.querySelector("#btn-zerar");

btnMais.addEventListener("click", function () {
  contador++;
  valorContador.textContent = contador;
});

btnMenos.addEventListener("click", function () {
  contador--;
  valorContador.textContent = contador;
});

btnZerar.addEventListener("click", function () {
  contador = 0;
  valorContador.textContent = contador;
});

// PEGAR INFORMAÇÃO DO CAMPO DE TEXTO

const campoNome = document.querySelector("#nome");
const btnNome = document.querySelector("#btn-nome");
const resultadoNome = document.querySelector("#resultado-nome");

btnNome.addEventListener("click", function () {
  // pegando o nome do campo
  const nome = campoNome.value;
  if (nome === "") {
    resultadoNome.textContent = "Nenhum nome foi digitado";
  } else {
    resultadoNome.textContent = `Olá, ${nome}!`;
  }
});

// CRIAR ELEMENTO NO HTML

const campoTarefa = document.querySelector("#tarefa");
const btnAdicionar = document.querySelector("#btn-adicionar");
const lista = document.querySelector("#lista");

btnAdicionar.addEventListener("click", function () {
  // PEGAR O TEXTO DA CAIXA
  const tarefa = campoTarefa.value;

  // verificar se a caixa não está vazia
  if (tarefa === "") {
    return;
  }

  //  CRIAR A TAG "LI" - item da lista
  const item = document.createElement("li");

  // ARMAZENAR A TAREFA DENTRO DA "LI"
  item.textContent = tarefa;

  // ADICIONAR A TAG LI AO HTML
  lista.appendChild(item);

  campoTarefa.value = " ";
});

// UTILIZANDO VETORES E LOOPS
// VETOR = ARRAY
// LOOP = PARA = FOR

const alunos = [
  "Priscila",
  "Helena",
  "Maria Melo",
  "Isabela",
  "Kamily",
  "Manuela",
  "Maria Rogalski",
  "Mariana",
  "Davi",
  "Vinicius",
  "Yasmin",
  "Paula",
  "Guilherme",
  "Nicolas",
  "Henrique",
];

const btnAlunos = document.querySelector("#btn-alunos");
const listaAlunos = document.querySelector("#lista-alunos");

btnAlunos.addEventListener("click", function () {
  // LIMPAR A LISTA
  listaAlunos.innerHTML = " ";

  // PERCORRENDO O VETOR
  alunos.forEach(function (aluno) {
    // CRIAR UMA LI
    const item = document.createElement("li");

    // COLOCAR O NOME DO ALUNO
    // UTILIZANDO A VARIAVEL "ITEM"
    // innerHTML
    item.innerHTML = `<i class="bi bi-person"></i> ${aluno}`;
    // ADICIONAR ELEMENTO FIHO DA LISTA

    listaAlunos.appendChild(item);
  });
});

// CONDICIONAIS

const campoIdade = document.querySelector("#idade");
const btnIdade = document.querySelector("#btn-idade");
const resultadoIdade = document.querySelector("#resultado-idade");

// CONVERTER A INFORMAÇÃO DA IDADE DE
// TEXTO PARA NÚMERO
btnIdade.addEventListener("click", function () {
  const idade = Number(campoIdade.value);
  if (idade >= 18) {
    resultadoIdade.innerHTML = "<p>Você é maior de idade</p>";
  } else {
    resultadoIdade.innerHTML = "<p>Você é menor de idade</p>";
  }
  console.log(idade + 15);
});

// MODAL

const modal = document.querySelector("#modal");
const btnAbrir = document.querySelector("#btn-abrir");
const btnFechar = document.querySelector("#btn-fechar");

// ABRIR

btnAbrir.addEventListener("click", function () {
  modal.classList.remove("oculto");
});

// FECHAR

btnFechar.addEventListener("click", function () {
  modal.classList.add("oculto");
});

// SISTEMA DE ABAS
// SELECIONANDO TODOS OS BOTOES COM CLASSE "ABA"
const botoesAbas = document.querySelectorAll(".aba");

// SELECIONANDO TODOS OS CONTEUDOS
const conteudos = document.querySelectorAll(".conteudo-aba");

// LOOP PARA PERCORRER A LISTA DE BOTOES

// CRIE A ESTRUTURA DO LOOP PARA PERCORRER
// O VETOR DE BOTOES

botoesAbas.forEach(function (botao) {
  botao.addEventListener("click", function(){
    // REMOVER A CLASSE ATIVA DE TODOS OS BOTOES
    // preciso de um loop para tirar a 
    // classe de todos eles
    botoesAbas.forEach(function (item) {
      item.classList.remove("ativa");
    });

    // esconder toos os conteudos
    conteudos.forEach(function (item) {
      item.classList.remove("ativo");
    });
    // ADICIONAR A CLASSE "ATIVO" AO BOTAO CLICADO
    botao.classList.add("ativa");

    // PEGANDO O CONTEUDO
    const idConteudo = botao.dataset.conteudo

    console.log(idConteudo);

    // PROCURANDO O CONTEUDO CORRESPONDENTE A ABA ATIVA
    const conteudoSelecionado = document.querySelector("#" + idConteudo);
    
    // mostrar o conteudo
    conteudoSelecionado.classList.add("ativo");
  });
});
