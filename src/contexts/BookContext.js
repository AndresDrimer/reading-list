"use client"
import React, { createContext, useReducer } from 'react'

import book_db from '@/app/dbs/book_db';
import { bookReducer } from '../app/reducers/bookReducer'
export const BookContext = createContext();

export default function BookContextWrapper(props) {
    //const [books, setBooks] = useState(book_db)
const [books, dispatch] = useReducer(bookReducer, [])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
        {props.children}
    </BookContext.Provider>
  )
}

