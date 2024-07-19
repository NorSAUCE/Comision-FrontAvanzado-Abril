import React, {useContext,useState} from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = ()=>{
    const { setTasks } = useContext(TaskContext);
    const [newTask, setNewTask] = useState('');
    
    const addTask = ()=>{
        if(newTask.trim()){
            setTasks(prevTasks=>[...prevTasks,newTask])
            setNewTask('')

        }
    }

    return(
        <div>
            <input type='text' value={newTask} onChange={e=>setNewTask(e.target.value)}
            placeholder='Agregar una nueva tarea'/>
            <button onClick={addTask}>Agregar Tarea</button>
        </div>
    )
}

export default AddTask;