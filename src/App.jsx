import { useState } from 'react'
import Navbar from './assets/components/navbar'
import Tasks from './assets/components/tasks'
import './App.css'

function App() {

  return (
    <>
    <div className='md:container h-screen w-auto space-y-2 bg-amber-50'>
    <Navbar />
    <div className='min-h-10/12 w-1/2 border-2 mx-auto  bg-violet-100 border-blue-800'>
    <Tasks />
    </div>
    </div>

    </>
  )
}

export default App
