import { Component } from 'react';
// import Timer from './Timer';
// import ZenQuote from './ZenQuote';
// import GithubUserInfo from './GithubUserInfo';
import CardsDeck from './CardsDeck';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CardsDeck />
      </div>
    )
  }
}

export default App;
