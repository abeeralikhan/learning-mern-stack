import { Component } from "react";
import './ColorBox.css'
import { choice } from './helpers';

class ColorBox extends Component {
    static defaultProps = {
        allColors: ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'brown']
    }
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor() {
        let newColor;
        do { // do-while loop is used to eliminate the picking up the same color again
            newColor = choice(this.props.allColors);
        } while(this.state.color === newColor)

        this.setState({ color: newColor });
    }

    handleClick() {
        this.pickColor();
    }

    render() {
        return (
            <div className="ColorBox" style={{ backgroundColor: this.state.color }} onClick={ this.handleClick }>

            </div>
        );
    }
}

export default ColorBox;