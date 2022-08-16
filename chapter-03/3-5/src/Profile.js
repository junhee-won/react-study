import React, { useState, ueRef, useEffect, useRef } from "react";

export default function Profile() {
  const [age, setAge] = useState(25);
  const prevAgeRef = useRef(25);
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger";

  return (
    <div>
      <p>{`age ${age} is ${text} than prevAge ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
        style={{ fontSize: 40 }}
      >
        나이변경
      </button>
    </div>
  );
}
