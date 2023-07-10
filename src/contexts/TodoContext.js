"use client";

import { createContext, useReducer, useEffect, Reducer } from "react";
import book_db from "@/app/dbs/book_db";
import { todoReducer } from "../app/reducers/todoReducer";

export const TodoContext = createContext();

export default function TodoContextWrapper(props) {
  //const [books, setBooks] = useState(book_db)`

    const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  //third argument takes Initial State instead of Second One, which stands as a fallback for third one
  // it turns string in LocalStorage to a JSON, because we need to use in that format to process in javascript

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //  guarda en localStorage un elemento de key books, que contiene una version pasada a string del contenido actualizado del estado books (de bookReducer)

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
