import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setValue] = useState("");
  let [ori,setOri] = useState("");
  const show = () => {
    ori = value;
    setOri(ori);
  }
  return (
    <div>
      <p>Enter the text to show</p>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={show}>click</button>
      <p>{ori}</p>
    </div>
  )
}

export default App
