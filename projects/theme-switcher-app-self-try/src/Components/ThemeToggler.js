import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../theme/AppTheme";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const currentTheme = AppTheme[themeMode];
	return (
		<button
			onClick={() => {
				setThemeMode(themeMode === "light" ? "dark" : "light");
			}}
            style={{...currentTheme.button}}
		>
			<span>
				{themeMode === "light" ? "Turn Off Lights" : "Turn On Lights"}
			</span>
		</button>
	);
};

export default ThemeToggler;
