import React, { useContext, useState, Fragment } from "react";
import "./App.css";
import ThemeContext from "./Context/ThemeContext";
import HeroSection from "./Components/HeroSection";
import ThemeToggler from "./Components/ThemeToggler";
const App = () => {
	const theme = useContext(ThemeContext);
	const [themeMode, setThemeMode] = useState(theme); //Acting as a Global State
	return (
		<ThemeContext.Provider value={[themeMode, setThemeMode]}>
			<Fragment>
				<h1>Theme Switcher App</h1>
				<HeroSection>
					<ThemeToggler />
				</HeroSection>
			</Fragment>
		</ThemeContext.Provider>
	);
};

export default App;
