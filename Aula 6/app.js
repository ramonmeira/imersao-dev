//          chave.  valor.
var rafa = { nome: 'Rafa', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: 'Paulo', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: 'Gui', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];
var drawAdjusted = true;
var victoryAndDefeateAdjusted = true;

function exibeJogadoresNaTela(jogadores) {
  var elemento = '';
  for (var i = 0; i < jogadores.length; i++) {
    elemento += '<tr><td>' + jogadores[i].nome + '</td>';
    elemento += '<td>' + jogadores[i].vitorias + '</td>';
    elemento += '<td>' + jogadores[i].empates + '</td>';
    elemento += '<td>' + jogadores[i].derrotas + '</td>';
    elemento += '<td>' + jogadores[i].pontos + '</td>';
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += '</tr>';
  }

  var tabelaJogadores = document.getElementById('tabelaJogadores');
  tabelaJogadores.innerHTML = elemento;
  //   console.log('isDrawsValid() => ' + isDrawsValid());
  //   console.log('isVictoryAndDefeatValid() => ' + isVictoryAndDefeatValid());
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);

  // Block buttons when the columns of defeat need to be adjusted
  victoryAndDefeateAdjusted = !victoryAndDefeateAdjusted;
  var registers = document
    .getElementById('tabelaJogadores')
    .getElementsByTagName('button');
  if (!victoryAndDefeateAdjusted) {
    for (let j = 0; j < registers.length; j++) {
      if (j % 3 != 2 || j == i * 3 + 2) {
        registers[j].disabled = true;
      }
    }
  }
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);

  // Block buttons when the columns of draws need to be adjusted
  drawAdjusted = !drawAdjusted;
  var registers = document
    .getElementById('tabelaJogadores')
    .getElementsByTagName('button');
  if (!drawAdjusted) {
    for (let j = 0; j < registers.length; j++) {
      if (j % 3 != 1 || j == i * 3 + 1) {
        registers[j].disabled = true;
      }
    }
  }
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);

  // Block buttons when the columns of victory need to be adjusted
  victoryAndDefeateAdjusted = !victoryAndDefeateAdjusted;
  var registers = document
    .getElementById('tabelaJogadores')
    .getElementsByTagName('button');
  if (!victoryAndDefeateAdjusted) {
    for (let j = 0; j < registers.length; j++) {
      if (j % 3 != 0 || j == i * 3) {
        registers[j].disabled = true;
      }
    }
  }
}

// 1 - Fazer a lógica de quando houver um empate, obrigatóriamente deveria já ajustar como empate para os demais jogadores

// 2 - Validar se todos os pontos estão fazendo sentido, tanto o número de empates, quanto derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo)

function isDrawsValid() {
  var totalOfDraws = 0;
  var maxDraws = 0;

  for (let i = 0; i < jogadores.length; i++) {
    totalOfDraws += jogadores[i].empates;
    maxDraws =
      maxDraws > jogadores[i].empates ? maxDraws : jogadores[i].empates;
  }

  if (totalOfDraws % 2 == 1 || maxDraws > totalOfDraws / 2) {
    return false;
  }

  return true;
}

function isVictoryAndDefeatValid() {
  var totalOfVictorys = 0;
  var totalOfDeafeats = 0;

  for (let i = 0; i < jogadores.length; i++) {
    totalOfVictorys += jogadores[i].vitorias;
    totalOfDeafeats += jogadores[i].derrotas;
  }

  if (totalOfVictorys != totalOfDeafeats) {
    return false;
  }

  return true;
}

// 3 - Adicionar a imagem de cada jogador

// 4 - Criar um botão para zerar todos os pontos

// 5 - Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados

// 6 - Utilizar seu jogo preferido para se basear na pontuação da sua tabela de classificação
