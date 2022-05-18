const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function calculateAverage(numberArr) {
  const average = numberArr.reduce((total, number) => total += number) / numberArr.length;
  return average;
}

function studentAverage() {
  return grades.reduce((studentsObj, grades, index) => {
    studentsObj.push(`{${students[index]}: ${calculateAverage(grades)}}`)
    return studentsObj
  }, [])
}

console.log(studentAverage());
