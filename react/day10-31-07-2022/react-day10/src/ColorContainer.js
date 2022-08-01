import { Component } from "react";
import ColorBox from "./ColorBox";
import './ColorContainer.css';

class ColorConainter extends Component {
    static defaultProps = {
        numBoxes: 22
    }

    render() {
        // following statement first makes an array of length 18
        // then map that array to ColorBox Componets
        // Benefit: Avoid making a loop
        const boxes = Array.from({ length: this.props.numBoxes }).map( () => <ColorBox />);

        return <div className="ColorContainer">{ boxes }</div>
    }
}

export default ColorConainter;