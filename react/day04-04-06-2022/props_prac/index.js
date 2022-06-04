class App extends React.Component {
    render() {
        return (
            <div>
                <ListItems data={["Abeer", "Valeed", "Hamna", "Anamta"]} />
                <ListItems data={["Apple", "Lemon", "Blueberry", "Orange"]} />
                <ListItems />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));