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
    bitcoin: {
      bitcoin: 1,
      dolar: 42894.64,
      euro: 36661.49,
      real: 230897.0,
    },
    dolar: {
      bitcoin: 0.000023,
      dolar: 1,
      euro: 0.82,
      real: 5.1,
    },
    euro: {
      bitcoin: 0.000027,
      dolar: 1.22,
      euro: 1,
      real: 6.2,
    },
    real: {
      bitcoin: 0.0000043,
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

const temperatureFrom = document.querySelector('#temperatureFrom');
const temperatureTo = document.querySelector('#temperatureTo');
const temperatureUnitFrom = document.querySelector('#temperatureUnitFrom');
const temperatureUnitTo = document.querySelector('#temperatureUnitTo');

function sameUnit(temperatureFrom) {
  return temperatureFrom;
}

function updateTemperature() {
  var teste = {
    celcius: {
      celcius: function (temperatureFrom) {
        return temperatureFrom * 1.8 + 32;
      },
    },
  };
  teste['celcius']['celcius'](temperatureFrom.value);

  var temperatureRate = {
    celcius: {
      celcius: function (temperatureFrom) {
        return sameUnit(temperatureFrom);
      },
      farenheit: function celciusToFarenheit(temperatureFrom) {
        return temperatureFrom * 1.8 + 32;
      },
      kelvin: function celciusToKelvin(temperatureFrom) {
        return temperatureFrom + 273.15;
      },
    },
    farenheit: {
      celcius: function farenheitToCelcius(temperatureFrom) {
        return (temperatureFrom - 32) / 1.8;
      },
      farenheit: function (temperatureFrom) {
        return sameUnit(temperatureFrom);
      },
      kelvin: function farenheitToKelvin(temperatureFrom) {
        return (temperatureFrom - 32) / 1.8 + 273.15;
      },
    },
    kelvin: {
      celcius: function kelvinTocelcius(temperatureFrom) {
        return temperatureFrom - 273.15;
      },
      farenheit: function KelvinToFarenheit(temperatureFrom) {
        return temperatureFrom * 1.8 - 459.67;
      },
      kelvin: function (temperatureFrom) {
        return sameUnit(temperatureFrom);
      },
    },
  };
  console.log();
  temperatureTo.value = temperatureRate[temperatureUnitFrom.value]
    [temperatureUnitTo.value](parseFloat(temperatureFrom.value))
    .toFixed(2);
}

temperatureFrom.addEventListener('input', function () {
  updateTemperature();
});
temperatureUnitFrom.addEventListener('input', function () {
  updateTemperature();
});
temperatureUnitTo.addEventListener('input', function () {
  updateTemperature();
});

// 4 - Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
