// VARIABLES
const userNameInput = document.getElementById('nameInput');
const userEmailInput = document.getElementById('emailInput');
const reasonTxtInput = document.getElementById('reasonTxt');
const bestDateInput = document.getElementById('travelDate');
const reciveNewsinput = document.getElementById('reciveNews');
const agreeTermsInput = document.getElementById('agreeTerms');
const subBtn = document.getElementById('submitBtn');
const clearBtn = document.getElementById('clearBtn');

// FUNCTIONS
// Limpa todas as entradas do form
function clearForm(origin) {
  origin.preventDefault();
  userNameInput.value = '';
  userEmailInput.value = '';
  reasonTxtInput.value = '';
  reasonTxtInput.value = '';
  reciveNewsinput.checked = false;
  agreeTermsInput.checked = false;
  document.getElementById('city').checked = true;
}

function testeSize(name, email, reason){
  let testSizeResult = true;
  if (name > 40 || name < 10) {
    testSizeResult = false
  }
  if (email > 50 || email < 10) {
    testSizeResult = false;
  }
  if (reason > 500 || reason <= 0){
    testSizeResult = false;
  }
  return testSizeResult;
}

function testEmpty() {
  let testEmptyResult = true;
  if (bestDateInput.value === '' || agreeTermsInput.checked === false) {
    testEmptyResult = false;
  }
  return testEmptyResult;
}

function showAlert(result) {
  if (result === false){
    alert('Dados Inválidos')
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}

function checkErros(origin2) {
  origin2.preventDefault();
  const nameSize = userNameInput.value.length;
  const emailSize = userEmailInput.value.length;
  const reasonSize = reasonTxtInput.value.length;
  const testResult = (testeSize(nameSize, emailSize, reasonSize) && testEmpty());
  showAlert(testResult);
}

// EVENT LISTENERS
subBtn.addEventListener('click', checkErros)
clearBtn.addEventListener('click', clearForm);

// STATIC
