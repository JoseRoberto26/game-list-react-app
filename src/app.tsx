import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './shared/Footer';
import { Home } from './containers/Home';

function App() {
	return (
		<>
		<main className="main-container">
			<Router>
				<Switch>
					<Route exact path="/" >
						<Home />
					</Route>
				</Switch>
			</Router>
		</main>
		<Footer></Footer>
		</>
	);
}

export default App;
