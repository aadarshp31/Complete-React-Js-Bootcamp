import React, { useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import Header from "./Components/Header";
import ThemeContext from "./Context/ThemeContext";

function App() {
	const themeHook = useState("light");
	return (
		<ThemeContext.Provider value={themeHook}>
			<div>
				<Header />
				<HeroSection />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
