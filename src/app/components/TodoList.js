"use client";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoDetails from "./TodoDetails";



export default function TodoList() {
  const { todos } = useContext(TodoContext);


  return todos.length ? (   <>
        <div className="m-auto w-full drop-shadow-lg">
        
          <ul className=" flex flex-col space-y-4">
            {todos.map(todo => {
              return (
                <TodoDetails todo={todo} key={todo.id} />
             
                )
              })}
          </ul>
        </div></>
      ) : (
        <h1>No hay libros papal!!</h1>
      )
   
}
