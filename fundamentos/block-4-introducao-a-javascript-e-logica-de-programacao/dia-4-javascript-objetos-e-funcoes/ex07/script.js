// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindromo(word){

  /* DEBUG
  console.log((word.split('')).join())
  console.log(((word.split('')).reverse()).join())
  */

  // Compara se a palavra, dividida em uma array e reagrupada é igual a palavra dividida em uma array, invertida e reagrupada.
  console.log((word.split('')).join() == ((word.split('')).reverse()).join());
  return (word.split('') == (word.split()).reverse());
};

isPalindromo('arara');
