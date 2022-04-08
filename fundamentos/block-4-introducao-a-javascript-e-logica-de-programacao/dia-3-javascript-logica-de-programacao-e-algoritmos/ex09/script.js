// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7
//    *
//   * *
//  *   *
// *******

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

// REVISAR : https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-logica-de-programacao-e-algoritmos/solutions/83bb1cd0-be4a-40cf-a9c2-22d71f700144/gabarito-dos-exercicios/dbef6a68-2974-4129-9de4-9031d8d30b94?use_case=calendar