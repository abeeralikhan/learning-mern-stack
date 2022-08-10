import { Component } from "react";
import axios from "axios";

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { imgURL: '', name: '', location: ''}
    }

    async componentDidMount() {
        const URL = 'https://api.github.com/users/' + this.props.username;
        let response = await axios.get(URL);
        let { avatar_url, name, location } = response.data;
        this.setState({ imgURL: avatar_url, name, location });
    }

    render() {
        const imgStyles = {
            width: '100px',
            height: '100px',
            border: '1px solid black'
        }
        return (
            <div>
                <img style={ imgStyles } src={ this.state.imgURL } alt="profile image"/>
                <h1>{ this.state.name }</h1>
                <h2>Location: { this.state.location }</h2>
            </div>
        );
    }
}

export default GithubUserInfo;