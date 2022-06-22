import React from "react";

class Button extends React.Component {
  constructor() {
    super();

    this.btnClickUpdate = this.btnClickUpdate.bind(this);
    this.changeBtnColor = this.changeBtnColor.bind(this);
    
    this.state = {
      btnClicks: 0,
      colorClass: 'even',
    }
  }

  btnClickUpdate() {
    this.setState((oldState, _props) => ({
      btnClicks: oldState.btnClicks + 1,
    }));
    this.changeBtnColor();
  }

  changeBtnColor() {
    if (this.state.btnClicks % 2 === 0) {
      this.setState ({
        colorClass: 'even',
      });
    } else {
      this.setState ({
        colorClass: 'odd',
      });
    }
  }

  render() {
    return (
      <>
        <button onClick={this.btnClickUpdate} className={this.state.colorClass}>Número de clicks: {this.state.btnClicks}</button>
      </>
    )
  }
}

export default Button;
