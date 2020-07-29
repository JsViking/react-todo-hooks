import React, { useState, useContext } from 'react'
import ToDoContext from '../../context/ToDoContext'

export default () => {
  const [toDotitle, setToDoTitle] = useState('')
  const { addToDo } = useContext(ToDoContext)

  const addToDoInner = () => {
    addToDo(toDotitle)
    setToDoTitle('')
  }
  return (
    <div className="input-field mt-4">
      <input
        value={toDotitle}
        type="text"
        onChange={event => setToDoTitle(event.target.value)}
      />
      <button 
        className="btn btn-primary ml-2"
        onClick={addToDoInner}
        disabled={!toDotitle}>
          ADD TO DO
        </button>
    </div>
  )
}