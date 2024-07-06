import { useState } from 'react'
import './App.css'
import Component from './components/Component'

function App() {
  const [val,setVal] = useState("");
  let [on,setOn] = useState(false);
  let fun = () => {
    setOn(!on);
  }
  return (
    <div>
      <h1>Prop aisa hota hai</h1>
      <input type="text" placeholder='Enter you name here' onChange={(e) => setVal(e.target.value)}/>
      <button onClick={fun}>click</button>
      {on && <Component username ={val}/>}
    </div>
     
  )
}

export default App
