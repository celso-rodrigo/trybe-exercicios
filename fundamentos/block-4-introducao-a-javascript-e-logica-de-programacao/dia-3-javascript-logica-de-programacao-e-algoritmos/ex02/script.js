// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let backwards = [];
let newWord = '';

for (let letter of word){
  backwards.unshift(letter);
};

for (let letter of backwards){
  newWord += letter;
};

console.log(`${word} ao contrário é: ${newWord}`);
