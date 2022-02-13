import React from "react";

const Counter2 = (props) => {

  console.log("Counter2 Component Rendering");
  return (
    <>
      <h1>Counter2 Component</h1>
      {props.Count}
    </>
  );
}

export default Counter2;