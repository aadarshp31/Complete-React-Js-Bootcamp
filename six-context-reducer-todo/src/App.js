import React, { useReducer } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from './components/Form';
import Todos from './components/Todos';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [{todoString: "qweqwe", id: "000001"},{todoString: "qweqwe", id: "000002"},{todoString: "qweqwe", id: "000003"},{todoString: "qweqwe", id: "000004"}]);
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h3>TODO app with Context API and Reducer</h3>
        <TodoForm />
        <Todos />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
