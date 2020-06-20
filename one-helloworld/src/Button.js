import React from "react";

const Button = ({ title = "Button" }) => {
	return (
		<div>
			<button className="button">{title}</button>
		</div>
	);
};

export default Button;
