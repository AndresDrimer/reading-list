"use client"
import BookList from "./components/BookList"
import BookForm from "./components/BookForm"
import Navbar from "./components/Navbar"
import Alert from './components/Alert'
import { AlertContext } from "@/contexts/AlertContext"
import { useContext } from "react"
import { BookContext } from "@/contexts/BookContext"

export default function Home() {
  const { isAlertOn, toggleAlert } = useContext(AlertContext)
  const { removeBook, books } = useContext(BookContext);
  return (
    <main className="bg-gradient-to-r from-violet-700 to-violet-500 mx-auto p-6 text-white"> 
   
    <BookList />  
     <BookForm />
   
     
    </main>
  )
}
