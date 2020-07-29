import React, { useContext } from 'react'
import ToDoContext from '../../context/ToDoContext'
import ToDoItem from '../ToDoItem/ToDoItem'

export default () => {
  const { toDoState } = useContext(ToDoContext)

  return (
    <ul className="list-group mt-5">
      { toDoState.map(item => (
        <ToDoItem 
        key={item.id}
        {...item}/>
      )) }
    </ul>
  )
}