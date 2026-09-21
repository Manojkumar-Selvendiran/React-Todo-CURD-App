// import React from 'react'

const Reducer = (state, action) => {
  switch (action.type) {

    case "GET_TODOS":
      return {
        ...state, 
        todos : action.payload
      }

    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      };

    case "UPDATE_STATUS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todoId
            ? { ...todo, status: action.payload.todoStatus }
            : todo
        )
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => action.payload !== todo.id),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todoId
            ? { ...todo, todoName: action.payload.newName, todoDesc: action.payload.newDesc }
            : todo,
        )
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state;
  }
};

export default Reducer;
