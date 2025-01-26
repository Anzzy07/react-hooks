import React, { useContext } from "react";
import { AppContext } from "./UseContext";

export const User = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>I am : {username}</h1>
    </div>
  );
};
