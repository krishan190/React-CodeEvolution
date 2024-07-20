import React, { useState } from "react";

function Controlled() {
  const [val, setVal] = useState("00");
  const [item, setItem] = useState("");
  return (
    <div>
      <h1>controlled Component</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <h3>Value of textBox {val}</h3>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <h3>value of Item {item}</h3>
    </div>
  );
}

export default Controlled;
