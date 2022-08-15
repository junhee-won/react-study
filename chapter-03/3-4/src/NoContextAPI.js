import { useState } from "react";

export default function FirstComponent() {
  const [msg, setMsg] = useState("Hello");
  return <SecondComponent msg={msg} />;
}

function SecondComponent({ msg }) {
  return <ThirdComponent msg={msg} />;
}

function ThirdComponent({ msg }) {
  return <h1>{msg}</h1>;
}
