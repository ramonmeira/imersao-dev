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
var computerCards = [];
var playerCards = [];

function sortearCarta() {
  if (computerCards.length == 0 || playerCards.length == 0) {
    shuffleArray(cards);
    playerCards = cards.slice(0, cards.length / 2);
    computerCards = cards.slice(cards.length / 2, cards.length);
  }

  refreshBoard();

  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;

  // Clean computer card and result field
  showCard({ name: '', image: '' }, 'carta-maquina');
  document.getElementById('resultado').innerHTML = '';

  showCard(playerCards[0], 'carta-jogador');
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
  showCard(computerCards[0], 'carta-maquina');

  var selectedAttributes = getSelectedAttributes();
  var resultElement = document.getElementById('resultado');

  var playerCardValue = playerCards[0].attributes[selectedAttributes];
  var computerCardValue = computerCards[0].attributes[selectedAttributes];

  var htmlResultado = '';
  if (playerCardValue > computerCardValue) {
    playerCards.push(computerCards.shift());
    playerCards.push(playerCards.shift());

    htmlResultado =
      "<p class='resultado-final'>Venceu" +
      (computerCards.length == 0 ? ' a partida' : ' a rodada') +
      '</p>';
  } else if (computerCardValue > playerCardValue) {
    computerCards.push(playerCards.shift());
    computerCards.push(computerCards.shift());

    htmlResultado =
      "<p class='resultado-final'>Perdeu" +
      (playerCards.length == 0 ? ' a partida' : ' a rodada') +
      '</p>';
  } else {
    playerCards.push(playerCards.shift());
    computerCards.push(computerCards.shift());

    htmlResultado = "<p class='resultado-final'>Empatou a rodada </p>";
  }
  resultElement.innerHTML = htmlResultado;

  refreshBoard();

  document.getElementById('btnSortear').disabled = false;
  document.getElementById('btnJogar').disabled = true;
}

function showCard(card, position) {
  if (card === undefined) {
    card = { name: '', image: '' };
  }
  var positionCard = document.getElementById(position);
  positionCard.style.backgroundImage = `url(${card.image})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = '';

  if (position == 'carta-jogador') {
    var first = true;
    for (var atributo in card.attributes) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" + atributo + "'";
      if (first) {
        opcoesTexto += ' checked';
        first = false;
      }
      opcoesTexto += '>' + atributo + ': ' + card.attributes[atributo] + '<br>';
    }
  } else {
    for (var atributo in card.attributes) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        ': ' +
        card.attributes[atributo] +
        '</p>';
    }
  }
  var name = `<p class="carta-subtitle">${card.name}</p>`;

  positionCard.innerHTML = moldura + name + tagHTML + opcoesTexto + '</div>';
}

// 1 - Criar de fato um baralho, com várias outras cartas
// 2 - Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

function refreshBoard() {
  document.getElementById('playerNumberOfCards').innerHTML =
    playerCards.length + ' cartas';
  document.getElementById('computerNumberOfCards').innerHTML =
    computerCards.length + ' cartas';
}

// 3 - Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros
// 4 - Utilizar seus personagens e jogos preferidos nesse projeto
