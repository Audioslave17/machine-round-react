import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const employees = [
    {
      name: "Anurag",
      id: 1
    },
    {
      name: "Bhuvan",
      id: 2
    }
  ]

  const userItems = employees.map((employee)=><li key={employee.id}>{employee.name}</li>)
  return (
    <div>
      <h1>List of Employees</h1>
      <p>{userItems}</p>
    </div>
  )
}

export default App
