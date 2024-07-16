// lecture 11  (setState)

// always make use of setState and never modify the state directly
//code has to executed after the state has been updated ? place that code in the callback function which is second argument to the setState method
//when you have to update state based on the previous state value pass in a function as a argument insted of the regular object

import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value " + this.state.count);
    //   }
    // );
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    // console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
