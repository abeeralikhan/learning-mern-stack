import { Component } from "react";
import './Card.css';

class Card extends Component {
    render() {
        return <img className='Card'
        style={ this.props.cardStyle }
        src={ this.props.cardImg }
        alt='a card'/>
    }
}

export default Card;