import React, { useContext } from "react";
import { AppContext } from "./UseContext";
export const Login = () => {
  const { setUsername } = useContext(AppContext);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};
