class App extends React.Component {
    render() {
        return (
            <div>
                <StudentInfo name="Abeer Ali Khan" rollNo="19B-078-SE"/>
                <StudentInfo name="Hamna Siddiqui" rollNo="19B-138-SE"/>
                <StudentInfo name="Sheikh Birjees Ali" rollNo="19B-115-SE"/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));