import React, { useState } from "react";
import Home from "./Home";

function MemoCmp() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  return (
    <div>
      <h1>Memo with React {count}</h1>
      <Home data={data} />
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default MemoCmp;
