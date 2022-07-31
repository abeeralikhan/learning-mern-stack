import { Component } from "react";
import './Die.css';
class Die extends Component {
    static defaultProps = {
        diceNumber: 1,
    }
    render() {
        const diceNum = this.props.diceNumber;
        const diceClass = this.getClassCode(diceNum);
        const classes = ['Die', 'fas', diceClass];

        if (this.props.toWobble) {
            classes.push('Die-wobble')
        } 

        return (
            <>
                <i className={classes.join(' ')}></i>
            </>
        );
    }

    getClassCode(num) {
        switch(num) {
            case 1: return 'fa-dice-one';
            case 2: return 'fa-dice-two';
            case 3: return 'fa-dice-three';
            case 4: return 'fa-dice-four';
            case 5: return 'fa-dice-five';
            case 6: return 'fa-dice-six';
            default: return 'fa-dice-one';
        }
    }
}

export default Die;