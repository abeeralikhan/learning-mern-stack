import { Component } from "react";

import Die from "./Die";

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1: 1,
            dice2: 1,
            isRolling: false,
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
            isRolling: true,
        });

        setTimeout(() => {
            this.setState({
                isRolling: false,
            });
        }, 1000);
    }

    render() {
        // this.roll();
        return (
            <div>
                <Die diceNumber={this.state.dice1} toWobble={this.state.isRolling}/>
                <Die diceNumber={this.state.dice2} toWobble={this.state.isRolling}/>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    { this.state.isRolling ? 'Rolling...': 'Roll Dice!' }
                </button>
            </div>
        );
    }
}

export default RollDice;    