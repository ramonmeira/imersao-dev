var drawAdjusted = true;
var victoryAndDefeateAdjusted = true;

var players = [
  {
    name: 'Bianca',
    fruit: 15,
    activity: 15,
    points: 30,
    image: 'img/players/8d34dccac3830875b9b7beeaddd39c34_w_2118-64.png',
  },
  {
    name: 'Franciele',
    fruit: 14,
    activity: 13,
    points: 27,
    image: 'img/players/8d34dccac3830875b9b7beeaddd39c34_w_900-64.png',
  },
  {
    name: 'H&#233;lio',
    fruit: 12,
    activity: 15,
    points: 27,
    image: 'img/players/8d34dccac3830875b9b7beeaddd39c34_w_2471-64.png',
  },
  {
    name: 'Isabel',
    fruit: 14,
    activity: 15,
    points: 29,
    image: 'img/players/8d34dccac3830875b9b7beeaddd39c34_w_1244-64.png',
  },
  {
    name: 'Ramon',
    fruit: 15,
    activity: 13,
    points: 28,
    image: 'img/players/8d34dccac3830875b9b7beeaddd39c34_w_1072-64.png',
  },
  {
    name: 'Suiane',
    fruit: 13,
    activity: 13,
    points: 26,
    image: 'img/players/8d34dccac3830875b9b7beeaddd39c34_w_143-64.png',
  },
  {
    name: 'Victor Bruno',
    fruit: 10,
    activity: 11,
    points: 21,
    image: 'img/players/8d34dccac3830875b9b7beeaddd39c34_w_1146-64.png',
  },
];

function calculatePoints(player) {
  var points = player.fruit + player.activity;
  return points;
}

function refreshBoard(players) {
  var element = '';
  for (var i = 0; i < players.length; i++) {
    element += '<tr>';
    element +=
      '<td scope="row"> <img class="iconPlayer" src="' +
      players[i].image +
      '"></td>';
    element += '<td scope="row">' + players[i].name + '</td>';
    element += '<td scope="row">';
    var tokens = 0;
    for (let j = 1; j <= players[i].fruit / 5; j++) {
      element += '<img src="img/legend/apple-5.png">';
      tokens++;
      if (tokens == 5) {
        tokens = 0;
        element += ' <br />';
      }
    }
    for (let j = 0; j < players[i].fruit % 5; j++) {
      element += '<img src="img/legend/apple.png">';
      tokens++;
      if (tokens == 5) {
        tokens = 0;
        element += ' <br />';
      }
    }
    element += '</td>';
    element += '<td scope="row">';
    tokens = 0;
    for (let j = 1; j <= players[i].activity / 25; j++) {
      element += '<img src="img/legend/medal-25.png">';
      tokens++;
      if (tokens == 5) {
        tokens = 0;
        element += ' <br />';
      }
    }
    for (let j = 1; j <= (players[i].activity % 25) / 5; j++) {
      element += '<img src="img/legend/medal-5.png">';
      tokens++;
      if (tokens == 5) {
        tokens = 0;
        element += ' <br />';
      }
    }
    for (let j = 0; j < players[i].activity % 5; j++) {
      element += '<img src="img/legend/medal-1.png">';
      tokens++;
      if (tokens == 5) {
        tokens = 0;
        element += ' <br />';
      }
    }
    element += '</td>';
    element += '<td scope="row">' + players[i].points + '</td>';
    element +=
      "<td scope='row'><button class='btn btn-primary' onClick='addFruit(" +
      i +
      ")'><img src='img/legend/apple.png'></button></td>";
    element +=
      "<td scope='row'><button class='btn btn-primary' onClick='addActivity(" +
      i +
      ")'><img src='img/legend/medal-1.png'></button></td>";
    element += '</tr>';
  }

  document.getElementById('tabelaJogadores').innerHTML = element;
}

refreshBoard(players);

function addFruit(i) {
  var player = players[i];
  player.fruit++;
  player.points = calculatePoints(player);
  refreshBoard(players);
}

function addActivity(i) {
  var player = players[i];
  player.activity++;
  player.points = calculatePoints(player);
  refreshBoard(players);
}

function cleanScoreboard() {
  for (let i = 0; i < players.length; i++) {
    players[i].fruit = 0;
    players[i].activity = 0;
    players[i].points = calculatePoints(players[i]);
  }

  refreshBoard(players);
}

function addPlayer() {
  var newPlayer = {
    name: document.getElementById('playerName').value,
    fruit: 0,
    activity: 0,
    points: 0,
    image: document.getElementById('playerImage').value,
  };
  players.push(newPlayer);
  refreshBoard(players);
}

/**
 * Function to sort alphabetically an array of objects by some specific key.
 *
 * @param {String} property Key of the object to sort.
 */
function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    if (sortOrder == -1) {
      if (typeof b[property] === 'string') {
        return b[property].localeCompare(a[property]);
      } else {
        return b[property] - a[property];
      }
    } else {
      if (typeof b[property] === 'string') {
        return a[property].localeCompare(b[property]);
      } else {
        return a[property] - b[property];
      }
    }
  };
}

var searchColumn = '';

function sortPlayers(params) {
  if (searchColumn == params) {
    var column = document.getElementById(params + 'Column');
    var symbol = column.innerText.substr(column.innerText.length - 1, 1);
    if (symbol == '↑') {
      column.innerText =
        column.innerText.substr(0, column.innerText.length - 1) + '↓';
      params = '-' + params;
    } else {
      column.innerText =
        column.innerText.substr(0, column.innerText.length - 1) + '↑';
    }
  } else {
    if (searchColumn != '') {
      var oldColumn = document.getElementById(searchColumn + 'Column');
      oldColumn.innerText = oldColumn.innerText.substr(
        0,
        oldColumn.innerText.length - 1
      );
    }
    var newColumn = document.getElementById(params + 'Column');
    newColumn.innerText = newColumn.innerText + '↑';
    searchColumn = params;
  }

  players.sort(dynamicSort(params));
  refreshBoard(players);
}

function cleanSearchArrows() {
  document.getElementById('nameSearchUp').hidden = true;
  document.getElementById('nameSearchDown').hidden = true;
}
