const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function allCharacters() {
  const allChars = names.reduce((allNames, name) => allNames + name);
  return allChars.toLowerCase().split('');
}

const quantityA = allCharacters().reduce((aCount, letter) => {
  return letter === 'a' ? aCount + 1 : aCount
}, 0);

console.log(quantityA);
