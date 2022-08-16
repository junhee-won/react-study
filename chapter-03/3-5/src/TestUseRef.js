import React, { useEffect, useRef } from "react";

export default function TestUseRef() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Input inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>입력창으로 이동</button>
    </div>
  );
}

function Input({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} /> <button>save</button>
    </div>
  );
}
