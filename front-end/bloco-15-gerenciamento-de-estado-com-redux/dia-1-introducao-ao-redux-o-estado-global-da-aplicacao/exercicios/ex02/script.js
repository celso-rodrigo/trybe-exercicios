const changeThemeBtn = document.getElementById('toggle-theme');
const changeStatusBtn = document.getElementById('toggle-status');
const statusDisplay = document.getElementById('status');

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'changeStatus':
      return {
        ...state,
        status: state.status === 'online' ? 'offline' : 'online',
      }
    default:
      return state;
  }
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'changeTheme' })
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'changeStatus' })
});

const combinedReducers = Redux.combineReducers({
  themeReducer,
  statusReducer,
})

const store = window.Redux.createStore(combinedReducers);

function changeTheme({ theme }) {
  const newTheme = theme === 'light' ? 'lightgrey' : '#333';
  const newColor = theme === 'light' ? 'black' : 'white';
  const text = theme === 'light' ? 'Dark' : 'Light';
  document.body.style.backgroundColor = newTheme;
  document.body.style.color = newColor;
  changeThemeBtn.innerText = `${text} Mode`;
}

function changeStatus({ status }) {
  const newStatus = status === 'online' ? 'Offline' : 'Online';
  changeStatusBtn.innerText = `Ficar ${newStatus}`;
  statusDisplay.innerText = status;
  statusDisplay.style.textTransform = 'capitalize';
}

store.subscribe(() => {
  changeTheme(store.getState().themeReducer);
  changeStatus(store.getState().statusReducer);
})
