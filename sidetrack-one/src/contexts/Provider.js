import React, { useState } from "react";
import PackageContext from "./Context";

const provider = (props) => {
	const [mission, setMission] = useState({
		mname: "Go to Russia",
		agent: 007,
		accept: false,
	});
	return (
		<PackageContext.Provider
			value={[
				mission,
				(acceptMission = () => {
					setMission({ ...mission, accept: true });
				}),
			]}
		>
			{props.children}
		</PackageContext.Provider>
	);
};
