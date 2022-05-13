const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const dragonTurn = (strength) => Math.floor(Math.random() * (strength - 15) + 15);
const warriorTurn = (strength, weaponDmg) => Math.floor(Math.random() * (strength*weaponDmg - strength) + strength);
const mageTurn = () => {
  let returnedInfo;
  if (mage.mana >= 15) {
    returnedInfo = {
    damage: Math.floor(Math.random() * (mage.intelligence*2 - mage.intelligence) + mage.intelligence),
    mana: -15,
    };
  } else {
    returnedInfo = {
    damage: "Não possui mana suficiente",
    mana: 0,
    };
  }
  return returnedInfo;
};

function warriorTurnResult(warriorPerformace) {
  const dmgDealt = warriorPerformace(warrior.strength, warrior.weaponDmg);
  warrior.damage = dmgDealt;
  dragon.healthPoints -= dmgDealt;
}

function mageTurnResult(magePerformace) {
  const performace = magePerformace();
  if (typeof performace.damage === 'number') {
    dragon.healthPoints -= performace.damage;
  }
  mage.damage = performace.damage;
  mage.mana += performace.mana;
}

function dragonTurnResult(dragonPerformace) {
  const damageDealt = dragonPerformace(dragon.strength);
  dragon.damage = damageDealt;
  warrior.healthPoints -= damageDealt;
  mage.healthPoints -= damageDealt;
}

function showresults() {
  console.log(`Dragon HP: ${dragon.healthPoints} (DMG: ${dragon.damage}) || Warrior HP: ${warrior.healthPoints} (DMG: ${warrior.damage}) || Mage HP: ${mage.healthPoints} (DMG: ${mage.damage})`);
}

const gameActions = () => {
  do {
    if (warrior.healthPoints > 0) {
      warriorTurnResult(warriorTurn);
    }
    if (mage.healthPoints > 0) {
      mageTurnResult(mageTurn);
    }    
    if (dragon.healthPoints > 0) {
      dragonTurnResult(dragonTurn);
    }   
    showresults();
  } while (dragon.healthPoints > 0 && (warrior.healthPoints > 0 || mage.healthPoints > 0));
} 

gameActions();

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.
// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
