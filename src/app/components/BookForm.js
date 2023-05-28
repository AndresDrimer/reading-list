"use client"
import { useContext, useState } from 'react'
import { BookContext } from '../../contexts/BookContext'

export default function BookForm() {
  
    const { dispatch } = useContext(BookContext);
    const [newBookTitle, setNewBookTitle] = useState("")
    const [newBookAuthor, setNewBookAuthor] = useState("")

    function handleSubmit(e){
      e.preventDefault()
      dispatch({type: "ADD_BOOK", book: {title: newBookTitle, author: newBookAuthor}})
      setNewBookTitle("")
      setNewBookAuthor("")
    }

    console.log(newBookTitle, newBookAuthor)
  return (
    <section className='mt-10 text-center font-bold'>
    <h1>Add new book</h1>
   <form className='mt-4 flex flex-col space-y-4 px-2 text-left font-normal max-w-md m-auto' onSubmit={handleSubmit}>
   <label>Title: 
    <input type="text" value={newBookTitle} name="title" onChange={(e) => setNewBookTitle(e.target.value)} className='border-2 rounded w-full text-gray-900'/></label>

    <label>Author: 
    <input type="text" value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} name="author" className='border-2 rounded w-full text-gray-900'/></label>
    <button className='bg-blue-800 rounded text-white px-4'>Send</button>
   </form>
   </section>
  )
}
