import React from "react";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  decrease = () => {
    this.setState((prev) => ({
      count: prev.count - 1
    }));
  };
  increase = () => {
    this.setState((prev) => ({
      count: prev.count + 1
    }));
  };


  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increment</button>
        <button onClick={this.decrease}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;