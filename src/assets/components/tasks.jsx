import { useState, useEffect} from "react"
import React from 'react'


const Tasks = () => {
  const [todo, setTodo] = useState("Enter your task")
  const [todos, setTodos] = useState([])
  
  const handleAdd = ()=>{
    setTodos([...todos,{todo, completed:false}]) 
    console.log(todos)
  }
  const handleChange = (e)=>{
    setTodo(e.target.value)
  }
  const handleDelete = ()=>{
  
  }
  return (
    <div className='mt-4 px-3 min-w-11/12 h-[40%]'>
      <h2 className='text-2xl font-bold '>Add a Todo</h2>
      <div className='p-4 flex justify-between'>
      <input onChange={handleChange} className='bg-white w-3/4' type='text' value={todo} ></input>
      <button onClick={handleAdd} className='p-1 w-16 rounded-lg bg-violet-500 text-white font-bold cursor-pointer'>Add</button>
    </div>
    <hr></hr>
    </div>
    
  )
}

export default Tasks
