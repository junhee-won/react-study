import React, { useImperativeHandle, useRef, useState } from "react";

export default function TestUseImperativeHandle() {
  const profileRef = useRef();
  const onClick = () => {
    if (profileRef.current) {
      profileRef.current.printProfile();
      profileRef.current.addAge(5);
    }
  };

  return (
    <>
      <Child ref={profileRef} />
      <button onClick={onClick}>나이 5 증가</button>
    </>
  );
}

const Child = React.forwardRef((props, ref) => {
  const [profile, setProfile] = useState({ name: "Mike", age: 30 });
  useImperativeHandle(ref, () => ({
    printProfile: () =>
      console.log(`name: ${profile.name}, age: ${profile.age}`),
    addAge: (age) => setProfile({ ...profile, age: profile.age + age }),
  }));
  return (
    <>
      <h2>name is {profile.name}</h2>
      <h2>age is {profile.age}</h2>
    </>
  );
});
