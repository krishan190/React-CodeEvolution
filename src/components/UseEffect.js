import React, { useEffect, useState } from "react";

function UseEffect() {
  const [showHeading, setShowHeading] = useState(true);

  const handleClick = () => {
    setShowHeading(false);
  };

  useEffect(() => {
    console.log("componentWillunmount");
  }, [showHeading]);

  return (
    <div>
      {showHeading && <h1>I am hide text</h1>}
      <button onClick={handleClick}>Hide Text</button>
    </div>
  );
}

export default UseEffect;
