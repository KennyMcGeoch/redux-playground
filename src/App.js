import './App.css';
import React, { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }
  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1)
  }
  
  return (
    <div className="App">
      Value: {counter} <button onClick={increment}>Increment</button><button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
