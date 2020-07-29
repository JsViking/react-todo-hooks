import React from 'react'
import TodoInput from '../../components/ToDoInput/TodoInput'
import ToDoList from '../../components/ToDoList/ToDoList'
import ToDoState from '../../context/ToDoState'

export default () => {

  return (
    <div className="container">
      <ToDoState>
        <TodoInput />
        <ToDoList />
      </ToDoState>
    </div>
  )
}