import React, { useState } from 'react';
import './App.css';
 
function App(){
  const [counter,setcounter] = useState(0);
  const increment=()=>{
    setcounter(counter+1);
  };
  const decrement=()=>{
    setcounter(counter-1);
  };
  const reset =()=>{
    setcounter(0);
  };


  return(
    <div className="App">
      <header className="app-header">
        <h1>{counter}</h1>
        <button  onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
        <br />
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );

}
export default App;