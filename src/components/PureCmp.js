import React, { Component } from "react";
import PureCmp1 from "./PureCmp1";

class PureCmp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  render() {
    // console.log("check-rendering");
    return (
      <div>
        {/* <h1>Pure Component in React {this.state.count}</h1> */}
        <PureCmp1 count={this.state.count} />
        <button onClick={() => this.setState({ count: 1 })}>
          Update count
        </button>
      </div>
    );
  }
}

export default PureCmp;
