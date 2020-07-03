import React, { useState } from "react";

const Child = (props) => {
	return <h2>Child: {props.brand}</h2>;
};

const GrandChild = (props) => {
  return(
    <div>
      <h1>GrandChild: </h1>
			<Child brand={props.brand} />
    </div>
  );
}

const App = () => {
	const [brandname] = useState("Amazon");
	return (
		<div>
			<h2>I am App</h2>
      <GrandChild brand={brandname} />
		</div>
	);
};

export default App;
