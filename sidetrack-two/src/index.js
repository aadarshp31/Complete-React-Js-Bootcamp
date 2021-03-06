import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import User from "./components/User";
import Visit from "./components/Visit";
import NotFound from "./components/NotFound";

const routing = (
  <Router>
    <nav>
      <h5><Link to="/">Home</Link></h5>
      <h5><Link to="/user">User</Link></h5>
      <h5><Link to="/visit">Visit</Link></h5>
    </nav>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={Visit} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
