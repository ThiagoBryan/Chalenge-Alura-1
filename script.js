const entrada = document.getElementById("input-texto");
const saida = document.getElementById("msg");
const criptografar = document.getElementById("btn-cripto");
const descriptografar = document.getElementById("btn-descripto");
const botaoCopiar = document.getElementById("btn-copy");

// Criptografar
criptografar.onclick = function (e) {
  e.preventDefault();
  alterarTextoBotaoParaCopiar()
  criptografarTexto(entrada.value);
  entrada.value = "";
};

descriptografar.onclick = function (e) {
  e.preventDefault();
  alterarTextoBotaoParaCopiar()
  descriptografarTexto(entrada.value);
  entrada.value = "";
};

function saidaInput(texto) {
  saida.value = texto;
}

function copiarTexto() {
  let textoCopiado = saida;
  textoCopiado.select();
  document.execCommand("copy");
  alterarTextoBotaoParaCopiado();
}

function alterarTextoBotaoParaCopiado(){
  botaoCopiar.value = "Copiado"
}
function alterarTextoBotaoParaCopiar(){
  botaoCopiar.value = "Copiar"
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
  

