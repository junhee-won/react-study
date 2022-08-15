import React, { useState } from "react";
import { MsgContext } from "./MsgContext";

export default function FirstComponent() {
  const [msg, setMsg] = useState("Hello");
  return (
    <MsgContext.Provider value={msg}>
      <SecondComponent msg={msg} />;
    </MsgContext.Provider>
  );
}

function SecondComponent() {
  return <ThirdComponent />;
}

function ThirdComponent() {
  return <MsgContext.Consumer>{(msg) => <h1>{msg}</h1>}</MsgContext.Consumer>;
}
