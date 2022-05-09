const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

function listAbility(obj) {
  for (let objIndex = 0; objIndex < Object.keys(student1).length; objIndex += 1) {
    console.log(`${Object.keys(obj)[objIndex]}, Nível: ${Object.values(obj)[objIndex]}`);
  }
}

listAbility(student1);
listAbility(student2);
