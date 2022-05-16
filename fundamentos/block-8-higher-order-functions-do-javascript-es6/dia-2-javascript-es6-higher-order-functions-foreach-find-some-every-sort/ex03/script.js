const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  // Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
  const fiveCharsName = names.find((name) => name.length === 5);
  return fiveCharsName;
}

console.log(findNameWithFiveLetters());