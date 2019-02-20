import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

    render() {

        return (
            <div className="container" style={styles.taskList}>
            <div>
            {
                this.props.tasks.map((task, i) => 
                    <Task 
                        nameOfTask={task.Description} 
                        key={i} 
                        idOfEntry={task.TaskID}
                        deleteEntryHandler = {this.props.deleteEntryHandler}
                        doneEntryHandler = {this.props.doneEntryHandler}
                        editEntryHandler = {this.props.editEntryHandler}
                        onUpdateEntryHandler = {this.props.onUpdateEntryHandler}
                    />
                )
            }
            </div>
            </div>
        );
    }

}

const styles = {
    taskList: {
        marginTop: "20px",
        marginBottom: "20px"
    }
}


export default TaskList;