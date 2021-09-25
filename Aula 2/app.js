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

const distanceFrom = document.querySelector('#distanceFrom');
const distanceTo = document.querySelector('#distanceTo');
const distanceUnitFrom = document.querySelector('#distanceUnitFrom');
const distanceUnitTo = document.querySelector('#distanceUnitTo');

function updateDistance() {
  var distanceRate = {
    km: {
      km: 1,
      ly: 1 / 9461000000000,
    },
    ly: {
      km: 9461000000000,
      ly: 1,
    },
  };
  console.log(distanceUnitFrom.value + ' ' + distanceUnitTo.value);
  console.log(distanceRate);
  console.log(distanceRate[distanceUnitFrom.value][distanceUnitTo.value]);
  console.log(
    (
      distanceFrom.value *
      distanceRate[distanceUnitFrom.value][distanceUnitTo.value]
    ).toFixed(2)
  );
  distanceTo.value =
    distanceFrom.value *
    distanceRate[distanceUnitFrom.value][distanceUnitTo.value];
  // .toFixed(2);
}

distanceFrom.addEventListener('input', function () {
  updateDistance();
});
distanceUnitFrom.addEventListener('input', function () {
  updateDistance();
});
distanceUnitTo.addEventListener('input', function () {
  updateDistance();
});

// 3 - Conversor de temperaturas entre farenheit, kelvin e celcius.

// 4 - Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
