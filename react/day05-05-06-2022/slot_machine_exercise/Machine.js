class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const styles = {
            fontSize: '20px',
            color: 'white',
            padding: '10px',
        };
        const result = ((s1 === s2) && (s1 === s3) && (s2 === s3)) ? "win" : "lose";
        return (
            <div>
                <h2>{s1} {s2} {s3}</h2>
                <p className={result} style={styles}><b>You {result}!</b></p>
            </div>
        )
    }
}