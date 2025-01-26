import { useCallback, useState } from "react";
import { Child } from "./Child";

//when we have some fuction to a child component
export const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, Are you home alone?");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};
