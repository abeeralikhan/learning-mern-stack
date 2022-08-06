import { Component } from "react";

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ fullName: e.target.value });
    }

    handleSubmit(e) {
        // to prevent the page from refreshing
        e.preventDefault();

        alert(`${this.state.fullName}, your form has been submitted!`);

        // reset the value of the state
        this.setState({ fullName: '' });
    }

    render() {
        const usr = this.state.fullName;
        return (
            <form onSubmit={ this.handleSubmit }>
                <h1>Basic React Form</h1>
                <label htmlFor="fullName">Full name: </label>
                <input type="text" value={ usr } onChange={ this.handleChange }/>
                <button>Submit</button>
                { usr ? <h1>Hello, { usr }!</h1>: ''}
            </form>
        );
    }
}

export default NameForm;