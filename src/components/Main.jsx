// import React from 'react'

import TodoCard from "./TodoCard"

const Main = ({todos, filter, dispatch, updateStatus, editTodo, deleteTodo}) => {
  return (
    <div className="main">
        <div className="top-bar">
            <p>My Todos</p>
           
            <div>
                <label htmlFor="">Status Filter: </label>
                <select name="" id="" value={filter} 
                onChange={ (e) => {
                    dispatch({
                        type : "SET_FILTER",
                        payload : e.target.value
                    })
                }}
                className={filter === "All" ? "stat-all" : filter === "Completed" ? "stat-com" : "stat-notcom"} >
                    <option className="stat-all" value="All">All</option>
                    <option className="stat-notcom" value="Not Completed">Not Completed</option>
                    <option className="stat-com" value="Completed">Completed</option>
                </select>      
            </div> 

        </div>
        {
            todos.length === 0 ? 
            <h2>Welcome to Todo App!</h2> :

            <div className="conatiner-todo"> 
            {
            todos.map( (todo)=> (
            <TodoCard key={todo.id} todo={todo} 
            dispatch={dispatch} 
            updateStatus = {updateStatus}
            editTodo = {editTodo} 
            deleteTodo = {deleteTodo} />
            ))
            }             
        </div>
          
        }
          
    </div>
    
  )
}

export default Main
