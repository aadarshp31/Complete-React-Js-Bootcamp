import React, { useState } from "react";
import myContextPackage from "./context";

const Provider = (props) => {
	const [mission, setMission] = useState({
		mName: "Go to Russia",
		agent: "007",
		accept: false,
	});

	return (
		<myContextPackage.Provider
			value={{
				data: mission,
				isMissionAccepted: () => {
					setMission({ ...mission, accept: true });
				},
			}}
		>
			{props.children}
		</myContextPackage.Provider>
	);
};
