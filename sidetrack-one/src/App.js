import React from "react";

const Child = () => {
	return <h2>Child: </h2>;
};

const App = () => {
	return (
		<div>
			<h1>I am App</h1>
			<Child />
		</div>
	);
};

export default App;
