import { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: new Date()
        }
        console.log('CONSTRUCTOR IS RAN!')
    }

    componentDidMount() {
        console.log('COMPONENT DID MOUNT IS RAN!')
        setInterval(() => {
            this.setState({ test: new Date });
        }, 1000);
    }

    render() {
        console.log('RENDER IS RAN!')
        return (
            <div>
                <h1>{ this.state.test.getSeconds() }</h1>
            </div>
        );
    }
}

export default Timer;