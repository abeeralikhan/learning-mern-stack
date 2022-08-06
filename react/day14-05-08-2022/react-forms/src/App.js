import { Component } from 'react';
import NameForm from './NameForm';
import MultipleForm from './MultipleForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NameForm />
        <MultipleForm />
      </div>
    )
  }
}

export default App;
