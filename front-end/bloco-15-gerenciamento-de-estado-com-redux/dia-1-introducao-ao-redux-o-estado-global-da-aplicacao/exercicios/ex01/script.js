const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const randomBtn = document.getElementById('random');
const coloredTxt = document.getElementById('value');

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const changeColor = (actionType) => ({
  type: (actionType),
})

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: (state.index + 1) % state.colors.length,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length : state.index - 1,
      };
    case 'ADD_RANDOM_COLOR':
      state.colors.push(action.color);
      return {
          ...state,
          index: state.colors.length - 1,
      };
    default:
      return INITIAL_STATE;
  }
};

const store = window.Redux.createStore(reducer)

function goNextColor() {
  store.dispatch(changeColor('NEXT_COLOR'))
}

function goPrevColor() {
  store.dispatch(changeColor('PREVIOUS_COLOR'))
}

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

function createRandomColor() {
  const color = criarCor();
  store.dispatch({type: 'ADD_RANDOM_COLOR', color});
}

store.subscribe(() => {
  const { colors, index } = store.getState()
  const color = colors[index];
  coloredTxt.innerHTML = color;
  coloredTxt.style.backgroundColor = color;
})

nextBtn.addEventListener('click', goNextColor)
prevBtn.addEventListener('click', goPrevColor)
randomBtn.addEventListener('click', createRandomColor)
