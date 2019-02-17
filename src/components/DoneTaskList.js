import React from 'react';
import DoneTask from './DoneTask';

class DoneTaskList extends React.Component {

    render() {

        return (
            <div className="container">
            <div>
            {
                this.props.doneTasks.map((doneTask, i) =>
                    <DoneTask
                        nameOfDoneTask={doneTask.Description}
                        key={i}
                        idOfEntry={doneTask.TaskID}
                        deleteCompletedEntryHandler = {this.props.deleteCompletedEntryHandler}
                    />
                )
            }
            </div>
            </div>
        );
    }

}


export default DoneTaskList;