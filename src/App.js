import './App.css';
// import Arrays from "./Arrays";
// import Objects from "./Objects"
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };

  const minusOne = () => {
    setCounter(counter - 1);
  };

  const resetCount = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>Welcome to React Drills</h1>
      {/* <Arrays /> */}
      {/* <Objects /> */}
      <h2>{counter}</h2>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
      <br/>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
