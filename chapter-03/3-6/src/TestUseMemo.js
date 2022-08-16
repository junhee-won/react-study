import React, { useMemo, useState } from "react";

export default function Parent() {
  const [color, setColor] = useState("black");
  return (
    <>
      <button onClick={() => setColor("black")}>black</button>
      <button onClick={() => setColor("white")}>white</button>
      <TestUseMemo color={color} />
    </>
  );
}

function TestUseMemo({ color }) {
  const veryComplexFunc = (para) => {
    console.log(para);
    return para;
  };
  const value = useMemo(() => veryComplexFunc(color), [color]);
  return <h1>{value}</h1>;
}
