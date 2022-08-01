import { Component } from "react";
import ColorBox from "./ColorBox";

class ColorConainter extends Component {
    static defaultProps = {
        colors: ['#faa', '#fbb', '#ccc', '#ddd', '#eee', '#fef', '#aff', '#bff', '#cff', '#dff', '#eff'],
        nBoxes: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
    }

    getRandomColor() {
        console.log(this.props.colors[Math.floor(Math.random() * this.props.colors.length)])
    }

    makeBoxes() {
        const boxes = [];
        for ( let i = 0; i <= this.props.nBoxes; i++ ) {
            const color = this.getRandomColor();
            boxes.push(<ColorBox boxColor={ color }/>)
        }

        this.setState({
            boxes: boxes,
        })
    }

    render() {
        if (this.state.boxes.length === 0) {
            this.makeBoxes();
        }

        const styles = {
            display: 'flex'
        }

        return (
            <div style={ styles }>
                { this.state.boxes.map(box => box) }
            </div>
        );
    }
}

export default ColorConainter;