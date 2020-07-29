import React, { useContext } from 'react'
import ToDoContext from '../../context/ToDoContext'

export default ({finshed, title, id}) => {
  const { removeToDo, toggle } = useContext(ToDoContext)

  return (
    <li className="list-group-item d-flex justify-content-between pl-5">
      <input
        onChange={(event => toggle(id, event.target.checked))}
        type="checkbox" 
        className="form-check-input"
        style={{}}
        checked={finshed}></input>
      <span style={{ textDecoration: finshed ? 'line-through' : 'none'}}>{title}</span>
      <button
        onClick={() => removeToDo(id)} 
        type="button" 
        className="btn btn-sm btn-outline-danger">Удалить</button>
    </li>
  )
}