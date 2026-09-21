# 📝 Todo App

A simple Todo application built with **React.js**.

This project allows users to add, edit, delete, and update the status of their todos. It also includes a status filter to easily view completed or incomplete todos.

The app uses **Axios** to communicate with the backend API and **useReducer** to manage todo state.

## 🚀 Features

- Add a new todo
- View all todos
- Edit a todo
- Delete a todo
- Change todo status
- Filter todos by status
- Loading state while getting todos
- Responsive design for desktop, tablet, and mobile
- API communication using Axios
- State management using React `useReducer`

## 🛠️ Technologies Used

- React.js
- JavaScript
- Axios
- CSS
- React Hooks
  - `useState`
  - `useEffect`
  - `useReducer`

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   └── TodoCard.jsx
│
├── reducer/
│   └── Reducer.jsx
│
├── App.jsx
├── App.css
└── main.jsx

## How the App Works

The main application logic is handled inside App.jsx.

The app uses useReducer to manage the todo data.

The initial state looks like this:

    const initialState = {
      todos: [],
      filter: "All"
    };

There are two main values in the state:

- todos - stores all todo items
- filter - stores the selected status filter

## Axios API

Axios is used to communicate with the backend API.

The application uses the following API operations:

| Operation | Axios Method | API Endpoint |
|---|---|---|
| Get todos | GET | /UserTodos |
| Add todo | POST | /UserTodos |
| Update todo | PUT | /UserTodos/:id |
| Delete todo | DELETE | /UserTodos/:id |

## Get Todos

When the application starts, useEffect calls the API to get all todos.

    const response = await axios.get("/UserTodos");

The received data is then stored in the reducer:

    dispatch({
      type: "GET_TODOS",
      payload: response.data
    });

## Add Todo

A new todo is added using an Axios POST request.

    const response = await axios.post("/UserTodos", {
      todoName: todoData.name,
      todoDesc: todoData.desc,
      status: "Not Completed"
    });

After the API request is successful, the new todo is added to the local state.

    dispatch({
      type: "ADD_TODO",
      payload: response.data
    });

## Update Todo Status

Users can change a todo between:

- Not Completed
- Completed

The application updates the local state and then sends the change to the backend.

    await axios.put(`UserTodos/${todoData.todoId}`, {
      Status: todoData.todoStatus
    });

## Edit Todo

Users can edit the todo name and description.

The application sends the updated data using a PUT request.

    await axios.put(`UserTodos/${todoData.todoId}`, {
      todoName: todoData.newName,
      todoDesc: todoData.newDesc
    });

## Delete Todo

A todo can be deleted using the Delete button.

The application sends a DELETE request to the backend.

    await axios.delete(`UserTodos/${todoId}`);

After the request, the reducer removes the todo from the local state.

## Filtering Todos

The application has three filter options:

- All
- Not Completed
- Completed

The selected filter is stored in the reducer state.

    const [state, dispatch] = useReducer(Reducer, initialState);

The todos are filtered before they are passed to the Main component.

    const filteredTodos = state.todos.filter((todo) => {
      if (state.filter === "All") return true;
      return todo.status === state.filter;
    });

## Reducer

The reducer handles different actions from the application.

The main actions are:

    GET_TODOS
    ADD_TODO
    UPDATE_STATUS
    EDIT_TODO
    DELETE_TODO
    SET_FILTER

### GET_TODOS

Stores the todos received from the API.

### ADD_TODO

Adds a new todo to the existing todo list.

### UPDATE_STATUS

Changes the status of a todo.

### EDIT_TODO

Updates the name and description of a todo.

### DELETE_TODO

Removes a todo from the list.

### SET_FILTER

Changes the selected todo filter.

## Components

### App

App.jsx is the main component.

It:

- Gets todos from the API
- Adds todos
- Updates todo status
- Edits todos
- Deletes todos
- Filters todos
- Shows the loading message
- Passes data and functions to child components

### Header

The Header component is used to add a new todo.

It receives the dispatch and addTodos functions as props.

### Main

The Main component:

- Displays the todo list
- Shows the status filter
- Shows a welcome message when there are no todos
- Sends todo data to TodoCard

### TodoCard

The TodoCard component displays each todo.

It allows the user to:

- Edit the todo
- Update the todo status
- Delete the todo

## Loading State

The application uses useState to manage the loading state.

    const [isLoading, setIsLoading] = useState(false);

While todos are being loaded, the application shows:

    Loading...

After the API request is finished, the loading state becomes false.

## Responsive Design

The application is responsive and supports different screen sizes.

There are CSS media queries for:

- Desktop
- Tablet
- Mobile

For tablet screens:

    @media (max-width: 1024px) {
      /* Tablet styles */
    }

For mobile screens:

    @media (max-width: 600px) {
      /* Mobile styles */
    }

The layout changes automatically based on the screen size.

## API Requirements

This React application expects a backend API with the following endpoints:

    GET     /UserTodos
    POST    /UserTodos
    PUT     /UserTodos/:id
    DELETE  /UserTodos/:id

## Axios Installation

If Axios is not already installed, run:

    npm install axios

## Main React Concepts Used

This project is useful for learning several React concepts:

- Components
- Props
- State
- useState
- useEffect
- useReducer
- Event handling
- Conditional rendering
- List rendering with map()
- Filtering arrays
- API requests with Axios
- CRUD operations
- Responsive CSS

## CRUD Operations

This project follows the basic CRUD pattern:

    Create  → Add Todo
    Read    → Get Todos
    Update  → Edit Todo / Update Status
    Delete  → Delete Todo