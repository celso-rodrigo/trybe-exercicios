import './styles/global.css';
import React, { Component } from 'react';
import PersonalData from './components/PersonalData'
import ProfissionalData from './components/ProfissionalData'

class App extends Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.removeNumbers = this.removeNumbers.bind(this);

    this.state = {
      username: '',
      userEmail: '',
      userCPF: '',
      userAdress: '',
      userCity: '',
      userState: '',
      houseType: '',
      userCurriculumDescription: '',
      userRole: '',
      userJobDescription: ''
    }
  }

  handleChanges({ target }) {
    const { name } = target;
    let value = target.value;
    if (name === 'username') value = value.toUpperCase()
    if (name === 'userAdress') value = value.replace(/[^\w\s]/gi, '')
    this.setState ({
      [name]: value
    });
  }

  removeNumbers({ target }) {
    const { name, value } = target;
    this.setState ({
      [name]: value.replace(/^\d+/, '')
    });
  }

  render () {
    return (
      <main>
        <form>
          <PersonalData handleChanges={this.handleChanges} removeNumbers={this.removeNumbers} state={this.state} />
          <ProfissionalData attemptionAlert={this.handleChanges} />
        </form>
      </main>
    );
  }
}

export default App;
