import { Component } from "react";
import Coin from "./Coin";
import './CoinFlipper.css';

class CoinFlipper extends Component {
    static defaultProps = {
        images: ['https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091', 'https://tinyurl.com/react-coin-heads-jpg']
    }

    constructor(props) {
        super(props);
        this.state = {
            flips: 0,
            heads: 0,
            tails: 0,
            imageToDisplay: ''
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        // following state will generate either 0 or 1
        // 0 --> Tails
        // 1 --> Heads
        const num = Math.floor(Math.random() * 2);
        const img = this.props.images[num];
        if (num) {
            // the num is 1, therefore increment heads count
            this.setState(this.incrementHeads);

        } else {
            // the num is 0, therefore increment tails count
            this.setState(this.incrementTails);
        }
        // increment total number of flips 
        this.setState(this.incrementFlips);
        this.setState({ imageToDisplay: img });
    }

    incrementFlips(st) {
        return {
            flips: st.flips + 1
        };
    }

    incrementHeads(st) {
        return {
            heads: st.heads + 1
        };
    }

    incrementTails(st) {
        return {
            tails: st.tails + 1
        };
    }

    render() {
        return (
            <div className="CoinFlipper">
                <h1>Let's filip a coin</h1>
                { this.state.flips > 0 ? <Coin imageUrl={ this.state.imageToDisplay } />: ''}
                <button onClick={ this.flipCoin }>Flip me!</button>
                <p>Out of { this.state.flips } flips, there have been { this.state.heads } heads and { this.state.tails } tails.</p>
            </div>
        );
    }
}

export default CoinFlipper;