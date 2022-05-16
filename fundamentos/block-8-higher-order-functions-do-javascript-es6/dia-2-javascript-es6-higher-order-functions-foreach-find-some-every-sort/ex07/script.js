const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
// Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
// Adicione se código aqui
const ascending = people.sort((a, b) => a.age - b.age);
const descending  = people.sort((a, b) => b.age - a.age)

console.log(people);
console.log(ascending);
console.log(descending);