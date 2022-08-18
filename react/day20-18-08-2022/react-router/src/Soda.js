import { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component {
	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<h2>Get yourself some soda!</h2>
				<img src="./images/soda-img.jpg" alt="soda image" />
			</div>
		);
	}
}

export default Soda;
