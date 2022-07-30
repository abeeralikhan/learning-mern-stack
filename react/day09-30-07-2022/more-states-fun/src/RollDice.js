import { Component } from "react";

import Die from "./Die";

class RollDice extends Component {
    render() {
        return (
            <>
                <Die diceNumber={5}/>
                <Die diceNumber={3}/>
            </>
        );
    }
}

export default RollDice;    