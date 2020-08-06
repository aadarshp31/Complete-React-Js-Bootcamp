import React, { useState } from 'react';
import './App.css';

// Context
import { UserContext } from "./context/UserContext";

// Bootstrap css for reactstrap
import "bootstrap/dist/css/bootstrap.min.css";

// React Router
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Fireabase
import firebase from "firebase/app";
import "firebase/auth";

// Components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PageNotFound from "./pages/PageNotFound";
import Footer from './layout/Footer';
import Header from './layout/Header';

const App = () => {

  // Default state is set to null as firebase Auth requires it to be null to work
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}} >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
