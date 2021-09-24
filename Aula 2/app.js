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

// 2 - Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.

// 3 - Conversor de temperaturas entre farenheit, kelvin e celcius.

// 4 - Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
