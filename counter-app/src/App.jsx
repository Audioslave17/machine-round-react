import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState(10);
  const addVal = () => {
    if(value<20){
      value = value+1;
      setValue(value);
    }
  }
  const removeVal = () => {
    if(value>0){
      value = value - 1;
      setValue(value);
    }
  }
  return (
    <div>
      <h1>Counter Application</h1>
      <p className='p-5'>Counter value: {value}</p>
      <button onClick={addVal}>add</button>
      <button onClick={removeVal}>remove</button>
    </div>
  )
}

export default App
