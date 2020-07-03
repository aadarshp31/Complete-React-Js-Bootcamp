import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext"

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <div
            onClick={themeMode === "light" ? setThemeMode("dark") : setThemeMode("light")}
        >
           <span>{themeMode === "light" ? "Light Mode ON" : "Dark Mode ON"}</span> 
        </div>
    );
}

export default ThemeToggler;