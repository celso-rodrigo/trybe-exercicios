// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Olá, ${info.personagem}`);

console.log('-----//----------//----------//----------//----------//-----');
// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info['recorrente'] = 'Sim';

console.log(info);

console.log('-----//----------//----------//----------//----------//-----');
// Faça um for/in que mostre todas as chaves do objeto.

for (let information in info){
  console.log(information)
};

console.log('-----//----------//----------//----------//----------//-----');
// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let information in info){
  console.log(info[information])
};

console.log('-----//----------//----------//----------//----------//-----');
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let information2 in info2){
  console.log(`${information2} : ${info2[information2]}`);
};
