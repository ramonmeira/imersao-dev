var players = [];

if (typeof Storage !== 'undefined') {
  //browser support localStorage
  // localStorage.clear();
  localPlayers = localStorage.getItem('players');

  if (localPlayers != null) {
    players = JSON.parse(localPlayers);
  }
} else {
  //browser does not support localStorage
  console.log('//browser does not support localStorage');
}

function updateLocalPlayers() {
  localStorage.setItem('players', JSON.stringify(players));
}

function calculatePoints(player) {
  var points = player.fruit + player.activity;
  return points;
}

function refreshBoard(players) {
  updateLocalPlayers();
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
      "<td scope='row'><button class='btn btn-primary action-button' onClick='addFruit(" +
      i +
      ")'><img src='img/legend/apple.png'></button></td>";
    element +=
      "<td scope='row'><button class='btn btn-primary action-button' onClick='addActivity(" +
      i +
      ")'><img src='img/legend/medal-1.png'></button></td>";
    element +=
      "<td scope='row'><button class='btn btn-danger action-button' onClick='removePlayer(" +
      i +
      ")'><i class='fas fa-trash'></i></button></td>";
    element += '</tr>';

    // element +=
    //   "<td scope='row'><button class='btn btn-primary action-button' onClick='addFruit(" +
    //   i +
    //   ")'><img src='img/legend/apple.png'></button>"; //</td>";
    // element +=
    //   //"<td scope='row'>
    //   "<button class='btn btn-primary action-button' onClick='addActivity(" +
    //   i +
    //   ")'><img src='img/legend/medal-1.png'></button>"; //</td>";
    // element +=
    //   //"<td scope='row'>
    //   "<button class='btn btn-danger action-button' onClick='removePlayer(" +
    //   i +
    //   ")'><i class='fas fa-trash'></i></button></td>";
    // element += '</tr>';
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

function cleanScore() {
  players = [];
  refreshBoard(players);
}

function removePlayer(i) {
  players.splice(i, 1);
  refreshBoard(players);
}

function addPlayer() {
  if (
    typeof JSON.parse(document.getElementById('playerName').value) === 'object'
  ) {
    players = JSON.parse(document.getElementById('playerName').value);
  } else {
    var newPlayer = {
      name: document.getElementById('playerName').value,
      fruit: 0,
      activity: 0,
      points: 0,
      image: document.getElementById('playerImage').value,
    };
    players.push(newPlayer);
  }
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
