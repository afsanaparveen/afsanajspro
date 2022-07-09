//in functional base components working of props and state
import React,{useState} from 'react';
import Test from './Test';

const App = () => {
  const [data,setData]= useState({
    name: 'parveen',
    age:18
  });
  const {name,age}=data;
    return (
    <div>
      <center>
        <Test name={name} age={age}/>
      </center>
    </div>
  )
}

export default App
 