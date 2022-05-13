// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function callbackScore(strCorrect, strSent) {
  let sendBack = 0;
  if (strCorrect === strSent) {
    sendBack = 1;
  } else if (strCorrect !== strSent && strSent !== 'N.A') {
    sendBack = -0.5;
  }
  return sendBack;
}

function checkAnswer(arrCorrect, arrSent, callback) {
  let totalScore = 0;
  for (let index = 0; index < arrCorrect.length; index += 1) {
    totalScore += callback(arrCorrect[index], arrSent[index]);
  }
  return `A pontuação total foi de ${totalScore} pontos.`;
}

console.log(checkAnswer(RIGHT_ANSWERS, STUDENT_ANSWERS, callbackScore))