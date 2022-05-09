// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function createObj(objeto, key, value) {
  const obj = objeto;
  // obj[key] = value;
  obj.key = value;
  return obj;
}

phrase = {
  start: 'Hello, ',
  end: 'word!'
}
console.log(createObj(phrase, 'emoji', ' c:'));
