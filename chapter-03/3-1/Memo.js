import React, { useState } from "react";

export default function Memo() {
  const [desc, setDesc] = useState("");
  const [currentId, setCurrentId] = useState(1);
  const [memoList, setMemoList] = useState([]);
  const add = () => {
    const memo = { id: currentId, desc };
    setCurrentId(currentId + 1);
    setMemoList([...memoList, memo]);
  };
  return (
    <div>
      <h3>메모</h3>
      <ul>
        {memoList.map((memo) => {
          return (
            <li key={memo.id}>
              <span>{memo.id}번째 </span>
              <span>{memo.desc}</span>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={add}>추가</button>
    </div>
  );
}
