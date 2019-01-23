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
                        nameOfDoneTask={doneTask.description}
                        key={i}
                        idOfEntry={doneTask.id}
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