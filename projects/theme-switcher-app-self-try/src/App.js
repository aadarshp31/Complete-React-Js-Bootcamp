import React, { useContext, useState } from "react";
import "./App.css";
import ThemeContext from "./Context/ThemeContext";
import HeroSection from "./Components/HeroSection";
import ThemeToggler from "./Components/ThemeToggler";
import AppTheme from "./theme/AppTheme";
const App = () => {
	const theme = useContext(ThemeContext);
	const [themeMode, setThemeMode] = useState(theme); //Acting as a Global State

	const currentTheme = AppTheme[themeMode];
	return (
		<ThemeContext.Provider value={[themeMode, setThemeMode]}>
			<div
				style={{
					backgroundColor: currentTheme.backgroundColor,
					color: currentTheme.color,
					height: "100vh",
					width: "100vw",
					position: "absolute",
					top: "0",
					transition: "background-color 0.5s ease-in, color 0.5s ease-in"
				}}
			>
				<h1>Theme Switcher App</h1>
				<HeroSection>
					<ThemeToggler />
				</HeroSection>
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
