import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(true);
  return (
    <div>
      <button onClick={()=>setValue(!value)}>{value? "Hide the element":"Show the element"}</button>
      {value && <p>God is with us</p>}
    </div>
  )
}

export default App
