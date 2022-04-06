// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const sideA = 90;
const sideB = 40;
const sideC = 50;

if (sideA < 0 || sideB < 0 || sideC < 0) {
  console.log("Ângulo inválido!");
} else {
  console.log(sideA+sideB+sideC == 180);
}
