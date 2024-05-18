import React, {useState} from "react";

function TodoList(){
    const [todos,setTodos]=useState([])
    const [inputValue,setInputValue] =useState("")

    const addTodo = ()=>{
        if(inputValue.trim()!==''){
            setTodos([...todos,inputValue])
            console.log(todos);
            setInputValue("")
        }
    }


    const removeTodo = (index) =>{
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos)
    }
    return (
        <div>
          <h1>Lista de Tareas</h1>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button onClick={addTodo}>Agregar Tarea</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => removeTodo(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      );

}
export default TodoList;