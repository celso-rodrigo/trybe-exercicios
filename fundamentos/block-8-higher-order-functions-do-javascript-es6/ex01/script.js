// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. 

const wakingUp = () => 'Acordando!!';
const getBreakfest = () => 'Bora tomar café!!';
const goingToBed = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(wakingUp));
console.log(doingThings(getBreakfest));
console.log(doingThings(goingToBed));
