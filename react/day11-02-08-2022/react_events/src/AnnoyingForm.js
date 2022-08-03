import { Component } from 'react';

class AnnoyingForm extends Component {
    handleKeyUp(e) {
        if (e.keyCode === 56) {
            alert('*****You have pressed * key*****');
        } else {
            alert('You are awesome')
        }
    }
    render() {
        return (
            <textarea onKeyUp={ this.handleKeyUp }/>
        );
    }
}

export default AnnoyingForm;