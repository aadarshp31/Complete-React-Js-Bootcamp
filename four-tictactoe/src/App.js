import React from "react";
import "./App.css";
import Icon from "./components/Icon";

//React-toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Reactstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

const App = () => {
	return (
		<div className="App">
			<h1>TIC TAC TOE</h1>
			<Icon />
		</div>
	);
}

export default App;
