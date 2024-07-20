import React from "react";
import ReactDOM from "react-dom";

// A Portal in React allows you to render a component or elements outside the current
// DOM hierarchy where the component is defined. This is achieved using the ReactDOM.createPortal method.

function Portal() {
  return ReactDOM.createPortal(
    <div>
      <h1>It is react Portal</h1>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Portal;
