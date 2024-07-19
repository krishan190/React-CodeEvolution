import React, { PureComponent } from "react";

class PureCmp1 extends PureComponent {
  render() {
    console.log("user component check rendering");
    return (
      <div>
        <h1>User Component {this.props.count}</h1>
      </div>
    );
  }
}

export default PureCmp1;
