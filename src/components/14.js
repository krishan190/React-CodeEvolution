// Binding event handlers

import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    this.clickHandler = this.clickHandler.bind(this); //Binding constructor
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "hi",
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "krishna how are you",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>
        first method
        <button onClick={() => this.clickHandler()}>Click</button>
        second method */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
