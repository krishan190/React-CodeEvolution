// Concept of PureComponent

import React from "react";

class ParentCmp extends React.Component {
  state = {
    count: 0,
    data: { value: "Hello" },
  };

  incrementCount = () => {
    this.setState({ count: 0 });
  };

  changeData = () => {
    this.setState({ data: { value: "Hi" } });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Increment Count</button>
        <button onClick={this.changeData}>Change Data</button>
        <PureChild count={this.state.count} data={this.state.data} />
      </div>
    );
  }
}

class PureChild extends React.PureComponent {
  render() {
    console.log("PureChild render");
    return (
      <div>
        <div>Count: {this.props.count}</div>
        <div>Data: {this.props.data.value}</div>
      </div>
    );
  }
}

export default ParentCmp;
