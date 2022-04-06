const myName = "Celso Rodrigo";
const birthCity = "Campina Grande";
let birthYear = 1998;

console.log(`Olá! Me chamo ${myName} e nasci em ${birthCity} no ano de ${birthYear}.`);

birthYear = 2030;

console.log(birthYear);

birthCity = "João Pessoal";

// Erro devido a tentativa de alterar um valor do tipo constante
console.log(birthCity);
