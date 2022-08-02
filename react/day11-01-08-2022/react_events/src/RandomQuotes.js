import { Component } from "react";

class RandomQuotes extends Component {
    static defaultProps = {
        quotes: ['Quote 1....', 'Quote 2....', 'Quote 3....', 'Quote 4....', 'Quote 5....']
    }

    constructor(props) {
        super(props);
        this.state = {
            curQuote: ''
        };
        // Method no. 3 - Method binding in the constructor
        // this.handleClick = this.handleClick.bind(this);
    }

    updateQuote() {
        let newQuote;
        
        do {
            newQuote = this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)]
        } while ( newQuote===this.state.curQuote );

        this.setState({
            curQuote: newQuote
        });
    }

    // handleClick() {
    //     this.updateQuote();
    // }

    // Method no. 4: Binding with Class Properties [Experimental way]
    // Relying on Babel to take care of it!
    // Babel initiates and binds the following method in the constructor()
    // But, most used one! 
    handleClick = () => {
        this.updateQuote();
    }

    render() {
        return (
            <div>
                <h1> { this.state.curQuote ? this.state.curQuote: 'No quote generated yet!' } </h1>
                <p>
                    {/* Method no. 1: Method binding in line */}
                    {/* <button onClick={ this.handleClick.bind(this) }>Generate</button> */}

                    {/* Method no. 2: Using an arrow function to bind a function */}
                    {/* <button onClick={ () => this.handleClick() }>Generate</button> */}

                
                    <button onClick={ this.handleClick }>Generate</button>
                </p>
            </div>
        );
    }
}

export default RandomQuotes;