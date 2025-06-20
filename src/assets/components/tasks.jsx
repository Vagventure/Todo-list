import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import React from 'react'



const Tasks = () => {
  const [todo, setTodo] = useState("Enter your task")
  const [todos, setTodos] = useState([])
useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, completed: false }])
    saveToLS()
    console.log(todos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newtodos = [...todos]
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    setTodos(newtodos)
    saveToLS()
    // console.log(id)
    // console.log(index)

  }

  const handleDelete = (e, id) => {
    let NewTodos = todos.filter(item => {
      return item.id !== id

    })
    setTodos(NewTodos)
    saveToLS()

  }

  const handleEdit = (e, id, todo) => {
    let NewTodos = todos.filter(item => {
      return item.id !== id

    })
    setTodos(NewTodos)
    setTodo(todo)
    saveToLS()

  }
  return (
    <div className='mt-4 px-3 min-w-11/12 h-[40%]'>
      <h2 className='text-2xl font-bold '>Add a Todo</h2>
      <div className='p-4 flex justify-between'>
        <input onChange={handleChange} className='bg-white w-3/4' type='text' value={todo} ></input>
        <button onClick={handleAdd} className='p-1 w-16 rounded-lg bg-violet-500 text-white font-bold cursor-pointer'>Add</button>
      </div>
      <hr></hr>
      <h2 className='text-2xl font-bold'>Your Todos</h2>
      <div className="todos space-y-2">
        {todos.length === 0 && <div>No current tasks</div>}
        {todos.map(item => {
          return <div key={item.id} className="todo flex w-1/2 justify-between items-center">
            <input name={item.id} onChange={handleCheckBox} type='checkbox' value={item.isCompleted}></input>
            <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
            <div className="buttons space-x-1.5">
              <button onClick={(e) => { handleEdit(e, item.id, item.todo) }} className="p-0.5 w-10 rounded-lg bg-violet-500 text-white font-bold cursor-pointer">Edit</button>
              <button onClick={(e) => { handleDelete(e, item.id) }} className="p-0.5 w-auto rounded-lg bg-violet-500 text-white font-bold cursor-pointer">Delete</button>
            </div>
          </div>
        })}
      </div>

    </div>


  )
}

export default Tasks
