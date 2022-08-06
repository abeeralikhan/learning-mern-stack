import { Component } from "react";

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            bgColor: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        // sends the new box data back to the parent component
        this.props.addBoxFn( this.state );
        this.setState({
            height: '',
            width: '',
            bgColor: ''
        });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="height">Height </label>
                <input id="height" type="text" name="height"
                value={ this.state.height } onChange={ this.handleChange }/><br/>

                <label htmlFor="width">Width </label>
                <input id="width" type="text" name="width"
                value={ this.state.width } onChange={ this.handleChange }/><br/>

                <label htmlFor="bgColor">Background Color </label>
                <input id="bgColor" type="text" name="bgColor"
                value={ this.state.bgColor } onChange={ this.handleChange }/><br/>

                <button>Add a new box</button>
            </form>
        );
    }
}

export default NewBoxForm;