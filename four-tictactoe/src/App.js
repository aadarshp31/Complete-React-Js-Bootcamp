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
		if(
			itemArray[0] !== "empty" && itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2]
		) {
			setWinMessage(`${itemArray[0]} Wins!`)
		} else if(
			itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5]
		) {
			setWinMessage(`${itemArray[3]} Wins!`)
		} else if(
			itemArray[6] !== "empty" && itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8]
		) {
			setWinMessage(`${itemArray[6]} Wins!`)
		} else if(
			itemArray[0] !== "empty" && itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6]
		) {
			setWinMessage(`${itemArray[0]} Wins!`)
		} else if(
			itemArray[1] !== "empty" && itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7]
		) {
			setWinMessage(`${itemArray[1]} Wins!`)
		} else if(
			itemArray[2] !== "empty" && itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8]
		) {
			setWinMessage(`${itemArray[2]} Wins!`)
		} else if(
			itemArray[0] !== "empty" && itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8]
		) {
			setWinMessage(`${itemArray[0]} Wins!`)
		} else if(
			itemArray[2] !== "empty" && itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6]
		) {
			setWinMessage(`${itemArray[2]} Wins!`)
		}
	};
	const changeItem = (itemNumber) => {
		if (winMessage) {
			return toast(winMessage, { type: "success" });
		}
		if (itemArray[itemNumber] === "empty") {
			itemArray[itemNumber] = isCross ? "Cross" : "Circle";
			setIsCross(!isCross);
		} else {
			return toast("This position is already occupied!", { type: "error" });
		}
		checkIsWinner();
	};

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-right" />
			<Row>
				<Col md={6} className="offset-md-3">
					<h1 className="text-center mb-5">TicTacToe</h1>
					{winMessage ? (
						<div className="my-3 text-center text-primary">
							<h3>{winMessage}</h3>
							<Button color="success" block onClick={reloadGame}>
								Play Again
							</Button>
						</div>
					) : (
						<h3 className="text-center text-danger my-3">
							TURN: {isCross ? "Cross" : "Circle"}
						</h3>
					)}
					<div className="grid">
						{itemArray.map((item, index) => (
							<Card key={index} onClick={() => {changeItem(index)}}>
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
