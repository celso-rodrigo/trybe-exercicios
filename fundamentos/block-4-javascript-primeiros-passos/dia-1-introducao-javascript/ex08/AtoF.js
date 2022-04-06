// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let grade = 95;

if (grade >= 90 && grade <= 100) {
  console.log('Nota A. Parabéns!');
} else if (grade >= 80 && grade < 90) {
  console.log('Nota B. :)')
} else if (grade >= 70 && grade < 80) {
  console.log('Nota C.');
} else if (grade >= 60  && grade < 70) {
  console.log('Nota D.');
} else if (grade >= 50 && grade < 60) {
  console.log('Nota E. :/');
} else if (grade < 50 && grade > 0) {
  console.log('Nota F. :(');
} else {
  console.log('Erro! Nota inválida.');
}
