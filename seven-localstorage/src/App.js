import React, { useState, useEffect } from 'react';
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }
  }, [])

  return (
    <Container type="fluid">
      <h3>TODO app with Context API and Reducer</h3>
        <TodoForm addTodos={addTodos}/>
        <Todos todos={todos} markComplete={markComplete} />
    </Container>
  );
}

export default App;
