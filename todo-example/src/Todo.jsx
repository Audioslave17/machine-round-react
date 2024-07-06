import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState("");

    const handleInput = (e) => {
        setNewtask(e.target.value);
    }

    const addTask = () => {
        setTasks(t => [...t, newTask]);
        setNewtask("");
    }

    function deleteTask (index) {
        const update = tasks.filter((_,i) => i!==index);
        setTasks(update);
    }
    const list = tasks.map((task,index)=><li key={index}><span>{task}</span> <button onClick={()=>deleteTask(index)}>delete</button></li>)
    return(
        <div>
            <h1>TODO list</h1>
            <div>
                <input type="text" placeholder="Enter the task" value ={newTask} onChange={handleInput}/>
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                <ol>{list}</ol>
            </div>
        </div>
    )
}
export default Todo;