import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Rooms from "./Rooms";

export default function ReactRouterDom() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: '5px solid gray' }}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/photo" element={<Photo />} />
          <Route exact path="/rooms/*" element={<Rooms />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function Home() {
  return <h2>홈페이지입니당!</h2>
}

function Photo() {
  return <h2> 사진입니당!</h2>
}
