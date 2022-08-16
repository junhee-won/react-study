import { useState, useCallback } from "react";

function Parent() {
  const [variable, setVariable] = useState();
  const sampleFunc = (param) => {
    // ...
  };
  return <Child sampleFunc={() => sampleFunc(variable)} />;
}

function Child({ sampleFunc }) {
  return <div></div>;
}

function Parent2() {
  const [variable, setVariable] = useState();
  const sampleFunc = (param) => {
    // ...
  };
  const func = useCallback(() => sampleFunc(variable), [variable]);
  return <Child sampleFunc={func} />;
}

function Child({ sampleFunc }) {
  return <div></div>;
}
