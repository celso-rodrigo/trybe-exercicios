// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Goiaba', 'Laranja', 'Melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
