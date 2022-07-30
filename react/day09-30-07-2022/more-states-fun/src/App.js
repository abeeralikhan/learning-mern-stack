import { Component } from 'react';
import RollDice from './RollDice';
import './RollDice.css';

class App extends Component {
  render() {
    return (
      <div className='RollDice'>
        <RollDice />
      </div>
    );
  }
}

export default App;
