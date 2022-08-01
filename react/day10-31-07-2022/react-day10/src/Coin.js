import { Component } from "react";
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <img className='Coin-image' src={ this.props.imageUrl } />   
        );
    }
}

export default Coin;