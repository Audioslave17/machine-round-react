import { useState } from "react";

function Todo() {what
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState("");
    const handleInput = (e) => {
        setNewtask(e.target.value);
    }
    const add = () => {
        setTasks(t => [...t,newTask]);
        setNewtask("");
    }
    const del = (index) => {
        const update = tasks.filter((_,i)=> i!==index);
        setTasks(update);
    }
    const items = tasks.map((task,index)=><li key={index}><span>{task}</span> <button onClick={()=>del(index)}>delete</button></li>)
    return(
        <div>
            <h1>TODO</h1>
            <div>
                <input type="text" placeholder="Enter the task" value={newTask} onChange={handleInput}/>
                <button onClick={add}>add</button>
            </div>
            <div>
                <ol>{items}</ol>
            </div>
        </div>
    )
}
export default Todo;