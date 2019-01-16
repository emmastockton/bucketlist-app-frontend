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

    this.addEntry = this.addEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  addEntry(task) {

    let currentList = this.state.tasks;

    currentList.push(task);

    this.setState({
      tasks: currentList
    });
  }

  deleteEntry(id) {

    let taskPosition = this.state.tasks.id.indexOf(id);

    let currentList = this.state.tasks;

    currentList.splice(taskPosition, 1);

    this.setState({tasks: currentList});
  }

  render() {
    return (
      <div className="container">
        <div className="row" md={{offset: 3}}>
          <Header />
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-4">
            <InputBox onSumbitEntryHandler={this.addEntry}/>
          </div>
        </div>
        <div className="row">
          <TaskCounter tasks={this.state.tasks} />
        </div>
          <TaskList tasks={this.state.tasks} deleteEntryHandler={this.deleteEntry} />
      </div>
    );
  }
}

export default App;
