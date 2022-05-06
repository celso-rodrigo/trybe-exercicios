function factCalc (initialNumber) {
  let cont1 = initialNumber - 1;
    let result = 0;
    do {
      result += initialNumber * cont1;
      cont1 -= 1;
    } while (cont1 >= 1);
    return result;
}

function factTxtMaker(number) {
  let cont2 = number
  let text = `${cont2}! = `;
  do {
    text += `${cont2} * `;
    cont2 -= 1;
  } while (cont2 >= 2);
  text += `1 = ${factCalc(number)}`;
  console.log(text);
}

factTxtMaker(4);
