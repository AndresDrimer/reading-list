import { nanoid } from "nanoid"

export const todoReducer = (state, action) => {
 switch(action.type){
    case "ADD_TODO":
        return [...state, {
            title: action.todo.title,
            author: action.todo.author,
            id: nanoid()
        }]
    case "REMOVE_TODO":
        return state.filter(todo => todo.id!==action.id)
    default:
        return state
 }
}

