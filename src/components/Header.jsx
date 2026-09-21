// import React from 'react'

import { useState } from "react";

const Header = ({addTodos}) => {

  const [todoName, setTodoName] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

 
  const submitTodo = ()=> {

    addTodos({
      name:todoName,
      desc:todoDesc
    })

    setTodoName("");
    setTodoDesc("");
  }

  return (
    <div className="header">
        <div className="header-input">
            <input type="text" 
            placeholder="Todo Name" 
            onChange={ (e) => (setTodoName(e.target.value))}
            value={todoName} />

            <input type="text" 
            placeholder="Todo Description"
            onChange={ (e) => (setTodoDesc(e.target.value))}
            value={todoDesc} />
        </div>

        <div className="header-btn">
            <button className="addTodo-btn" onClick={ submitTodo }>Add Todo</button> 
        </div>  
    </div>
  )
}

export default Header
