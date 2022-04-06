// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

// The pawn -> Peão
// The bishop -> Bispo
// The knight -> Cavalo
// The rook -> Torre
// The queen -> Rainha
// The king -> Rei

let piece = 'Rei';

// Referência: https://www.w3schools.com/jsref/jsref_tolocalelowercase.asp
// Usado para converter letras para minúsculo. 
piece = piece.toLowerCase();

if (piece == 'pawn' || piece == 'peão'){
  console.log('Peão -> Qualquer direção -> Um espaço');
} else if (piece == 'bishop' || piece == 'bispo'){
  console.log('Bispo -> Diagonais -> Qualquer quantidade de espaços');
} else if (piece == 'knight' || piece == 'cavalo'){
  console.log('Cavalo -> Em formato de L -> Um espaço para frente e três para o lado / Três espaços para frente e um para o lado');
} else if (piece == 'rook' || piece == 'torre'){
  console.log('Torre -> Frente, Trás e lados -> Qualquer quantidade de espaços');
} else if (piece == 'queen' || piece == 'rainha'){
  console.log('Rainha -> Qualquer direção -> Qualquer quantidade de espaços');
} else if (piece == 'king' || piece == 'rei'){
  console.log('Rei -> Qualquer direção -> Um espaço');
} else {
  console.log(`Erro! peça: ${piece} é inválida.`);
}
