import React, { useState } from "react";

// UI 데이터 사용하지 않을 때
export function Count1() {
  let num = 0;
  const count = () => {
    num += 1;
  };

  return (
    <div>
      <div>{num}</div>
      <button onClick={count}>1 증가</button>
    </div>
  );
}

// 상태값으로 UI 데이터 관리
export function Count2() {
  const [num, setNum] = useState(0);
  const count = () => {
    setNum(num + 1);
    console.log(num);
  };

  return (
    <div>
      <div>{num}</div>
      <button onClick={count}>1 증가</button>
    </div>
  );
}

// 속성값으로 UI 데이터 관리

export function CountParent() {
  const [num, setNum] = useState(0);
  const count = () => {
    setNum(num + 1);
    console.log(num);
  };

  return (
    <div>
      <CountChild num={num} />
      <button onClick={count}>1 증가</button>
    </div>
  );
}

export function CountChild(props) {
  console.log("Count Child 렌더링");
  console.log(props);
  return <div>props.count</div>;
}
