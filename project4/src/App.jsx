// import Home from "./Home";

// export default function App() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }

import React, { useState, useRef, useEffect } from "react";

export default function MyComponent() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }
  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "red";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "green";
  }

  useEffect(() => {
    console.log("component rendered");
    console.log(inputRef);
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input ref={inputRef} />

      <button onClick={handleClick1}>Click me1</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me2</button>
      <input ref={inputRef2} />
    </>
  );
}
