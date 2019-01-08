import React, { Component } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }
  }

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
        </div>
        <div className="row">
          <TaskCounter />
        </div>
          <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
