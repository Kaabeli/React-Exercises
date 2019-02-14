import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  buttonPlus = () => {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1}
    });
            }
  buttonMinus = () => {
      this.setState((prevState) => {
          return {counter: prevState.counter - 1}
      });
              }
  buttonReset = () => {
      this.setState((prevState) => {
          return {counter: 0};
      });
  }

  
  render() { 
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.buttonPlus}>+</button>
        <button onClick={this.buttonMinus}>-</button>
        <button onClick={this.buttonReset}>Reset</button>
      </div>
    );
  }
}
export default Counter;