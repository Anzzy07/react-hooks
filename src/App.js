import "./App.css";
import { UseCallback } from "./Use Callback/UseCallback";
import { UseContext } from "./Use context/UseContext";
import { UseEffect } from "./useEffect/UseEffect";
import { UseReducer } from "./useReducer/Reducer";
import { UseRef } from "./useRef/UseRef";
import { UseState } from "./useState/UseState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        <UseReducer />
        <UseEffect />
        <UseRef />
        <UseContext />
        <UseCallback />
      </header>
    </div>
  );
}

export default App;
