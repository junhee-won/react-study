import React from "react";
import { BrowserRouter, Route, Link, Routes, useMatch } from "react-router-dom";

export default function Rooms() {
  return (
    <div>
      <h2>방을 소개하는 페이지입니당!</h2>
      <Link to="blue">파란 방</Link>
      <br />
      <Link to="red">빨간 방</Link>
      <br />
      <Link to="green">초록 방</Link>
      <Routes>
        <Route exact path="/" element={<h3>방을 선택하시오</h3>} />
        <Route path=":roomColor" element={<Room />} />
      </Routes>
    </div>
  )
}

function Room() {
  const match = useMatch("/rooms/:roomColor")
  return <h2>{`${match.params.roomColor} 방을 선택했습니다`}</h2>
}