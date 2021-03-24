import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Create from './components/Create'
import Details from './components/Details'
import Edit from './components/Edit';


const App = (props: AppProps) => {

	return (
		<>
			<BrowserRouter>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/create'>
						<Create />
					</Route>
					<Route exact path='/details/:blogid'>
						<Details />
					</Route>
					<Route exact path='/details/:blogid/edit'>
						<Edit />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
};

interface AppProps {}


export default App;
