import { Component } from "react";
import BoxList from "./BoxList";

class Box extends Component {
    static defaultProps = {
        height: '100',
        width: '100',
        bgColor: 'orange'
    }

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        // sends the id of the box to be removed to the parent component
        this.props.removeBoxFn( this.props.id );
    }

    /** returns an object by adding the 'px' unit with the height and objects properties */
    formatProps(props) {
        return {
            height: props.height + 'px',
            width: props.width + 'px',
            bgColor: props.bgColor
        }
    }

    render() {
        const { height, width, bgColor } = this.formatProps(this.props);
        const styles = {
            height,
            width,
            backgroundColor: bgColor
        };

        return (
            <div>
                <div style={ styles }></div>
                <button onClick={ this.handleRemove }> Remove </button>
            </div>
        );
    }
}

export default Box;