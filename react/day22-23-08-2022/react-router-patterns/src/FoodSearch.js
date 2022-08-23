import { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';

class FoodSearch extends Component {
	constructor(props) {
		super(props);
		this.state = { query: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleClick() {
		// Do some operations
		alert('Your data has been saved!');

		// redirect user
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<Link to="/">Back to home</Link>
				<h1>Search For A Food!</h1>
				<input
					type="text"
					name="query"
					placeholder="Search food"
					value={this.state.query}
					onChange={this.handleChange}
				/>
				<Link to={`/food/${this.state.query}`}> Go </Link>
				<button onClick={this.handleClick}>Save food data!</button>
			</div>
		);
	}
}

export default FoodSearch;
