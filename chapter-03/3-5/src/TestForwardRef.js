import React, { useEffect, useRef } from "react";

export default function TestForwardRef() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>입력창으로 이동</button>
    </div>
  );
}

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} /> <button>save</button>
    </div>
  );
});
