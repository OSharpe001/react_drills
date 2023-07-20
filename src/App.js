import './App.css';
// import Arrays from "./Arrays";
// import Objects from "./Objects"
import { useState } from "react";
import Form from "./Form";

function App() {

  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };

  const minusOne = () => {
    setCounter(counter - 1);
  };

  const addFive = () => {
    setCounter(prevCounter => prevCounter + 5);
  };

  // USING "SETVARIABLENAME(PREV<VARIABLENAME> => PREV<VARIABLENAME> <OPERATION>)" IS A SAFER OPERATION, ESPECIALLY FOR WHEN "SET" FUNCTIONS ARE USED AS "CALLBACKS" IN REOCCURRING FUNCTIONS
  const minusFive = () => {
    setCounter(prevCounter => prevCounter - 5);
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
      <button onClick={addFive}>+5</button>
      <button onClick={minusFive}>-5</button>
      <br/>
      <button onClick={resetCount}>Reset</button>
      <Form />
    </div>
  );
}

export default App;
