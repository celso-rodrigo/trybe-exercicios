import React from 'react';
import './App.css';

const taskList = ['Estudar', 'Dormir', 'Me divertir', 'Comer', 'Repitir'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ul>{ taskList.map(task => Task(task)) }</ul>
    );
  }
}

export default App;
