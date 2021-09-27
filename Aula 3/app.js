var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById('resultado');
  var chute = parseInt(document.getElementById('valor').value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Você acertou';
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = 'Você deve digitar um número de 0 a 10';
  } else {
    elementoResultado.innerHTML = 'Errou';
  }
}

// 1 - Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.

// 2 - Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.

// 3 - Pesquisar e aprender a diferença entre == e ===
