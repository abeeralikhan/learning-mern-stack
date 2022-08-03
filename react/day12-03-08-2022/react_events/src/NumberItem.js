import { Component } from "react";

class NumberItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e) {
        this.props.fn(this.props.value);
        // this.props.fn(this.props.idx);
    }

    render() {
        return (
            <li>
                { this.props.value }
                <button onClick={ this.handleRemove }> X </button>
            </li>
        );
    }
}

export default NumberItem;