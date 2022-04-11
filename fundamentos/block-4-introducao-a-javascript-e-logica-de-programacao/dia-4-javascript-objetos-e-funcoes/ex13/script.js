// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

let word = 'joaofernando';
let wordEnd = 'fernan';

word = word.split('').reverse('');
wordEnd = wordEnd.split('').reverse('');

function isEnd(total, end){
  let msg = '';

  if (wordEnd.length > word.length){
    msg = 'Erro! O final da palavra não pode ser maior que a palavra';
  } else {
    for (let cont = 0; cont < wordEnd.length; cont += 1){
      if (wordEnd[cont] == word[cont]){
        msg = true
      } else {
        msg = false
      };
    };
  };

  return console.log(msg)
};

isEnd(word, wordEnd);
