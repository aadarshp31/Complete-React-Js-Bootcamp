import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Bootstrap css for reactstrap
import "bootstrap/dist/css/bootstrap.min.css";

// React Router
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/reactToastify.min.css";

// Fireabase
import firebase from "firebase/app";
import "firebase/auth";

// Components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PageNotFound from "./pages/PageNotFound";

const App = () => {

  // Default state is set to null as firebase Auth requires it to be null to work
  const [user, SetUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
