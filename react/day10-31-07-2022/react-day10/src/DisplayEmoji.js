import { Component } from "react";

class DisplayEmoji extends Component {
    static defaultProps = {
        emojis: [':Smile:', ':Laugh:', ':Heart:', ':Sad:', ':Goof:']
    }

    constructor(props) {
        super(props)
        this.state = {
            emojis: []
        }
        this.addEmoji = this.addEmoji.bind(this);
    }

    addEmoji() {
        let idx = Math.floor(Math.random() * this.props.emojis.length);
        let newEmoji = this.props.emojis[idx];
        this.setState({
            emojis: [ ...this.state.emojis, newEmoji ]
        });
    }

    render() {
        const emojis = this.state.emojis.map( e => ( <i> { e }</i> ));
        return (
            <div>
                <p>Emojis: { emojis }</p>
                <p>
                    <button onClick={ this.addEmoji } >Add Emoji</button>
                </p>
            </div>
        );
    }
}

export default DisplayEmoji;