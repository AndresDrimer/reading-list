"use client"
import { useContext, useState } from 'react'
import { TodoContext } from '../../contexts/TodoContext'

export default function TodoForm() {
  
    const { dispatch } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState("")
    const [newTodoDetail, setNewTodoDetail] = useState("")

    function handleSubmit(e){
      e.preventDefault()
      dispatch({type: "ADD_TODO", todo: {title: newTodo, author: newTodoDetail}})
      setNewTodo("")
      setNewTodoDetail("")
    }

   
  return (
    <section className='mt-10 text-center font-bold'>
    <h1>Add new Todo</h1>
   <form className='mt-4 flex flex-col space-y-4 px-2 text-left font-normal max-w-md m-auto' onSubmit={handleSubmit}>
   <label>Title: 
    <input type="text" value={newTodo} name="title" onChange={(e) => setNewTodo(e.target.value)} className='border-2 rounded w-full text-gray-900'/></label>

    <label>Details: 
    <input type="text" value={newTodoDetail} onChange={(e) => setNewTodoDetail(e.target.value)} name="details" className='border-2 rounded w-full text-gray-900'/></label>
    <button className='bg-blue-800 rounded text-white px-4'>Send</button>
   </form>
   </section>
  )
}
