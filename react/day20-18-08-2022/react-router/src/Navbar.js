import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		const activeLink = ({ isActive }) => (isActive ? 'is-active Navbar-link' : 'Navbar-link');

		return (
			<nav className="Navbar">
				<NavLink className={activeLink} to="/">
					Home
				</NavLink>
				<NavLink className={activeLink} to="/soda">
					Soda
				</NavLink>
				<NavLink className={activeLink} to="/snack">
					Snack
				</NavLink>
				<NavLink className={activeLink} to="/sardine">
					Sardine
				</NavLink>
			</nav>
		);
	}
}

export default Navbar;
