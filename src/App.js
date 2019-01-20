import React, { Component } from 'react';
import './App.css';
import Divider from '@material-ui/core/Divider';
import UseState from './components/UseState';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UseState />
        <Divider />
      </div>
    );
  }
}

export default App;
