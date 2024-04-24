import React,{useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e =>{
    e.preventDefault();
    if (value.trim() === ""){
      const error = document.getElementById("error")
      error.style.cssText = "display: flex; justify-content: center"
    }
    else{
      const error = document.getElementById("error")
      error.style.cssText = "display: hidden;"
     
      editTodo(value, task.id);

      setValue("")
    }
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
