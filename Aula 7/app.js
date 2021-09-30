var cards = [
  {
    name: 'Oliver',
    attributes: {
      tamanho: 5,
      fofura: 6,
      inteligência: 4,
      obediência: 7,
    },
  },
  {
    name: 'Fenix',
    attributes: {
      tamanho: 7,
      fofura: 10,
      inteligência: 6,
      obediência: 5,
    },
  },
  {
    name: 'Thor',
    attributes: {
      tamanho: 3,
      fofura: 10,
      inteligência: 8,
      obediência: 9,
    },
  },
  {
    name: 'Billy',
    attributes: {
      tamanho: 4,
      fofura: 2,
      inteligência: 6,
      obediência: 7,
    },
  },
  {
    name: 'Molli',
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
