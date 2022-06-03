// Function-based Components
function TellYourName() {
    return <p>My names is Abeer (Function-based)</p>
}

// Class-based component
class OutYourName extends React.Component {
    render() {
        return <p>My names is Abeer (Class-based)</p>
    }
}

class DateNow extends React.Component { 
    render() {
        return <h1>Date: {Date.now()}</h1>
    }
}

function getNum() {
    return Math.floor((Math.random() * 10) + 1);
}
class NumPicker extends React.Component {
    render() {
        const number = getNum();
        let message;
        if (number === 4) {
            message = <p>Yippieee</p>
        } else {
            message = <p>Alas!</p>
        }

        return (
            <div>
                <h1>Your number is: {number}</h1>
                <h2>{ number === 4 ? "Congrats!" : "Try Again!" }</h2>
                <h2>{ message }</h2>
            </div>
        );
    }
}
// ReactDOM.render(<TellYourName />, document.getElementById('root'));
// ReactDOM.render(<OutYourName />, document.getElementById('root'));
ReactDOM.render(<NumPicker />, document.getElementById('root'));
