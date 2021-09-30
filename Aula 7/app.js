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

  showOptions();
}

function showOptions() {
  var opcoes = document.getElementById('opcoes');
  var opcoesTexto = '';

  opcoesTexto +=
    '<img style="width: 100px" src="' + playerCard.image + '"</><br>';
  opcoesTexto += '<span>' + playerCard.name + '</span><br>';
  for (var atributo in playerCard.attributes) {
    opcoesTexto +=
      '<span> ' + atributo + ' ' + playerCard.attributes[atributo] + ' </span>';
  }
  opcoesTexto += '<br>';

  var first = true;
  for (var atributo in playerCard.attributes) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'";
    if (first) {
      opcoesTexto += ' checked';
      first = false;
    }
    opcoesTexto += '>' + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
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

  if (playerCardValue > pcCardValue) {
    resultElement.innerHTML = 'Você venceu';
  } else if (pcCardValue > playerCardValue) {
    resultElement.innerHTML = 'Você perdeu, a carta da máquina é maior';
  } else {
    resultElement.innerHTML = 'Empatou';
  }

  document.getElementById('btnSortear').disabled = false;
  document.getElementById('btnJogar').disabled = true;

  showPcCard();
}

function showPcCard() {
  var opcoes = document.getElementById('opcoes');
  var opcoesTexto = '';

  opcoesTexto +=
    '<br><img style="width: 100px" src="' + pcCard.image + '" </><br>';
  opcoesTexto += '<br><span>' + pcCard.name + '</span><br>';
  for (var atributo in pcCard.attributes) {
    opcoesTexto +=
      '<span> ' + atributo + ' ' + pcCard.attributes[atributo] + ' </span>';
  }
  opcoesTexto += '<br>';

  opcoes.innerHTML += opcoesTexto;
}

// 1 - Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar

// 2 - Utilizar personagens que você gosta para criar as cartas e compartilhe com o pessoal lá na comunidade do Discord!

// 3 - Adicionar a imagem do personagem assim que você selecionar a carta dele
