import React, { memo } from "react";

function Home(props) {
  console.log("ineer component", props.data);
  return (
    <div>
      <p>Home component</p>
    </div>
  );
}

export default memo(Home);
