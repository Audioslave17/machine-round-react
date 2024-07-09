import React, { useEffect, useState } from 'react';

function Todo () {
    let [tasks,setTasks] = useState([]);
    let [newTask, setNewtask] = useState("");
    const handleInput = (e) => {
        setNewtask(e.target.value);
    }
    const add = () => {
        setTasks(t => [...t,newTask]);
        setNewtask("");
    }
    const del = (index) => {
        const updated = tasks.filter((_,i) => i!==index);
        setTasks(updated);
    }
    const display = tasks.map((task,index)=><li key={index}><span>{task}</span> <button onClick={()=>del(index)}>delete</button></li>)
    return(
        <div>
            <h1>ToDo application</h1>
            <input type="text" placeholder='Enter your task' value={newTask} onChange={handleInput}/>
            <button onClick={add}>add</button>
            <p>{display}</p>
        </div>
    )
}

export default Todo