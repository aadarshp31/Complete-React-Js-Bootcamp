import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const App = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Hello World!</h1>
			<button className="button">Click Me!</button>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
