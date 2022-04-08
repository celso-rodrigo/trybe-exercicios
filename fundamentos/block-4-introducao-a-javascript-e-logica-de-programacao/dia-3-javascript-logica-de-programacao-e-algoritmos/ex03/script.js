// Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggest = array[0];
let smallest = array[0];

for (let word of array){

  if (word.length > biggest.length){
    biggest = word;
  };

  if (word.length < smallest.length){
    smallest = word;
  };
};

console.log(`A maior palavra do array é: ${biggest} e a menor é: ${smallest}.`);
