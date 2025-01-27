import React, { useEffect, useRef, useState } from "react";

//Use ref is used to access & manipulate dom elements.
// What we are doing is here acessing here dom element..
// from input & tell browser after clicking in button
// then focus on input field

//it can also be used to store value o previous state even ..
// though it would change in re-render
export const UseRef = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus(); //this will do is after clicking button it focuses on input field to input
    // inputRef.current.value = ""; this can be used if we write something in field and we want to clear after field is added.
  };
  return (
    <div>
      <h1>Anzel Here</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export const RefExample2 = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <p>Count :{count}</p>
      <p>Previos Count :{prevCount.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </>
  );
};
