import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    // Code goes here
    // What should we do when a user clicks a button?
  }

  render() {
    return (
      <div className="component-app">

      </div>
    );
  }
}
export default App;
