import React, { Component } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';
import DoneTaskList from './components/DoneTaskList';
import TaskCounter from './components/TaskCounter';
import TasksService from './service/tasks';

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
    this.editEntry = this.editEntry.bind(this);
    this.deleteCompletedEntry = this.deleteCompletedEntry.bind(this);

  }

  async componentDidMount() {

    const tasks = await TasksService.getTasks();
    this.setState({tasks: tasks});

    const doneTasks = await TasksService.getDoneTasks();
    this.setState({doneTasks: doneTasks});
  }

  async addEntry(task) {

    const response = await TasksService.saveTask(task);

    task.TaskID = response.insertId;

    let currentList = this.state.tasks;

    currentList.push(task);

    this.setState({
      tasks: currentList
    });
  }

  async markAsDone(identifier) {

    const response = await TasksService.completeTask(identifier);

    let currentList = this.state.tasks;

    let doneList = this.state.doneTasks;

    let filteredTasks = currentList.filter((task) => task.TaskID !== identifier);

    this.setState({
      tasks: filteredTasks
    });

    let filteredDoneTasks = currentList.filter((task) => task.TaskID === identifier);

    doneList.push(filteredDoneTasks[0]);

    this.setState({
      doneTasks: doneList
    });
  }

  editEntry(identifier, entryToBeUpdated) {

    let currentList = this.state.tasks;

    let filteredTasks = currentList.filter((task) => task.TaskID !== identifier);

    filteredTasks.push(entryToBeUpdated);

    this.setState({
      tasks: filteredTasks
    });
  }

  async deleteEntry(identifier) {

    const response = await TasksService.deleteTask(identifier);

    let currentList = this.state.tasks;

    let filteredTasks = currentList.filter((task) => task.TaskID !== identifier);

    this.setState({
      tasks: filteredTasks
    });
  }

  async deleteCompletedEntry(identifier) {

    const response = await TasksService.deleteTask(identifier);

    let currentDoneList = this.state.doneTasks;

    let filteredDoneTasks = currentDoneList.filter((task) => task.TaskID !== identifier);

    this.setState({
      doneTasks: filteredDoneTasks
    });
  }

  render() {
    return (
      <div className="container">

        <div 
          className="row" 
          md={{offset: 3}}
        >
            <Header />
        </div>

        <div 
          className="row justify-content-center no-gutters"
        >
          <div 
            className="col-4"
          >
              <InputBox 
                onSumbitEntryHandler={this.addEntry}
              />
          </div>
        </div>

        <div 
          className="row"
        >
            <TaskCounter 
              tasks={this.state.tasks} 
              doneTasks={this.state.doneTasks} 
            />
        </div>

        <div 
          className="row"
        >
            <TaskList 
              tasks={this.state.tasks} 
              doneEntryHandler={this.markAsDone}
              deleteEntryHandler={this.deleteEntry}
              onUpdateEntryHandler={this.editEntry} 
            />
        </div>

        <div 
          className="row"
        >
            <DoneTaskList 
              doneTasks={this.state.doneTasks} 
              deleteCompletedEntryHandler={this.deleteCompletedEntry} 
            />
        </div>
      </div>
    );
  }
}

export default App;
