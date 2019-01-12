import React from 'react';

class TaskCounter extends React.Component {

    render() {

        return (
                <div>
                {
                    this.props.tasks.length
                }
                </div>
                );
    }

}

const styles = {
    taskCounter : {
        
    }
};

export default TaskCounter;