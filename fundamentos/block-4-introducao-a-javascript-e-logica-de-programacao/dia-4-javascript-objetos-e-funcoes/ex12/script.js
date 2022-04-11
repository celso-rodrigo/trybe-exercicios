// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function sumAll(num){
  let current = num;
  let end = 0;

  do {
    end += current;
    current -= 1;
  } while (current > 0);

  return console.log(`O somatório de todos os números de 1 até ${num} é: ${end}`);
};

sumAll(5);
