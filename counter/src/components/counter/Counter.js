import React, { Component } from 'react';
import ReactDom from 'react-dom'


class Counter extends React.Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
                <button>Increment</button>
                <button>Decrement</button>
                <button>Auto</button>
            </div>
        )
    }
    
}