function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];

createDays();

function createDays(){
  const month = document.getElementById('days');

  for (let days of dezDaysList){
    const dayMaker = document.createElement('li');
    dayMaker.innerText = days;
    dayMaker.classList = 'days';

    for (let holidayDays of holidays){
      if (days === holidayDays){
        dayMaker.classList += ' holiday';
      }
    }

    for (let fridayDays of fridays){
      if (days === fridayDays){
        dayMaker.classList += ' friday';
      }
    }

    month.appendChild(dayMaker);
  }
}

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

feriadoBtn('Feriados')
function feriadoBtn(phrase) {
  const btnMaker = document.createElement('button');
  const divFinder = document.querySelector('.buttons-container');
  btnMaker.innerText = phrase;
  btnMaker.id = 'btn-holiday';
  divFinder.appendChild(btnMaker);
}

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

const btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener("click", feriadoBtnColor);

function feriadoBtnColor() {
  const btnHolidayColor = document.getElementsByClassName('holiday');

  for (let btnHd of btnHolidayColor){
    if (btnHd.style.backgroundColor != 'rgba(164, 230, 164, 0.44)'){
      btnHd.style.backgroundColor = 'rgba(164, 230, 164, 0.44)';
    } else {
      btnHd.style.backgroundColor = 'rgb(238,238,238';
    }
  }
} 

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

fridaysBtn('Sexta-feira')
function fridaysBtn(phrase) {
  const btnMaker = document.createElement('button');
  const divFinder = document.querySelector('.buttons-container');
  btnMaker.innerText = phrase;
  btnMaker.id = 'btn-friday';
  divFinder.appendChild(btnMaker);
}

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener("click", sextaBtnText);

function sextaBtnText() {
  const btnFridayText = document.getElementsByClassName('friday');
  for (let cont = 0; cont < btnFridayText.length; cont += 1){
    if (btnFridayText[cont].innerText != 'Sextou!'){
      btnFridayText[cont].innerText = 'Sextou!';
    } else {
      btnFridayText[cont].innerText = fridays[cont];
    }
  }
} 

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

const allDays = document.querySelectorAll('.days');

for (let everyDay of allDays){
  everyDay.addEventListener('mouseenter', zoomDay);
  everyDay.addEventListener('mouseleave', unZoomDay);
}

function zoomDay(originElement) {
  originElement.target.style.fontSize = '2em';
}

function unZoomDay(originElement) {
  originElement.target.style.fontSize = '1em';
}

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

const addTaskBtn = document.getElementById('btn-add');
const addTaskText = document.getElementById('task-input');
addTaskBtn.addEventListener('click', taskManager)

function taskManager(task) {
  const taksFinder = document.querySelector('.my-tasks')
  taskMaker = document.createElement('span');
  taskMaker.innerText = addTaskText.value;
  taksFinder.appendChild(taskMaker)
}

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .



// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.



// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .



// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .
