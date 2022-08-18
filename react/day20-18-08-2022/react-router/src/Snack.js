import { Component } from 'react';
import { Link } from 'react-router-dom';

class Snack extends Component {
	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<h2>Get yourself some snacks!</h2>
				<img src="./images/snack-img.png" alt="snack image" />
			</div>
		);
	}
}

export default Snack;
