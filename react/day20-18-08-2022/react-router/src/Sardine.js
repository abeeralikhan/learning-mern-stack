import { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardine extends Component {
	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<h2>Get yourself some salty sardines!</h2>
				<img src="images/sardine-img.png" alt="sardine image" />
			</div>
		);
	}
}

export default Sardine;
