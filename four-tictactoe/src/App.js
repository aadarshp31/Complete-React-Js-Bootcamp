import React, { useState } from "react";
import Icon from "./components/Icon";

//Stylesheets
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

//React-toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Reactstrap imports
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

//TicTacToe Grid
const itemArray = new Array(9).fill("empty");

const App = () => {
	//React Hooks
	const [isCross, setIsCross] = useState(false);
	const [winMessage, setWinMessage] = useState("");

	//Methods
	const reloadGame = () => {
		setIsCross(false);
		setWinMessage("");
		itemArray.fill("empty", 0, 9);
	};
	const checkIsWinner = () => {
		//
	};
	const changeItem = (itemNumber) => {
		if (winMessage) {
			return toast(winMessage, { type: "success" });
		}
		if (itemArray[itemNumber] === "empty") {
			itemArray[itemNumber] = isCross ? "cross" : "circle";
			setIsCross(!isCross);
		} else {
			return toast("This position is already occupied!", { type: "error" });
		}
		checkIsWinner();
	};

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					<h1 className="text-center mb-5">TicTacToe</h1>
					{winMessage ? (
						<div className="my-2 text-center text-primary">
							<h1>{winMessage}</h1>
							<Button color="success" block onClick={reloadGame}>
								Play Again
							</Button>
						</div>
					) : (
						<h3 className="text-center text-danger">
							TURN: {isCross ? "Cross" : "Circle"}
						</h3>
					)}
					<div className="grid">
						{itemArray.map((item, index) => (
							<Card key={index}>
								<CardBody className="box">
									<Icon name={item} />
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
