import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "zero":
      return { count: (state.count = 0) };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increaseCount = () => {
    dispatch({ type: "increment" });
  };

  const minusCount = () => {
    dispatch({ type: "decrement" });
  };

  const resetCount = () => {
    dispatch({ type: "zero" });
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};
