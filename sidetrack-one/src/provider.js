import React, { useState } from "react";
import myContextPackage from "./context";

const Provider = (props) => {
	const [mission, setMission] = useState({
		mName: "Go to Russia",
		agent: "007",
		accept: "NO",
	});

	return (
		<myContextPackage.Provider
			value={{
				data: mission,
				acceptMission: () => {
					setMission({ ...mission, accept: "ACCEPTED" });
				},
			}}
		>
			{props.children}
		</myContextPackage.Provider>
	);
};

export default Provider;