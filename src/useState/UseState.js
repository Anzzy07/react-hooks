import { useState } from "react";

export const UseState = () => {
  const [inputValue, setInputValue] = useState("");
  const [addInput, setAddInput] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const displayList = (newList) => {
    setAddInput([...addInput, newList]);
  };

  return (
    <div>
      <input placeholder="username..." type="text" onChange={handleChange} />
      <button onClick={() => displayList(inputValue)}>Add lists</button>
      <h1>
        {addInput.map((listing) => {
          return <h1>{listing}</h1>;
        })}
      </h1>
    </div>
  );
};
