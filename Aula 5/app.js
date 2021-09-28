function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value;
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error('Endereço de filme inválido');
  }
  document.getElementById('filme').value = '';
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = '<img src=' + filme + '>';
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

// 1 - Criar um botão para remover um filme na tela

// 2 - Além de colocar a imagem do filme, também adicionar o nome por meio de outro input

// 3 - Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme

// 4 - Conversor de moedas: criar funções para cada tipo de conversão e chamá-las dependendo do que você quiser fazer, podendo colocar inputs ou botões e quando clicar chamar cada função converteDolar(), converteReal(), converteEuro() e converteBitcoin(), por exemplo
