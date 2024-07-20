import React, { useRef } from "react";

function Uncontrolled() {
  let inputRef = useRef(null);
  let inputRef1 = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    console.log("firstName value", inputRef.current.value);
    console.log("LastName value", inputRef1.current.value);
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Uncontrolled Component</h1>
        <input type="text" ref={inputRef} placeholder="Enter FirstName" />
        <br /> <br />
        <input type="text" ref={inputRef1} placeholder="Enter LastName" />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Uncontrolled;
