var secretNumber = parseInt(Math.random() * 11);
var maxNumberOfAttempts = 3;
var attempt = 0;

function restartGame() {
  secretNumber = parseInt(Math.random() * 11);
  attempt = 0;
}

function Chutar() {
  var elementoResultado = document.getElementById('resultado');
  var guess = parseInt(document.getElementById('valor').value);
  console.log(guess);

  if (guess > 10 || guess < 0) {
    elementoResultado.innerHTML = 'Você deve digitar um número de 0 a 10';
    return;
  }

  attempt++;

  if (guess == secretNumber) {
    elementoResultado.innerHTML = 'Você acertou';
    restartGame();
  } else {
    if (attempt < maxNumberOfAttempts) {
      if (guess > secretNumber) {
        elementoResultado.innerHTML =
          'Errou, número muito alto (tentativa ' +
          attempt +
          ' de ' +
          maxNumberOfAttempts +
          ')';
      } else {
        elementoResultado.innerHTML =
          'Errou, número muito baixo (tentativa ' +
          attempt +
          ' de ' +
          maxNumberOfAttempts +
          ')';
      }
    } else {
      elementoResultado.innerHTML =
        'Você perdeu, o número correto era ' + secretNumber;
    }
  }

  if (attempt == maxNumberOfAttempts) {
    restartGame();
  }
}

// 1 - Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.

// 2 - Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.

// 3 - Pesquisar e aprender a diferença entre == e ===
// Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
// console.log(1 === 1); // expected output: true
// console.log('hello' === 'hello'); // expected output: true
// console.log('1' ===  1); // expected output: false
// console.log(0 === false); // expected output: false
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
