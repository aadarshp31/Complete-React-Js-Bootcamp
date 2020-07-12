import React, { useState } from "react";
import PackageContext from "./Context";

const Provider = (props) => {
	const [mission, setMission] = useState({
		mname: "Go to Russia",
		agent: "007",
		accept: "Not Accepted",
	});
	return (
		<PackageContext.Provider
			value={{
				mission,
				acceptMission: () => {
					setMission({ ...mission, accept: "Accept" });
				},
			}}
		>
			{props.children}
		</PackageContext.Provider>
	);
};

export default Provider;
