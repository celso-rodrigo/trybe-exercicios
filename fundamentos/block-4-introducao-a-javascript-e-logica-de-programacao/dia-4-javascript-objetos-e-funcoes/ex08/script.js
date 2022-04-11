// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let nums = [2, 3, 6, 7, 10, 1];

function biggestFunc(array){
  let biggest = array[0];
  let index = array[0];

  for (let num in array){
    if (array[num] > biggest){
      biggest = array[num]
      index = num
    };
  };

  return console.log(`O indíce de maior valor é: ${index} (${biggest})`);
};

biggestFunc(nums);
