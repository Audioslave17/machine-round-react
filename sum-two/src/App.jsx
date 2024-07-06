import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [num1, setNum1] = useState();
  let [num2, setNum2] = useState();
  let [total, setTotal] = useState();
  const add = () => {
    total = num1 + num2;
    setTotal(total);
  }

  return (
    <div>
      <h1>This is for the sum of two numbers</h1>
      <input type="number" placeholder='Enter the first number' value={num1} onChange={(e)=>setNum1(+e.target.value)}/>
      <input type="number" placeholder='Enter the second number' value={num2} onChange={(e)=>setNum2(+e.target.value)}/>
      <button onClick={add}>sum</button>
      <p>the sum is {total}</p>
    </div>
  )
}

export default App
