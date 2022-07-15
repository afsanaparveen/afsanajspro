import React, { useState } from 'react';
const App = () => {
let time = new Date().toLocaleTimeString();
const [ctime, setCtime]=useState(time);
const updateTime = () =>
{

};
    return (
<>
<h1>{ctime}</h1>
<button>onClick={UpdateTime}> get time</button>
</>


    );
};
export default App;