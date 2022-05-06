function longestWord(phrase) {
  const phraseArray = phrase.split(' ')
  let biggestWord = phraseArray[0];
  for (let cont3 = 0; cont3 < phraseArray.length; cont3 += 1) {
    if (phraseArray[cont3].length > biggestWord.length) {
      biggestWord = phraseArray[cont3];
    }
  }
  console.log(biggestWord)
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
