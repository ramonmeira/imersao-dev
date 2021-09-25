function Converter() {
  var valorElemento = document.getElementById('valor');
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById('valorConvertido');
  var valorConvertido = 'O resultado em real é R$ ' + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

//Desafios

// 1 - Adicionar outras moedas para converter.

const moneyFrom = document.querySelector('#moneyFrom');
const moneyTo = document.querySelector('#moneyTo');
const coinFrom = document.querySelector('#coinFrom');
const coinTo = document.querySelector('#coinTo');

function updateMoney() {
  var coinRate = {
    dolar: {
      dolar: 1,
      euro: 0.82,
      real: 5.1,
    },
    euro: {
      dolar: 1.22,
      euro: 1,
      real: 6.2,
    },
    real: {
      dolar: 0.2,
      euro: 0.16,
      real: 1,
    },
  };

  moneyTo.value = (
    moneyFrom.value * coinRate[coinFrom.value][coinTo.value]
  ).toFixed(2);
}

moneyFrom.addEventListener('input', function () {
  updateMoney();
});
coinFrom.addEventListener('input', function () {
  updateMoney();
});
coinTo.addEventListener('input', function () {
  updateMoney();
});

// 2 - Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.

// 3 - Conversor de temperaturas entre farenheit, kelvin e celcius.

// 4 - Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
