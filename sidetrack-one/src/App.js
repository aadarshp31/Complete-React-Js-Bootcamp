import React, { Fragment } from "react";
import Provider from "./provider";
import myContextPackage from "./context";

const App = () => {
  const Agents = () => {
    return(
      <AgentOne />
    )
  }
  const AgentOne = () => {
    return(
      <AgentTwo />
    )
  }
  const AgentTwo = () => {
    return(
      <AgentBond />
    )
  }
  const AgentBond = () => {
    return(
      <myContextPackage.Consumer>
        {(context) => (
          <Fragment>
						<h1>Agent Information</h1>
            <p>Name: {context.data.mName}</p>
            <p>Agent: {context.data.agent}</p>
            <p>Accept: {context.data.accept}</p>
            <button onClick={context.acceptMission}>Accept Mission</button>
					</Fragment>
        )}
      </myContextPackage.Consumer>
    )
  }
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
