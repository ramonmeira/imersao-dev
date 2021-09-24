var name = 'Guilerme';
var firstQuarterGrade = 9.4335;
var secondQuarterGrade = 7.234;
var thirdQuarterGrade = 4.234;
var fourthQuarterGrade = 2.183;

var finalGrade =
  (firstQuarterGrade +
    secondQuarterGrade +
    thirdQuarterGrade +
    fourthQuarterGrade) /
  4;

var fixedFinalGrade = finalGrade.toFixed(1);

//console.log("Bem vindo " + name)
console.log(fixedFinalGrade);

//Revisão
// Variáveis, strings, console.log, toFixed, operações matemáticas, concatenação

//Desafios

// 1- Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não

function studentOutcome(grade) {
  var outcome = '';
  if (grade >= 5) {
    outcome = 'Aprovado';
    console.log('Aprovado');
  } else {
    outcome = 'Reprovado';
    console.log('Reprovado');
  }
  return outcome;
}

// 2 - Alterar o fundo da tela da maneira que achar mais legal

//Done

// 3 - Imprimir na própria página o resultado, ao invés do console

function calculateGrade() {
  var firstQuarterGrade = document.getElementById('firtGrade').value;
  console.log(firstQuarterGrade);
  var secondQuarterGrade = document.getElementById('secondGrade').value;
  console.log(secondQuarterGrade);
  var thirdQuarterGrade = document.getElementById('thirdGrade').value;
  console.log(thirdQuarterGrade);
  var fourthQuarterGrade = document.getElementById('fourthGrade').value;
  console.log(fourthQuarterGrade);

  var finalGrade = (
    (parseInt(firstQuarterGrade) +
      parseInt(secondQuarterGrade) +
      parseInt(thirdQuarterGrade) +
      parseInt(fourthQuarterGrade)) /
    4
  ).toFixed(1);
  console.log(finalGrade);

  var elementResult = document.getElementById('result');
  console.log(elementResult.innerHTML);
  elementResult.innerHTML = finalGrade + ' - ' + studentOutcome(finalGrade);

  console.log(finalGrade);

  if (finalGrade >= 5) elementResult.style.color = 'green';
  else elementResult.style.color = 'red';

  return false;
}

// 4 - Criar um conversor de temperaturas entre farenheit e celcius

var farenheit = 32;
var celcius = (farenheit - 32) / 1.8;
console.log('Farenheit: ' + farenheit + ' Celcius: ' + celcius);

// 5 - Colocar a conta inteira da média em apenas uma linha

var firstQuarterGrade = 9.4335;
var secondQuarterGrade = 7.234;
var thirdQuarterGrade = 4.234;
var fourthQuarterGrade = 2.183;

var finalGrade = (
  (firstQuarterGrade +
    secondQuarterGrade +
    thirdQuarterGrade +
    fourthQuarterGrade) /
  4
).toFixed(1);

console.log(finalGrade);
