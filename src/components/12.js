// 12 Destructuring props and state

import React from "react";

function Greet(props) {
  const { name, heroname } = props;
  //   in class component we can use this
  //   const { name, heroname } = this.props;
  return (
    <div>
      <h1>
        hello {name} and heroname is {heroname}
      </h1>
    </div>
  );
}

export default Greet;
