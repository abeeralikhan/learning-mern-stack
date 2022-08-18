import { Component } from 'react';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
			</div>
		);
	}
}

export default App;
