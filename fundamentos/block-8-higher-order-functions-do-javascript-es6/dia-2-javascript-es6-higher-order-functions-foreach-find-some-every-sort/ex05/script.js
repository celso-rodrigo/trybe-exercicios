const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  // Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
  //Adicione seu código aqui
  const returnedBool = arr.some((person) => person === name);
  return returnedBool;
}

console.log(hasName(names, 'Anya'))