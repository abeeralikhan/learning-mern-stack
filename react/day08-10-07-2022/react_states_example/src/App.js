import { Component } from 'react';
import Game from './Game';
import Rando from './Rando';
import Clicker from './Clicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Clicker />
        <Rando maxNum={20}/>
      </div>
    );
  }
}

export default App;
