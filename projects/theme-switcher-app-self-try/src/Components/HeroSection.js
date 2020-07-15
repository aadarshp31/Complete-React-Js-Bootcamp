import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../theme/AppTheme";

const HeroSection = (props) => {
	const [themeMode] = useContext(ThemeContext);
	const currentTheme = AppTheme[themeMode];
	return (
		<div>
			<h3
				style={
					themeMode === "dark" ? { color: "#EA7773" } : { color: "#000000" }
				}
			>
				Context API Theme Toggler
			</h3>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sequi
				sint vel voluptates, nisi cupiditate expedita ex nesciunt officia
				pariatur laudantium maiores explicabo a neque earum excepturi inventore
				modi suscipit?
			</p>
			<button style={{...currentTheme.button}}>Click me</button>
			{props.children}
		</div>
	);
};

export default HeroSection;
