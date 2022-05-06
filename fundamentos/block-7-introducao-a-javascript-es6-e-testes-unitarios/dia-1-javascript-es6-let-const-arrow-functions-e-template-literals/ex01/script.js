// 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.

const testingScope = escopo => {
  let text = '';
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} +  ótimo, fui utilizada no escopo !`;
    text = ifScope;
   } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    text = elseScope;
   }
  return text;
}

console.log(testingScope(true));
