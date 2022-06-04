class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const result = ((s1 === s2) && (s1 === s3) && (s2 === s3)) ? "You Win!" : "You Lose!";
        return (
            <div>
                <h2>{s1} {s2} {s3}</h2>
                <p><b>{result}</b></p>
            </div>
        )
    }
}