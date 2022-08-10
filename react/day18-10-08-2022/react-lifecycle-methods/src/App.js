import { Component } from 'react';
// import Timer from './Timer';
import ZenQuote from './ZenQuote';
// import GithubUserInfo from './GithubUserInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <GithubUserInfo username="abeeralikhan"/>
        <GithubUserInfo username="Muhammad-waqar-uit"/>
        <GithubUserInfo username="Farzan-ul-haq"/>
        <GithubUserInfo username="kunal-kushwaha"/> */}
        <ZenQuote />
      </div>
    )
  }
}

export default App;
