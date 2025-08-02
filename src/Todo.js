import React,{useState} from 'react';
import './index.css';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input === '') {
            return;
        }

        setTasks([...tasks, input]);
        setInput('');
    }

    const removetask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    }


    const moveup = (index) => {
    if (index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
        setTasks(updatedTasks);
    }
}

const movedown = (index) => {
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
        setTasks(updatedTasks);
    }
}





  return (
    <div className='todolist'>
        <h1 className='heading'>To do List</h1>
        <input type="text" className='input' value={input} placeholder='Add task' onChange={(e) => setInput(e.target.value)}/>
        <button className='add-btn' onClick={addTask}>Add</button>
        <ol className='task-list'>
            {tasks.map((task, index) => (
                <li className='task' key={index}>{task}
                <button className='delete-btn' onClick={() => removetask(index)}>Delete</button>
                <button className='move-btn' onClick={() => moveup(index)}>👆</button>
                <button className='move-btn' onClick={() => movedown(index)}>👇</button>
                </li>
            ))}

        </ol>
    
            
    </div>
  )
}

export default Todo