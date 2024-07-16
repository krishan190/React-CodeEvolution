// import React from "react";

// function FunctionClick() {
//   function clickHandler() {
//     console.log("button Clicked");
//   }
//   return (
//     <div>
//       <button onClick={clickHandler}>ClickFn</button>
//     </div>
//   );
// }

// export default FunctionClick;

import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>clickme</button>
      </div>
    );
  }
}

export default ClassClick;
