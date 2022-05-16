const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 26 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  // Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
  //Adicione seu código aqui
  const validAge = arr.every((person) => person.age >= minimumAge); 
  return validAge;
}

console.log(verifyAges(people, 18));