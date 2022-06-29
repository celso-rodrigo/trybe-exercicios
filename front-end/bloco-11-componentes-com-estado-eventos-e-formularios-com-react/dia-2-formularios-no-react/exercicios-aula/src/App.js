import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txtInput1: '',
      txtInput2: 0,
      selectOpt: '',
    }

    this.handleForm = this.handleForm.bind(this);
  }

  handleForm({ target }) {
    const { name, value } = target;
    this.setState ({ [name]: value });
  }

  render () {
    return (
      <form>
        <h1>Options</h1>
        <label htmlFor='select-input'>
          <select
            id="select-input"
            onChange={this.handleForm}
            value={this.state.selectOpt1}
            name='selectOpt'
          >
          <option
              value='option 1'
              key='opt-1'
          >option 1</option>
          <option
              value='option 2'
              key='opt-2'
          >option 2</option>
          <option
              value='option 3'
              key='opt-3'
          >option 3</option>
          </select>
        </label>
  
        <label htmlFor="txt-input1">Input 1
          <input
            type='text'
            id="txt-input1"
            name="txtInput1"
            onChange={this.handleForm}
            value={this.state.txtInput1}
          ></input>
        </label>
  
        <label htmlFor="txt-input2">Input 2
        <input
            type='text'
            id="txt-input2"
            name="txtInput2"
            onChange={this.handleForm}
            value={this.state.txtInput2}
          ></input>
        </label>
      </form>
    );
  }
}

export default App;
