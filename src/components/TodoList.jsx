import { useState } from "react";

export const TodoList = () => {

    const [tasks, setTasks] = useState(['isplauti indus', 'atsigerti kavos']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange (event) {
        console.log(event.target.value);
        setNewTask(event.target.value);
    };

    function addTask () {
        if (newTask.trim() === ''){
            return;
        };
        setTasks(t => [...t, newTask]);
    };

    function deleteTask (index) {
        const updatedTasks = tasks.filter((element, indx) => indx !== index );
        setTasks(updatedTasks);
    };

    function moveTaskUp (index) {
        const updatedTasks = [...tasks];
        if (index > 0) {
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
        };
    };

    function moveTaskDown (index) {
         const updatedTasks = [...tasks];
        if (index < updatedTasks.length - 1) {
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
        };
    };

    return (
    <>
        <h1>TO-DO-List</h1>
        <div>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>ADD</button>
        </div>
        <ul>
            {
                tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>⬆</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>⬇</button>
                </li>
                )
            }
        </ul>
    </>);
};

