import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.showThis = this.showThis.bind(this);
  }

  showThis() {
    console.log(this)
  }

  render() {
    return (
      <button onClick={this.showThis}>Show This on console</button>
    )
  }
}

export default App;
