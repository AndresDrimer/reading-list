"use client"
import React, { createContext, useState } from 'react'


export const AlertContext = createContext();

export default function ALertContextWrapper(props) {
    const [isAlertOn, setIsAlertOn] = useState(false)

    const toggleAlert = () => {
      setIsAlertOn(prev=>!prev)
    }
   
  return (
    <AlertContext.Provider value={{ isAlertOn, toggleAlert }}>
        {props.children}
    </AlertContext.Provider>
  )
}
