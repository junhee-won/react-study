import { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

export function TestUseEffect1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count: ${count}`;
  }, []);

  return <button onClick={() => setCount(count + 1)}>1 증가</button>;
}

export function TestUseEffect2() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <div>{`width is ${width}`}</div>;
}

export function TestUseEffect3() {
  const width = useWindowWidth();

  return <div>{`width is ${width}`}</div>;
}
