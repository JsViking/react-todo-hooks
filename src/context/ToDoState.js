import React, { useReducer, useEffect } from 'react'
import ToDoContext from './ToDoContext'
import toDoReducer from './toDoReducer'

export default ({ children }) => {
  const [toDoState, dispatch] = useReducer(toDoReducer, JSON.parse(localStorage.getItem('todo')) || [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(toDoState))
  }, [toDoState])

  const addToDo = (title) => {
    dispatch({
      type: 'ADD',
      payload: title
    })
  }

  const removeToDo = (id) => {
    dispatch({
      type: 'REMOVE',
      id
    })
  }

  const toggle = (id, checked) => {
    dispatch({
      type: 'TOGGLE',
      id,
      checked
    })
  }
  
  return (
    <ToDoContext.Provider value={{
      addToDo, 
      toDoState,
      removeToDo,
      toggle
    }}>
      {children}
    </ToDoContext.Provider>
  )
}
