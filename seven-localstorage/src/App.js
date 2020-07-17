import React, { useState, useEffect } from 'react';
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  //Load todos from localstorage
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({localStorage})
    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }
  }, [])

  //Method to add todos to the 'todos' state
  const addTodos = todo => {
    setTodos([...todos, todo]);
  }

  //Save the todos to the localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  //Method to mark todos as complete
  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Container type="fluid">
      <h3>TODO app with Context API and Reducer</h3>
        <TodoForm addTodos={addTodos}/>
        <Todos todos={todos} markComplete={markComplete} />
    </Container>
  );
}

export default App;
