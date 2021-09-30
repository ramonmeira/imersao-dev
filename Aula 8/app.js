var cards = [
  {
    name: 'Oliver',
    image:
      'https://d3idks24kkd2lv.cloudfront.net/wp-content/uploads/2019/03/German-Pug-Thumb.jpg',
    attributes: {
      tamanho: 5,
      fofura: 6,
      inteligência: 4,
      obediência: 7,
    },
  },
  {
    name: 'Fenix',
    image:
      'https://i2.wp.com/d1wfvaoxobvuy.cloudfront.net/wp-content/uploads/2017/01/26113241/Galeria-2-Chow-Chow.jpg',
    attributes: {
      tamanho: 7,
      fofura: 10,
      inteligência: 6,
      obediência: 5,
    },
  },
  {
    name: 'Thor',
    image:
      'https://www.petlove.com.br/images/breeds/193057/profile/original/spitz_alemao-p.jpg',
    attributes: {
      tamanho: 3,
      fofura: 10,
      inteligência: 8,
      obediência: 9,
    },
  },
  {
    name: 'Billy',
    image: 'https://www.houssin.com/content/1-pups/21-shih-tzu/443-1.jpg',
    attributes: {
      tamanho: 4,
      fofura: 2,
      inteligência: 6,
      obediência: 7,
    },
  },
  {
    name: 'Molli',
    image:
      'https://www.infoescola.com/wp-content/uploads/2010/10/Shih-Tzu_117095806.jpg',
    attributes: {
      tamanho: 4,
      fofura: 4,
      inteligência: 6,
      obediência: 9,
    },
  },
];
var usedCards = [];
var pcCard;
var playerCard;

function sortearCarta() {
  var randomPosition = 0;
  if (cards.length < 2) {
    cards = cards.concat(usedCards);
    usedCards = [];
  }

  // Pick Pc card
  randomPosition = parseInt(Math.random() * cards.length);
  pcCard = cards.splice(randomPosition, 1)[0];
  // Pick player card
  randomPosition = parseInt(Math.random() * cards.length);
  playerCard = cards.splice(randomPosition, 1)[0];

  usedCards.push(pcCard);
  usedCards.push(playerCard);

  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;

  showPlayersCards();
}

function getSelectedAttributes() {
  var radioattributes = document.getElementsByName('atributo');

  for (var i = 0; i < radioattributes.length; i++) {
    if (radioattributes[i].checked == true) {
      return radioattributes[i].value;
    }
  }
}

function jogar() {
  var selectedAttributes = getSelectedAttributes();
  var resultElement = document.getElementById('resultado');
  var playerCardValue = playerCard.attributes[selectedAttributes];
  var pcCardValue = pcCard.attributes[selectedAttributes];
  var htmlResultado = '';

  if (playerCardValue > pcCardValue) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (pcCardValue > playerCardValue) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  resultElement.innerHTML = htmlResultado;

  // document.getElementById('btnSortear').disabled = false;
  document.getElementById('btnJogar').disabled = true;

  showPcCard();
}

function showPlayersCards() {
  var divCartaJogador = document.getElementById('carta-jogador');
  divCartaJogador.style.backgroundImage = `url(${playerCard.image})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = '';
  var first = true;
  for (var atributo in playerCard.attributes) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'";
    if (first) {
      opcoesTexto += ' checked';
      first = false;
    }
    opcoesTexto +=
      '>' + atributo + ': ' + playerCard.attributes[atributo] + '<br>';
  }
  var name = `<p class="carta-subtitle">${playerCard.name}</p>`;

  divCartaJogador.innerHTML = moldura + name + tagHTML + opcoesTexto + '</div>';
}

function showPcCard() {
  var divCartaMaquina = document.getElementById('carta-maquina');
  divCartaMaquina.style.backgroundImage = `url(${pcCard.image})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = '';
  for (var atributo in pcCard.attributes) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ': ' +
      pcCard.attributes[atributo] +
      '</p>';
  }
  var name = `<p class="carta-subtitle">${pcCard.name}</p>`;

  divCartaMaquina.innerHTML = moldura + name + tagHTML + opcoesTexto + '</div>';
}

// 1 - Criar de fato um baralho, com várias outras cartas
// 2 - Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa
// 3 - Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros
// 4 - Utilizar seus personagens e jogos preferidos nesse projeto
