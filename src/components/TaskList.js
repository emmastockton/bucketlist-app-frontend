import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

    render() {

        let listOfTasks = [
            {
                id: 1,
                description: "Go skydiving",
                completed: false
            },
            {
                id: 2,
                description: "Snorkel in the Great Barrier Reef",
                completed: false
            },
            {
                id: 3,
                description: "Write a book",
                completed: false
            },
            {
                id: 4,
                description: "Go on safari in Africa",
                completed: false
            },
        ];

        return (
            <div>
            {
                listOfTasks.map((task, i) => 
                    <Task nameOfTask={task.description} key={i} />
                )
            }
            </div>
        );
    }

}


export default TaskList;