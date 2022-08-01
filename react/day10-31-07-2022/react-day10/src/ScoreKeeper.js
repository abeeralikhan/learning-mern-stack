import { Component } from "react";

class ScoreKeeper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 1
        }
        this.killOne = this.killOne.bind(this);
    }

    // Inconsistent Approach
    // killOne() { 
    //     this.setState( {
    //         score: this.state.score + 1,
    //     } );
    //     this.setState( {
    //         score: this.state.score + 1,
    //     } );
    // }

    // following is the pattern that we want to follow
    // Consistent Approach
    killOne() {
        this.setState(this.incrementScore);
    }

    // following fuction is used to inside the setState method to update the state
    // following way writing states will help in redux
    incrementScore(st) {
        return {
            score: st.score + 1
        };
    }

    render() {
        return (
            <div>
                <h1>{ this.state.score }</h1>
                <p>
                    <button onClick={ this.killOne }>Kill 1</button>
                </p>
            </div>
        );
    }
}

export default ScoreKeeper;