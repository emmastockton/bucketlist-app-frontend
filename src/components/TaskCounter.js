import React from 'react';

class TaskCounter extends React.Component {

    render() {

        return (
                <div 
                    className="containter" 
                    style={styles.taskCounter} 
                >
                    <div className="row">
                    <div className="col-8">
                        Task Counter
                    </div> 
                <div className="col-2">
                    {
                        this.props.tasks.length
                    }
                </div>
                </div>
                </div>
                );
    }

}

const styles = {
    taskCounter : {
        border: "solid",
        margin: "auto",
        padding: "20px"
    }
};

export default TaskCounter;