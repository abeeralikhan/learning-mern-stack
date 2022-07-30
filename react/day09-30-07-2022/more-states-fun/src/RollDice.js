import { Component } from "react";

import Die from "./Die";

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1: 1,
            dice2: 1
        };
        this.roll = this.roll.bind(this);
    }
    getRandomSide() {
        return Math.floor((Math.random() * 6) + 1);
    }
    roll() {
        this.setState({
            dice1: this.getRandomSide(),
            dice2: this.getRandomSide(),
        });
    }
    render() {
        // this.roll();
        return (
            <div>
                <Die diceNumber={this.state.dice1}/>
                <Die diceNumber={this.state.dice2}/>
                <button className="RollDice-button" onClick={this.roll}>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;    