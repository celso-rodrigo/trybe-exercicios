const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNight(obj, key, value) {
  obj[key] = value
  console.log(obj) ;
}

function listKeys(obj) {
  for (let cont = 0; cont < Object.keys(obj).length; cont += 1) {
    console.log(Object.keys(obj)[cont]);
  }
}

function objSize(obj) {
  console.log(`${Object.keys(obj).length} Keys e ${Object.values(obj).length} Values.`);
}

function listValues(obj) {
  for (let cont = 0; cont < Object.values(obj).length; cont += 1) {
    console.log(Object.values(obj)[cont]);
  }
}

addNight(lesson2, 'turno', 'noite');
console.log('-----//-----//-----//-----//-----//-----//-----');
listKeys(lesson1);
console.log('-----//-----//-----//-----//-----//-----//-----');
objSize(lesson2);
console.log('-----//-----//-----//-----//-----//-----//-----');
listValues(lesson3);
console.log('-----//-----//-----//-----//-----//-----//-----');

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.table(allLessons);
