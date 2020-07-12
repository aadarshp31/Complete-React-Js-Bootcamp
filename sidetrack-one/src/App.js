import React, { Fragment } from "react";
import Context from "./contexts/Context";
import Provider from "./contexts/Provider";

const App = () => {
	const Agents = () => {
		return <AgentOne />;
	};

	const AgentOne = () => {
		return <AgentTwo />;
	};

	const AgentTwo = () => {
		return <AgentBond />;
	};
	const AgentBond = () => {
		return (
			<Context.Consumer>
				{(contextValue) => (
					<Fragment>
						<h3>Mission Information</h3>
						<p>Mission Name: {contextValue.mission.mname}</p>
						<p>Mission Agent: {contextValue.mission.agent}</p>
						<p>Accept Mission: {contextValue.mission.accept}</p>
            <button onClick={contextValue.acceptMission}>Accept Misson</button>
					</Fragment>
				)}
			</Context.Consumer>
		);
	};

	return (
		<div>
			<h1>Context API</h1>
			<Provider>
				<Agents />
			</Provider>
		</div>
	);
};

export default App;
