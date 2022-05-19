const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

function toObject([name, brand, year]) {
  return {
    name,
    brand,
    year,
  }
}

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));
