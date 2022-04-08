// // Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****

let n = 5;
let line = '';
let column = n;

for (let cont = n; cont > 0; cont -= 1){
  line += '*';
};

for (let cont = column; cont > 0; cont -= 1){
  console.log(line);
};
