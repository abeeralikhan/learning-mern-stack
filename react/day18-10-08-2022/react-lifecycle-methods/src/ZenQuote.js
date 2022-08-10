import { Component } from 'react';
import './ZenQuote.css'
import axios from 'axios';

class ZenQuote extends Component {
    constructor(props) {
        console.log('INSIDE CONSTRUCTOR');
        super(props);
        this.state = {
            quote: '',
            isLoaded: false
        }
    }

    componentDidMount() {
        console.log('INSIDE COMPONENT DID MOUNT');
        // load data
        axios.get('https://api.github.com/zen').then(res => {
            setTimeout(() => {
                this.setState({ quote: res.data, isLoaded: true });
            }, 3000);
        });
        // set state
    }

    componentDidUpdate() {
        console.log('INSIDE COMPONENT DID UPDATE');
    }

    render() {
        console.log('INSIDE RENDER');
        return (
            <div className='ZenQuote'>
                { this.state.isLoaded ?  
                (<div>
                    <h1>Always Remember...</h1>
                    <p>{  this.state.quote }</p>
                </div>) :

                ( <div id="loader"></div> )
                }

            </div>
        );
    }
}

export default ZenQuote;