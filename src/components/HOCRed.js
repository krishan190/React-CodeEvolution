import React from "react";

function HOCRed(props) {
  return (
    <h3 style={{ backgroundColor: "red", width: 100 }}>
      Red
      <props.cmp />
    </h3>
  );
}

function HOCGreen(props) {
  return (
    <h3 style={{ backgroundColor: "green", width: 100 }}>
      Green
      <props.cmp />
    </h3>
  );
}

function HOCBlue(props) {
  return (
    <h3 style={{ backgroundColor: "blue", width: 100 }}>
      Blue
      <props.cmp />
    </h3>
  );
}

export { HOCRed, HOCGreen, HOCBlue };
