import { Component } from "react";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            playerName: 'Abeer Ali Khan',
        };
    }
    render() {
        return (
            <div>
                <h1>{ this.state.playerName } has { this.state.score } score!</h1>
            </div>
        );
    }
}

export default Game;