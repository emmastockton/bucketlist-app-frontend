import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This will be my Bucket List app
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
