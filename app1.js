//in functional base components working of props and state
import {useState,useEffect} from 'react';
import './App.css';

const App = () => {                       //event handling in react
  const [Counter,setCounter]= useState(0);
  useEffect(() => {
  
  })

    return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{Counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
 