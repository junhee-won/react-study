import React, { useState } from "react";

export function TestUseState1() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  console.log("Component is rendered");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>1 증가</button>
    </div>
  );
}
