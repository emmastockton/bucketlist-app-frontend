import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onDoneClicked = this.onDoneClicked.bind(this);
    }

    onDeleteClicked () {

        this.props.deleteEntryHandler(this.props.idOfEntry);
    }

    onDoneClicked () {
        
        this.props.doneEntryHandler(this.props.idOfEntry);
    }

    render() {
        return (
            <div className="containter">
                <div className="row justify-content-md-center">
                    <div className="col-2 text-right">
                        {this.props.nameOfTask}
                    </div>
                    <div className="col-2 text-right">
                        <input 
                            className="btn btn-success" 
                            type="button" 
                            value="Done" 
                            onClick={this.onDoneClicked}
                        />
                    </div>
                    <div className="col-2 text-left">
                        <input 
                            className="deleteButton btn btn-danger" 
                            type="button" 
                            value="Delete" 
                            onClick={this.onDeleteClicked} 
                        />
                    </div>
                </div>
                <div style={styles.dottyBorder}>
                </div>
            </div>
        );
    }

}

const styles = {
    dottyBorder: {
        border: "1px dashed #000",
        width: "50%",
        margin: "auto",
        marginTop: "5%",
        marginBottom: "5%"
    }
};

export default Task;