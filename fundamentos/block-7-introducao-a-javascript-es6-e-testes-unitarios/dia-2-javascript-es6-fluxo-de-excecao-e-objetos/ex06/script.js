const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

function countStudents(obj) {
  const lesson = allLessons.lesson3.materia.toLowerCase();
  const count = allLessons.lesson3.numeroEstudantes;
  return `${count} alunos assitiram a aula de ${lesson}.`;
}

function createReport(obj, teacher) {
  const report = {};
  report.professor = teacher;
  report.aulas = [];
  report.aulas.push(allLessons.lesson1.materia);
  report.aulas.push(allLessons.lesson2.materia);
  report.aulas.push(allLessons.lesson3.materia);
  report.estudantes = allLessons.lesson1.numeroEstudantes;
  report.estudantes += allLessons.lesson2.numeroEstudantes;
  report.estudantes += allLessons.lesson3.numeroEstudantes;
  return report;
}

console.log(countStudents(allLessons));
console.log(createReport(allLessons, 'Maria Clara'));
