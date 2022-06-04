class ListItems extends React.Component {
    // following naming convention must be followed to set default values of props
    static defaultProps = {
        data: ["Abra", "Kad", "Abra"],
    }
    render() {
        const data = this.props.data;
        return (
            <div>
                <h2>Here's the list: </h2>
                <ul>
                    {data.map(e => (<li>{ e }</li> ))}
                </ul>
            </div>
        )
    }
}