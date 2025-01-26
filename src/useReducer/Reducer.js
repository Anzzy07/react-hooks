import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toogleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  const counter = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "toogleShowText" });
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={counter}>Click Here</button>

      {state.showText && <p>Text here!! </p>}
    </div>
  );
};
