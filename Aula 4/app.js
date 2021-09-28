var itemsList = [
  {
    name: 'Shadowrun',
    url: 'http://www.shadowruntabletop.com/',
    image:
      'https://images-geeknative-com.exactdn.com/wp-content/uploads/2019/08/27234510/shadowrun-6th-edition.jpg',
  },
  {
    name: 'Dungeon & Dragons',
    url: 'https://www.dndbeyond.com/',
    image:
      'https://www.dndbeyond.com/avatars/10435/389/637248131811862290.jpeg',
  },
  {
    name: 'Dungeon World',
    url: 'https://dungeon-world.com/',
    image:
      'https://geekandsundry.com/wp-content/uploads/2016/04/Dungeon-World-199x300.jpg',
  },
  {
    name: 'Numenera',
    url: 'http://numenera.com/',
    image:
      'https://i2.wp.com/www.numenera.com/wp-content/uploads/2013/07/Numenera-Corebook-Cover-2013-06-18.jpg',
  },
  {
    name: 'Skyfall RPG',
    url: 'https://skyfall-rpg.fandom.com/pt-br/wiki/Skyfall_RPG',
    image: 'https://jogaod20com.files.wordpress.com/2020/10/skyfall-rpg-2.jpeg',
  },
  {
    name: 'Tiny Dungeon',
    url: 'https://www.gallantknightgames.com/tiny-dungeon-2e/',
    image:
      'https://www.gallantknightgames.com/wp-content/uploads/2018/01/18927364_10203402958190364_1331631887_o.jpg',
  },
  {
    name: 'Tales of Xadia',
    url: 'https://www.talesofxadia.com',
    image:
      'https://images-geeknative-com.exactdn.com/wp-content/uploads/2021/02/04195645/Fandom_TDP_TalesofXadia_Cover.png',
  },
];

var elementList = document.getElementById('list');
let row;

for (var i = 0; i < itemsList.length; i++) {
  if (i % 4 == 0) {
    row = document.createElement('div');
    row.className = 'row';
    elementList.appendChild(row);
  }

  let col = document.createElement('div');
  col.className = 'col mb-3';
  row.appendChild(col);

  let h2 = document.createElement('p');
  h2.innerText = itemsList[i].name;
  col.appendChild(h2);

  let a = document.createElement('a');
  a.href = itemsList[i].url;
  a.target = '_blank';
  col.appendChild(a);

  let img = document.createElement('img');
  img.src = itemsList[i].image;
  a.appendChild(img);

  row.appendChild(col);
}

// Desafios

// 1 - Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos...

// function([string1, string2],target id,[color1,color2])
consoleText(
  ['Aliens', 'Alaridos', 'Adeptos', 'Aliados', 'RPG', 'RPG ✓'],
  'text'
);

///*https://codepen.io/Tbgse/pen/dYaJyJ*/
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  //var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = 'Alura & ' + words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(
        function () {
          x = -1;
          letterCount += x;
          waiting = false;
        },
        words[0] == 'RPG' ? 2000 : 1000
      );
    } else if (waiting === false) {
      target.innerHTML = 'Alura & ' + words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  // window.setInterval(function () {
  //   if (visible === true) {
  //     con.className = 'console-underscore hidden';
  //     visible = false;
  //   } else {
  //     con.className = 'console-underscore';

  //     visible = true;
  //   }
  // }, 400);
}

// 2 - Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while

// 3 - Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente

// 4 - Criar um campo e botão para adicionar a imagem pela tela, e não direto no código
