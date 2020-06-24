import React, {useState} from "react";
import "./App.css";
import Icon from "./components/Icon";

//React-toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Reactstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

//TicTacToe Grid
const itemArray = new Array(9).fill("empty");

const App = () => {
	//React Hooks
	const [isCross, setIsCross] = useState(false);
	const [winMessage, setWinMessage] = useState("");

	//Methods
	const reloadGame = () => {
		//
	}
	const checkIsWinner = () => {
		//
	}
	const changeItem = () => {
		//
	}


	return (
		<div className="App">
			<h1>TIC TAC TOE</h1>
			<Icon />
		</div>
	);
};

export default App;
