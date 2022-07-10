import { Component } from "react";

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber(e) {
        const newNum = Math.floor((Math.random() * 10) + 1);
        this.setState({
            num: newNum,
        });
    }

    render() {
        const button = <button onClick={ this.updateNumber }>Random Number</button>;
        const message = <h1>YOU WIN</h1>;
        return (
            <div>
                <h1>Number is { this.state.num }</h1>
                { this.state.num === 7 ? message: button }
            </div>
        );
    }
} 

export default Clicker;