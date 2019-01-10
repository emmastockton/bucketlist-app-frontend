import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

    render() {

        return (
            <div>
            {
                this.props.tasks.map((task, i) => 
                    <Task nameOfTask={task.description} key={i} />
                )
            }
            </div>
        );
    }

}


export default TaskList;