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

  auto_increment = () => {
      setInterval(() => {
          this.setState({
              count: this.state.count + 1
          })
      }, 1000);
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.auto_increment}>Auto</button>
      </div>
    );
  }
}

export default Counter;
