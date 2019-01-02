import React, { Component } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row" md={{offset: 3}}>
          <Header />
        </div>
        <div class="row">
          <div class="col-sm">
            <InputBox />
          </div>
          <div class="col-sm">
            <SubmitButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
