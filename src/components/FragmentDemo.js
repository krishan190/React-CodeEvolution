import React from "react";

function FragmentDemo() {
  return (
    // fragment is group a list of children component without adding extra nodes to the dom
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>THis describes the fragment demo component</p>
    </React.Fragment>
  );
}

export default FragmentDemo;
