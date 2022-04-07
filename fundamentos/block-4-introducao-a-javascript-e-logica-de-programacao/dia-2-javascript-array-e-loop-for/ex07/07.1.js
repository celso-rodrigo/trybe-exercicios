// Ordene o array numbers em ordem crescente e imprima seus valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let cont1 = 0; cont1 < numbers.length -1; cont1 += 1){
  for (let cont = 0; cont < numbers.length - 1; cont += 1){
    indexOne = numbers[cont];
    indexTwo = numbers[cont+1];

  if (indexOne > indexTwo){
    numbers[cont] = indexTwo;
    numbers[cont+1] = indexOne ;
  }  
  }
}

console.log(numbers);
