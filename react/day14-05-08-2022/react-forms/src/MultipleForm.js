import { Component } from "react";

class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            password: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        // to prevent the page from refreshing
        e.preventDefault();

        console.log(this.state);

        // reset the value of the state
        this.setState({
            fullName: '',
            password: '',
            email: ''
        });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <h1>React form w/ Multiple Inputs</h1>
                <input type="text" name="fullName" value={ this.state.fullName } onChange={ this.handleChange } placeholder="Full name"/>
                <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange } placeholder="email"/>
                <input type="password" name="password" value={ this.state.password } onChange={ this.handleChange } placeholder="password"/>
                <button>Submit</button>
            </form>
        );
    }
}

export default MultipleForm;