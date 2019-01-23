import React, { Component } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';
import DoneTaskList from './components/DoneTaskList';
import TaskCounter from './components/TaskCounter';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      doneTasks: []
    }

    this.addEntry = this.addEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
    this.deleteCompletedEntry = this.deleteCompletedEntry.bind(this);

  }

  addEntry(task) {

    let currentList = this.state.tasks;

    currentList.push(task);

    this.setState({
      tasks: currentList
    });
  }

  markAsDone(identifier) {

    let currentList = this.state.tasks;

    let doneList = this.state.doneTasks;

    let filteredTasks = currentList.filter((task) => task.id !== identifier);

    this.setState({
      tasks: filteredTasks
    });

    let filteredDoneTasks = currentList.filter((task) => task.id === identifier);

    doneList.push(filteredDoneTasks[0]);

    this.setState({
      doneTasks: doneList
    });
  }

  deleteEntry(identifier) {

    let currentList = this.state.tasks;

    let filteredTasks = currentList.filter((task) => task.id !== identifier);

    this.setState({tasks: filteredTasks});
  }

  deleteCompletedEntry(identifier) {

    let currentDoneList = this.state.doneTasks;

    let filteredDoneTasks = currentDoneList.filter((task) => task.id !== identifier);

    this.setState({doneTasks: filteredDoneTasks});
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
          <TaskCounter tasks={this.state.tasks} doneTasks={this.state.doneTasks} />
        </div>
        <div className="row">
          <TaskList tasks={this.state.tasks} doneEntryHandler={this.markAsDone} deleteEntryHandler={this.deleteEntry} />
        </div>
        <div className="row">
          <DoneTaskList doneTasks={this.state.doneTasks} deleteCompletedEntryHandler={this.deleteCompletedEntry} />
        </div>
      </div>
    );
  }
}

export default App;
