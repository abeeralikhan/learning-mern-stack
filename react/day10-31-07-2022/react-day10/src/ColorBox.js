import { Component } from "react";

class ColorBox extends Component {
    static defaultProps = {
        boxColor: 'black'
    }

    render() {
        const styles = {
            width: '200px',
            height: '200px',
            backgroundColor: this.props.boxColor,
        }

        return (
            <div className="ColorBox" style={ styles }></div>
        )
    }
}

export default ColorBox;