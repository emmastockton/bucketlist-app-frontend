import React from 'react';

class TaskCounter extends React.Component {

    render() {

        return (
                <div 
                    className="containter" 
                    style={styles.taskCounter} 
                >
                <div className="row">
                <div className="col-2" style={styles.amountToDo} >
                    {
                        this.props.tasks.length
                    }
                </div>
                    <div className="col-9">
                        left to do!
                    </div> 
                </div>
                <div className="row">
                <div className="col-2" style={styles.amountDone}>
                    {
                        this.props.doneTasks.length
                    }                 
                </div>
                    <div className="col-9">
                        already done!
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
        marginTop: "20px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#e9d486"
    },
    amountToDo : {
        fontSize: "30px",
        color: "#ef5811"
    },
    amountDone: {
        fontSize: "30px",
        color: "#28dc59"
    }
};

export default TaskCounter;