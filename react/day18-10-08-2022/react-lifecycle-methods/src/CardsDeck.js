import { Component } from "react";
import axios from 'axios';
import Card from "./Card";
import './CardsDeck.css';

class CardsDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck_id: '',
            getAnImage: '',
            cardImgs: [],
            cardRotations: [],
            remaining: Number
        }
        this.drawACard = this.drawACard.bind(this);
    }

    async componentDidMount() {
        const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle');
        let deck_id = res.data.deck_id;
        let getAnImage =  `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`;
        this.setState({ deck_id, getAnImage });
    }

    getRotationStyle() {
        return {
            transform: `rotate(${ Math.random() * 90 }deg)`
        }
    }

    async drawACard() {
        const res = await axios.get(this.state.getAnImage);
        let newCardImage = res.data.cards[0].image;
        this.setState({
            cardImgs: [ ...this.state.cardImgs, newCardImage ],
            cardRotations: [ ...this.state.cardRotations, this.getRotationStyle() ],
            remaining: res.data.remaining
        })
    }

    generateCardImages() {
        let cardImgs = [];

        for (let idx = 0; idx < this.state.cardImgs.length; idx++) {
            cardImgs.push(<Card key={ idx } 
                cardImg={ this.state.cardImgs[idx]}
                cardStyle={ this.state.cardRotations[idx] }/>);
        }

        return cardImgs;
    }

    render() {
        return (
            <div className="CardsDeck">
                <div>
                    <button onClick={ this.drawACard } disabled={ this.state.remaining === 0 }>GIVE ME A CARD!</button>
                    { this.state.cardImgs.length > 0 ? this.generateCardImages(): ''}
                </div>
            </div>
        );
    }
}

export default CardsDeck;