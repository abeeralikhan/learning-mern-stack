import { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [1, 2, 3, 4, 5]
        }
        this.remove = this.remove.bind(this);
    }

    remove(num) {
        this.setState({
            numbers: this.state.numbers.filter(n => n !== num)
            // numbers: this.state.numbers.splice(idx, 1)
        }); 
    }

    render() {
        const nums = this.state.numbers.map(n => <NumberItem value={ n }  key={ n } fn={ this.remove }/>);
        return (
            <div>
                <h1>Number List</h1>
                <ul>{ nums }</ul>
            </div>
        );
    }
}

export default NumberList;