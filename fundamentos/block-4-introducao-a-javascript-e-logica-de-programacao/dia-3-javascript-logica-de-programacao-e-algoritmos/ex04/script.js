// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let start = 50;
let biggestPrime = 0;
let divAmount = 0;

// Loop para calcular número de divisores dentro de loop para repitir até encontrar número com apenas dois divisores.
for (let cont = start; cont > 0; cont -= 1){
  div = cont

  // Calcula número de divisores.
  do{
    if(start % div == 0){
      divAmount += 1
    };
    
    div -= 1
  } while(div > 0);

  // Repete loop caso não seja válido, finaliza caso seja.
  if (divAmount == 2){
    biggestPrime = cont;
    break
  } else {

    // DEBUG
    // console.log(`Numero inválido: ${cont}`)
    divAmount = 0;
    start -= 1;
  };
};

console.log(`O maior número primo é: ${biggestPrime}`);
