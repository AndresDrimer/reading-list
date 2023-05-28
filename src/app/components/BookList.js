"use client";
import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import BookDetails from "./BookDetails";
import { AlertContext } from "@/contexts/AlertContext";
import Alert from './Alert'

export default function BookList() {
  const { books } = useContext(BookContext);
  const { isAlertOn } = useContext(AlertContext)

  return books.length ? (   <>
        <div className="m-auto w-full drop-shadow-lg">
        
          <ul className=" flex flex-col space-y-4">
            {books.map(book => {
              return (
                <BookDetails book={book} key={book.id} />
             
                )
              })}
          </ul>
        </div></>
      ) : (
        <h1>No hay libros papal!!</h1>
      )
   
}
