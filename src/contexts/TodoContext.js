"use client"
import React, { createContext, useReducer, useEffect } from 'react'

import book_db from '@/app/dbs/book_db';
import { todoReducer } from '../app/reducers/todoReducer'
export const TodoContext = createContext();

export default function TodoContextWrapper(props) {
    //const [books, setBooks] = useState(book_db)`
    
const [todos, dispatch] = useReducer(todoReducer, [], ()=>{
  const localData = localStorage.getItem("todos");
  return localData ? JSON.parse(localData) : [] });
//el tercer argumento es initial State en lugar del segundo, el segundo seria un fallback de este tercero
// convierte el string que hay guardado en localStorage en un objeto javascript al traerlo, para que lo podamos usar como tal

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
},[todos]) //guarda en localStorage un elemento de key books, que contiene una version pasada a string del contenido actualizado del estado books (de bookReducer)

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
        {props.children}
    </TodoContext.Provider>
  )
}

