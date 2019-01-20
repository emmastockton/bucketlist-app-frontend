import React from 'react';
import Task from './Task';
import DoneTask from './DoneTask';

class TaskList extends React.Component {

    render() {

        return (
            <div className="container">
            <div>
            {
                this.props.tasks.map((task, i) => 
                    <Task 
                        nameOfTask={task.description} 
                        key={i} 
                        idOfEntry={task.id} 
                        deleteEntryHandler = {this.props.deleteEntryHandler}
                        doneEntryHandler = {this.props.doneEntryHandler}
                    />
                )
            }
            </div>
            <div>
            {
                this.props.doneTasks.map((task, i) =>
                    <DoneTask
                        nameOfDoneTask={task.description}
                        key={i}
                        idOfEntry={task.id}
                    />
                )
            }
            </div>
            </div>
        );
    }

}


export default TaskList;