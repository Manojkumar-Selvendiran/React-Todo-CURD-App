// import React from 'react'

import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import { useEffect, useReducer, useState} from "react";
import Reducer from "./reducer/Reducer";
import axios from "axios";

const App = () => {

  const initialState = {
    todos: [],
    filter: "All"
  }

  const [state, dispatch] = useReducer(Reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  console.log(state);

  useEffect( () => {
    const getTodos = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/UserTodos");
      console.log(response.data);

      dispatch({
        type: "GET_TODOS",
        payload : response.data
      })
      
    } catch (error) {
      console.log(error);      
    }
    finally{
      setIsLoading(false);
    }
  }
    getTodos();
  },[])
  

  const addTodos = async (todoData) => {
    try {
      const response = await axios.post("/UserTodos", {
        todoName: todoData.name,
        todoDesc: todoData.desc,
        status: "Not Completed"
      });      

      dispatch({
        type : "ADD_TODO",
        payload : response.data
      })

    } catch (error) {
      console.log(error)
    }
  }

  const updateStatus = async (todoData) => {
    try {

      dispatch({
        type : "UPDATE_STATUS",
        payload : todoData
      })

      await axios.put(`UserTodos/${todoData.todoId}`,
      {
        Status: todoData.todoStatus
      }
      );
      
    } catch (error) {
      console.log(error);      
    }
  }

  const editTodo = async (todoData) => {
    try {

      dispatch({
        type : "EDIT_TODO",
        payload : todoData
      })
      await axios.put(`UserTodos/${todoData.todoId}`,
      {
        todoName : todoData.newName,
        todoDesc : todoData.newDesc
      }
      );
    } catch (error) {
      console.log(error);      
    }
  }

  const deleteTodo = async (todoId) =>{
    try {
      dispatch({
        type : "DELETE_TODO",
        payload : todoId
      })

      await axios.delete(`UserTodos/${todoId}`)
      
    } catch (error) {
      console.log(error);      
    }
  }



  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "All") return true;
    return todo.status === state.filter;
  });


  return (
    <div className="container">
      <h1 className="title">My Todo</h1>
      <Header dispatch={dispatch} addTodos={addTodos}/>
      {
        isLoading ? (<p>Loading...</p>) : (
          <Main
          todos = {filteredTodos}
          filter = {state.filter}
          dispatch = {dispatch}
          updateStatus = {updateStatus}
          editTodo = {editTodo}
          deleteTodo = {deleteTodo}
        />) 
      }
           
    </div>
  );
};

export default App;
