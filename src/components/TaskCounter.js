import React from 'react';

class TaskCounter extends React.Component {

    render() {
        return (<button type="button" class="btn btn-dark">
                    Things to do <span class="badge badge-secondary">2</span>
                </button>);
    }

}

const styles = {
    taskCounter : {
        
    }
};

export default TaskCounter;