import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeSign from './components/WelcomeSign'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeSign />
      </div>
    );
  }
}

export default App;
