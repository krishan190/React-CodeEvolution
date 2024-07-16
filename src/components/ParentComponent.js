// lecture 15 methods as props

// Your code sets up a ParentComponent and a ChildComponent where the child can trigger a greeting message in the parent.

import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      ParentName: "parent",
    };
  }

  greetParent = (childName) => {
    alert(`Hello ${this.state.ParentName} from ${childName}`);
  };

  //The greetHandler prop passed to the ChildComponent is this.greetParent, which ensures the childName parameter can be passed.

  // When the button in the ChildComponent is clicked, it triggers the greetHandler function, passing "child" as the argument.
  //  The greetParent function in the ParentComponent then displays an alert with the greeting message.
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
