import React, { Component } from "react";
import ReactDom from "react-dom";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
      this.setState({
          count: this.state.count - 1
      })
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button>Auto</button>
      </div>
    );
  }
}

export default Counter;
