import { nanoid } from "nanoid"

export const todoReducer = (state, action) => {
 switch(action.type){
    case "ADD_TODO":
        return [...state, {
            title: action.todo.title,
            details: action.todo.details,
            id: nanoid(),
            isChecked: false
        }]
    case "REMOVE_TODO":
        return state.filter(todo => todo.id!==action.id)
    case "CHECK_TODO":
        return state.map(todo => todo.id!==action.id ? todo : {...todo,  isChecked: true } ) 
        case "UNCHECK_TODO":
            return state.map(todo => todo.id!==action.id ? todo : {...todo,  isChecked: false } )     
    default:
        return state
        }
 }


