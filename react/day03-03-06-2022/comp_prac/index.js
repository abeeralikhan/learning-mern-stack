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
// ReactDOM.render(<TellYourName />, document.getElementById('root'));
// ReactDOM.render(<OutYourName />, document.getElementById('root'));
ReactDOM.render(<DateNow />, document.getElementById('root'));
