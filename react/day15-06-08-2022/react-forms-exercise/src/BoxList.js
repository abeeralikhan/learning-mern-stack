import { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);

        // boxes: An array of objects
        this.state = { boxes: [] };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    /** adds a new box object into the existing boxes array */
    // box: object
    addBox(box) {
        // add a unique id with the box object received from the form
        const newBox = {...box, id: uuid()}
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    /** removes an existing box from the boxes array */
    // id: string
    removeBox(id) {
        console.log(id);
        // filtering the box using the id of it
        const boxes = this.state.boxes.filter(b => b.id !== id);
        console.log(boxes);
        // setting the state by replacing it with the updated boxes array
        this.setState({ boxes });
    }

    /** returns an array of box components */
    generateBoxes() {
        return this.state.boxes.map(b => {
            let id = b.id;
            return <Box key={ id } id={ id } height={ b.height } width={ b.width } bgColor={ b.bgColor }
            removeBoxFn={ this.removeBox }/>;
        });
    }

    render() {
        return (
            <div>
                <h1>Box Maker</h1>
                
                <h2>Enter box details</h2>
                <NewBoxForm addBoxFn={ this.addBox } />

                <h2>Created boxes are displayed below</h2>
                { this.generateBoxes() }
            </div>
        );
    }
}

export default BoxList;