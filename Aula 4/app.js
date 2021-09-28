var listaFilmes = [
  'https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg',
  'https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg',
  'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg',
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write('<img src=' + listaFilmes[i] + '>');
}

// Desafios

// 1 - Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos...

// 2 - Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while

// 3 - Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente

// 4 - Criar um campo e botão para adicionar a imagem pela tela, e não direto no código
