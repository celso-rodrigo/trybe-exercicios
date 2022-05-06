function longestWord(phrase) {
  const phraseArray = phrase.split(' ')
  let biggestWord = phraseArray[0];
  for (let cont = 0; cont < phraseArray.length; cont += 1) {
    if (phraseArray[cont].length > biggestWord.length) {
      biggestWord = phraseArray[cont];
    }
  }
  console.log(biggestWord)
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
