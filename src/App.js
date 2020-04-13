import React from 'react';
import './App.css';
import AddTodo from './containers/AddToDo';
import ToDoList from './containers/ToDoList';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ToDoList />
    </div>
  );
}

export default App;
