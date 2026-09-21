// import React from 'react'

import { useState } from "react"

const TodoCard = ({todo, updateStatus, editTodo, deleteTodo}) => {

  const [isEdit, setIsedit] = useState(false);
  const [todoName, setTodoName] = useState(todo.todoName);
  const [todoDesc, setTodoDesc] = useState(todo.todoDesc);

  
  const handleUpdate = () => {
    setIsedit(false);

    editTodo({
      newName : todoName,
      newDesc : todoDesc,
      todoId : todo.id
    })
  }

  return (
    <div className="conatiner-card">
        {
          isEdit ? ( 
            <>
              <h5>Name: </h5>
              <input type="text" value={todoName} 
              onChange={ (e) => (setTodoName(e.target.value))}/>
              <h5>Description: </h5>
              <input type="text" value={todoDesc} 
              onChange={ (e) => (setTodoDesc(e.target.value))} />
            </>
          ) : (
            <>
              <h5>Name: <span>{todo.todoName}</span></h5>
              <h5>Description: <span>{todo.todoDesc}</span></h5>            
            </>
          )
        }

        <div className="status-bar">
          <label htmlFor="">Status: </label>
          <select value={todo.status} 
          className={todo.status === "Completed" ? "stat-comTodo" : "stat-notcomTodo"}
          onChange={ (e) => {
            updateStatus({
              todoId : todo.id,
              todoStatus: e.target.value
            })

          }}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>   
          {
            isEdit && <button onClick={handleUpdate} className="update-btn">Update</button>
          }
        </div>
        <div className="card-btn">
          <button onClick={ () => (setIsedit(true))} className="edit-btn">Edit</button>
          <button onClick={ () => {
            deleteTodo(todo.id)
          }} className="delete-btn">Delete</button>
        </div>      
    </div>
  )
}

export default TodoCard
