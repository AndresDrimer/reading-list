"use client"
import { useContext } from 'react'

import { TodoContext } from '@/contexts/TodoContext'

export default function Alert({id}) {
 
    //const { removeBook } = useContext(TodoContext)
console.log(id)

  return (
    <div className="flex flex-col items-center justify-center sticky top-0 right-0 z-10 w-full bg-red-800 p-4">
      <h1>Seguro que querés borrar este libro?</h1>
      <div className=' w-full flex justify-around mt-10 '><button className='btn' onClick={()=> removeBook(id)}>sí</button>
      <button className='btn' onClick={()=> toggleAlert()}>no</button></div>
    </div>
  )
}
