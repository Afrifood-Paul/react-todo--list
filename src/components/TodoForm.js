
import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    if (value.trim() === ""){
      const error = document.getElementById("error")
      error.style.cssText = "display: flex; justify-content: center"
    }
    else{
      addTodo(value);
      const error = document.getElementById("error")
      error.style.cssText = "display: hidden;"
      setValue("")
    }
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='what is the task today?'
        onChange={(e) => setValue(e.target.value)} />
        
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )  
}
