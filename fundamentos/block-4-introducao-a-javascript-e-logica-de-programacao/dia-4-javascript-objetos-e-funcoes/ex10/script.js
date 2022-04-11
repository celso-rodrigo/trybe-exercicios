// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestFunc(array){
  let biggestWord = array[0];

  for (let word of array){
    if (word.length > biggestWord.length){
      biggestWord = word;
    };
  };

  return console.log(`O nome com mais letras é: ${biggestWord} (${biggestWord.length} letras).`);
};

biggestFunc(names);
