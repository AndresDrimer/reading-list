"use client"
import { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext'
export default function Navbar() {
    const { books } = useContext(BookContext)
  return (
    <div className=' text-center text-white bg-slate-700/50 p-4'>
      <h1 className='text-3xl drop-sahdow-lg'>Libros CDLC</h1>
      <p className='text-xs mt-2'> {books.length} books listed</p>
    </div>
  )
}
