import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

    render() {

        return (
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
        );
    }

}


export default TaskList;