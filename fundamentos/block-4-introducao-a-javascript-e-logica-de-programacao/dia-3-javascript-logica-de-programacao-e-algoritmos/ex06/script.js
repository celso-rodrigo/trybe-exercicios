// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****

let n = 5;
let line = '';
let column = n;

for (let cont = column; cont > 0; cont -= 1){
  line += '*';
  console.log(line);
};
