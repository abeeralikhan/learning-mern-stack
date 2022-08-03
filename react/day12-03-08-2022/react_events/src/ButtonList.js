import { Component } from "react";
import './ButtonList.css';

class ButtonList extends Component {
    static defaultProps = {
        colors: ['purple', 'red', 'green', 'orange']
    }

    constructor(props) {
        super(props);
        this.state = {
            bgColor: 'cyan'
        }
    }

    changeColor(color) {
        this.setState({
            bgColor: color
        });
    }

    render() {
        return (
            <div className="ButtonList" style={{ backgroundColor: this.state.bgColor }}>
                { this.props.colors.map(color => {
                return <button style={{ backgroundColor: color }} onClick={ () => this.changeColor(color) }>Click me!</button>
            }) }
            </div>
        );
    }
}

export default ButtonList;