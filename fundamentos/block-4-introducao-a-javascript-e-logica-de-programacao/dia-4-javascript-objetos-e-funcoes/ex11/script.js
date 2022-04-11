// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let nums = [2, 3, 2, 5, 8, 2, 3];

function repet(array){
  let mostRept = array[0];
  let mostCont = 0;

  // Laço que para cada número da array registra o número atual e o quanto foi repitido
  for (let num of array){
    let currentNum = num;
    let cont = 0;

    for (let num2 of array){
      if(num2 == currentNum){
        cont += 1;
      };
    };

    // Salva o número e a quantidade de repetições caso ele seja atualmente o número mais repitido da array
    if (cont > mostCont){
      mostRept = currentNum;
      mostCont = cont;
    };
  };

  return console.log(`O número mais repitido foi: ${mostRept}, ele foi repitido ${mostCont} vezes.`)
};

repet(nums);
