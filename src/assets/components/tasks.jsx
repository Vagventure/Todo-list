import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { VscEdit } from "react-icons/vsc";
import { FaTrashAlt } from "react-icons/fa";

import React from 'react'



const Tasks = () => {
  const [todo, setTodo] = useState("Enter your task")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(false)

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

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
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
    <div className='mt-4 px-3 min-w-10/12 h-[40%]'>
      <div className="md:space-y-1.5">
      <h1 className='text-[22px] md:text-2xl text-center font-bold '>Manage your todos at one place</h1>
      <h3 className='mt-1 md:text-lg font-bold '>Add a Todo</h3>
      <div className='p-4 flex justify-between'>
        <input onChange={handleChange} className='bg-white min-w-5/6 rounded-4xl p-1 md:p-3' type='text' value={todo} ></input>
        <button onClick={handleAdd} className='p-1 w-16 rounded-4xl bg-violet-500 text-white font-bold cursor-pointer'>Add</button>
      </div>
      <hr></hr>
      <div className="flex space-x-1.5">
      <input onChange={toggleFinished} type='checkbox' checked={showFinished}></input><p>Show Finished</p>
      </div>
      </div>
      <h3 className='md:text-2xl font-bold'>Your Todos</h3>
      <div className="todos space-y-2 w-full">
        {todos.length === 0 && <div>No current tasks</div>}
        {todos.map(item => {
          return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-full md:w-1/2 justify-between items-center">
            <input name={item.id} onChange={handleCheckBox} type='checkbox' checked={item.isCompleted}></input>
            <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
            <div className="buttons space-x-1.5">
              <button onClick={(e) => { handleEdit(e, item.id, item.todo) }} className="p-0.5 md:p-1.5 w-auto rounded-lg bg-violet-500 text-white font-bold cursor-pointer"><VscEdit /></button>
              <button onClick={(e) => { handleDelete(e, item.id) }} className="p-0.5 md:p-1.5 w-auto rounded-lg bg-violet-500 text-white font-bold cursor-pointer"><FaTrashAlt /></button>
            </div>
          </div>
        })}
      </div>

    </div>


  )
}

export default Tasks
