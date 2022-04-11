// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function calculo(a, b){
  console.log(`${a} + ${b} = ${a+b}`);
  console.log(`${a} - ${b} = ${a-b}`);
  console.log(`${a} x ${b} = ${a*b}`);
  console.log(`${a} / ${b} = ${a/b}`);
  console.log(`${a} % ${b} = ${a%b}`);
};

calculo(12, 25);
