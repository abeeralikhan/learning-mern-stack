import { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component {
	render() {
		return (
			<div className="VendingMachine">
				<h1>Welcome to the vending machine!</h1>
				<nav className="VM-nav">
					<Link className="VM-link" to="/soda">
						Soda
					</Link>
					<Link className="VM-link" to="/snack">
						Snack
					</Link>
					<Link className="VM-link" to="/sardine">
						Sardine
					</Link>
				</nav>
			</div>
		);
	}
}

export default VendingMachine;
