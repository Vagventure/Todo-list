import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex h-auto w-auto bg-violet-600 text-white justify-between text-2xl font-bold p-3'>
      <div>ITodo</div>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navbar
