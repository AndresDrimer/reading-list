"use client"
import { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
export default function Navbar() {
    const { todos } = useContext(TodoContext)
  return (
    <div className=' text-center text-white bg-slate-700/50 p-4'>
      <h1 className='text-5xl drop-shadow-lg'>Next.js TODO</h1>
      <h3 className='text-md drop-shadow-lg'>using Context, Reducer and localStorage</h3>
      <p className='text-xs mt-2 border-2 border-dashed p-2 mx-4'> {todos.length} todos listed</p>
    </div>
  )
}
