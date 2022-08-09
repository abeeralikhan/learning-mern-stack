import { Component } from 'react';
import axios from 'axios';

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ''
        }
    }

    componentDidMount() {
        // load data
        axios.get('https://api.github.com/zen').then(res => {
            this.setState({ quote: res.data });
        });
        // set state
    }
    render() {
        return (
            <div>
               <h1>Always Remember...</h1>
               <p>{ this.state.quote }</p>
            </div>
        );
    }
}

export default ZenQuote;