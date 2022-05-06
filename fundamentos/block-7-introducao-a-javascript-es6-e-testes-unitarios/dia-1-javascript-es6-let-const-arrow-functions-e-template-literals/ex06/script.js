let skills = ['Cozinhar', 'JS', 'CSS', 'HTML' ,'Desenhar']

function changeX(phrase1) {
  let newPhrase = phrase1;
  newPhrase = newPhrase.replace('x', 'skills')
  orderSkills(newPhrase)
  return newPhrase;
}

function orderSkills(phrase2){
  console.log(`${phrase2} ${skills.sort()}`)
}

changeX('Quais são minhas x? ');
