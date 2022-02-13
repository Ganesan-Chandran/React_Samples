import React from "react";

const Counter1 = (props) => {

  console.log("Counter1 Component Rendering");
  return (
    <>
      <h1>Counter1 Component</h1>
      {props.Count}
    </>
  );
}

export default React.memo(Counter1);