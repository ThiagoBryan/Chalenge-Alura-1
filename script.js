const entrada = document.getElementById("input-texto");
const saida = document.getElementById("msg");
const criptografar = document.getElementById("btn-cripto");
const descriptografar = document.getElementById("btn-descripto");
const botaoCopiar = document.getElementById("btn-copy");
const botaoColar = document.getElementById("btn-paste");

// botões
criptografar.onclick = function (e) {
  e.preventDefault(); // prevenir que a pagina recarregue
  alterarNomeBotao("Copiar"); // alterar o texto do botão
  criptografarTexto(entrada.value); // texto escrito
  entrada.value = ""; // limpar caixa de texto
};

descriptografar.onclick = function (e) {
  e.preventDefault(); 
  alterarNomeBotao("Copiar");
  descriptografarTexto(entrada.value);
  entrada.value = "";
};

function saidaInput(texto) { //função para aparecer o texto da primeira caixa para a segunda
  saida.value = texto;
          // pega o valor do texto do input
}

function copiarTexto() { // funçao para copiar o texto criptografado
  let textoCopiado = saida; //variavel criada para copiar o texto criptografado
  textoCopiado.select(); // selecionar o texto copiado
  document.execCommand("copy"); // comando do js para copiar o texto criptografado
  alterarNomeBotao("Copiado"); // quando copia o texto muda o nome do botao
}

function colarTexto() { // funçao para colar o texto criptografado
  let textoColado = saida; 
  textoColado.select(); 
  document.execCommand("paste"); 
  alterarNomeBotao("Colado");
}

function alterarNomeBotao(texto){ // função para alterar on nome do botão copiar
  botaoCopiar.value = texto 
}


// Criptografar
function criptografarTexto(entrada) {
  let entradaTextoArray = [];
  entradaTextoArray = entrada.split(""); // separa letras
  let saidaCriptografada = "";

  for (let i = 0; i < entradaTextoArray.length; i++) {
    if (entradaTextoArray[i] == "a") {
      saidaCriptografada += "ai";
    } else if (entradaTextoArray[i] == "e") {
      saidaCriptografada += "enter";
    } else if (entradaTextoArray[i] == "i") {
      saidaCriptografada += "imes";
    } else if (entradaTextoArray[i] == "o") {
      saidaCriptografada += "ober";
    } else if (entradaTextoArray[i] == "u") {
      saidaCriptografada += "ufat";
    } else {
      saidaCriptografada += entradaTextoArray[i];
    }
  }
  saidaInput(saidaCriptografada);
}

// Descriptografar
function descriptografarTexto(texto) {
  let i = 0;
  let naoAcabou = true;

  while (naoAcabou) {
    if (texto.includes("ai")) {
      texto = texto.replace("ai", "a");
      i++;
    }
    if (texto.includes("enter")) {
      texto = texto.replace("enter", "e");
      i++;
    }
    if (texto.includes("imes")) {
      texto = texto.replace("imes", "i");
      i++;
    }
    if (texto.includes("ober")) {
      texto = texto.replace("ober", "o");
      i++;
    }
    if (texto.includes("ufat")) {
      texto = texto.replace("ufat", "u");
      i++;
    }
    if (i == 0) {
      naoAcabou = false;
    }
    i = 0;
  }
  saidaInput(texto);
}


  















/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

//  Regras Decodificador: 
// "enter" é convertido para "e" 
// "imes" é convertido para "i"
// "ai" é convertido para "a"
// "ober" é convertido para "o"
// "ufat" é convertido para "u"
// Apenas letras minúsculas
// Não permite acentuação     
  

