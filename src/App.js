import React, { Component } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <InputBox />
      </div>
    );
  }
}

export default App;
