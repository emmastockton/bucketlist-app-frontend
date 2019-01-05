import React, { Component } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" md={{offset: 3}}>
          <Header />
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-4">
            <InputBox />
          </div>
          <div className="col-4">
            <SubmitButton />
          </div>
        </div>
          <TaskList />
      </div>
    );
  }
}

export default App;
