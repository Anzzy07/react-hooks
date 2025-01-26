import React, { useState } from "react";
import { Login } from "./Login";
import { User } from "./User";
import { createContext } from "react";

// To manage state in contextAPI is to create context.
// Context is collection of states that we want to..
//  access of whole tree of components inside of..
// component we are creating right now.
export const AppContext = createContext(null);

export const UseContext = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};
