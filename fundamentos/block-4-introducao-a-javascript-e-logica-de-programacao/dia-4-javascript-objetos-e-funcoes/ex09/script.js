// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let nums = [2, 4, 6, 7, 10, 0, -3];

function smallestFunc(array){
  let smallest = array[0];
  let index = array[0];

  for (let num in array){
    if (array[num] < smallest){
      smallest = array[num]
      index = num
    };
  };

  return console.log(`O indíce de menor valor é: ${index} (${smallest})`);
};

smallestFunc(nums);
