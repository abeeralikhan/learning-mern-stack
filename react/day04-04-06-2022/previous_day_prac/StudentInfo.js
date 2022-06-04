class StudentInfo extends React.Component {
    render() {
        return (
            <div>
                <Name name={this.props.name}/>
                <RollNo rollNo={this.props.rollNo}/>
            </div>
        );
    }
}