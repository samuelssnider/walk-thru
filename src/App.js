import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
