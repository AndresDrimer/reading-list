"use client"
import React, { createContext, useState } from 'react'
import { nanoid } from "nanoid"
import book_db from '@/app/dbs/book_db';

export const BookContext = createContext();

export default function BookContextWrapper(props) {
    const [books, setBooks] = useState(book_db)


    const addBook = (title, author) => {
      setBooks([...books, { title, author }])
    }
    const removeBook = (id) => {
      setBooks(books.filter(it=> it.id !== id))
    }
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
        {props.children}
    </BookContext.Provider>
  )
}

