import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="main-container">
			<Router>
				<Switch>
					<Route exact path="/" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
