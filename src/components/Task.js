import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            tasks: this.props.tasks,
            TaskDescription: ""
        };

        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onDoneClicked = this.onDoneClicked.bind(this);
        this.onEditClicked = this.onEditClicked.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    onDeleteClicked () {

        this.props.deleteEntryHandler(this.props.idOfEntry);
    }

    onDoneClicked () {
        
        this.props.doneEntryHandler(this.props.idOfEntry);
    }

    onEditClicked () {

        this.props.editEntryHandler(this.props.idOfEntry);
    }

    toggleEdit() {

        this.setState({isEditing: !this.state.isEditing})
    }

    render() {
        if (this.state.isEditing) {
            return (
            <div className="container">
            <div className="col-4 text-right" contentEditable="true">
              This should be editable
            </div>
            <div className="col-1 text-right">
                <input
                    className="btn btn-info" 
                    type="button" 
                    value="Update" 
                />
            </div>
            </div>
            )
          }
        return (
            <div className="containter">
                <div className="row justify-content-md-center">
                    <div className="col-2 text-right">
                        {this.props.nameOfTask}
                    </div>
                    <div className="col-1 text-right">
                        <input 
                            className="btn btn-success" 
                            type="button" 
                            value="Done" 
                            onClick={this.onDoneClicked}
                        />
                    </div>
                    <div className="col-1 text-right">
                        <input 
                            className="btn btn-warning" 
                            type="button" 
                            value="Edit" 
                            onClick={this.toggleEdit}
                        />
                    </div>
                    <div className="col-1 text-left">
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