"use client";
import { Fragment, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoDetails from "./TodoDetails";




export default function TodoList() {
  const { todos } = useContext(TodoContext);

  console.log("esto:", todos)
  return todos.length ? (   <Fragment>
        <div className="m-auto w-full h-auto drop-shadow-lg">
        
          <ul className=" flex flex-col space-y-4 justify-center ">
            {todos.map(todo => {
              return (
                <TodoDetails todo={todo} key={todo.id} />
             
                )
              })}
          </ul>
        </div></Fragment>
      ) : (
        <h1>No todos to show!!</h1>
      )
   
}
