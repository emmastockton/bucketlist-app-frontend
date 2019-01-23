import React from 'react';

class TaskCounter extends React.Component {

    render() {

        return (
                <div 
                    className="container" 
                    style={styles.taskCounter} 
                >
                <div className="row justify-content-md-center">
                <div className="col-3 text-right" style={styles.amountToDo}>
                    {
                        this.props.tasks.length
                    }
                </div>
                    <div className="col-3 text-left">
                        left to do!
                    </div> 
                </div>
                <div className="row justify-content-md-center">
                <div className="col-3 text-right" style={styles.amountDone}>
                    {
                        this.props.doneTasks.length
                    }                 
                </div>
                    <div className="col-3 text-left">
                        already done!
                    </div> 
                </div>
                </div>
                );
    }

}

const styles = {
    taskCounter : {
        width: "220px",
        padding: "25px",
        margin: "25px",
        border: "solid",
        margin: "auto",
        marginTop: "20px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#e9d486"
    },
    amountToDo : {
        fontSize: "30px",
        color: "#ef5811",
        marginTop: "20px"
    },
    amountDone: {
        fontSize: "30px",
        color: "#28dc59",
        marginTop: "5px"
    }
};

export default TaskCounter;