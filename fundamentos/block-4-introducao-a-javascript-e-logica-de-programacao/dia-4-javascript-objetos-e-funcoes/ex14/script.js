// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

let roman = 'MMDCLV';
roman = roman.toUpperCase();

// Separa cada letra romana em um indice de um array
let allRoman = roman.split('');

let allNumber = [];
let finalNumber = 0;

// Transforma cada indice de allRoman em um valor dentro do array allNumber
for (let num of allRoman){
  if (num == 'I') {
    allNumber.push(1)
  } else if (num == 'V') {
    allNumber.push(5)
  } else if (num == 'X') {
    allNumber.push(10)
  } else if (num == 'L') {
    allNumber.push(50)
  } else if (num == 'C') {
    allNumber.push(100)
  } else if (num == 'D') {
    allNumber.push(500)
  } else if (num == 'M') {
    allNumber.push(1000)
  };
};

// Soma ou subtrai os valores de allNumber de acordo com a ordem.
for (let cont = 0; cont < allNumber.length; cont += 1){
  if (cont == 0){
    finalNumber += allNumber[0];
  } else {
    if (allNumber[cont] > allNumber[cont - 1]){
      finalNumber -= allNumber[cont];;
    } else {
      finalNumber += allNumber[cont];
    };
  };
};

console.log(`O valor romano: ${roman} é igual a: ${finalNumber}.`);
