// Provider 컴포넌트
import React, { createContext, useContext } from "react";

const UserContext = createContext();

export default function NoUseContext() {
  const user = { name: "Jane", age: "25" };
  return (
    <UserContext.Provider value={user}>
      <CunsumerChild />
      <UseContextChild />
    </UserContext.Provider>
  );
}

// Consumer 사용
function CunsumerChild() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <>
          <h2>{`name is ${user.name}`}</h2>
          <h2>{`age is ${user.age}`}</h2>
        </>
      )}
    </UserContext.Consumer>
  );
}

// useContext 사용
function UseContextChild() {
  const user = useContext(UserContext);
  return (
    <>
      <h2>{`name is ${user.name}`}</h2>
      <h2>{`age is ${user.age}`}</h2>
    </>
  );
}
