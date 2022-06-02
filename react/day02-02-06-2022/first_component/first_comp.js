// a class component
class Greeting extends React.Component {
    render() {
        // following is the example of JSX
        return (
            <div>
                <h2>Thanks for using my Component</h2> 
                <h3>-Abeer</h3>
            </div>
        )
    }
}

// a function component 
function TellYourName() {
    return <h1>My name is Abeer </h1>
}

// ReactDOM.render(<Greeting />, document.getElementById('root'));
ReactDOM.render(<TellYourName />, document.getElementById('root'));


